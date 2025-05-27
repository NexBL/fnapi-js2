# FNAPI-JS Documentation

FNAPI-JS is an unofficial JavaScript wrapper for the [Fortnite-API.com](https://fortnite-api.com/) service. This library provides easy access to various Fortnite game data including cosmetics, shop, stats, news, and more.

## Installation

```bash
npm install fnapi-js
```

## Getting Started

```javascript
import { ApiClient, RequestFlags } from 'fnapi-js';

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
- [Request Flags](#request-flags)
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

## Request Flags

Request flags can be used to include additional data in responses.

```javascript
import { RequestFlags } from 'fnapi-js';

// Available flags
const allFlags = RequestFlags.all(); // Include all additional data
const pathsFlag = RequestFlags.paths(); // Include file paths
const tagsFlag = RequestFlags.gameplayTags(); // Include gameplay tags
const historyFlag = RequestFlags.shopHistory(); // Include shop history
const noFlags = RequestFlags.none(); // No additional data
```

## Endpoints

### Cosmetics

Access Fortnite cosmetic items data.

```javascript
// Get all cosmetics
const cosmetics = await client.cosmetics.getAll(RequestFlags.none());

// Get new cosmetics
const newCosmetics = await client.cosmetics.getAllNew(RequestFlags.none());

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

// Get cosmetic by ID
const cosmetic = await client.cosmetics.getById('CID_001_Athena_Commando_F_Default', RequestFlags.none());

// Search cosmetics
import { SearchOptions } from 'fnapi-js';
const searchOptions = new SearchOptions()
  .setName('Renegade')
  .setType('outfit');
  
const searchResults = await client.cosmetics.search(searchOptions, RequestFlags.none(), true);
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
// Get player stats by name
const stats = await client.stats.get(
  'Ninja', // Player name
  'epic', // Account type (epic, psn, xbl)
  'lifetime', // Time window (lifetime, season)
  'all' // Image type (all, keyboardMouse, gamepad, touch)
);

// Get player stats by ID
const statsById = await client.stats.byId(
  'player-account-id', 
  'lifetime', 
  'all'
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
import { SearchOptions } from 'fnapi-js';

const options = new SearchOptions()
  .setLanguage('en') // Set response language
  .setSearchLanguage('en') // Set search language
  .setMatchMethod('contains') // Match method (contains, full, starts, ends)
  .setId('CID_001') // Search by ID
  .setName('Renegade') // Search by name
  .setDescription('description') // Search by description
  .setType('outfit') // Search by type
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
