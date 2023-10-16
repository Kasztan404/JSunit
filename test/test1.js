
describe('Unit tests for Task1:',() => {

    describe('arraySum(array:integer)', () => {
        it('Should add all values in array (integer)', () => {
            expect(arraySum([1,2,3,4,5,6,7,8,9,10,0])).to.deep.equal(55);
        });
    }); 

    describe('arraySum(array:float)', () => {    
        it('Should add all values in array (float)', () => {
            expect(arraySum([1.17,2.3,3.91,-4.12,-5.79])).to.deep.equal(-2.53);
        });
    });

    describe('arraySum(array:empty)', () => {
        it("Should return 0", () => {
            expect(arraySum([])).to.deep.equal(0);
        });
    }); 

    describe('arraySum error handling', () => {
        it("Should return error not array", () => {
            expect(()=>{arraySum('table');}).to.throw("It is not an array!");
        });
        it("Should return error array with string", () => {
            expect(()=>{arraySum([0,'a',1]);}).to.throw("It is not an array of numbers!");
        });
    }); 
   
});

