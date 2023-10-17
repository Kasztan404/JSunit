
describe('Unit test for Task3', () => {

    describe('Check valid data', () => {
        it('2 arrays of integer', () => {
            expect(outerJoin([1,2,3,4,5],[4,5,6,7,8])).to.deep.equal([1,2,3,6,7,8]);
        });
        it('2 the same arrays of integer', () => {
            expect(outerJoin([1,2,3],[3,2,1])).to.be.an.instanceof(Array).and.lengthOf(0);
        });
        it('2 empty arrays', () => {
            expect(outerJoin([],[])).to.be.an.instanceof(Array).and.lengthOf(0);
        });
        it('1 empty arrays', () => {
            expect(outerJoin([1,2,3],[])).to.deep.equal([1,2,3]);
        });
    });

    describe('Check error handling', () => {
        it('2 string', () => {
            expect( () => { outerJoin('string1','2string')}).to.throw('Invalid parameters!');
        });
        it('2 int', () => {
            expect( () => { outerJoin(1, 2)}).to.throw('Invalid parameters!');
        });
        it('empty', () => {
            expect( () => { outerJoin()}).to.throw('Invalid parameters!');
        });
    });
});