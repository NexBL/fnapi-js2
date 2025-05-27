const { Client } = require('fnbr');
const { ApiClient, Enums, SearchOptions } = require('fnapi-js');
const { SearchSource } = require('jest');

const client = new Client();

const fnApi = new ApiClient({});

const handleCommand = async (m) => {
    // console.log(m.content);
    if (!m.content.startsWith('!')) return;
    const args = m.content.slice(1).split(' ');
    const command = args.shift().toLowerCase();
  
    if (command === 'outfit' || command === 'skin') {
      const search = new SearchOptions()
        .setName(`${args.join(' ')}`)
        .setMatchMethod(Enums.matchMethod.contains())
        .setType(Enums.cosmeticType.outfit());

      const skin = await fnApi.cosmetics.search(search, Enums.requestFlags.paths(), false);
      if (!skin) {
        console.log(`The skin ${args.join(' ')} wasn't found!`);
        return;
      }
  
      await m.client.party.me.setOutfit(skin.body().data.id, undefined, undefined);
      await m.reply(`Set the skin to ${skin.body().data.name}!`);

    } else if (command === 'emote' || command === 'dance') {

      const search = new SearchOptions()
        .setName(`${args.join(' ')}`)
        .setMatchMethod(Enums.matchMethod.contains())
        .setType(Enums.cosmeticType.emote());

      const emote = await fnApi.cosmetics.search(search, Enums.requestFlags.paths(), false);
      if (!emote) {
        console.log(`The emote ${args.join(' ')} wasn't found!`);
        return;
      }
  
      try {
        await m.client.party.me.setEmote(emote.body().data.id, fnApi.misc.fixPath(emote.body().data.path));
        console.log(`Set the emote to ${emote.body().data.name}!`);
      } catch (error) {
        console.log(error);
        console.log(`Failed to set the emote due to: ${error.message}`);
      }
    }
  };  

client.on('friend:message', (message) => {
  console.log(`Message from ${message.author.displayName}: ${message.content}`);
  
  handleCommand(message);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.displayName}`);
});

client.login();