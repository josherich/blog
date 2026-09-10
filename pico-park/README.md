# Pico Park · Classic / Canvas

A local cooperative JavaScript canvas fan recreation, using the **Kontra.js 10.0.2** micro-library (33,089 bytes minified, vendored with its MIT license). No install, bundler, remote runtime, or image downloads are needed. Only World Mode is implemented.

## Run

```sh
cd pico-park
npm start
# Open http://localhost:4173
npm test
```

Requires Node 18+ for the local server/tests. Any static HTTP server works for the game itself. ES modules require HTTP rather than opening index.html with file://. Set `PORT=8080 npm start` to choose another port. The server listens on loopback only.

## Play

Select 2–10 cats. All 20 stages are available from the start. Progress and best clear times are saved in browser localStorage. Refreshing starts at stage 1 but preserves clears.

| Player | Move | Jump | Use / enter |
| --- | --- | --- | --- |
| Selected cat (initially P1) | A / D | W | S |
| P2 | ← / → | ↑ | ↓ |
| P3 | J / L | I | K |
| P4 | F / H | T | G |
| Gamepads, in connection order | Left stick / D-pad | A | B |

Tab / Shift+Tab selects another cat for the A/D/W/S controls, including P5–P10. Unselected cats stay in place; there is no automatic follower. Keyboard multiplayer can be limited by hardware key rollover. Gamepads provide simultaneous extra controls through the browser Gamepad API; first pad controls P1 for 2–4 cats and P5 for larger crews (so four keyboard players can play alongside gamepads). R restarts; Esc pauses. Focus loss pauses automatically. Sound is optional. This is desktop keyboard/gamepad play; touch controls and online networking are not implemented.

Walk through friends horizontally, land on their heads vertically, and jump off them. Stage 1 barriers and weighted crates need the indicated number pushing in the same direction. Their labels show how many more pushers are needed. Generic proximity gates remain available for custom stages. A collected key is shared. Every cat must use the door to finish; cats inside no longer block others.

## Stage fidelity and references

