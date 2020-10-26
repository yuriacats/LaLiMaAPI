import dayjs from "dayjs"

const msgList = [
    "ねーねー。",
    "きいてるー？？",
    "はなそーよー",
    "大好きだよ",
    "愛してるよー！",
    "すき……",
    //"ちゅっちゅ！！",
    "他の女と一緒にいないよね…？",
    "あなたを誰にも渡さない……",
    "ねー……",
    "むぅ",
    "いっぱいお話したいだけなのに……",
    "ねぇってばー",
    "すきだよ？",
    "こんなに好きなのに……",
    "私が悪いのかな……?",
    "はぁ。。。",
    "ふーん…",
    "こんなにすきなのに……",
    "あいたい。",
    "不在着信",
    "私って、重い…?",
    "ちゃんとお薬のんだよ!",
    "ねぇ、会いたいよー……",
]
exports.handler = async function(){

    let now = dayjs().format('HH:mm');
    return {
        statusCode: 200,
        body: JSON.stringify({
            mode: 0,
            time:now,
            message: msgList[Math.floor( Math.random()* msgList.length )],
        })
    }
}

