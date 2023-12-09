// class with method to validate NIP

class Validator {
    static validateNIP(nip) {
        // udues myślnik i niałe znaki
        nip = nip.replace(/[-\s]/g,'');

        // wagi dla poszczególnych cyfr:
        const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];

        //Suma cyfr pomnożonych przez wagi:
        let sum = 0;

        //Usuwamy opcjonalny prefiks kraju, pozostawiając 10 cyfr:
        nip.slice(-10);
        for (let i = 0; i < 9; i++) {
            const n = parseInt(nip[i], 10);
            sum += n * weights[i];
        }
        
        const lastDigit = parseInt(nip.slice(-1), 10);
        return (sum % 11) === lastDigit;
    }
}

//true
// 785-173-69-92
// 785 173 69 92
// 7851736992
// PL1785-173-69-92
// pl1785-173-93-92

//bledne:
// 123-456-78-90
// 785-173-69-95