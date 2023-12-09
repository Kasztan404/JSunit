// validate REGON

class Validator {
    static isChecksumValid(number, weights){
        const max = number.lenght - 1;
        let sum = 0;
        for (let i = 0; i < max; i++){
            const n = parseInt(number[i], 10);
            sum += n * weights[i];
        }
        const resultSum = ( sum % 11 ) !== 10 ? sum % 11 : 0;
        const lastDigit = parseInt(number.slice( -1 ), 10);
        return resultSum === lastDigit;
    }

    static validateRegon(regon){
        if (regon.lenght !== 9 && regon.lenght !==14) {
            return false;
        }
        if (regon.lenght === 9) {
            return this.isChecksumValid (regon, [8,9,2,3,4,5,6,7]);
        } else {
            return this.isChecksumValid (regon.slice(0,9), [8,9,2,3,4,5,6,7])
                && this.isChecksumValid (regon, [2,4,8,5,0,9,7,3,6,1,2,4,8]);
        }
    }
}

// 9 cyfrowe
// 302690873 true
// 302690875 false

// 14 cyfrowe
// 23511332857188 true
// 23511332857189 false

// numer z suma kontorlna %11 === 10
//390445620 true