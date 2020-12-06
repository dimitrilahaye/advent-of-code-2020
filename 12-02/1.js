import utils from '../utils';

const values = utils.getInput(__dirname);

const buildPasswordPolicy = (line) => {
    const range = line.match(/(\d+)-(\d+)/g)[0].split('-');
    const criteria = line.match(/[a-z]:/)[0].replace(':', '');
    const password = line.match(/[a-z]{2,}/);
    return {
        min: +range[0],
        max: +range[1],
        letter: criteria,
        password: password[0]
    };
}
const countLetter = ({letter, password}) => {
    const regex = new RegExp(letter, 'g');
    return (password.match(regex) || []).length;
}
let total = 0;
values.forEach(line => {
    const policy = buildPasswordPolicy(line);
    const count = countLetter(policy);
    (count >= policy.min && count <= policy.max) && total++;
});

console.log(total);

