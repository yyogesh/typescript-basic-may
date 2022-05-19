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