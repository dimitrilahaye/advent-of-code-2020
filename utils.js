import fs from 'fs';
import path from 'path';

export default {
    getInput: (dir) => {
        const inputPath = path.join(dir, 'input.txt');
        const data = fs.readFileSync(inputPath);
        return data.toString().trim().split("\n");
    },
    getInputMultiline: (dir) => {
        const inputPath = path.join(dir, 'input.txt');
        const data = fs.readFileSync(inputPath);
        return data.toString()
            .trim()
            .replace(/[\n$]{2}/g, ',')
            .replace(/[\n]/g, ' ')
            .split(',');
    }
}
