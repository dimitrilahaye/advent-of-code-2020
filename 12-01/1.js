import utils from '../utils';

const values = utils.getInput(__dirname);

let val1 = 0;
let val2 = 0;

values.some((value, index, array) => {
    let clonedArray = [...array];
    clonedArray.splice(index, 1);
    const i = clonedArray.findIndex(a => +a + +value === 2020);
    if (i > -1) {
        val1 = +value;
        val2 = +clonedArray[i];
        return true;
    }
    return false;
});

console.log(val1 * val2);
