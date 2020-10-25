exports.handler = function(event ,context ,callback){
    const msgList = [
        "ねーねー。",
        "きいてるー？？",
        "はなそーよー",
        "大好きだよ",
        "愛してるよー！",
        "すき……",
        "ちゅっちゅ！！",
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
        "ねぇ、会いたいよー……",
    ]
    callback(null,{
        statusCode: 200,
        body: JSON.stringify({
            id: 0,
            message: msgList[Math.floor( Math.random()* msgList.length )],
        })
    });
}

