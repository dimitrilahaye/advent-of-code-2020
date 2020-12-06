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

const byrValidator = (data) => {
    return /^\d{4}$/.test(data) && +data >= 1920 && +data <= 2002;
}
const iyrValidator = (data) => {
    return /^\d{4}$/.test(data) && +data >= 2010 && +data <= 2020;
}
const eyrValidator = (data) => {
    return /^\d{4}$/.test(data) && +data >= 2020 && +data <= 2030;
}
const hgtValidator = (data) => {
    if (!/(^\d*cm$)|(^\d*in$)/.test(data)) {
        return false;
    }
    if (/\d*cm/.test(data)) {
        data = data.replace('cm', '');
        return +data >= 150 && +data <= 193;
    }
    data = data.replace('in', '');
    return +data >= 59 && +data <= 76;
}
const hclValidator = (data) => {
    return /^#([0-9a-f]){6}$/.test(data);
}
const eclValidator = (data) => {
    return /(^amb$)|(^blu$)|(^brn$)|(^gry$)|(^grn$)|(^hzl$)|(^oth$)/.test(data);
}
const pidValidator = (data) => {
    return /^(\d{9})$/.test(data);
}
const validator = {
    byr: byrValidator,
    iyr: iyrValidator,
    eyr: eyrValidator,
    hgt: hgtValidator,
    hcl: hclValidator,
    ecl: eclValidator,
    pid: pidValidator,
};

const valid = passports.filter(passport => {
    if (mandatoryFields.some(key => !passport.includes(key))) {
        return false;
    }
    return passport.split(' ').every(field => {
        const [key, data] = field.split(':');
        if (validator[key]) {
            return validator[key](data.trim());
        }
        return true;
    });
});

console.log(valid.length);
