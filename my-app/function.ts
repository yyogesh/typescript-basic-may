function addNumbers(a: number, b: number): number {
    return a + b;
}

addNumbers(1, 2);

export const addStrings = (str1: string, str2: string = ""): string =>
    `${str1} ${str2}`;


export const format = (title: string, param: string | number): string =>
    `${title} ${param}`;


format('title', "abc");
format('title', 10);

export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
};

const fetchData = (url: string): Promise<string> => Promise.resolve("Data");

function introduce(salutation: string, ...name: string[]): string {
    return `${salutation} ${name.join(" ")}`;
}

console.log(introduce('Mr', 'John', 'Smith'));


function getName(user: { first: string, last: string } | undefined): string {
    return `${user?.first ?? "first"} ${user?.last ?? "last"}`
}

console.log(getName({ first: "abc", last: "xyz" }));

function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback();
}

console.log(printToFile('test', () => console.log('done')));


const arr = [1, 2, 3, 4]
arr.map(item => item * 2); //[2, 4, 6, 8]

function arrayMutate(numbers: number[]): number[] {
    return numbers.map(item => item * 2);
}

function arrayMutate1(numbers: number[], mutate: (v: number) => number): number[] {
    return numbers.map(mutate);
}

console.log(arrayMutate1([1, 2, 3], (v) => v * 2));


type MutateFunction = (v: number) => number;

function arrayMutate2(numbers: number[], mutate: MutateFunction): number[] {
    return numbers.map(mutate);
}

const myNewMutateFunction: MutateFunction = (v: number) => v * 100;


function createAdder(num: number): (val: number) => number {
    return (val: number) => val + num;
}

createAdder(10)(20);