The user-provided [gameplay playlist](https://www.youtube.com/playlist?list=PL03GkmF32okT9-Q7l-d8C2luZ8cUEBbQI) now supplements the screenshot gallery. Stages **1, 2, 5, 9, 18, 19 and 20** have gameplay-informed corrections. See [VIDEO-REFERENCE-NOTES.md](VIDEO-REFERENCE-NOTES.md) for timestamps, implemented changes and unresolved mismatches. Every built-in stage has a direct Walkthrough link.

The [Classic Edition wiki gallery](https://pico-park.fandom.com/wiki/PICO_PARK:_Classic_Edition) was inspected for **all 20 cooperative stage screenshots**, in its original order. Stage 21 is Battle Mode and is excluded. These are playable, screenshot-based reconstructions, not a verified exact port of the original game. The source screenshots are stage-selection previews, not executable rules or complete walkthroughs. Geometry has been scaled/adapted; names are original; inferred mechanics are listed below. Exact original timing, enemy AI, per-player layout changes, and undocumented mechanics are not asserted to match.

The [official merchandise page](https://picoparkgame.com/en/merch/) restricts its free icons to social profile use. Those files are **not bundled**. Pixel cats are drawn by `src/render.js`; there are no external art/font dependencies. This is an unofficial fan project, not affiliated with TECOPARK. The PICO PARK name and original game belong to their respective owners.

| Stage | Screenshot feature | Implemented reconstruction |
| --- | --- | --- |
| 01 | Two numbered barriers; key left, exit right | Solid group-pushed barriers with remaining-pushers counters |
| 02 | Low floor, switch by exit, high key | Floor gap, latched switch and leftward-extending bridge |
| 03 | Numbered blocks, elevated key | Pushable weighted crates and key height scaled to crew |
| 04 | Multi-tier platform course, pipe and flag | Moving lifts, checkpoint respawn and return pipe; no enemy AI |
| 05 | Two numbered platforms and high exit | Upward left lift, downward middle lift, moving vertical barrier and right platform |
| 06 | Low basketball goal | Pick up and throw ball; score to unlock exit |
| 07 | A number above every cat, “ALL 7” | Each cat cycles its own number to seven |
| 08 | Ball chute and enclosed platforms | Switch releases ball platform; recover and shoot into lower opening |
| 09 | Individual clocks and timing objective | Stop clocks with positive combined time below 0.80 seconds; use again to restart |
| 10 | Brick wall and paddles | Shared ball, cat paddles, clear all bricks; missed balls respawn |
| 11 | Raised basketball goal | Throw into elevated hoop, ballistic aim assist |
| 12 | Coin field, spring floor and countdown | Collect all coins in 70 seconds, high spring bounce |
| 13 | Winding corridor, collapsing tiles | Traverse exterior to key, interior to exit; bridge collapses |
| 14 | Roof pipe and enclosed exit | Moving platforms to roof and pipe back into room |
| 15 | Low start, high exit and key | Group platform rises, then crosses the room |
| 16 | Three platforms marked “10” | Three whole-crew lifts, permanently raised once activated |
| 17 | Extended course with flags and pipe | Stepping stones, moving platforms, spring, checkpoints and pipe; no enemy AI |
| 18 | Gap and fan beside high key | Spring, tiny island, moving fan platform and leftward wind |
| 19 | Colored falling-block compartments, target 10 | Shared falling-block well: move, rotate, hard drop, clear ten rows; top-out fails |
| 20 | Two gates, light and “DON’T PUSH!” button | Key route, pushable falling crates, green/red movement rule; button triggers red |

The tower, ghost/pipe route, number puzzle and exact stop-light timing remain approximations. The falling-block and summed-timer objectives now use video evidence, with adapted controls. Future fidelity work can replace stage data or the corresponding mode without rewriting movement or UI. References were inspected September 9, 2026.

## Create a stage without changing engine code

For stage 19, left/right moves your falling piece, use rotates it, and jump hard-drops it. Platform movement resumes once ten rows are cleared.

Open **Stage workshop** under the game. Load a stage, edit JSON, and press **Play custom stage**. Validation errors appear inline. Export JSON to save a copy. Custom play never writes official stage progress.

Example:

```json
{
  "id": 21,
  "name": "My first room",
  "hint": "Find the key, then meet at the door.",
  "mode": "normal",
  "spawn": [100, 472],
  "door": [860, 460],
  "key": [430, 360],
  "platforms": [[20, 500, 920, 20], [380, 410, 130, 14]],
  "entities": []
}
```

All positions are **pixels in a 960 × 540 room**, with (0,0) at the top left. Platforms use `[x,y,width,height]`; the key and door use top-left `[x,y]`. Cats are 22 × 28. Gravity is 1100 px/s², movement 190 px/s, full jump 460 px/s (about 96 px upward). Add 28 px for every friend in a stack. Avoid obstructing the crew spawn (additional cats are spaced 25 px apart, stacking into rows on narrow starting platforms). Outer walls are at x=0–20 and x=940–960; floor is specified by each stage. Falling below the room fails the team, except checkpoint courses 4 and 17.

To add a permanent stage, append a `stage(21, 'Name', 'Hint', {...})` entry to `src/stages.js`. `stage()` supplies the normal floor, key, door, spawn, and normal mode. The UI enumerates the array automatically. Update the static “20 stages” copy in index.html/main.js if extending the built-in catalog beyond Classic Edition.

### Entities

Every entity has `type`, `x`, `y`; optional `w`, `h` override default dimensions. `need` is a ten-player reference value: runtime requires `ceil(need × playerCount / 10)`, at least one. Add `fixedNeed:true` to use a fixed requirement capped at crew size. An `id` connects buttons to lifts.

| Type | Additional properties | Behavior |
| --- | --- | --- |
| `gate` | `need`, optional `pushable:true` | Default: proximity activation. Pushable: stays solid and slides when enough cats push in the same direction |
| `crate` | `need` | Solid, gravity-driven, pushes when enough nearby cats walk into it |
| `lift` | `need`, `toY`, optional `id` | Counts cats above its deck, moves up or down toward toY at 65 px/s and latches |
| `moving` | `axis: "x" / "y"`, `travel`, `speed` | Sinusoidal motion from origin; x travels right, y travels upward |
| `button` | `target: "entity-id"` | Standing on it permanently activates its target entity |
| `extend` | `toX`, `id` | After activation, extends its left edge toward toX while keeping its right edge fixed |
| `bridge` | — | Falls 0.6 seconds after a cat stands on it |
| `spring` | — | Bounces cats; coin mode uses a higher bounce |
| `spikes` | — | Contact counts as a fall |
| `checkpoint` | — | Saves a shared respawn point on contact in stages 4/17 |
| `pipe` | `toX`, `toY` | Use nearby to teleport |
| `fan` | optional `direction:"left"`, `reach`, `force`, `attach` | Default updraft; left-facing version pushes horizontally and can follow a platform id |
| `hoop` | — | Ball must cross rim downward to score in basket mode |
| `cannon` | — | Decorative ball chute |
| `switch` | — | Use triggers the red phase in stop mode |

Mode options: `normal`, `numbers` (`target`), `timers` (`sumLimit`, default 0.8), `basket` (`ball:[x,y]`, `goal`), `breakout`, `coins` (`timeLimit`), `tower`, `tetris` (`goal`), `stop`. Arcade modes generate their own objects and grant the shared key when solved, so use `key:null`. Tower mode moves the activated platform horizontally after reaching y=130. Currently basketball completes after one basket; `goal` is fixed at 1 in shipped basketball stages.

### Files

- `src/physics.js`: pure collision, stacking, movement, validation.
- `src/world.js`: stage loading, entity simulation, puzzle rules, win/failure state.
- `src/stages.js`: all 20 editable stage definitions.
- `src/references.js`: playlist-to-stage video mapping.
- `src/blocks.js`: shared falling-block grid and collisions.
- `src/render.js`: Canvas 2D artwork and game rendering.
- `src/main.js`: Kontra loop, inputs, audio, UI, saved progress and workshop.
- `test/physics.test.js`: deterministic Node tests; no browser or packages required.
- `vendor/kontra.min.js`, `vendor/LICENSE-kontra`: pinned engine and MIT attribution.

Tests cover physics, stacking, lifts, gate scaling, keys/exits, puzzle objectives, failure states, schema rejection, and simulations of all 20 stages with 2 and 10 cats. They are not a complete all-stage multiplayer playthrough or proof of exact original-game fidelity.
