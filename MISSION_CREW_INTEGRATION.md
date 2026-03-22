# MissionCrew Integration with Lab Site

## 🔗 URL Routing

MissionCrew is now accessible at: **https://lab.suhailtaj.cloud/mission-crew**

### How It Works

The lab site uses **client-side SPA routing** (no server changes needed):

```
Lab Site (Vite + React)
├── / → Home page (Hero, About, Agents, Projects)
└── /mission-crew → MissionCrew interface
```

### URL Features

✅ **Direct Access**
```
https://lab.suhailtaj.cloud/mission-crew
```
Works immediately — no page refresh

✅ **Browser Back Button**
```
/mission-crew → click back → /
Back in home page with full functionality
```

✅ **Deep Linking**
```
Share: https://lab.suhailtaj.cloud/mission-crew
User opens link → Goes straight to MissionCrew
```

✅ **Dashboard Navigation**
```
1. Visit https://lab.suhailtaj.cloud
2. Scroll to "Live Projects"
3. Click "MissionCrew" card
4. URL changes to /mission-crew
5. Click "← Back to Lab"
6. URL changes back to /
```

---

## 🛠️ Technical Details

### Client-Side Routing
```tsx
// App.tsx
useEffect(() => {
  const path = window.location.pathname
  if (path.includes('/mission-crew')) {
    setCurrentPage('mission-crew')
  } else {
    setCurrentPage('home')
  }
}, [])

useEffect(() => {
  if (currentPage === 'mission-crew') {
    window.history.pushState(null, '', '/mission-crew')
  } else {
    window.history.pushState(null, '', '/')
  }
}, [currentPage])
```

### Server-Side Fallback (Nginx)
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```
This ensures all paths → index.html (SPA bootstrap)

### Browser Navigation
```tsx
useEffect(() => {
  const handlePopState = () => {
    const path = window.location.pathname
    if (path.includes('/mission-crew')) {
      setCurrentPage('mission-crew')
    } else {
      setCurrentPage('home')
    }
  }
  
  window.addEventListener('popstate', handlePopState)
  return () => window.removeEventListener('popstate', handlePopState)
}, [])
```
Handles browser back/forward buttons

---

## 📋 Testing

### Local (npm run dev)
```bash
cd /home/r2d2/projects/lab-site
npm run dev
```

Then:
1. http://localhost:3002 → Home
2. http://localhost:3002/mission-crew → MissionCrew
3. Click back button → Home
4. Click card → /mission-crew

### Production (lab.suhailtaj.cloud)
```
1. https://lab.suhailtaj.cloud → Home
2. https://lab.suhailtaj.cloud/mission-crew → MissionCrew
3. Share link works
4. Back button works
5. All settings persist (localStorage)
```

---

## 🚀 Deployment

No changes needed! The setup already handles:
- ✅ Nginx SPA routing (try_files to index.html)
- ✅ Vite build optimization
- ✅ React Router-like client routing

Just push to `development` branch:
```bash
git push origin development
```

Guardian will auto-rebuild + redeploy.

---

## 🔄 Future Enhancements

Could add more routes if needed:
```tsx
type Page = 'home' | 'mission-crew' | 'agents' | 'projects'

// Add new pages
if (path.includes('/agents')) setCurrentPage('agents')
if (path.includes('/projects')) setCurrentPage('projects')
```

## Files Changed

```
src/App.tsx
├── Added pathname detection
├── Added history.pushState on page change
├── Added popstate listener for browser back/forward
└── Clean component switching

nginx.conf
└── Already configured (try_files fallback)

MISSION_CREW_INTEGRATION.md (this file)
└── Documentation
```

---

## Current Status

✅ **Live**
- URL routing implemented
- Browser back/forward working
- Deep linking works
- Settings persist (localStorage)
- API status indicator
- All features functional

🔜 **Future**
- Add more agent endpoints (Pragmatist, Devil's Advocate)
- Implement Ollama integration
- Add conversation history
- Real-time streaming responses

---

**Commit:** 53f5017  
**Date:** 2026-03-22  
**URL:** https://lab.suhailtaj.cloud/mission-crew
