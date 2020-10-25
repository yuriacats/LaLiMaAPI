const assert = require('assert');
const target = require('../src/api/Chat')

describe('Array',()=>{
    describe('#indexOf()',() =>{
        it('指定された値が見つからない場合は-1を返します。',()=>{
            assert.equal([1,2,3,].indexOf(4),-1)
        })
        it('テストコード2個目のテスト',() => {
            assert.equal([1,2,3,].indexOf(2),1)
        })
    })
})