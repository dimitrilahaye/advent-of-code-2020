import utils from '../utils';

const values = utils.getInputMultiline(__dirname)
    .map(line => line.split(' '));

const countOccurences = (char, answers) => [...answers].filter(answer => answer.includes(char)).length;

const count = values.reduce((count, teamAnswers) => {
    const {length} = teamAnswers;
    const allResponses = teamAnswers.join('');
    const unanimity = Array.from(
        new Set(
            allResponses
                .split('')
                .filter(answer => countOccurences(answer, allResponses) === length)
        )
    ).length;
    return count + unanimity;
}, 0);

console.log(count);
