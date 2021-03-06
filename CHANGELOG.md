# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog]
and this project adheres to [Semantic Versioning].

## [2.0.0] - 2020-28-05
### Removed
- tslint config no longer exposed or to be consumed via this repo.
  - Please use ESLint instead.

### Changed
- All interfaces no longer start with `I` as per updated naming conventions by the TS team.
    - e.g. `IPoint` -> `Point`.

## [1.2.0] - 2019-11-11
### Added
- Add `gameVersion` field on lobbied events.

## [1.1.0] - 2019-18-10
### Added
- Add `gamelogVersion` field on most recent Gamelog types.

### Changed
- `IGamelog` interface updated to different version of Cadre gamelogs that could be encountered.

## [1.0.5] - 2018-28-10
### Fixed
- First fully working publication with no erroneous artifacts

[2.0.0]: https://github.com/siggame/Cadre-TS-Utils/releases/tag/v2.0.0
[1.3.0]: https://github.com/siggame/Cadre-TS-Utils/releases/tag/v1.3.0
[1.2.0]: https://github.com/siggame/Cadre-TS-Utils/releases/tag/v1.2.0
[1.1.0]: https://github.com/siggame/Cadre-TS-Utils/releases/tag/v1.1.0
[1.0.5]: https://github.com/siggame/Cadre-TS-Utils/releases/tag/v1.0.5

[Keep a Changelog]: http://keepachangelog.com/en/1.0.0/
[Semantic Versioning]: http://semver.org/spec/v2.0.0.html
