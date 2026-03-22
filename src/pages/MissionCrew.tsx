import { useState, useEffect } from 'react'

interface AppSettings {
  ollamaBaseUrl: string
  ollamaModel: string
  apiBaseUrl: string
}

export default function MissionCrewPage() {
  const [showSettings, setShowSettings] = useState(false)
  const [settings, setSettings] = useState<AppSettings>({
    ollamaBaseUrl: 'http://localhost:11434',
    ollamaModel: 'mistral',
    apiBaseUrl: 'http://localhost:8000',
  })
  const [topic, setTopic] = useState('')
  const [proposal, setProposal] = useState('')
  const [selectedAgent, setSelectedAgent] = useState('critics')
  const [discussion, setDiscussion] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [apiStatus, setApiStatus] = useState<'online' | 'offline' | 'unknown'>('unknown')

  useEffect(() => {
    const stored = localStorage.getItem('missioncrew-settings')
    if (stored) {
      try {
        setSettings(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to load settings:', e)
      }
    }
    checkApiStatus()
  }, [])

  const checkApiStatus = async () => {
    try {
      const response = await fetch(`${settings.apiBaseUrl}/health`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      setApiStatus(response.ok ? 'online' : 'offline')
    } catch (error) {
      setApiStatus('offline')
    }
  }

  const handleDiscuss = async () => {
    if (!topic || !proposal) {
      setError('Please fill in both topic and proposal')
      return
    }

    setLoading(true)
    setError('')
    try {
      const endpoint =
        selectedAgent === 'critics'
          ? '/discuss/critics'
          : '/discuss/visionary'

      const response = await fetch(`${settings.apiBaseUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, proposal }),
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`)
      }

      const data = await response.json()
      setDiscussion(data)
    } catch (err) {
      setError(`Failed to get critique: ${err instanceof Error ? err.message : 'Unknown error'}`)
    }
    setLoading(false)
  }

  const handleSaveSettings = () => {
    localStorage.setItem('missioncrew-settings', JSON.stringify(settings))
    setShowSettings(false)
    checkApiStatus()
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #0f172a, #1e293b)', color: 'white', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
          <div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>MissionCrew</h1>
            <p style={{ fontSize: '1.125rem', color: '#cbd5e1' }}>
              AI Agent Roundtable for Collaborative Discussions
            </p>
          </div>
          <button
            onClick={() => setShowSettings(true)}
            style={{
              padding: '0.5rem 1rem',
              background: '#475569',
              border: 'none',
              borderRadius: '0.5rem',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            ⚙️ Settings
          </button>
        </div>

        {/* API Status */}
        <div style={{
          marginBottom: '2rem',
          padding: '1rem',
          background: '#334155',
          borderRadius: '0.5rem',
          border: '1px solid #475569',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <div style={{
            width: '0.75rem',
            height: '0.75rem',
            borderRadius: '50%',
            background: apiStatus === 'online' ? '#22c55e' : apiStatus === 'offline' ? '#ef4444' : '#eab308',
          }} />
          <span style={{ fontSize: '0.875rem' }}>
            {apiStatus === 'online'
              ? '✓ API Connected'
              : apiStatus === 'offline'
                ? '✗ API Offline (Check settings)'
                : 'Checking API...'}
          </span>
        </div>

        {/* Main Form */}
        <div style={{
          background: '#1e293b',
          borderRadius: '0.5rem',
          padding: '2rem',
          marginBottom: '2rem',
          border: '1px solid #334155',
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Start a Discussion</h2>

          {error && (
            <div style={{
              marginBottom: '1.5rem',
              padding: '1rem',
              background: '#7c2d12',
              border: '1px solid #b45309',
              borderRadius: '0.5rem',
              color: '#fca5a5',
            }}>
              {error}
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Topic</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Building a real-time collaboration platform"
                style={{
                  width: '100%',
                  padding: '0.5rem 1rem',
                  background: '#334155',
                  border: '1px solid #475569',
                  borderRadius: '0.5rem',
                  color: 'white',
                  fontFamily: 'inherit',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Agent</label>
              <select
                value={selectedAgent}
                onChange={(e) => setSelectedAgent(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem 1rem',
                  background: '#334155',
                  border: '1px solid #475569',
                  borderRadius: '0.5rem',
                  color: 'white',
                  fontFamily: 'inherit',
                }}
              >
                <option value="critics">Critics Agent</option>
                <option value="visionary">Visionary Agent</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Proposal or Idea</label>
            <textarea
              value={proposal}
              onChange={(e) => setProposal(e.target.value)}
              placeholder="Describe your proposal or idea..."
              rows={4}
              style={{
                width: '100%',
                padding: '0.5rem 1rem',
                background: '#334155',
                border: '1px solid #475569',
                borderRadius: '0.5rem',
                color: 'white',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <button
            onClick={handleDiscuss}
            disabled={loading || apiStatus === 'offline'}
            style={{
              width: '100%',
              padding: '0.75rem 1.5rem',
              background: loading || apiStatus === 'offline' ? '#334155' : '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontWeight: '500',
              cursor: loading || apiStatus === 'offline' ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s',
            }}
          >
            {loading ? 'Getting Critique...' : 'Get Critique'}
          </button>
        </div>

        {/* Results */}
        {discussion && (
          <div style={{
            background: '#1e293b',
            borderRadius: '0.5rem',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #334155',
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{discussion.agent} Response</h2>
            <pre style={{
              background: '#0f172a',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
              maxHeight: '24rem',
              fontSize: '0.875rem',
              color: '#cbd5e1',
              fontFamily: 'monospace',
            }}>
              {JSON.stringify(discussion, null, 2)}
            </pre>
          </div>
        )}
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50,
        }}>
          <div style={{
            background: '#1e293b',
            borderRadius: '0.5rem',
            padding: '2rem',
            maxWidth: '28rem',
            width: '100%',
            border: '1px solid #334155',
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Settings</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Ollama Base URL</label>
                <input
                  type="text"
                  value={settings.ollamaBaseUrl}
                  onChange={(e) => setSettings({ ...settings, ollamaBaseUrl: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.5rem 1rem',
                    background: '#334155',
                    border: '1px solid #475569',
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>LLM Model</label>
                <select
                  value={settings.ollamaModel}
                  onChange={(e) => setSettings({ ...settings, ollamaModel: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.5rem 1rem',
                    background: '#334155',
                    border: '1px solid #475569',
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontFamily: 'inherit',
                  }}
                >
                  <option value="mistral">Mistral (7B)</option>
                  <option value="llama2">Llama 2 (7B)</option>
                  <option value="neural-chat">Neural Chat</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>API Base URL</label>
                <input
                  type="text"
                  value={settings.apiBaseUrl}
                  onChange={(e) => setSettings({ ...settings, apiBaseUrl: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.5rem 1rem',
                    background: '#334155',
                    border: '1px solid #475569',
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontFamily: 'inherit',
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <button
                onClick={() => setShowSettings(false)}
                style={{
                  flex: 1,
                  padding: '0.5rem 1rem',
                  border: '1px solid #475569',
                  borderRadius: '0.5rem',
                  background: 'transparent',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveSettings}
                style={{
                  flex: 1,
                  padding: '0.5rem 1rem',
                  background: '#2563eb',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
