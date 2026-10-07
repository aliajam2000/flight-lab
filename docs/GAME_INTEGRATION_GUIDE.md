# Game Integration Guide

## Add a new game
Register it once in `js/core/registry.js`. Academy cards are rendered from the registry, so no duplicate card markup is required.

Required fields: `id`, `name`, `subject`, `description`, `type`, `status`, `progressTracking`, `modes`, `tiers`, and `skills`. External games use `launchUrl`; internal games use `launchPath`; future games can reserve a local path while remaining `coming-soon`.

Supported values:
- `type`: `external`, `internal`, `future`
- `status`: `playable`, `coming-soon`
- `progressTracking`: `none`, `limited`, `native`

For a native game, call Flight Lab's scoring/mastery engines only from meaningful verified mission outcomes. Launches alone must never increase mastery or rank. Default scoring weights are Safety 40, Accuracy 30, Efficiency 20, Time 10. Native games may override them.

## Native modes and tiers
Flight Lab standard modes are LEARN, LAB, MISSION. Mission tiers are TRAINING, STANDARD, ADVANCED, CAPTAIN. A game may expose a subset of modes during migration.

## Progress rule
External games in v0.1 report no verified competence data. The shell may store launch activity and platform achievements, but must display mastery as unlinked until a real integration exists.
