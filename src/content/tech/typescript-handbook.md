---
title: "Typescript Handbook"
category: "tech"
type: "book"
categories:
  - technology
  - typescript
  - web development
pubDate: 2025-11-23
description: "The TypeScript Handbook"
heroImageLight: "/images/tech/calm-technology-light.png"
heroImageDark: "/images/tech/calm-technology-dark.png"
draft: true
---

## ℹ TypeScript for JavaScript Programmers

### Types by Inference

```ts
let helloWorld = "Hello World";
// let helloWorld: sring
```

### Defining Types

```ts
interface User {
  name: string;
  id: number;
}
 
const user: User = {
  username: "Hayes",
/* ❌ TypeScript Error:
   * Object literal may only specify known properties.
   * Property 'username' does not exist in type 'User'.
   */
  id: 0,
};
```

### Composing Types
```ts
// Unions
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

### Structural Type System (or Duck Typing)
> In a structural type system, if two objects have the same shape, they are considered to be of the same type.

```ts
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```



---

## 1️⃣ The Basics

### Static type-checking
> A type is the concept of describing which values can be passed to fn and which will crash. JavaScript only truly provides dynamic typing - running the code to see what happens.
The alternative is to use a static type system to make predictions about what the code is expected to do before it runs.

```ts
const message = "hello!";
 
message();
//❌ TypeScript Error:
//This expression is not callable.
//Type 'String' has no call signatures.
```

### Non-exception Failures

#### Property that doesn't exist

```ts
const user = {
  name: "Daniel",
  age: 26,
};
user.location; 
//JS: returns undefined
//TS: Error : Property 'location' does not exist on type '{ name: string; age: number; }'.
```

#### Typos
```ts
const announcement = "Hello World!";
 
// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
 
// We probably meant to write this...
announcement.toLocaleLowerCase();
```

#### Uncalled Functions
```ts
function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;
Operator '<' cannot be applied to types '() => number' and 'number'.
}
```

#### Basic Logic Errors
```ts
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}
```

### Types for Tooling

> TypeScript can be leveraged for editing code too, and the core type-checker can provide error messages and code completion as you type in the editor. That's part of what people often refer to when they talk about tooling in TypeScript.

> An editor that supports TypeScript can deliver "quick fixes" to automatically fix errors, refactorings to easily re-organize code, and useful navigation features for jumping to definitions of a variable, or finding all references to a given variable.  

### **tsc**, the TypeScript compiler

> tsc hello.ts -> type-checking + compiles to hello.js

### Emitting with Errors

> TypeScript still emits JavaScript even when errors occur because it assumes you know what you're doing, but you can enable noEmitOnError to prevent any output when errors are present.

```ts
tsc --noEmitOnError hello.ts
```

### Explicit Types

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
```

> It's best not to add annotations when the type system would end up inferring the same type anyway.

### Erased Types

> Type annotations aren't part of JavaScript (or ECMAScript to be pedantic), so there really aren't any browsers or other runtimes that can just run TypeScript unmodified. That's why TypeScript needs a compiler in the first place - it needs some way to strip out or transform any TypeScript-specific code so that you can run it. Most TypeScript-specific code gets erased away.

### Downleveling

>TypeScript has the ability to rewrite code from newer versions of ECMAScript to older ones such as ECMAScript 3 or ECMAScript 5 (a.k.a. ES5). This process of moving from a newer or "higher" version of ECMAScript down to an older or "lower" one is sometimes called downleveling.

> By default TypeScript targets ES5, an extremely old version of ECMAScript. We could have chosen something a little bit more recent by using the target option. Running with **tsc --target es2015 hello.ts** changes TypeScript to target ECMAScript 2015, meaning code should be able to run wherever ECMAScript 2015 is supported.

### Strictness

> TypeScript offers both a relaxed, opt-in type-checking mode suitable for gradual migration from JavaScript, and a stricter mode activated through strictness flags. The **strict** flag in the CLI, or **"strict": true** in a **tsconfig.json** toggles them all on simultaneously, but we can opt out of them individually. The two biggest ones you should know about are **noImplicitAny** and **strictNullChecks**.
---

## 2️⃣ Everyday Types

### - The primitives: **string**, **number**, and **boolean**

### - Arrays (number[], string[], Array\<number> etc)

### - **any**

