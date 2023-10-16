
describe('Unit tests for Task2:',() => {

    describe('unique(array:integer)', () => {
        it('Should return array with uniqie elements', () => {
            expect(unique([1, 2, 1, 3,123,1,2,3])).to.deep.equal([1, 2, 3, 123]);
        });
    }); 

    describe('unique(array int + string)', () => {    
        it('Should return array with uniqie elements', () => {
            expect(unique([1, '1' ,1, '1'])).to.deep.equal([1,'1']);
        });
    });

    describe('unique(array:string)', () => {
        it("Should return array with uniqie elements", () => {
            expect(unique(['Tomek','TOMEK','tomek','tom', 'Tomek','TOMEK','tomek','tom'])).to.deep.equal(['Tomek','TOMEK','tomek','tom']);
        });
    }); 

    describe('unique(array:empty)', () => {
        it("Should return empty array", () => {
            expect(unique([])).to.be.an.instanceof(Array).and.lengthOf(0);
        });
    }); 
   
    describe('unique error handling', () => {
        it("unique(integer)", () => { 
            expect( () => {unique(1)}).to.throw('Invalid parameter');
        });
        it("unique(string)", () => { 
            expect( () => {unique('string :)')}).to.throw('Invalid parameter');
        });
        it("unique(undefined)", () => { 
            expect( () => {unique('string :)')}).to.throw('Invalid parameter');
        });
    });
});

