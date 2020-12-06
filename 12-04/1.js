import utils from "../utils";

const values = utils.getInputMultiline(__dirname);
let passports = values
    .map(l => l.match(/\w+:.*/gm))
    .map((_passport) => _passport[0]);

const mandatoryFields = [
    'ecl:',
    'pid:',
    'eyr:',
    'hcl:',
    'byr:',
    'iyr:',
    'hgt:',
];
const valid = passports.filter(passport => {
    return mandatoryFields.every(key => passport.includes(key));
});
console.log(valid.length);
