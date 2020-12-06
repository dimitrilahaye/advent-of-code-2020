import utils from '../utils';

const values = utils.getInputMultiline(__dirname).reduce((yess, line) =>
    yess + Array.from(
    new Set(line.trim().replaceAll(' ', '').split(''))
    ).join('').length, 0
);
console.log(values);
