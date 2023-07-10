export const Greeter = (name: string) => `Hello ${name}`; 

export function add(a: number, b: number): number {
    console.log("Result:",a + b);
    return a + b;
  }


  export function subtract(a: number, b: number):number {
    console.log("Result:",a - b);
    return a - b;
}

export function multiply(a: number, b: number): number {
    console.log("Result:",a * b);
    return a * b;
}

export function divide(a: number, b: number): number {
    console.log("Result:",a / b);
    return a / b;
}