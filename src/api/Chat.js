exports.handler = function(event ,context ,callback){
let msg="Hello,LaLiMaAPI";
    callback(null,{
        statusCode: 200,
        body: JSON.stringify({
            foo: msg,
            bar: 'Goodbye, world',
        })
    });
}

