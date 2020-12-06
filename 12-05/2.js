import utils from '../utils';

const values = utils.getInput(__dirname);
const rows = [0, 127], columns = [0, 7];
const getLowerHalf = (range) => [range[0], Math.floor(((range[1] - range[0]) / 2) + range[0])];
const getUpperHalf = (range) => [Math.ceil(((range[1] - range[0]) / 2) + range[0]), range[1]];
const halves = {
    F: getLowerHalf, // lower half
    B: getUpperHalf, // upper half
    L: getLowerHalf, // lower half
    R: getUpperHalf, // upper half
}
const getRow = (pass) => {
    return pass.split('').slice(0, 7).reduce((r, v) => halves[v](r), [...rows])[0];
};
const getColumn = (pass) => {
    return pass.split('').slice(-3).reduce((c, v) => halves[v](c), [...columns])[0];
};
const getId = (pass) => getRow(pass) * 8 + getColumn(pass);
const ids = values.map(val => getId(val)).sort((a, b) => a - b);
let i = 0;
const check = () => ids[i + 1] - ids[i] === 1;
while (check()) {
    i++;
}
console.log(ids[i] + 1);
