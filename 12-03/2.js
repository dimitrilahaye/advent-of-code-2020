import utils from '../utils';

const values = utils.getInput(__dirname);

let forrest = values.map((line) => line.split(''));
let clonedForrest = forrest.map(arr => [...arr]);
let x = 0, y = 0;
let slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
];

const move = (r, d) => {
    x += r;
    y += d;
    const canIGoDown = clonedForrest.length >= y + 1;
    if (canIGoDown) {
        let repeatPattern = Math.floor(x / (clonedForrest[y].length - 1));
        let shouldIRepeatPattern = repeatPattern > 0;
        if (shouldIRepeatPattern) {
            clonedForrest[y] = clonedForrest[y].concat(...Array(repeatPattern).fill(forrest[y]));
        }
    }
    return canIGoDown;
}

const trees = Array(slopes.length).fill(0);

slopes.forEach(([right, down], i) => {
    forrest = values.map((line) => line.split(''));
    clonedForrest = forrest.map(arr => [...arr]);
    x = 0;
    y = 0;
    while (move(right, down)) {
        let position = clonedForrest[y][x];
        switch (position) {
            case '.':
                clonedForrest[y][x] = 'O';
                break;
            case '#':
                trees[i]++;
                clonedForrest[y][x] = 'X';
                break;
        }
    }
});

console.log(trees.reduce((c, v) => c * v));
