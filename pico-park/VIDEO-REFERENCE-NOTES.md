# Gameplay reference audit

Source: [Lucas game's Pico Park Classic playlist](https://www.youtube.com/playlist?list=PL03GkmF32okT9-Q7l-d8C2luZ8cUEBbQI), provided by the user. The playlist contains duplicates and a battle clip; `src/references.js` maps stages 1–20 to their first matching video. The toolbar links directly to the selected stage's walkthrough. Times below are video times, including title cards, rather than the in-game clock.

## Corrections implemented from observed gameplay

| Stage | Video evidence | Revision |
| --- | --- | --- |
| [1](https://www.youtube.com/watch?v=g_BdbHqnUWI&t=19s) | 00:19 / 00:30: full-height barriers change horizontal position, remain solid, and show decreasing push requirements. | Replaced proximity disappearance with horizontal group pushing and a remaining-pushers display. Both barriers remain physical objects. Tested a complete clear using movement inputs. |
| [2](https://www.youtube.com/watch?v=mC39aJjhsIY&t=4s) | 00:04 / 00:10 / 00:16: a floor gap and segmented bridge; the right switch extends the bridge left. | Removed the invented elevator. Added a latched, horizontally extending bridge, floor gap and elevated key. |
| [5](https://www.youtube.com/watch?v=6bv8IjGgl9o&t=15s) | 00:15 / 00:35: upward left lift marked 2, downward middle lift, a thin moving vertical barrier and a right stepping platform. | Corrected lift directions, kept the left requirement at two cats, added the moving barrier and adjusted the right platform route. |
| [9](https://www.youtube.com/watch?v=lyWcV3ubmO0&t=43s) | 00:09 / 00:29 / 00:43: objective reads `0.00 < total < 0.80`; stopped values 0.24 and 0.41 produce a successful displayed sum of about 0.66 (rounding). | Replaced the invented five-second target with a positive combined time below 0.80 seconds. The sum is rendered. Keyboard use toggles stop/restart; exact original physical-button behavior is not replicated. |
| [18](https://www.youtube.com/watch?v=u1v1VDQDw5E&t=17s) | 00:17 / 00:40: spring on the left ledge, tiny island in the gap, fan facing left on a vertically moving deck. | Removed the horizontal ferry and upward wind. Added spring, small island, moving fan deck and horizontal wind. Wind magnitude and exact path timing are tuned approximations. |
| [19](https://www.youtube.com/watch?v=1tn3k6qcFMA&t=91s) | Around 01:31: multiple falling pieces share a well containing settled blocks; remaining row counter shows 3. | Replaced outline matching with a shared grid, simultaneous pieces, rotation, horizontal movement, hard drops, settled collision, line clearing and top-out. Ten lines unlock the door. Exact shape sequence, input mapping and well width scaling remain adaptations. |
| [20](https://www.youtube.com/watch?v=0rJ02-ReOKI&t=28s) | 00:28 / 01:07 / 01:26: the large block is pushed left; the small upper block falls to the middle floor and is repositioned. | Replaced both disappearing gates with weighted, gravity-driven pushable crates. Existing stop-light timing remains approximate. |

## Observed mismatches not yet resolved

These observations are deliberately **not** labeled completed fidelity work:

- [Stage 7](https://www.youtube.com/watch?v=xuGsecJybeY&t=24s), 00:24 / 00:48: six spatial counters and switches are visible with two cats, and values include A/B. The current one-counter-per-cat decimal puzzle is still an approximation. These sampled frames do not establish the precise switch coupling or update rule.
- [Stage 14](https://www.youtube.com/watch?v=8oaU6eOy2tI&t=38s), 00:15 / 00:38 / 01:00: a ghost carries the key outside the enclosed player room and approaches the upper pipe. The current player-platform route does not replicate this. The ghost's control rule needs a closer motion/input analysis.
- [Stage 15](https://www.youtube.com/watch?v=iA_ED7HyXoo&t=3s), 00:03–00:09: one cat traverses the empty room without the platform invented in the first reconstruction. The current group platform is not faithful. Sparse seek frames do not identify whether the original movement uses special controls, physics or wrapping; no replacement rule is asserted without evidence.
- Stage 16's brief observed opening confirms numbered group lifts; release/reset behavior has not been established.
- Stages 3, 4, 6, 10–13 and 17 have linked playlist clips but were not given a complete gameplay audit in this revision. Their original screenshot-based limitations remain.

## Validation

`npm test` includes an input-driven stage 1 clear, opposing/single-player barrier resistance, bridge extension, summed-clock acceptance/rejection, downward lift travel, horizontal wind, shared-grid collisions, rotation, hard drop, line removal and top-out. All shipped stages are simulated with 2 and 10 players for numerical stability. Browser checks verify shared-board rendering and rotate/drop input. This is not an all-stage multiplayer completion proof.

## Stage 8 correction — September 10

[Stage 8 video](https://www.youtube.com/watch?v=qzjnxEie5OE): inspected 00:06, 00:13, 00:17, 00:27 and 00:31. Cats remain below a sealed chamber. Weight on two exterior platforms changes the angle of three staggered ramps. A ball rolls along them and presses the lower-right switch. At 00:31 a key is available beside the center exit. Removed the invented hoop, ball pickup, collapsing ramp, chamber entrance and climbing lift. Added a dedicated tilt-course simulation and reconstructed geometry. Tests trace the ball across all three ramps and verify weight response and key release. Acceleration, tilt-response time and missed-ball reset delay are tuned rather than extracted exact constants.
