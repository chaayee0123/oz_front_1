// //문제: 아래의 코드에서 변수 myName과 message의 타입을 명시적으로 지정하세요.
// const myName: string = "Steve";
// const message:string = `Hello, ${myName}`;

// //문제: 아래의 코드에서 변수 n의 타입을 명시적으로 지정하세요.
// const n:number = 123;

// //문제: 아래의 코드에서 변수 isOpen과 isCompleted의 타입을 명시적으로 지정하세요.
// let isOpen:boolean = true;
// let isCompleted:boolean = false;

// //문제: 아래의 코드에서 변수 user의 타입을 명시적으로 지정하세요.
// let user: string | null = null;

// //문제: 아래의 코드에서 변수 someValue의 타입을 명시적으로 지정하세요.
// let someValue: any;
// someValue = false;
// someValue = "Hello";


function addnum(x: number, y:number): string {
    return `${x}${y}`;
}

addnum(10, 5)
//void 해당함수가 반환하는 값이 없다
//never 해당함수는 절대  