const Discord = require('discord.js');
const bot = new Discord.Client();
const fetch = require('node-fetch');
require("fs");
const { TOKEN } = require("./lib/bot.json");
const { GG } = require("./lib/bot.json");
var { game } = require("./lib/bot.json");
var { thumb } = require("./lib/bot.json");

const prefix = '$!';
const api = 'http://127.0.0.1:8080/apimashu/'; // boorus
const dota = 'http://127.0.0.1:8080/pudge/?cat='; // dotabuff
const delay = require('delay');
const nHentaiAPI = require("nana-api"); // nana with delay
const axios = require("axios");
const pars = '/?tags='

let skadi = new nHentaiAPI();

// PTest = catch and return promise
const lolibooru = api+'/loli' // unused according tos 
const safebooru = api+'/safe'+pars // safebooru = random heroine
const gelbooru = api+'/gel'+pars // gelbooru = nsfw with specific tags



bot.on("ready", () => {
  console.log("yoo // Serving in "+bot.guilds.size+"Guilds");
  axios.post(
    `https://discord.bots.gg/api/v1/bots/${bot.user.id}/stats`,
    {
        guildCount: bot.guilds.size,
    },
    {
        headers: {
            Authorization: GG,
        },
    }
);
  function multiplegame() {

    let status = game

    let statusR = Math.floor(Math.random() * status.length);
    bot.user.setActivity(status[statusR] , {type : "Playing" , status : "Idle"});
  };
  setInterval(multiplegame, 20000); // avoid faster
  
})



  bot.on('message', async message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

  // sucks
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  const jamet = prefix+command
  const pecahan = '_raw_url ~ `'
  const ven = '`_vendor ~ '
  const tutupan = '\n'
  const expression = /\b(https?:\/\/.*?\.[a-z]{2,4}\b)/g;
  const bacot = args.toString().replace(jamet,'').replace(',','_')
  const babi = '\n_params ~ ?tags='
  const nevermore = '`try to get yer request, if nothing to see, meanly the tags is incorrect!`'
  const morph = 'give me a sec..'

  // sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

var currentdate = new Date();
var datetime = "Date Time: " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

  // help
  if (command === 'help') {
    let embed = new Discord.RichEmbed()

    .setAuthor(`${bot.user.username}\'s Commands`, `${bot.user.displayAvatarURL}`)
    .setThumbnail(`${bot.user.displayAvatarURL}`)
    .setDescription(`ma prefix`)
    .addField("❯❯ :black_circle:NSFW \n\n❯ Konachan\n",'```$!konachan [tags] = get random konachan```:mag: ie=`mash_kyrielight`\n\n❯ **Safebooru** ```$!safe [tags] = random according safebooru tags```:mag: ie:`scathach fgo`\n\n❯ **Gelbooru** ```$!gel [tags] = random according gelbooru tags```:mag: ie:`yuri,futanari`\n\n❯ **Nhentai downloader** ```$!nhen [code] = nhentai downloader```:key: ie:`177013`\n\n\n❯❯ :shield:**DOTA2 UTILITIES** \n\n❯ **Match analysis** ```$!dog [dotamatchID] = get dota2match statistics```:key: ie:`5503712167`\n\n❯ **Medal/MMR calculator** ```$!mmr [number] = Calculating yer mmr to LatestMedal```:key: ie:`4000`\n\n❯ **SteamStatus** ```$!steamstatus = <Game Coordinator and Services Status according Steam>```\n❯ **Patch and GameplayUpdates** ```$!patch = <check latest Patch/Update or GameplayUpdate about DOTA2>```\n❯ **Check Upcoming Competitive_scene** ```$!competitive = <Upcoming any Tiers tournaments sponsored by Valve>```\n❯ **LeaderBoardsMMR** ```$!leaderboard-sea = [LeaderBoards MMR]```:key: ie:`sea`\n\nArguments\n`[] = required`\n`<> = optional`', true)

    .setFooter(`📡 ${bot.user.username}`)
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(embed);

    }

  if (command === 'dog') {

    const args = message.content.trim().split(/ +/g);
    if (!args[1]) return message.reply('Please input match id.');
    var cp = require("child_process");
    cp.exec("wget -q http://mafuyu.kireisubs.org/lib/css.php?memek=wget%20https://www.dotabuff.com/matches/"+args.toString().replace(jamet,'').replace(',',''), {cwd: './dog'},
function (error, stdout, stderr) {
console.log('stdout: ' + stdout);
console.log('stderr: ' + stderr);
if (error !== null) {
  console.log('exec error: ' + error);
}
});
await delay(2000);
var PTest = function () {
  return new Promise(function (resolve, reject) {
    message.channel.send(morph).then(message => message.delete(3000));
  });
}
var myfunc = PTest();
myfunc.then(function () {
     console.log("Promise Resolved");
 }).catch(function () {
     console.log("Promise Rejected");
});
        const { url } = await fetch(dota+args.toString().replace(jamet,'').replace(',','')).then(response => response.json());

        let puki = args.toString().replace(jamet,'').replace(',','')

        var randomluna = thumb[Math.floor(Math.random() * thumb.length)];

          message.channel.startTyping(5);
       let embed = new Discord.RichEmbed()

       .setAuthor(`MATCH OVERVIEW BELOW:`, `${bot.user.displayAvatarURL}`)
       .setThumbnail(randomluna)
       .setDescription(`:earth_asia: **[opendota/${puki}] , [dotabuff/${puki}] , [STRATZ/${puki}]** \n\n:chart_with_upwards_trend:\n`+`>>> ${url}`)
       .addField(":bar_chart: Continues Analystic","To see any laning,combat, or farming [RequestParse here](https://www.opendota.com/request#"+puki+")")
       .addField(":crossed_swords: Actionable data", ">>> Laning [#laning](https://www.opendota.com/matches/"+puki+"/laning)\nCombat [#combat](https://www.opendota.com/matches/"+puki+"/combat)\nFarming [#farm](https://www.opendota.com/matches/"+puki+"/farm)\nGRAPHS [#data](https://stratz.com/matches/"+puki+"/graphs)")
       .addField(":link: Overview", "Dotabuff [Click here](https://www.dotabuff.com/matches/"+puki+")\nOpenDota [Click here](https://www.opendota.com/matches/"+puki+")\nSTRATZ [Click here](https://stratz.com/matches/"+puki+")")
      
       .setFooter(`💎 ${bot.user.username} | OpenSource Dota matchscraper`)
       .setColor("RANDOM")
       .setTimestamp()
       message.channel.send(embed);
        message.channel.stopTyping(true)

    }



    if (command === 'leaderboard-sea') {
      message.channel.send(morph).then(message => message.delete(7000));
      
  var cp = require("child_process");
  cp.exec("wget http://redsplit.org/skadi/css.php?memek=wget%20-q%20-nv%20-O%20keparat.json%20http://scathach.redsplit.org/leaderboard/?sea", {cwd: './lib'},
function (error, stdout, stderr) {
console.log('stdout: ' + stdout);
console.log('stderr: ' + stderr);
if (error !== null) {
console.log('exec error: ' + error);
}
});
await delay(5000);
var cp = require("child_process");
cp.exec("wget http://redsplit.org/skadi/keparat.json", {cwd: './lib'},
function (error, stdout, stderr) {
console.log('stdout: ' + stdout);
console.log('stderr: ' + stderr);
if (error !== null) {
console.log('exec error: ' + error);
}
});

await delay(5000);
var cp = require("child_process");
cp.exec("bash lol.sh", {cwd: './lib'},
function (error, stdout, stderr) {
console.log('stdout: ' + stdout);
console.log('stderr: ' + stderr);
if (error !== null) {
console.log('exec error: ' + error);
}
});

await delay(5000);
      fs = require("fs");
      var text = fs.readFileSync('./lib/a.txt','utf8')
      let embed = new Discord.RichEmbed()
      
      .setAuthor(`SEA Mmr Leaderboard`, `${bot.user.displayAvatarURL}`)
      .setThumbnail('https://gamepedia.cursecdn.com/dota2_gamepedia/4/46/SeasonalRankTop4.png')
   
      .setDescription(`${text}`)
      .attachFile('./lib/tox.jpg')
      .setImage('attachment://tox.jpg')
      .addField("Currently only catch <20", ":rocket: See the all value on [#api](https://scathach.redsplit.org/leaderboard/?sea)")
      .addField("SE Asia", ":link: Leaderboards [#official](https://www.dota2.com/leaderboards/#se_asia-0)")
      .setFooter(`💎 ${bot.user.username} | Sea Leaderboard`)
      .setColor("RANDOM")
      .setTimestamp()
      message.channel.send(embed);
      
  }
    

    if (command === 'competitive') {
      const { url } = await fetch('http://127.0.0.1:8080/api/?liquipedia').then(response => response.json());
      message.channel.send(morph).then(message => message.delete(3000));
      await delay(1000);
      let embed = new Discord.RichEmbed()
      
      .setAuthor(`Upcoming Match`, `${bot.user.displayAvatarURL}`)
      .setThumbnail('https://i.pinimg.com/originals/c1/ec/da/c1ecda477bc92b6ecfc533b64d4a0337.png')
      .setDescription(`${url}`)
      .setFooter(`💎 ${bot.user.username} | items above are latest upcoming Tier4,Minor,Major or even Primere competitive according Liquidpedia `)
      .setColor("RANDOM")
      .setTimestamp()
      message.channel.send(embed);
  }


  // nh
  if (command === 'nhen') {
    if (!message.channel.nsfw)
		return message.channel
			.send(`NSFW channel please.`)
			.then((message) => message.delete({ timeout: 5000 }));
	const res = await skadi.g(args[0].toString());
  let nhentURL = `http://miyako.redsplit.org/download/nhentai/${res.id}/zip`;
  const TYPE = {
    j: "jpg",
    p: "png",
    g: "gif",
  };
	let embed = new Discord.RichEmbed()
		.setTitle(res.title.pretty)
		.setURL(nhentURL.trim())
		.setThumbnail(
			`https://i.nhentai.net/galleries/${res.media_id}/1.${
				TYPE[res.images.cover.t]
			}`
		)
		.setColor("RANDOM")
		.setTimestamp()
		.setDescription(
			`To start download, click the doujin title above.\n\nAbandon all hope, ye who enter here.`
		);
    message.channel.send(embed);
  }


  // steamstats
  if (command === 'steamstatus') {
    message.channel.send(morph).then(message => message.delete(3000));
    var cp = require("child_process");
        cp.exec("node a.js",{cwd: './lib'},
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    } 
});
await delay(5000);
let embed = new Discord.RichEmbed()

