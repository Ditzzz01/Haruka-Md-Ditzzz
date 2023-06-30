const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`
             ${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}
⳼ ┈──────────────────┈ ⳹
╭─❒「 𝐈𝐃𝐔𝐋 𝐅𝐈𝐓𝐑𝐈 🌙 」
│♛ ${mundur}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒
    
╭──❒「 𝐒𝐓𝐀𝐓𝐈𝐒𝐓𝐈𝐂𝐒 」
│♛ 𝐔𝐩𝐥𝐨𝐚𝐝 : ${upload}
│♛ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 : ${download}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 」 
│♛ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${ownerName}
│♛ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${botName}
│♛ 𝐓𝐢𝐦𝐞 : ${jam}
│♛ 𝐃𝐚𝐭𝐞 : ${tanggal(new Date())}
│♛ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎 」 
│♛ 𝐍𝐚𝐦𝐞 : ${pushname !== undefined ? pushname : '-'}
│♛ 𝐒𝐭𝐚𝐭𝐮𝐬 : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
│♛ 𝐋𝐢𝐦𝐢𝐭 : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
│♛ 𝐋𝐢𝐦𝐢𝐭 𝐆𝐚𝐦𝐞 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
│♛ 𝐁𝐚𝐥𝐚𝐧𝐜𝐞 : ${getBalance(sender, balance)}
│♛ 𝐑𝐨𝐥𝐞 : ${role}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔 」 
│♔ ${prefix}menu
│♔ ${prefix}infobot
│♔ ${prefix}donate
│♔ ${prefix}dashboard
│♔ ${prefix}owner
│♔ ${prefix}cekdrive
│♔ ${prefix}cekbandwidth
│♔ ${prefix}cekpremium
│♔ ${prefix}listpremium
│♔ ${prefix}listsewa
│♔ ${prefix}speed
│♔ ${prefix}runtime
│♔ ${prefix}listbahasa${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐒𝐓𝐈𝐂𝐊𝐄𝐑/𝐓𝐎𝐎𝐋𝐒 」 
│♘ ${prefix}sticker
│♘ ${prefix}qc
│♘ ${prefix}xquote
│♘ ${prefix}stickerwm
│♘ ${prefix}smeme
│♘ ${prefix}toimg
│♘ ${prefix}ttp
│♘ ${prefix}attp
│♘ ${prefix}emojimix
│♘ ${prefix}ai
│♘ ${prefix}aiimg
│♘ ${prefix}aidraw
│♘ ${prefix}chatgpt
│♘ ${prefix}nuliskiri
│♘ ${prefix}nuliskanan
│♘ ${prefix}foliokiri
│♘ ${prefix}foliokanan
│♘ ${prefix}say
│♘ ${prefix}translate${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒 𝐂𝐇𝐀𝐓𝐒 」 
│♔ ${prefix}menfess
│♔ ${prefix}confess
│♔ ${prefix}balasmenfess
│♔ ${prefix}tolakmenfess
│♔ ${prefix}stopmenfess
│♔ ${prefix}anonymous
│♔ ${prefix}start
│♔ ${prefix}next
│♔ ${prefix}stop
│♔ ${prefix}sendprofile${petik}


╰──┤𝐃𝐢𝐭𝐳𝐳𝐳 ]├─❒

╭──❒「 𝐒𝐓𝐎𝐑𝐄 𝐌𝐄𝐍𝐔 」
│⚜ ${prefix}list
│⚜ ${prefix}addlist
│⚜ ${prefix}dellist
│⚜ ${prefix}update
│⚜ ${prefix}jeda
│⚜ ${prefix}tambah
│⚜ ${prefix}kurang
│⚜ ${prefix}kali
│⚜ ${prefix}bagi
│⚜ ${prefix}delsetdone
│⚜ ${prefix}changedone
│⚜ ${prefix}setdone
│⚜ ${prefix}delsetproses
│⚜ ${prefix}changeproses
│⚜ ${prefix}setproses
│⚜ proses < reply chat >
│⚜ done < reply chat >${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒
 
╭──❒「 𝐑𝐏𝐆 𝐆𝐀𝐌𝐄 」
│♽ ${prefix}inventory
│♽ ${prefix}mining
│♽ ${prefix}buy 
│♽ ${prefix}sell
│♽ ${prefix}heal
│♽ ${prefix}hunt
│♽ ${prefix}adventure
│♽ ${prefix}luckyday
│♽ ${prefix}killslime
│♽ ${prefix}killgoblin
│♽ ${prefix}killdevil
│♽ ${prefix}killbehemoth
│♽ ${prefix}killdemon
│♽ ${prefix}killdemonking
│♽ ${prefix}joinrpg
│♽ ${prefix}sellikan
│♽ ${prefix}sellbesi
│♽ ${prefix}sellemas
│♽ ${prefix}jelajah
│♽ ${prefix}mancing
│♽ ${prefix}jualikan
│♽ ${prefix}jualcoal
│♽ ${prefix}lebur
│♽ ${prefix}jualstone
│♽ ${prefix}jualingot
│♽ ${prefix}jualkayu
│♽ ${prefix}nebang
│♽ ${prefix}goplanet
│♽ ${prefix}jualbahankimia${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳 ]├─❒

╭──❒「 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 」
│♲ ${prefix}play
│♲ ${prefix}ytmp3
│♲ ${prefix}ytmp4
│♲ ${prefix}instagram
│♲ ${prefix}igphoto
│♲ ${prefix}igvideo
│♲ ${prefix}igreels
│♲ ${prefix}tiktok
│♲ ${prefix}tiktoknowm
│♲ ${prefix}tiktokaudio
│♲ ${prefix}mediafire
│♲ ${prefix}gitclone${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐆𝐑𝐔𝐏 𝐌𝐄𝐍𝐔 」
│○ ${prefix}autoaigc
│○ ${prefix}afk
│○ ${prefix}welcome
│○ ${prefix}left
│○ ${prefix}pppanjanggc
│○ ${prefix}setopen
│○ ${prefix}changesetopen
│○ ${prefix}delsetopen
│○ ${prefix}setclose
│○ ${prefix}changesetclose
│○ ${prefix}delsetclose
│○ ${prefix}setwelcome
│○ ${prefix}changewelcome
│○ ${prefix}delsetwelcome
│○ ${prefix}setleft
│○ ${prefix}changeleft
│○ ${prefix}delsetleft
│○ ${prefix}linkgc
│○ ${prefix}setppgc
│○ ${prefix}setppgc2 
│○ ${prefix}setnamegc
│○ ${prefix}setdesc
│○ ${prefix}antilink
│○ ${prefix}antiwame
│○ ${prefix}antilink2
│○ ${prefix}antiwame2
│○ ${prefix}open
│○ ${prefix}close
│○ ${prefix}add
│○ ${prefix}kick
│○ ${prefix}promote
│○ ${prefix}demote
│○ ${prefix}revoke
│○ ${prefix}hidetag
│○ ${prefix}checksewa${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔 」
│○ ${prefix}tebakgambar
│○ ${prefix}tebakbendera
│○ ${prefix}tebakkalimat
│○ ${prefix}tebaksiapa
│○ ${prefix}tebakkimia
│○ ${prefix}tebaklirik
│○ ${prefix}tebaktebakan
│○ ${prefix}tekateki
│○ ${prefix}susunkata
│○ ${prefix}tictactoe
│○ ${prefix}delttt
│○ ${prefix}casino
│○ ${prefix}delcasino${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔 」
│○ ${prefix}lirik
│○ ${prefix}grupwa
│○ ${prefix}pinterest
│○ ${prefix}ytsearch${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐄𝐍𝐔 」
│○ ${prefix}cecan
│○ ${prefix}cogan
│○ ${prefix}waifu${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 𝐌𝐄𝐍𝐔 」
│○ ${prefix}topglobal
│○ ${prefix}toplocal
│○ ${prefix}buylimit
│○ ${prefix}buyglimit
│○ ${prefix}transfer
│○ ${prefix}limit
│○ ${prefix}balance${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐒𝐓𝐎𝐑𝐀𝐆𝐄 」
│○ ${prefix}addstik
│○ ${prefix}addvn
│○ ${prefix}addimg
│○ ${prefix}addvid
│○ ${prefix}liststik
│○ ${prefix}listvn
│○ ${prefix}listimg
│○ ${prefix}listvid${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐁𝐀𝐈𝐋𝐄𝐘𝐒 」
│○ ${prefix}fitnah
│○ ${prefix}nowa
│○ ${prefix}getquoted
│○ ${prefix}fakehidetag
│○ ${prefix}react
│○ ${prefix}setcmd
│○ ${prefix}delcmd${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 」
│○ ${prefix}autoaipc
│○ ${prefix}autoread
│○ ${prefix}autobio
│○ ${prefix}antidelete
│○ ${prefix}antiviewonce
│○ ${prefix}autorespond
│○ ${prefix}anticall
│○ ${prefix}autoblok212
│○ ${prefix}join
│○ ${prefix}left
│○ ${prefix}self
│○ ${prefix}public
│○ ${prefix}setppbot2
│○ ${prefix}setppbot
│○ ${prefix}broadcast
│○ ${prefix}bcimg
│○ ${prefix}bcstik
│○ ${prefix}bcvn
│○ ${prefix}bcvideo
│○ ${prefix}bcsewa
│○ ${prefix}addpremium
│○ ${prefix}delpremium
│○ ${prefix}addsewa
│○ ${prefix}delsewa${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐀𝐒𝐔𝐏𝐀𝐍 𝐌𝐄𝐍𝐔 」
│○ ${prefix}chika
│○ ${prefix}delvira
│○ ${prefix}ayu
│○ ${prefix}bunga
│○ ${prefix}aura
│○ ${prefix}nisa
│○ ${prefix}ziva
│○ ${prefix}yana
│○ ${prefix}viona
│○ ${prefix}syania
│○ ${prefix}riri
│○ ${prefix}syifa
│○ ${prefix}mama_gina
│○ ${prefix}alcakenya
│○ ${prefix}mangayutri
│○ ${prefix}rikagusriani
│○ ${prefix}asupan
│○ ${prefix}bocil
│○ ${prefix}geayubi
│○ ${prefix}santuy
│○ ${prefix}ukhty
│○ ${prefix}syifa${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭─❒ 「 𝐍𝐒𝐅𝐖 𝐌𝐄𝐍𝐔 」
│○ ${prefix}ahegao
│○ ${prefix}anal
│○ ${prefix}avatar2
│○ ${prefix}baka
│○ ${prefix}bdsm
│○ ${prefix}bj
│○ ${prefix}blowjob
│○ ${prefix}boobs
│○ ${prefix}classic
│○ ${prefix}cuckold
│○ ${prefix}cuddle
│○ ${prefix}cum
│○ ${prefix}cumarts
│○ ${prefix}cumsluts
│○ ${prefix}ero
│○ ${prefix}erofeet
│○ ${prefix}erokemonomimi
│○ ${prefix}erokitsune
│○ ${prefix}eroneko
│○ ${prefix}eroyuri
│○ ${prefix}feed
│○ ${prefix}feet
│○ ${prefix}feetgif
│○ ${prefix}femdom
│○ ${prefix}foot
│○ ${prefix}foxgirl
│○ ${prefix}futanari
│○ ${prefix}gangbang
│○ ${prefix}girl-solo
│○ ${prefix}girl-solo-gif
│○ ${prefix}glasses
│○ ${prefix}hentai
│○ ${prefix}hentai
│○ ${prefix}hentai-gif
│○ ${prefix}holo
│○ ${prefix}holo2
│○ ${prefix}holoero
│○ ${prefix}hug
│○ ${prefix}jahy
│○ ${prefix}kemonomimi
│○ ${prefix}kemonomimi2
│○ ${prefix}keta
│○ ${prefix}kiss
│○ ${prefix}kitsune
│○ ${prefix}kuni
│○ ${prefix}lesbian
│○ ${prefix}lizard
│○ ${prefix}masturbation
│○ ${prefix}meowi
│○ ${prefix}neko
│○ ${prefix}neko-gif
│○ ${prefix}neko-sfw
│○ ${prefix}neko2
│○ ${prefix}nsfw-neko
│○ ${prefix}orgy
│○ ${prefix}panties
│○ ${prefix}pat
│○ ${prefix}poke
│○ ${prefix}pussyart
│○ ${prefix}pussywankgif
│○ ${prefix}slap
│○ ${prefix}smug
│○ ${prefix}spank
│○ ${prefix}tentacles
│○ ${prefix}thighs
│○ ${prefix}tickle
│○ ${prefix}tits
│○ ${prefix}trap
│○ ${prefix}woof
│○ ${prefix}yuri
│○ ${prefix}zettai
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒

╭──❒「 𝐓𝐄𝐗𝐓 𝐏𝐑𝐎 𝐌𝐄𝐍𝐔 」
│○ ${prefix}halloween2
│○ ${prefix}horror
│○ ${prefix}game8bit
│○ ${prefix}layered
│○ ${prefix}glitch2
│○ ${prefix}coolg
│○ ${prefix}coolwg
│○ ${prefix}realistic
│○ ${prefix}gtiktok
│○ ${prefix}stone
│○ ${prefix}marvel
│○ ${prefix}marvel2
│○ ${prefix}pornhub
│○ ${prefix}avengers
│○ ${prefix}metalr
│○ ${prefix}metalg
│○ ${prefix}metalg2
│○ ${prefix}halloween2
│○ ${prefix}lion
│○ ${prefix}wolf_bw
│○ ${prefix}wolf_g
│○ ${prefix}ninja
│○ ${prefix}3dsteel
│○ ${prefix}horror2
│○ ${prefix}lava
│○ ${prefix}bagel
│○ ${prefix}blackpink
│○ ${prefix}rainbow2
│○ ${prefix}water_pipe
│○ ${prefix}halloween
│○ ${prefix}sketch
│○ ${prefix}sircuit
│○ ${prefix}discovery
│○ ${prefix}metallic2
│○ ${prefix}fiction
│○ ${prefix}demon
│○ ${prefix}transformer
│○ ${prefix}berry
│○ ${prefix}thunder
│○ ${prefix}magma
│○ ${prefix}3dstone
│○ ${prefix}neon
│○ ${prefix}glitch
│○ ${prefix}harry_potter
│○ ${prefix}embossed
│○ ${prefix}broken
│○ ${prefix}papercut
│○ ${prefix}gradient
│○ ${prefix}glossy
│○ ${prefix}watercolor
│○ ${prefix}multicolor
│○ ${prefix}neon_devil
│○ ${prefix}underwater
│○ ${prefix}bear
│○ ${prefix}wonderfulg
│○ ${prefix}christmas
│○ ${prefix}neon_light
│○ ${prefix}snow
│○ ${prefix}cloudsky
│○ ${prefix}luxury2
│○ ${prefix}gradient2
│○ ${prefix}summer
│○ ${prefix}writing
│○ ${prefix}engraved
│○ ${prefix}summery
│○ ${prefix}3dglue
│○ ${prefix}metaldark
│○ ${prefix}neonlight
│○ ${prefix}oscar
│○ ${prefix}minion
│○ ${prefix}holographic
│○ ${prefix}purple
│○ ${prefix}glossyb
│○ ${prefix}deluxe2
│○ ${prefix}glossyc
│○ ${prefix}fabric
│○ ${prefix}neonc
│○ ${prefix}newyear
│○ ${prefix}newyear2
│○ ${prefix}metals
│○ ${prefix}xmas
│○ ${prefix}blood
│○ ${prefix}darkg
│○ ${prefix}joker
│○ ${prefix}wicker
│○ ${prefix}natural
│○ ${prefix}firework
│○ ${prefix}skeleton
│○ ${prefix}balloon
│○ ${prefix}balloon2
│○ ${prefix}balloon3
│○ ${prefix}balloon4
│○ ${prefix}balloon5
│○ ${prefix}balloon6
│○ ${prefix}balloon7
│○ ${prefix}steel
│○ ${prefix}gloss
│○ ${prefix}denim
│○ ${prefix}decorate
│○ ${prefix}decorate2
│○ ${prefix}peridot
│○ ${prefix}rock
│○ ${prefix}glass
│○ ${prefix}glass2
│○ ${prefix}glass3
│○ ${prefix}glass4
│○ ${prefix}glass5
│○ ${prefix}glass6
│○ ${prefix}glass7
│○ ${prefix}glass8
│○ ${prefix}captain_as2
│○ ${prefix}robot
│○ ${prefix}equalizer
│○ ${prefix}toxic
│○ ${prefix}sparkling
│○ ${prefix}sparkling2
│○ ${prefix}sparkling3
│○ ${prefix}sparkling4
│○ ${prefix}sparkling5
│○ ${prefix}sparkling6
│○ ${prefix}sparkling7
│○ ${prefix}decorative
│○ ${prefix}chocolate
│○ ${prefix}strawberry
│○ ${prefix}koifish
│○ ${prefix}bread
│○ ${prefix}matrix
│○ ${prefix}blood2
│○ ${prefix}neonligth2
│○ ${prefix}thunder2
│○ ${prefix}3dbox
│○ ${prefix}neon2
│○ ${prefix}roadw
│○ ${prefix}bokeh
│○ ${prefix}gneon
│○ ${prefix}advanced
│○ ${prefix}dropwater
│○ ${prefix}wall
│○ ${prefix}chrismast
│○ ${prefix}honey
│○ ${prefix}drug
│○ ${prefix}marble
│○ ${prefix}marble2
│○ ${prefix}ice
│○ ${prefix}juice
│○ ${prefix}rusty
│○ ${prefix}abstra
│○ ${prefix}biscuit
│○ ${prefix}wood
│○ ${prefix}scifi
│○ ${prefix}metalr
│○ ${prefix}purpleg
│○ ${prefix}shiny 
│○ ${prefix}jewelry
│○ ${prefix}jewelry2
│○ ${prefix}jewelry3
│○ ${prefix}jewelry4
│○ ${prefix}jewelry5
│○ ${prefix}jewelry6
│○ ${prefix}jewelry7
│○ ${prefix}jewelry8
│○ ${prefix}metalh
│○ ${prefix}golden
│○ ${prefix}glitter
│○ ${prefix}glitter2
│○ ${prefix}glitter3
│○ ${prefix}glitter4
│○ ${prefix}glitter5
│○ ${prefix}glitter6
│○ ${prefix}glitter7
│○ ${prefix}metale
│○ ${prefix}carbon
│○ ${prefix}candy
│○ ${prefix}metalb
│○ ${prefix}gemb
│○ ${prefix}3dchrome
│○ ${prefix}metalb2
│○ ${prefix}metalg
│○ ${prefix}metalg${petik}
╰──┤𝐃𝐢𝐭𝐳𝐳𝐳├─❒
           ⟪ 𝐒𝐔𝐃𝐀𝐇 𝐇𝐀𝐁𝐈𝐒 𝐓𝐎𝐃 ⟫ 
    ⳼┈───━───༺༻────━──┈⳹
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${6285871074034} (Aditzzz)`
}

exports.sewanya = `Untuk List Sewa ubah sendiri di folder command, file help.js 👌 baris ke 521`