```ts
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

> When you don't specify a type, and TypeScript can't infer it from context, the compiler will typically default to **any**.
> You usually want to avoid this, though, because any isn't type-checked. Use the compiler flag **noImplicitAny** to flag any implicit any as an error.

### Type Annotations on Variables

```ts
let myName: string = "Alice";
```

> In most cases, though, this isn't needed. Wherever possible, TypeScript tries to automatically infer the types in your code. 

### Functions

```ts
// Parameter and Return type annotation
function greet(name: string): string {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

> Much like variable type annotations, you usually don't need a return type annotation because TypeScript will infer the function's return type based on its return statements. The type annotation in the above example doesn't change anything. Some codebases will explicitly specify a return type for documentation purposes, to prevent accidental changes, or just for personal preference.

#### Anonymous function & Contextual Typing
```ts
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});
```

### Object Types

```ts
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
//❌ 'obj.last' is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
 
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
```

### Union Types
```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
```
> **Narrowing** occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.

### Type Aliases

> A type alias is a name for any type. The syntax for a type alias is:

```ts
type Point = {
  x: number;
  y: number;
};
 
 type ID = number | string;
```

### Interfaces

> An interface declaration is another way to name an object type:

```ts
interface Point {
  x: number;
  y: number;
}
```

#### Differences Between Type Aliases and Interfaces

> Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

| Aspect                 | interface                            | type                                       |
| ---------------------- | ------------------------------------ | ------------------------------------------ |
| Extension / héritage   | `extends` pour étendre une interface | Peut étendre via intersections (`&`)       |
| Fusion déclarative     | Oui (les interfaces se « mergent »)  | Non (une même déclaration écrase l'autre)  |
| Alias de types         | Non                                  | Oui (peut représenter unions, primitives…) |
| Usage recommandé       | Définir la forme d'un objet / classe | Combiner types, unions, primitives, etc.   |
| Flexibilité            | Plus orientée objets et structures   | Plus général et polyvalent                 |
| Implement dans classes | Oui (`implements`)                   | Oui (`implements`)                         |


### Type Assertions

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents "impossible" coercions like:

```ts
const x = "hello" as number;
//❌ Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this 
//was intentional, convert the expression to 'unknown' first.
```

Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to any (or unknown), then to the desired type:

```ts
const a = expr as any as T;
```

### Literal Types

```ts
let changingString = "Hello World";
changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString;
      
let changingString: string
 
const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;
      
const constantString: "Hello World"
```

```ts
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```

#### Literal Inference

When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later.

```ts
declare function handleRequest(url: string, method: "GET" | "POST"): void;
 
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
//❌ Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
```
There are two ways to work around this.

1. You can change the inference by adding a type assertion in either location:

```ts
// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");
```

Change 1 means "I intend for req.method to always have the literal type "GET"", preventing the possible assignment of "GUESS" to that field after. Change 2 means "I know for other reasons that req.method has the value "GET"".

2. You can use as const to convert the entire object to be type literals:

```ts
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
```

The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.


### **Null** or **Undefined**

#### strictNullChecks off
With strictNullChecks off, values that might be null or undefined can still be accessed normally, and the values null and undefined can be assigned to a property of any type. This is similar to how languages without null checks (e.g. C#, Java) behave. The lack of checking for these values tends to be a major source of bugs; we always recommend people turn strictNullChecks on if it's practical to do so in their codebase.

#### trictNullChecks on
With strictNullChecks on, when a value is null or undefined, you will need to test for those values before using methods or properties on that value. Just like checking for undefined before using an optional property, we can use narrowing to check for values that might be null:

```ts
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```

#### Non-null Assertion Operator (Postfix !)

```ts
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

### Enums

> Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants. Unlike most TypeScript features, this is not a type-level addition to JavaScript but something added to the language and runtime. Because of this, it's a feature which you should know exists, but maybe hold off on using unless you are sure.

### Less Common Primitives

- bigint
```ts
// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);
 
// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;
```

- symbol
```ts
const firstName = Symbol("name");
const secondName = Symbol("name");
 
if (firstName === secondName) {
This comparison appears to be unintentional because the types 'typeof firstName' and 'typeof secondName' have no overlap.
  // Can't ever happen
}
```

## 3️⃣ Narrowing

```ts
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```

### Control flow analysis
```ts
function example() {
  let x: string | number | boolean;
 
  x = Math.random() < 0.5;
 
  console.log(x);
        //let x: boolean     
 
  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);
    //let x: string
               
  } else {
    x = 100;
    console.log(x);
    // let x: number
  }
 
  return x;
        
//let x: string | number
}
```

### Using type predicates

To define a user-defined type guard, we simply need to define a function whose return type is a type predicate:

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

**pet is Fish** is our type predicate in this example. A predicate takes the form **parameterName is Type**, where **parameterName** must be the name of a parameter from the current function signature.

### Discriminated unions

```ts
interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
                      //(parameter) shape: Circle
  }
}
```

When every type in a union contains a common property with literal types, TypeScript considers that to be a **discriminated union**, and can narrow out the members of the union.

### Summary
| Concept                 | Qu'est-ce que c'est ?               | Usage idéal                            |
| ----------------------- | ----------------------------------- | -------------------------------------- |
| **Type guard**          | Tout moyen d'affiner un type        | Tests simples dans un bloc             |
| **Type predicate**      | Fonction retournant `param is Type` | Logique de type complexe, réutilisable |
| **Discriminated union** | Union de types avec un champ commun | Modèles de données structurés et sûrs  |

### The **never** type

When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, TypeScript will use a never type to represent a state which shouldn't exist.

## 4️⃣ More on functions

### Generic functions

```ts
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);
```

#### Inference 

```ts
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
 
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
```

#### Constraints

```ts
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
 
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);
// ❌ Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
```
