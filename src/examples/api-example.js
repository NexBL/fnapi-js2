
import { ApiClient, Enums, SearchOptions } from '../index.js';
import readline from 'readline';

const fnApi = new ApiClient({ apiKey: 'api-key here' });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const commands = {
    'stats': async (args) => {
        const [username] = args;
        if (!username) {
            console.log('Usage: stats <username>');
            return;
        }
        try {
            const stats = await fnApi.stats.get(
                username,
                Enums.accountType.epic(),
                Enums.timeWindow.lifetime(),
                Enums.statsImage.all()
            );
            console.log('Stats:', JSON.stringify(stats, null, 2));
        } catch (error) {
            console.error('Error:', error.message);
        }
    },
    'help': () => {
        console.log('Available commands:\n' +
            '  stats <username> - Get player stats\n' +
            '  exit - Exit the program\n' +
            '  help - Show this help message\n' +
            '  map - Get the map\n' +
            '  searchcosmetic <name> - Search for a cosmetic\n' +
            '  cosmetics <all|new|tracks|instrument|cars|lego|legokits|beans> - Get cosmetics\n' +
            '  cosmetic <id> - Get a specific cosmetic\n' +
            '  creatorcode <code> - Get a creator code\n' +
            '  aes - Get all aes keys\n' +
            '  banners - Get all banners\n' +
            '  bannerscolors - Get all banner colors\n' +
            '  map - Get the map\n' +
            '  news - Get the news\n' +
            '  playlists - Get all playlists\n' +
            '  shop - Get the shop'
        );
    },
    'news': async () => {
        try {
            const data = await fnApi.news.get();
            console.log(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error("Error:", error.message);
        }
    },
    'playlists': async () => {
        try {
            const data = await fnApi.playlists.all();
            console.log(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error("Error:", error.message);
        }
    },
    'shop': async () => {
        try {
            const data = await fnApi.shop.get();
            console.log(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error("Error:", error.message);
        }
    },
    'map': async () => {
        try {
            const data = await fnApi.map.get();
            console.log(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error("Error:", error.message);
        }
    },
    'aes': async () => {
        try {
            const data = await fnApi.aes.get();
            console.log(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error("Error:", error.message);
        }
    },
    'banners': async () => {
        try {
            const data = await fnApi.banners.get();
            console.log(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error("Error:", error.message);
        }
    },
    'bannerscolors': async () => {
        try {
            const data = await fnApi.banners.getColors();
            console.log(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error("Error:", error.message);
        }
    },
    'creatorcode': async (args) => {
        const [code] = args;
        if (!code) {
            console.log('Usage creatorcode <code>')
            return;
        }

        try {
            const search = await fnApi.sac.get(code);
            console.log('Creator Code:', JSON.stringify(search, null, 2));
        } catch (eorrr) {
            console.error("Error:", eorrr.message);
        }
    },
    'searchcosmetic': async (args) => {
        const [name] = args;
        if (!name) {
            console.log('Usage: searchcosmetic <name>');
            return;
        }
        try {
            const searchOptions = new SearchOptions()
                .setMatchMethod(Enums.matchMethod.exact())
                .setName(name);
            const cosmetics = await fnApi.cosmetics.search(searchOptions, Enums.requestFlags.multiple(Enums.requestFlags.paths(), Enums.requestFlags.gameplayTags()), false);
            console.log('Cosmetics:', JSON.stringify(cosmetics.body().data, null, 2));
        } catch (error) {
            console.error('Error:', error.message);
        }
    },
    'cosmetic': async (args) => {
        const [id] = args;
        if (!id) {
            console.log('Usage: cosmetic <id>');
            return;
        }
        try {
            const cosmetic = await fnApi.cosmetics.getById(id, Enums.requestFlags.all());
            console.log('Cosmetic:', JSON.stringify(cosmetic.body().data, null, 2));
        } catch (error) {
            console.error('Error:', error.message);
        }
    },
    'cosmetics': async (args) => {
        const [type] = args;
        if (!type) {
            console.log('Usage: cosmetics <all|new|tracks|instrument|cars|lego|legokits|beans>');
            return;
        }
        try {
            switch (type) {
                case 'all':
                    const cosmetics = await fnApi.cosmetics.getAll(Enums.requestFlags.all());
                    console.log('Cosmetics:', JSON.stringify(cosmetics.body().data, null, 2));
                    break;
                case 'new':
                    const cosmeticsNew = await fnApi.cosmetics.getAllNew(Enums.requestFlags.all());
                    console.log('Cosmetics:', JSON.stringify(cosmeticsNew.body().data, null, 2));
                    break;
                case 'tracks':
                    const cosmeticsTracks = await fnApi.cosmetics.getAllTracks(Enums.requestFlags.all());
                    console.log('Cosmetics:', JSON.stringify(cosmeticsTracks.body().data, null, 2));
                    break;
                case 'instrument':
                    const cosmeticsInstrument = await fnApi.cosmetics.getAllInstrument(Enums.requestFlags.all());
                    console.log('Cosmetics:', JSON.stringify(cosmeticsInstrument.body().data, null, 2));
                    break;
                case 'cars':
                    const cosmeticsCars = await fnApi.cosmetics.getAllCars(Enums.requestFlags.all());
                    console.log('Cosmetics:', JSON.stringify(cosmeticsCars.body().data, null, 2));
                    break;
                case 'lego':
                    const cosmeticsLego = await fnApi.cosmetics.getAllLego(Enums.requestFlags.all());
                    console.log('Cosmetics:', JSON.stringify(cosmeticsLego.body().data, null, 2));
                    break;
                case 'legokits':
                    const cosmeticsLegoKits = await fnApi.cosmetics.getAllLegoKits(Enums.requestFlags.all());
                    console.log('Cosmetics:', JSON.stringify(cosmeticsLegoKits.body().data, null, 2));
                    break;
                case 'beans':
                    const cosmeticsBeans = await fnApi.cosmetics.getAllBeans(Enums.requestFlags.all());
                    console.log('Cosmetics:', JSON.stringify(cosmeticsBeans.body().data, null, 2));
                    break;
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
};

console.log('Fortnite API CLI - Type "help" for commands');
rl.setPrompt('FN> ');
rl.prompt();

rl.on('line', async (line) => {
    const [command, ...args] = line.trim().split(' ');
    
    if (command === 'exit') {
        rl.close();
        return;
    }

    if (commands[command]) {
        await commands[command](args);
    } else {
        console.log('Unknown command. Type "help" for available commands');
    }
    
    rl.prompt();
});

rl.on('close', () => {
    console.log('\nGoodbye!');
    process.exit(0);
});
