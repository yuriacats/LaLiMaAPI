exports.handler = function(event ,context ,callback){
let msg="Hello,LaLiMaAPI";
    callback(null,{
        statusCode: 200,
        body:msg
    });
}