.setAuthor(`Steam Status · Is Steam Down?`, `${bot.user.displayAvatarURL}`)
.setThumbnail('https://cdn2.iconfinder.com/data/icons/gaming-platforms-logo-shapes/250/steam_logo-512.png')
.setDescription(
  `Click image below`
)
.attachFile('./lib/example.png')
.setImage('attachment://example.png')
.setFooter(`💎 ${bot.user.username} | Steamstatus`)
.setColor("RANDOM")
.setTimestamp()
message.channel.send(embed);
  }


  // steamstats
  if (command === 'patch') {
    const { url } = await fetch('http://127.0.0.1:8080/api/?patch').then(response => response.json());
    message.channel.send(morph).then(message => message.delete(3000));
await delay(2000);
let embed = new Discord.RichEmbed()

.setAuthor(`Gameplay Updates ${url}`, `${bot.user.displayAvatarURL}`)
.setThumbnail('https://i.pinimg.com/originals/c1/ec/da/c1ecda477bc92b6ecfc533b64d4a0337.png')
.setDescription(`**Latest => Gameplay Updates ${url}**`)
.addField("Source Update:", ":white_check_mark: Liquidpedia [#liquidpedia](https://liquipedia.net/dota2/Version_"+url+")\n:white_check_mark: OfficialWebsite [#dota](http://www.dota2.com/patches/"+url+")")
.attachFile('./lib/dog.png')
.setImage('attachment://dog.png')
.setFooter(`💎 ${bot.user.username} | Patch`)
.setColor("RANDOM")
.setTimestamp()
message.channel.send(embed);
  }



  // safebooru
  if (command === 'safe') {
    if (!message.channel.nsfw)
		return message.channel
			.send(`NSFW channel please.`)
			.then((message) => message.delete({ timeout: 5000 }));
    var PTest = function () {
      return new Promise(function (resolve, reject) {
        message.channel.send(nevermore).then(message => message.delete(5000));
      });
  }
    var myfunc = PTest();
    myfunc.then(function () {
         console.log("Promise Resolved");
     }).catch(function () {
         console.log("Promise Rejected");
  });

        const args = message.content.trim().split(/ +/g);
        ajg = args.toString().replace(jamet,'')
        const { url } = await fetch(safebooru+ajg.replace(',','').replace('fgo','(fate/grand_order)')).then(response => response.json());

        var matches = url.match(/[^/]*$/);
        let re = /\.[^.]*$/;
        let md = matches.toString().replace(re, '')
        let regex = new RegExp(expression);
        let t = url;

        dog = t.match(regex)
        result = dog.toString().replace(/(^\w+:|^)\/\//, '');
        pattern = pecahan+md+tutupan+ven+result+babi+bacot

        let embed = new Discord.RichEmbed()

        .setDescription(pattern)
		    .addField("SafeBooru", `images: [${md}](${url})`)
       
        .setImage(`${url}`)
        .setFooter(`💎 ${bot.user.username} | safebooru`)
        .setColor("RANDOM")
        .setTimestamp()
        message.channel.send(embed);
    }



    if (command === 'mmr') {

      const args = message.content.trim().split(/ +/g);
      ajg = args.toString().replace(jamet,'').replace(',','')
      if (!args[1]) return message.reply('Pls input your mmr');

      const her = 'Herald'
const gur = 'Guardian'
const cru = 'Crusader'
const ar = 'Archon'
const leg = 'Legend'
const anc = 'Ancient'
const divi = 'Divine'

function hitung(num) {
    if (num <= 154) return `${her} 1`;
    if (num <= 308) return `${her} 2 or 3`;

    if (num <= 462) return `${her} 3 or 4`;
    if (num <= 616) return `${her} 4 or 5`;
    if (num <= 770) return `${her} 5 or ${gur} 1`;
    if (num <= 924) return `${gur} 1 or 2`;
    if (num <= 1078) return `${gur} 2 or 3`;
    if (num <= 1232) return `${gur} 3 or 4`;
    if (num <= 1386) return `${gur} 4 or 5`;
    if (num <= 1540) return `${gur} 5 or ${cru} 1`;
    if (num <= 1694) return `${cru} 1 or 2`;
    if (num <= 1848) return `${cru} 2 or 3`;
    if (num <= 2002) return `${cru} 3 or 4`;
    if (num <= 2156) return `${cru} 4 or 5`;
    if (num <= 2310) return `${cru} 5 or ${ar} 1`;
    if (num <= 2464) return `${ar} 1 or 2`;
    if (num <= 2618) return `${ar} 2 or 3`;
    if (num <= 2772) return `${ar} 3 or 4`;
    if (num <= 2926) return `${ar} 4 or 5`;
    if (num <= 3080) return `${ar} 5 or ${leg} 1`;

    if (num <= 3234) return `${leg} 1 or 2`;
    if (num <= 3388) return `${leg} 2 or 3`;
    if (num <= 3542) return `${leg} 3 or 4`;
    if (num <= 3696) return `${leg} 4 or 5`;
    if (num <= 3850) return `${leg} 5 or ${anc} 1`;
    if (num <= 4004) return `${anc} 1 or 2`;
    if (num <= 4158) return `${anc} 2 or 3`;
    if (num <= 4312) return `${anc} 3 or 4`;
    if (num <= 4466) return `${anc} 4 or 5`;
    if (num <= 4620) return `${anc} 5 or ${divi} 1`;

    if (num <= 4820) return `${divi} 1 or 2`;
    if (num <= 5020) return `${divi} 2 or 3`;
    if (num <= 5220) return `${divi} 3 or 4`;
    if (num <= 5420) return `${divi} 4 or 5`;
    return `NULL\niam not smartass, so to avoid dat i can't calculate above Immortal or any Ranks :disappointed:`;
  }
    
  let embed = new Discord.RichEmbed()
      
  .setAuthor(`Your Medal:`, `${bot.user.displayAvatarURL}`)
  .setThumbnail('https://i.imgur.com/9luAZFj.png')
  .setDescription('between **'+hitung(`${ajg}`)+'**')
  .setFooter(`💎 ${bot.user.username} | Medal Calculate, \nPS:I am not so sure enough,because its not always Updated according [https://dota2.gamepedia.com/Matchmaking/Seasonal_Rankings]\nSo in this case i using between(or)`)
  .setColor("RANDOM")
  .setTimestamp()
  message.channel.send(embed);
    }

  // gelbooru
  if (command === 'gel') {
    if (!message.channel.nsfw)
		return message.channel
			.send(`NSFW channel please.`)
			.then((message) => message.delete({ timeout: 5000 }));
    var PTest = function () {
      return new Promise(function (resolve, reject) {
        message.channel.send(nevermore).then(message => message.delete(5000));
      });
  }
    var myfunc = PTest();
    myfunc.then(function () {
         console.log("Promise Resolved");
     }).catch(function () {
         console.log("Promise Rejected");
  });
        const args = message.content.trim().split(/ +/g);
        ajg = args.toString().replace(jamet,'')
        const { url } = await fetch(gelbooru+ajg.replace(',','')).then(response => response.json());
        var matches = url.match(/[^/]*$/);
        let re = /\.[^.]*$/;
        let md = matches.toString().replace(re, '')
        let regex = new RegExp(expression);
        let t = url;

        dog = t.match(regex)
        result = dog.toString().replace(/(^\w+:|^)\/\//, '');
        pattern = pecahan+md+tutupan+ven+result+babi+bacot

        let embed = new Discord.RichEmbed()

        .setDescription(pattern)
		    .addField("GelBooru", `images: [${md}](${url})`)
       
        .setImage(`${url}`)
        .setFooter(`💎 ${bot.user.username} | gelbooru`)
        .setColor("RANDOM")
        .setTimestamp()
        message.channel.send(embed);
    }
});


bot.login(TOKEN);
