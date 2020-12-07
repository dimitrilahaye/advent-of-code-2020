import utils from '../utils';

const parser = (bag) => {
    const matches = bag.matchAll(/\d ([a-z]+)\s([a-z]+)/g);
    const contained = [];
    for (const match of matches) {
        contained.push({
            number: +match[0].match(/\d/)[0],
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
const getBagByName = (bagName) => values.find(value => value.bag === bagName);
const processBags = (abag) => {
    if (!!abag.contained.length) {
        abag.contained = abag.contained.map(({number, bag}) => ({
            number,
            bag,
            contained: processBags(getBagByName(bag))
        }));
        return abag.contained;
    }
}
const countOneBag = (bag) => bag.number + bag.number * bag.contained.reduce((c, abag) => {
    if (abag.contained) {
        return c + countOneBag(abag);
    }
    return c + abag.number;
}, 0);
const countBagsFrom = (bagName) => processBags(getBagByName(bagName))
    .reduce((count, bag) => {
        count += countOneBag(bag);
        return count;
    }, 0);

console.log(countBagsFrom('shiny gold'));
