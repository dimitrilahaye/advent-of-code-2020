import utils from '../utils';

const parser = (bag) => {
    const matches = bag.matchAll(/\d ([a-z]+)\s([a-z]+)/g);
    const contained = [];
    for (const match of matches) {
        contained.push({
            number: match[0].match(/\d/)[0],
            bag: match[0].match((/([a-z]+)\s([a-z]+)/))[0]
        });
    }
    return {
        bag: bag.match(/([a-z]+)\s([a-z]+)/)[0],
        contained
    };
}

const values = utils.getInput(__dirname)
    .map(parser);

let superBags = ['shiny gold'];
let possiblesSuperBags = [];

const getPossibles = (values) => {
    const possibles = values.filter(bag => {
        return bag.contained.some(contained => superBags.includes(contained.bag));
    });
    const currentSuperBags = possibles.reduce((names, abag) => {
        return [...names, abag.bag];
    }, []);
    if (!!currentSuperBags.length) {
        possiblesSuperBags.push(...currentSuperBags);
        superBags = currentSuperBags;
        return true;
    }
    return false;
}

while (getPossibles(values)) {}

console.log(Array.from(new Set(possiblesSuperBags)).length);
