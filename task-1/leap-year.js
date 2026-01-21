import promptSync from 'prompt-sync';
const prompt = promptSync();

const year = Number(prompt(`Please enter a year: `));

if (year <= 0 || year >= 9999 || !Number.isInteger(year)) {
    console.log(`Please enter a valid year.`);
} else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + ` is a leap year`);
} else {
    console.log(year + ` is not a leap year.`);
}
