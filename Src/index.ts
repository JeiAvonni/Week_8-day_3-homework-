

// function sayHello(_name:string):void {

// console.log('Hello there, ${name}. How goes it?')
// }


// sayHello('JeiAvonni')


// ------ NoImplicitAny ------ //
//Rcommended: true

// function NoImplicitAny(name): void{
//     console.log('Hey there, name')
// }


// ------ noImplicitReturns ------ //
// Recommended: true

// function NoImplicitReturns(id: string | number): unknown{

//     if (typeof id === 'number'){
//         return id
//     }

//     /// return 123
//     }
// }


// ------ noUnusedLocals ------ //
// Recommended: true

// function noUnusedLocals(id: number):void {
//     let unused = 5
//     console.log(id)
// }


// ------ noUnusedParameters ------ //
// Recommended: true
// function noUnusedParameters (id: number): void {
//     console.log('Hey there')
// }


// ------ StrictNullChecks ------ //
// Recommended: true
// function StrictNullChecks(id: number): void {
//     console.log('The value is:' id)
// }

// StrictNullChecks(null)

// ------ AllowUnreachableCode ------ //
// Rcommended: false

// function AllowUnreachableCode(id: number): number {

//     return idof (typeof id === 'number'){
//         console.log('This is my id', id)
//     }



// ------ noImplicitOverride ------ //
// Recommended: true

// class Parent{

//     doSomething():string{
//         return 'Heyy there how are you doing today'
//     }
// }


// class Child extends Parent{

//     doSomething():string{
//         return 'Idk how about you, the weather is nice today'
//     }
// }

// ------ PRETEND THIS IS THE TOP OF THE FILE ------ //



import { Circle, Square, Triangle} from './shapes';


let myCircle = new Circle(5)
console.log(myCircle.calculateArea())


let mySquare = new Square(10)
console.log(mySquare.calculateArea())


let myTriangle = new Triangle(10)
console.log(myTriangle.calculateArea())