import utils from '../utils';

const values = utils.getInput(__dirname);

let val1 = 0;
let val2 = 0;
let val3 = 0;

values.some((value, index, array) => {
    let clonedArray = [...array];
    clonedArray.splice(index, 1);
    return clonedArray.some((val) => {
        let v = +value + +val;
        const i = clonedArray.findIndex(a => {
            return +a + v === 2020;
        });
        if (i > -1) {
            val1 = +value;
            val2 = +val;
            val3 = +clonedArray[i];
            return true;
        }
        return false;
    });
});

console.log(val1 * val2 * val3);

