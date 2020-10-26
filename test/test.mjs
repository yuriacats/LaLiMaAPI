import hello from "../src/api/hello" ;
// import chat from "../src/api/chat";
import 'chai/register-assert';

describe('Array',()=>{
    describe('#indexOf()',() =>{
        it('指定された値が見つからない場合は-1を返します。',()=>{
            assert.equal([1,2,3,].indexOf(4),-1)
        })
        it('テストコード2個目のテスト',() => {
            assert.equal([1,2,3,].indexOf(2),1)
        })
        it('Hello.jsがきちんと動いているかのテスト',()=>{
            hello.handler(　(error,result)  => {
                assert.equal(result.body,"Hello World");
                assert.equal(result.statusCode,200);
            })
        })
        // it('Chat.jsのStatus確認',()=>{
        //     chat.handler( null ,context,(error,result) => {
        //         let resultObj=JSON.parse(result.body);
        //         assert.equal(result.statusCode,200);
        //         assert.equal(resultObj.id,0);
        //     })
        // })
    })
})