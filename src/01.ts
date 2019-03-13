//1
function factorial(n: number): number {
    return n ? n * factorial(n - 1) : 1;
}
console.log("1", factorial(5));

//2
function multiply(...numbers:number[]):number {
    return numbers.length ? numbers.reduce((a:number, b:number) => a * b) : 0;
}
console.log("2.1", multiply(1,2,3));
console.log("2.2", multiply());

//3.1
function reverseString(str:string):string {
    let res: string = "",
        stringLength: number = str.length;

    for (let i:number = stringLength - 1; i >=0; i--) {
        res += str[i];
    }
        
    return res;
}
console.log("3.1", reverseString("test"));

//3.2
function reverseString2(str:string):string {
    return str.split("").reverse().join("");
}
console.log("3.2", reverseString("hello"));

//4
interface Admin {
    field: string; 
    stores: string;
    type?: string;
    required: boolean;
    defaults: string;
}

let admin:Admin[] = [
    {
        field: "name",
        stores: "имя админа",
        type: "string",
        required: true,
        defaults: "none"
    },
    {
        field: "email",
        stores: "email админа",
        type: "string",
        required: true,
        defaults: "none"
    },
    {
        field: "password",
        stores: "password админа",
        type: "string",
        required: true,
        defaults: "none"
    },
    {
        field: "type",
        stores: "type админа",
        type: "string",
        required: false,
        defaults: "admin"
    }
]