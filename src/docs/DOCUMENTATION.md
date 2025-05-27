# FNAPI-JS Documentation

FNAPI-JS is an unofficial JavaScript wrapper for the [Fortnite-API.com](https://fortnite-api.com/) service. This library provides easy access to various Fortnite game data including cosmetics, shop, stats, news, and more.

## Installation

```bash
npm install fnapi-js
```

## Getting Started

```javascript
import { ApiClient, RequestFlags, Enums } from 'fnapi-js';

// Initialize the API client
const client = new ApiClient({
  apiKey: 'your-api-key', // Optional, but required for some endpoints
  timeout: 30000 // Optional, default is 30000ms
});

// Example: Get current shop
const shop = await client.shop.get();
console.log(shop);
```

## Table of Contents

- [API Client](#api-client)
- [Response Object](#response-object)
- [Enums](#enums)
  - [Request Flags](#request-flags)
  - [Account Type](#account-type)
  - [Cosmetic Type](#cosmetic-type)
  - [Language](#language)
  - [Match Method](#match-method)
  - [Stats Image](#stats-image)
  - [Time Window](#time-window)
- [Endpoints](#endpoints)
  - [Cosmetics](#cosmetics)
  - [Shop](#shop)
  - [Stats](#stats)
  - [AES](#aes)
  - [Banners](#banners)
  - [Creator Code](#creator-code)
  - [Map](#map)
  - [News](#news)
  - [Playlists](#playlists)
  - [Misc](#misc)
- [Search Options](#search-options)

## API Client

The `ApiClient` is the main entry point for interacting with the API.

```javascript
import { ApiClient } from 'fnapi-js';

const client = new ApiClient({
  apiKey: 'your-api-key', // Optional, but required for some endpoints
  timeout: 30000, // Optional, default is 30000ms
  headers: {} // Optional, additional headers
});
```

### Methods

- `request(method, path, data, options)`: Make a direct API request
- `setHeader(key, value)`: Set a custom header for all requests
- `getBaseUrl()`: Get the base URL of the API

## Response Object

All API requests return a `Response` object with the following methods:

- `status()`: Get the HTTP status code
- `headers()`: Get the response headers
- `body()`: Get the response body
- `isSuccess()`: Check if the request was successful (status code 200-299)

## Enums

FNAPI-JS provides several enums to make it easier to work with the API. Import them using:

```javascript
import { Enums } from 'fnapi-js';
// Or import specific enums
import { RequestFlags, AccountType, Language } from 'fnapi-js';
```

### Request Flags

Request flags can be used to include additional data in responses.

```javascript
import { RequestFlags } from 'fnapi-js';

// Available flags
const allFlags = RequestFlags.all(); // Include all additional data
const pathsFlag = RequestFlags.paths(); // Include file paths
const tagsFlag = RequestFlags.gameplayTags(); // Include gameplay tags
const historyFlag = RequestFlags.shopHistory(); // Include shop history
const noFlags = RequestFlags.none(); // No additional data

// Combine multiple flags
const combinedFlags = RequestFlags.multiple(
  RequestFlags.FLAGS.INCLUDE_PATHS,
  RequestFlags.FLAGS.INCLUDE_GAMEPLAY_TAGS
);
```

### Account Type

Used for specifying account platforms when fetching player stats.

```javascript
import { AccountType } from 'fnapi-js';

// Available account types
const epicAccount = AccountType.epic(); // Epic Games account
const psnAccount = AccountType.psn(); // PlayStation Network account
const xblAccount = AccountType.xbl(); // Xbox Live account
```

### Cosmetic Type

Used for specifying cosmetic types when searching for cosmetics.

```javascript
import { CosmeticType } from 'fnapi-js';

// Available cosmetic types
const outfit = CosmeticType.outfit(); // Character outfits
const emote = CosmeticType.emote(); // Emotes/dances
const wrap = CosmeticType.wrap(); // Weapon/vehicle wraps
const emoji = CosmeticType.emoji(); // Emojis
const glider = CosmeticType.glider(); // Gliders
const spray = CosmeticType.spray(); // Sprays
const loadingscreen = CosmeticType.loadingscreen(); // Loading screens
const contrail = CosmeticType.contrail(); // Contrails
const shoes = CosmeticType.shoes(); // Shoes
const pickaxe = CosmeticType.pickaxe(); // Harvesting tools
const backpack = CosmeticType.backpack(); // Back blings
const musicpack = CosmeticType.musicpack(); // Music packs
const toy = CosmeticType.toy(); // Toys
const pet = CosmeticType.pet(); // Pets

// Vehicle cosmetics
const vehicleSkin = CosmeticType.vehicleskin(); // Vehicle skins
const vehicleWheel = CosmeticType.vehiclewheel(); // Vehicle wheels
const vehicleBooster = CosmeticType.vehiclebooster(); // Vehicle boosters
const vehicleDriftTrail = CosmeticType.vehicledrifttrail(); // Vehicle drift trails
const vehicleBody = CosmeticType.vehiclebody(); // Vehicle bodies

// LEGO/Building cosmetics
const junoBuildingProp = CosmeticType.junobuildingprop(); // Decor bundles
const junoBuildingSet = CosmeticType.junobuildingset(); // Building sets

// Musical instruments
const sparksGuitar = CosmeticType.sparksguitar(); // Guitars
const sparksBass = CosmeticType.sparksbass(); // Bass guitars
const sparksDrum = CosmeticType.sparksdrum(); // Drums
const sparksMic = CosmeticType.sparksmic(); // Microphones
const sparksKeyboard = CosmeticType.sparkskeyboard(); // Keytars
const sparksAura = CosmeticType.sparksaura(); // Auras
```

### Language

Used for specifying language preferences for API responses.

```javascript
import { Language } from 'fnapi-js';

// Available languages
const english = Language.english(); // English (en)
const german = Language.german(); // German (de)
const spanish = Language.spanish(); // Spanish (es)
const spanishLatinAmerica = Language.spanishLatinAmerica(); // Spanish - Latin America (es-419)
const french = Language.french(); // French (fr)
const italian = Language.italian(); // Italian (it)
const japanese = Language.japanese(); // Japanese (ja)
const korean = Language.korean(); // Korean (ko)
const polish = Language.polish(); // Polish (pl)
const portugueseBrazil = Language.portugueseBrazil(); // Portuguese - Brazil (pt-BR)
const russian = Language.russian(); // Russian (ru)
const turkish = Language.turkish(); // Turkish (tr)
const chineseSimplified = Language.chineseSimplified(); // Chinese - Simplified (zh-Hans)
const chineseTraditional = Language.chineseTraditional(); // Chinese - Traditional (zh-Hant)
const arabic = Language.arabic(); // Arabic (ar)
const indonesian = Language.indonesian(); // Indonesian (id)
const thai = Language.thai(); // Thai (th)
const vietnamese = Language.vietnamese(); // Vietnamese (vi)

// Get all available languages
const allLanguages = Language.getAll();

// Check if a language code is valid
const isValid = Language.isValid('en'); // true
```

### Match Method

Used for specifying how search terms should match when searching for cosmetics.

```javascript
import { MatchMethod } from 'fnapi-js';

// Available match methods
const fullMatch = MatchMethod.full(); // Exact match (same as exact())
const exactMatch = MatchMethod.exact(); // Exact match (same as full())
const containsMatch = MatchMethod.contains(); // Contains the search term
const startsMatch = MatchMethod.starts(); // Starts with the search term
const endsMatch = MatchMethod.ends(); // Ends with the search term
```

### Stats Image

Used for specifying which stats images to include when fetching player stats.

```javascript
import { StatsImage } from 'fnapi-js';

// Available stats image types
const allImages = StatsImage.all(); // All input types
const keyboardMouseImages = StatsImage.keyboardMouse(); // Keyboard and mouse only
const gamepadImages = StatsImage.gamepad(); // Controller only
const touchImages = StatsImage.touch(); // Touch input only
const noImages = StatsImage.none(); // No images
```

### Time Window

Used for specifying the time period when fetching player stats.

```javascript
import { TimeWindow } from 'fnapi-js';

// Available time windows
const lifetime = TimeWindow.lifetime(); // Lifetime stats
const season = TimeWindow.season(); // Current season stats
```

## Endpoints

### Cosmetics

Access Fortnite cosmetic items data.

```javascript
import { RequestFlags, CosmeticType, SearchOptions, MatchMethod, Language } from 'fnapi-js';

// Get all cosmetics with additional data
const cosmetics = await client.cosmetics.getAll(RequestFlags.all());

// Get new cosmetics with file paths
const newCosmetics = await client.cosmetics.getAllNew(RequestFlags.paths());

// Get all music tracks
const tracks = await client.cosmetics.getAllTracks(RequestFlags.none());

// Get all instruments
const instruments = await client.cosmetics.getAllInstrument(RequestFlags.none());

// Get all cars
const cars = await client.cosmetics.getAllCars(RequestFlags.none());

// Get all LEGO items
const lego = await client.cosmetics.getAllLego(RequestFlags.none());

// Get all LEGO kits
const legoKits = await client.cosmetics.getAllLegoKits(RequestFlags.none());

// Get all beans
const beans = await client.cosmetics.getAllBeans(RequestFlags.none());

// Get cosmetic by ID with gameplay tags
const cosmetic = await client.cosmetics.getById('CID_001_Athena_Commando_F_Default', RequestFlags.gameplayTags());

// Search cosmetics using enums
const searchOptions = new SearchOptions()
  .setLanguage(Language.english())
  .setName('Renegade')
  .setType(CosmeticType.outfit())
  .setMatchMethod(MatchMethod.contains());
  
const searchResults = await client.cosmetics.search(searchOptions, RequestFlags.all(), true);
```

### Shop

Get the current Fortnite item shop.

```javascript
// Get current shop
const shop = await client.shop.get();
```

### Stats

Get player statistics. Requires an API key.

```javascript
import { AccountType, TimeWindow, StatsImage } from 'fnapi-js';

// Get player stats by name
const stats = await client.stats.get(
  'Ninja', // Player name
  AccountType.epic(), // Account type
  TimeWindow.lifetime(), // Time window
  StatsImage.all() // Image type
);

// Get player stats by ID
const statsById = await client.stats.byId(
  'player-account-id', 
  TimeWindow.season(), 
  StatsImage.keyboardMouse()
);
```

### AES

Get AES encryption keys used by Fortnite.

```javascript
// Get current AES keys
const aes = await client.aes.get();
// Returns: { build, mainKey, dynamicKeys }
```

### Banners

Get Fortnite banner icons and colors.

```javascript
// Get all banners
const banners = await client.banners.get();

// Get all banner colors
const bannerColors = await client.banners.getColors();
```

### Creator Code

Look up Support-A-Creator (SAC) codes.

```javascript
// Get creator code information
const creatorInfo = await client.sac.get('code-name');
```

### Map

Get the current Fortnite map data.

```javascript
// Get current map
const map = await client.map.get();
```

### News

Get the current in-game news.

```javascript
// Get current news
const news = await client.news.get();
```

### Playlists

Get information about Fortnite game modes/playlists.

```javascript
// Get all playlists
const playlists = await client.playlists.all();

// Get playlist by ID
const playlist = await client.playlists.byId('playlist-id');
```

### Misc

Utility functions.

```javascript
// Fix a file path
const fixedPath = await client.misc.fixPath('FortniteGame/Content/path/to/file');
```

## Search Options

The `SearchOptions` class provides a fluent interface for building search queries.

```javascript
import { SearchOptions, Language, MatchMethod, CosmeticType } from 'fnapi-js';

const options = new SearchOptions()
  .setLanguage(Language.english()) // Set response language
  .setSearchLanguage(Language.english()) // Set search language
  .setMatchMethod(MatchMethod.contains()) // Match method
  .setId('CID_001') // Search by ID
  .setName('Renegade') // Search by name
  .setDescription('description') // Search by description
  .setType(CosmeticType.outfit()) // Search by type
  .setDisplayType('Outfit') // Search by display type
  .setBackendType('AthenaCharacter') // Search by backend type
  .setRarity('epic') // Search by rarity
  .setDisplayRarity('Epic') // Search by display rarity
  .setBackendRarity('EFortRarity::Epic') // Search by backend rarity
  .setHasSeries(true) // Filter by whether item has a series
  .setSeries('marvel') // Search by series
  .setBackendSeries('Series.Marvel') // Search by backend series
  .setHasSet(true) // Filter by whether item has a set
  .setSet('marvel') // Search by set
  .setSetText('Marvel') // Search by set text
  .setBackendSet('Set.Marvel') // Search by backend set
  .setHasIntroduction(true) // Filter by whether item has introduction data
  .setBackendIntroduction('Chapter2Season4') // Search by backend introduction
  .setIntroductionChapter(2) // Search by introduction chapter
  .setIntroductionSeason(4) // Search by introduction season
  .setHasFeaturedImage(true) // Filter by whether item has featured image
  .setHasVariants(true) // Filter by whether item has variants
  .setHasGameplayTags(true) // Filter by whether item has gameplay tags
  .setGameplayTag('Cosmetics.Source.ItemShop') // Search by gameplay tag
  .setHasMetaTags(true) // Filter by whether item has meta tags
  .setMetaTag('Cosmetics.Filter.Season.10') // Search by meta tag
  .setHasDynamicPakId(true) // Filter by whether item has dynamic pak ID
  .setDynamicPakId('pak-id') // Search by dynamic pak ID
  .setAdded('2020-01-01T00:00:00Z') // Search by added date
  .setAddedSince('2020-01-01T00:00:00Z') // Search by added since date
  .setUnseenFor(30) // Search by unseen for days
  .setLastAppearance('2020-01-01T00:00:00Z'); // Search by last appearance date
```
