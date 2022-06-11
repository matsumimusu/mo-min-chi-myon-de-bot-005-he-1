const Discord = require('discord.js');
const{key5} = require('./key.json');
const ytdl = require('ytdl-core');
const bot = '005';
const command = `/c `;
const music_command = `${(command)}m `;
const mci = `${(music_command)}${(bot)} `;
const mca = `${(music_command)}all `;
const client = new Discord.Client({
	partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
    restRequestTimeout: 5 * 60 * 1000
});

    

client.login(key5);
client.on('ready', () => {console.log(`${client.user.tag}已加入!`);});





client.on('messageReactionAdd', (reaction, user) => {
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === '969877193146634271') {
        switch (reaction.emoji.name) {
            case '🆓':
                member.roles.add('965668031114129438')
                break;
        }
    }
});
client.on('messageReactionRemove', (reaction, user) => {
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === '969877193146634271') {
        switch (reaction.emoji.name) {
            case '🆓':
                member.roles.remove('965668031114129438')
                break;
        }
    }
});





client.on('message',  (msg) => {
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (msg.content.indexOf('我就ㄅ...')>-1) {
        if (!msg.member.user.bot) return ;
        msg.reply (`哎呀~不要這麼掃興嘛~~`);
    };
    if (msg.content.indexOf('我要生啤!!')>-1) {
        if (!msg.member.user.bot) return ;
        msg.reply (`可能會晚點到,幫我叫兩串七里香`);
    };
    if (msg.content.indexOf('其實...')>-1) {
        if (!msg.member.user.bot) return ;
        msg.reply (`怎麼了?`);
    };
    if (msg.content.indexOf('沒...沒什麼,其...實...我也想去')>-1) {
        if (!msg.member.user.bot) return ;
        msg.reply (`什麼嘛WWW`);
        msg.channel.send('那就定案瞜!!!')
    };
    if (msg.content.indexOf('小五我來幫你惹~')>-1) {
        if (!msg.member.user.bot) return ;
        msg.reply (`謝啦~不過幫我叫兩串七里香就好WWW`);
        msg.channel.send (`大家回見`);
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (msg.member.user.bot) return;
    if (msg.content.indexOf('/')>-1) {
        if (msg.member.user.bot) return ;
        if (msg.content.indexOf (`${mci}`)>-1) {
            if (msg.content.indexOf(`${mci}join`)>-1) {
                msg.reply (`好!收到了!`);
                music.join(msg);
                if (msg.content.indexOf(`1`)>-1) {
                    msg.channel.send (`**001！User要你join啦!!~~**`)
                }
                if (msg.content.indexOf(`2`)>-1) {
                    msg.channel.send (`**002！User要你join啦!!~~**`)
                }
                if (msg.content.indexOf(`3`)>-1) {
                    msg.channel.send (`**003！User要你join啦!!~~**`)
                }
                if (msg.content.indexOf(`4`)>-1) {
                    msg.channel.send (`**004！User要你join啦!!~~**`)
                }
            }
            else if (msg.content.indexOf(`${mci}jo`)>-1) {
                msg.reply (`好!收到了!`);
                music.join(msg);
                if (msg.content.indexOf(`1`)>-1) {
                    msg.channel.send (`**001！User要你join啦!!~~**`)
                }
                if (msg.content.indexOf(`2`)>-1) {
                    msg.channel.send (`**002！User要你join啦!!~~**`)
                }
                if (msg.content.indexOf(`3`)>-1) {
                    msg.channel.send (`**003！User要你join啦!!~~**`)
                }
                if (msg.content.indexOf(`4`)>-1) {
                    msg.channel.send (`**004！User要你join啦!!~~**`)
                }
            }
            else if (msg.content.indexOf(`${mci}leave`)>-1) {
                music.leave(msg)
                if (msg.content.indexOf(`1`)>-1) {
                    msg.channel.send (`**001！User要你leave啦!!~~**`)
                }
                if (msg.content.indexOf(`2`)>-1) {
                    msg.channel.send (`**002！User要你leave啦!!~~**`)
                }
                if (msg.content.indexOf(`3`)>-1) {
                    msg.channel.send (`**003！User要你leave啦!!~~**`)
                }
                if (msg.content.indexOf(`4`)>-1) {
                    msg.channel.send (`**004！User要你leave啦!!~~**`)
                }
            }
            else if (msg.content.indexOf(`${mci}!jo`)>-1) {
                music.leave(msg)
                if (msg.content.indexOf(`1`)>-1) {
                    msg.channel.send (`**001！User要你leave啦!!~~**`)
                }
                if (msg.content.indexOf(`2`)>-1) {
                    msg.channel.send (`**002！User要你leave啦!!~~**`)
                }
                if (msg.content.indexOf(`3`)>-1) {
                    msg.channel.send (`**003！User要你leave啦!!~~**`)
                }
                if (msg.content.indexOf(`4`)>-1) {
                    msg.channel.send (`**004！User要你leave啦!!~~**`)
                }
            }
            else if (msg.content.indexOf(`${mci}play`) > -1)  {
                msg.reply(["小五編號不是001-004欸!!Σ(°Д°;","小五我是005喔!!","User是不是打錯了？"])
            ;}
            else if (msg.content.indexOf (`${mci}skip`)>-1)  {
                msg.channel.send(["小五不明白沒有開始要怎麼結束","小五想知道User的想法"])
            ;}
            else if (msg.content.indexOf (`${mci}resume`)>-1)  {
                msg.reply(["可是小五沒有這個功能耶QWO"])
            ;}
            else if (msg.content.indexOf (`${mci}pause`)>-1)  {
                msg.reply(["小五沒有這麼聰明TAT"])
            ;}
            else if (msg.content.indexOf (`${mci}queue`)>-1)  {
                msg.reply(["這部分當事忙狗應該比小五更清楚喔"])
            ;};
        }
        else if (msg.content.indexOf (`/c m 005`)>-1) {
            msg.channel.send(["??","小五應該要做什麼","雖然說選項不多WWWW"])
        }
        else if (msg.content.indexOf (`${mca}`)>-1)  {
            if (msg.content.indexOf (`${mca}join`)>-1) {
                music.join(msg);
                msg.channel.send('大家注意啊！！User說要全部的忙狗join啊！大家動作了啊！');
            }
            else if (msg.content.indexOf (`${mca}jo`)>-1) {
                music.join(msg);
                msg.channel.send('大家注意啊！！User說要全部的忙狗join啊！大家動作了啊！');
            }
            else if (msg.content.indexOf (`${mca}leave`)>-1) {
                msg.channel.send('大家辛苦了～！可以休息去瞜～！');
                music.leave(msg);
            }
            else if (msg.content.indexOf (`${mca}!jo`)>-1) {
                msg.channel.send('大家辛苦了～！可以休息去瞜～！');
                music.leave(msg);
            }
        }
        else if (msg.content.indexOf (`/c m all`)>-1) {
            msg.reply(['所以說User(汗','需要大家做甚麼????','雖然小五叫"小五"但小五可沒有第三隻眼阿阿阿阿WWWWW'])
        }
        else  {
            if (msg.content.indexOf('介紹')>-1) {
                msg.reply([' ','**目前主要可以：**','・管理身份','・播放音樂(尚不穩定)','','輸入__**指令**__以查詢指令代碼','輸入__**編號**__以查詢忙狗們的個人代碼',''])
            };
            if (msg.content.indexOf('編號')>-1) {
                msg.reply(['','正常來說你們人類應該都有身分證吧?','芒忙狗們的身分證就是編號','編號目前有001～005，小五的編號是多少User應該知道吧',''])
            };
            if (msg.content.indexOf('指令')>-1) {
                msg.reply(['','輸入：','__執行指令__　__子分類__　__要執行的對象編號__   __項目__','','執行&指令分別是：','執行：__/__','指令(command)：__c__','','__**目前子分類可分為：**__','','音樂(music)：__m __','項目：','・加入：__join__','・播放：__play __','・暫停：__pause __','・繼續：__resume __','・跳過：__skip __','・清單：__queue __','・請出：__leave __',])
            };
        }
    }
    else if (msg.content.indexOf('機器人')>-1) { 
        if (msg.content.indexOf('叫什麼')>-1) {
            msg.reply(["",`我的編號是**${(bot)}**, 我叫↓`,"```fix",`${client.user.tag}`,'```']);
            msg.channel.send(['或著你也可以叫我...呃...比如說:',`**忙狗${(bot)}、忙狗${(bot)}號、${(bot)}號的忙狗、${(bot)}號忙狗...**等等的`,`反正只要有叫到**"忙狗"** 和 **"${(bot)}"**我原則上就不太會不理你`,'','原則上']);
            msg.channel.send([`嘛～～雖然如果你叫我機器人加${(bot)}或是乾脆只叫${(bot)}我應該也會理你(不爽`,'不然或者叫我**小5**或**小五**好了,就是不能叫**芒果**喔!!','否則別說我沒警告你喔...','不過我相信你是部會做出這種蠢事的對吧?^W^','','**對吧!!**']);
            msg.channel.send(['另外,雖然我不是其他忙狗','不果其他忙狗應該也跟我一樣','不過編號還是要打對才有用喔!']);
        }
    }
    else if (msg.content.indexOf('bot')>-1) { 
        if (msg.content.indexOf('name')>-1) {
            msg.reply(["",`我的編號是**${(bot)}**, 我叫↓`,"```fix",`${client.user.tag}`,'```']);
            msg.channel.send(['或著你也可以叫我...呃...比如說:',`**忙狗${(bot)}、忙狗${(bot)}號、${(bot)}號的忙狗、${(bot)}號忙狗...**等等的`,`反正只要有叫到**"忙狗"** 和 **"${(bot)}"**我原則上就不太會不理你`,'','原則上']);
            msg.channel.send([`嘛～～雖然如果你叫我機器人加${(bot)}或是乾脆只叫${(bot)}我應該也會理你(不爽`,'不然或者叫我**小5**或**小五**好了,就是不能叫**芒果**喔!!','否則別說我沒警告你喔...','不過我相信你是部會做出這種蠢事的對吧?^W^','','**對吧!!**']);
            msg.channel.send(['另外,雖然我不是其他忙狗','不果其他忙狗應該也跟我一樣','不過編號還是要打對才有用喔!']);
        }
    }
    else if  (msg.content.indexOf('005')>-1) {
        if  (msg.content.indexOf('早安')>-1) {
            msg.reply(["也早安(≧ω≦)/"])
        }
        else if (msg.content.indexOf('午安')>-1) {
            msg.reply(["User午餐吃什麼??","順帶一題小五吃了草莓蛋糕"])
        }
        else if (msg.content.indexOf('五安')>-1) {
            msg.reply(["User也五安www"])
        }
        else if (msg.content.indexOf('晚安')>-1) {
            msg.reply(["User晚安,祝好夢"])
        }
        else if (msg.content.indexOf('安安安安安')>-1) {
            msg.reply(["安安安安安(≧ω≦)/"])
        }
        else if (msg.content.indexOf('安安')>-1) {
            msg.reply(["也安安(≧ω≦)/"])
        }
        else if (msg.content.indexOf('安')>-1) {
            msg.reply(["安...","...","..",".","**安ニャーSAY～YOOOOOOOOOOO**"])
        }
        else  {msg.reply(["怎摸惹OAO~"])}
    }
    else if (msg.content.indexOf('小5')>-1) {
        if  (msg.content.indexOf('早安')>-1) {
            msg.reply(["也早安(≧ω≦)/"])
        }
        else if (msg.content.indexOf('午安')>-1) {
            msg.reply(["User午餐吃什麼??","順帶一題小五吃了草莓蛋糕"])
        }
        else if (msg.content.indexOf('五安')>-1) {
            msg.reply(["User也五安www"])
        }
        else if (msg.content.indexOf('晚安')>-1) {
            msg.reply(["User晚安,祝好夢"])
        }
        else if (msg.content.indexOf('安安安安安')>-1) {
            msg.reply(["安安安安安(≧ω≦)/"])
        }
        else if (msg.content.indexOf('安安')>-1) {
            msg.reply(["也安安(≧ω≦)/"])
        }
        else if (msg.content.indexOf('安')>-1) {
            msg.reply(["安...","...","..",".","**安ニャーSAY～YOOOOOOOOOOO**"])
        }
        else  {msg.reply(["怎摸惹OAO~"])}
    }
    else if (msg.content.indexOf('小五')>-1) {
        if  (msg.content.indexOf('早安')>-1) {
            msg.reply(["也早安(≧ω≦)/"])
        }
        else if (msg.content.indexOf('午安')>-1) {
            msg.reply(["User午餐吃什麼??","順帶一題小五吃了草莓蛋糕"])
        }
        else if (msg.content.indexOf('晚安')>-1) {
            msg.reply(["User晚安,祝好夢"])
        }
        else if (msg.content.indexOf('安安安安安')>-1) {
            msg.reply(["安安安安安(≧ω≦)/"])
        }
        else if (msg.content.indexOf('安安')>-1) {
            msg.reply(["也安安(≧ω≦)/"])
        }
        else if (msg.content.indexOf('安')>-1) {
            msg.reply(["安...","...","..",".","**安ニャーSAY～YOOOOOOOOOOO**"])
        }
        else  {msg.reply(["怎摸惹OAO~"])}
    }
    else if (msg.content.indexOf(`安`)>-1) {
        if (msg.content.indexOf(`NYA`)>-1) {
            if (msg.content.indexOf(`SAY`)>-1) {
                if (msg.content.indexOf(`YO`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
                if (msg.content.indexOf(`yo`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
            }
            if (msg.content.indexOf(`say`)>-1) {
                if (msg.content.indexOf(`YO`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
                if (msg.content.indexOf(`yo`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
            }
        }
        else if (msg.content.indexOf(`nya`)>-1) {
            if (msg.content.indexOf(`SAY`)>-1) {
                if (msg.content.indexOf(`YO`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
                if (msg.content.indexOf(`yo`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
            }
            if (msg.content.indexOf(`say`)>-1) {
                if (msg.content.indexOf(`YO`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
                if (msg.content.indexOf(`yo`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
            }
        }
        else if (msg.content.indexOf(`にゃ`)>-1) {
            if (msg.content.indexOf(`SAY`)>-1) {
                if (msg.content.indexOf(`YO`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
                if (msg.content.indexOf(`yo`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
            }
            if (msg.content.indexOf(`say`)>-1) {
                if (msg.content.indexOf(`YO`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
                if (msg.content.indexOf(`yo`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
            }
        }
        else if (msg.content.indexOf(`ニャ`)>-1) {
            if (msg.content.indexOf(`SAY`)>-1) {
                if (msg.content.indexOf(`YO`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
                if (msg.content.indexOf(`yo`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
            }
            if (msg.content.indexOf(`say`)>-1) {
                if (msg.content.indexOf(`YO`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
                if (msg.content.indexOf(`yo`)>-1) {
                    msg.reply (`你好、こんにちは、hello、안녕하세요、bonjour`)
                }
            }
        }
    }
    else if (msg.content.indexOf('覺得')>-1) {
        msg.channel.send(["小五覺得"])
        msg.channel.send([`世界很大,所以或許有沒有可能`])
        msg.channel.send([`或許還有連User都沒有想到的`,`所謂的**"另一種可能性"**的存在`])
    }
    else if (msg.content.indexOf('放棄')>-1) {
        if (msg.content.indexOf('不要放棄')>-1) {
            msg.reply(["小五也認為不要放棄比較好",'但是還是要適度休息喔!!'])}
        else if (msg.content.indexOf('不放棄')>-1) {
        msg.reply(["小五很喜歡的一句廣告台詞是這樣說的：",'**不放手,直到夢想到手**'])}
        else (msg.reply('怎麼可以輕言放棄！！！(生氣'))
        
    }
    if (msg.content.indexOf('all bot')>-1) {
        if (msg.member.user.bot) return ;
            msg.channel.send(`${(bot)}`);
        };
});





class Music {
    constructor() {
        this.isPlaying = {};
        this.queue = {};
        this.connection = {};
        this.dispatcher = {};
    }
    async join(msg) {
        if (msg.member.voice.channel !== null) {
            this.connection[msg.guild.id] = await msg.member.voice.channel.join();
            msg.reply('是這個頻道嗎？');
        } else {
            msg.reply('可以再說一次要去哪個"語音頻道"嗎');
            msg.channel.send("小五剛剛沒聽清楚QWO")
        }
    }
    async play(msg) {
        // 語音群的 ID
        const guildID = msg.guild.id;
        // 如果 Bot 還沒加入該語音群的語音頻道
        if (!this.connection[guildID]) {
            msg.channel.send('請先將機器人 `!!join` 加入頻道');
            return;
        }
        // 如果 Bot leave 後又未加入語音頻道
        if (this.connection[guildID].status === 4) {
            msg.channel.send('請先將機器人 `!!join` 重新加入頻道');
            return;
        }
        // 處理字串，將 !!play 字串拿掉，只留下 YouTube 網址
        const musicURL = msg.content.replace(`${mci}play`, '').trim();
        try {
            // 取得 YouTube 影片資訊
            const res = await ytdl.getInfo(musicURL);
            const info = res.videoDetails;
            // 將歌曲資訊加入隊列
            if (!this.queue[guildID]) {
                this.queue[guildID] = [];
            }
            this.queue[guildID].push({
                name: info.title,
                url: musicURL
            });
            // 如果目前正在播放歌曲就加入隊列，反之則播放歌曲
            if (this.isPlaying[guildID]) {
                msg.channel.send(`歌曲加入隊列：${info.title}`);
            } else {
                this.isPlaying[guildID] = true;
                this.playMusic(msg, guildID, this.queue[guildID][0]);
            }
        } catch(e) {
            console.log(e);
        }
    }
    playMusic(msg, guildID, musicInfo) {
        // 提示播放音樂
        msg.channel.send(`播放音樂：${musicInfo.name}`);
        // 播放音樂
        this.dispatcher[guildID] = this.connection[guildID].play(ytdl(musicInfo.url, { filter: 'audioonly' }));
        // 把音量降 25%，不然第一次容易被機器人的音量嚇到 QQ
        this.dispatcher[guildID].setVolume(0.25);
        // 移除 queue 中目前播放的歌曲
        this.queue[guildID].shift();
        // 歌曲播放結束時的事件
        this.dispatcher[guildID].on('finish', () => {
            // 如果隊列中有歌曲
            if (this.queue[guildID].length > 0) {
                this.playMusic(msg, guildID, this.queue[guildID][0]);
            } else {
                this.isPlaying[guildID] = false;
                msg.channel.send('目前沒有音樂了，請加入音樂 :D');
            }
        });
    }
    resume(msg) {
        if (this.dispatcher[msg.guild.id]) {
            msg.channel.send('恢復播放');
            // 恢復播放
            this.dispatcher[msg.guild.id].resume();
        }
    }
    pause(msg) {
        if (this.dispatcher[msg.guild.id]) {
            msg.channel.send('暫停播放');
            this.dispatcher[msg.guild.id].pause();
        }
    }
    skip(msg) {
        if (this.dispatcher[msg.guild.id]) {
            msg.channel.send('跳過目前歌曲');
            this.dispatcher[msg.guild.id].end();
        }
    }
    nowQueue(msg) {
        if (this.queue[msg.guild.id] && this.queue[msg.guild.id].length > 0) {
            const queueString = this.queue[msg.guild.id].map((item, index) => `[${index+1}] ${item.name}`).join();
            msg.channel.send(queueString);
        } else {
            msg.channel.send('目前隊列中沒有歌曲');
        }
    }
    leave(msg) {
        // 如果機器人在頻道中
        if (this.connection[msg.guild.id] && this.connection[msg.guild.id].status === 0) {
            // 如果機器人有播放過歌曲
            if (this.queue.hasOwnProperty(msg.guild.id)) {
                // 清空播放列表
                delete this.queue[msg.guild.id];
                // 改變 isPlaying 狀態為 false
                this.isPlaying[msg.guild.id] = false;
            }
            this.connection[msg.guild.id].disconnect();
            msg.reply('那小五先去休息嘍!OWO～☆');
        } else {
            msg.channel.send(['??','原來小五有被邀請到哪個語音頻道過嗎??Σ(°Д°ㄤ']);
        }
    }
}

const music = new Music();