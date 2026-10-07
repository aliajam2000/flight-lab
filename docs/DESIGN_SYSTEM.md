# Flight Lab Design System
Flight Lab uses a restrained glass-cockpit-inspired visual language, without reproducing proprietary avionics.

## Tokens
All tokens live in `css/variables.css`. Core colors: background `#061019`, panel `#0c1b27`, cyan `#43d7f4`, green `#63d39a`, amber `#f1ba5a`, red `#ef6d78`, primary text `#e9f3f7`, muted text `#8fa9b7`. Cyan is interaction/information; green is correct/safe; amber is caution; red is error/warning.

Spacing follows 4/8/12/16/24/32/48px. Default radius is 14px; controls use 8–9px. Borders are thin and technical. Shadows are restrained. UI text uses the system sans stack; numeric/technical labels use the system monospace stack.

## Components
Buttons have a 44px minimum touch height and visible keyboard focus. Primary buttons use cyan. Cards use dark layered panels, thin borders and modest hover lift. Progress bars always include a numeric value nearby. Status is never communicated by color alone.

Mission badges: TRAINING=green, STANDARD=cyan, ADVANCED=amber, CAPTAIN=red/pink. Feedback states use a symbol plus text: ✓ Correct, ⚠ Caution, ✕ Incorrect.

## Responsive principles
At >1000px, academy cards use three columns. Below 1000px, two columns. Below 680px, cards and skill grids become single-column, navigation is simplified, and primary actions expand for touch. Respect `prefers-reduced-motion`; future games must do the same.
