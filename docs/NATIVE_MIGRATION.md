# Native Migration

Flight Lab v0.1 launches Radial Hunter, Loadmaster, Climb Lab, and AeroLab as external web applications. Migration later should preserve the game `id`, so platform history remains associated with the same product.

## Migration procedure
1. Copy the complete tested game into its existing folder under `games/` (for example `games/radial-hunter/`).
2. Make sure the game's entry point works at `games/radial-hunter/index.html` using relative asset paths.
3. In `js/core/registry.js`, keep the same `id` and change `type` from `external` to `internal`.
4. Set `launchUrl` to `null` and `launchPath` to the local entry path.
5. Initially keep `progressTracking: "limited"` until the game actually reports verified results to Flight Lab Core.
6. Only after implementing the integration contract, change `progressTracking` to `native` and map real mission results to scoring/mastery/XP APIs.
7. Test local file opening and GitHub Pages before release.

The same sequence applies to `loadmaster` and `climb-lab`. Never infer mastery from launch count. Preserve external URLs in release notes if a rollback is needed.
