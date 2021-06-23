import scopedClassMaker from "../scopedClass";

const scopedClass = scopedClassMaker('rui-layout');

describe('类名处理函数测试', () => {
    it('scopedClass(1,2)=3', () => {
        expect(scopedClass(['1'], '2','3')).toEqual('rui-layout-1 2 3');
    });
});