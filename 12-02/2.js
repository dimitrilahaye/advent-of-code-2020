import utils from '../utils';

const values = utils.getInput(__dirname);

const buildPasswordPolicy = (line) => {
    const idx = line.match(/(\d+)-(\d+)/g)[0].split('-');
    const criteria = line.match(/[a-z]:/)[0].replace(':', '');
    const password = line.match(/[a-z]{2,}/);
    return {
        min: +idx[0] - 1,
        max: +idx[1] - 1,
        letter: criteria,
        password: password[0]
    };
}
const checkLetterPosition = ({min, max, letter, password}) => {
    const positions = [password[min], password[max]];
    return positions[0] !== positions[1] && (positions[0] === letter || positions[1] === letter);
}
let total = 0;
values.forEach(line => {
    const policy = buildPasswordPolicy(line);
    checkLetterPosition(policy) && total++;
});

console.log(total);

