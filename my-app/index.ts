let userName: string = "Abc";
let userName1 = "Abc";
let userName2;

let hasLoggedIn: boolean = true;

userName += " XYZ"
let myRegx: RegExp = /foo/;

console.log(userName);

const name1: string[] = ["Abc", "XYZ"];
const name2: string[] = userName.split("");

const myValue: Array<number> = [1, 2];
const myValue1: number[] = [1, 2];

interface Person {
    name: string;
    age: number;
    hobbies?: string[];
}

const myPerson: Person = {
    name: 'abc',
    age: 12
}

const myPerson1: Person = {
    name: 'abc',
    age: 10,
    hobbies: ['Sports', 'Cooking']
}

const ids: { [key: number]: string } = {
    10: "a",
    20: 'b',
    // name: 'ac'
}

interface IDType {
    [key: number]: string;
}

const ids1: IDType = {
    10: "a",
    20: 'b',
}


const ids2: Record<number, string> = {
    10: "a",
    20: 'b',
}

for (let i = 0; i < 10; i++) { }

const out: number[] = [4, 5, 6].map((v) => v * 10);

const out1: string[] = [4, 5, 6].map((v) => `${v * 10}`);


