import utils from '../utils';

    const values = utils.getInput(__dirname);

    let forrest = values.map((line) => line.split(''));
    let clonedForrest = forrest.map(arr => [...arr]);
    let x = 0, y = 0, trees = 0;

    const move = () => {
        x += 3;
        y += 1;
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
    while (move()) {
        let position = clonedForrest[y][x];
        switch (position) {
            case '.':
                clonedForrest[y][x] = 'O';
                break;
            case '#':
                trees++;
                clonedForrest[y][x] = 'X';
                break;
        }
    }

    // console.log(clonedForrest.map((line) => line.join('')).join('\n'));
    console.log('trees: ', trees);
