# Flight Lab v0.1
**Master Aviation by Playing**

Flight Lab is a free, browser-based aviation educational gaming platform. v0.1 launches as a real small product with four playable labs and a zero-cost shell designed to grow into a native game academy.

## Playable now
- **Radial Hunter — Radio Navigation** — https://aliajam2000.github.io/radial-hunter-radio-navigation/
- **Loadmaster — Mass & Balance** — https://aliajam2000.github.io/aircraft-mass-game/
- **Climb Lab — Aircraft Performance / Vx & Vy** — https://climb-lab-vx-vy.aliajam9731.chatgpt.site/
- **AeroLab — Principles of Flight / Aerodynamics** — https://aliajam2000.github.io/aerolab/

Weather Commander, Lost Pilot, and Fuel Commander are shown as Coming Soon.

## Philosophy
Learn → Experiment → Fly → Fail Safely → Understand → Master

## Run locally
1. Extract `flight-lab-v0.1.zip`.
2. Open `index.html` in a modern browser.
3. The Flight Lab shell works locally without a server. The four current games are external and need internet access when PLAY is pressed.

No npm, Node.js, backend, account, API key, or paid service is required.

## What v0.1 stores
Flight Lab uses namespaced browser `localStorage` (`flightlab.state`). It stores platform settings, XP, native mastery/mission structures, achievements, last launched game, launch timestamp and launch counts. The external games do **not** currently report their internal progress to the shell, so Flight Lab does not fabricate mastery, completion, scores, or XP for them.

Settings can export/import the platform state as JSON and reset it safely. Corrupted/incompatible state is recovered to a clean default.

## GitHub Pages — beginner route
1. Create a new public GitHub repository (for example `flight-lab`).
2. On the repository page choose **Add file → Upload files**.
3. Upload the **contents inside** the extracted `flight-lab-v0.1` folder so `index.html` is at the repository root.
4. Commit the upload.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the `main` branch and `/ (root)`, then Save.
8. Wait for GitHub to publish the Pages URL and open it.

## Architecture
The Academy catalog is generated from `js/core/registry.js`. Core modules isolate storage, scoring, mastery/progress, missions and achievements. External/internal/future game types are supported. See `docs/ARCHITECTURE.md`, `docs/GAME_INTEGRATION_GUIDE.md`, `docs/NATIVE_MIGRATION.md`, and `docs/DESIGN_SYSTEM.md`.

## Roadmap
The next major step is native migration of the existing games into `games/`, followed by verified mission-to-mastery integration. Future labs can then use the same LEARN / LAB / MISSION model and shared scoring/feedback components.

## Limitations
The shell is offline-friendly, but externally hosted labs require network access. Cross-application mastery is intentionally unavailable in v0.1. There are no accounts or cloud sync; export/import JSON is the portability mechanism.

## Disclaimer
Flight Lab is an independent educational supplement. It is not approved flight training material, an operational flight-planning tool, a replacement for certified instruction, official regulations, or aircraft documentation, and it does not imply affiliation with Oxford, ICAO, EASA, FAA, airlines, manufacturers, or training organizations.
