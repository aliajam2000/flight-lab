# Flight Lab Architecture

Flight Lab v0.1 is a static HTML/CSS/JavaScript application. There is no build step and no backend. `index.html` loads small core modules into the `window.FlightLab` namespace, then `app.js` renders the Academy from the central game registry.

## Lifecycle
1. Core modules load.
2. Storage reads `flightlab.state` and validates schema version 2. Invalid/corrupt data falls back to a clean state.
3. `registry.js` provides the six-game catalog.
4. `app.js` renders playable and future cards from that registry, plus Progress and Settings.
5. Launching an external game records only platform activity, saves state, then opens the verified URL in a new tab.

## State and storage
`storage.js` owns persistence. State contains `player`, `games`, `missions`, `achievements`, `settings`, and `activity`. Activity records last game, last launch time, per-game launch counts and distinct launched games. External launch activity never creates mastery or mission scores.

## Game registry
Each game has a stable `id` and declares `type` (`external`, `internal`, `future`), `status`, launch target, skills, modes, tiers and `progressTracking`. The UI does not maintain a separate hard-coded card list.

## Progress and rank
`progress.js` keeps mastery (0–100), overall mastery and rank gates. Rank requires both XP and mastery. XP represents participation/progression; mastery represents competence. In v0.1 the external games do not supply verified mastery, so the Progress view says it is not yet measured.

## Scoring
`scoring.js` defaults to Safety 40, Accuracy 30, Efficiency 20 and Time 10. It creates score objects, records normalized category performance, calculates a 0–100 total, maps it to 1–5 stars, and stores best mission scores. Future native games can override weights.

## Missions and achievements
`missions.js` defines LEARN/LAB/MISSION and TRAINING/STANDARD/ADVANCED/CAPTAIN standards and mission completion storage. `achievements.js` defines platform achievements. `First Flight` is valid for an external launch; native performance achievements should only unlock from real integrated results.

## Routing
The shell uses three zero-dependency hash views: `#academy`, `#progress`, and `#about`. Settings uses the native HTML dialog element.

## Native communication
A future native game should keep its stable game ID, register an internal launch path, then call core scoring/mastery/mission APIs after verified gameplay. See `GAME_INTEGRATION_GUIDE.md` and `NATIVE_MIGRATION.md`.
