# Learn Playwright 2x

A hands-on project for learning Playwright automation and JavaScript fundamentals.

## Chapter01_Basics

Node.js basics with `console.log` examples — platform, architecture, and Node version info.

- `01basic.js` — Basic variable declaration and console logging (string, `process.platform`, `process.arch`, `process.version`)

## Chapter04_JavaScriptConcept

JavaScript core concepts covering variables, scoping, hoisting, and functions.

### Variables: `var` vs `let` vs `const`

| File | Description |
|------|-------------|
| `var_let_const.js` | Demonstrates redeclaration (`var`), reassignment, and scope leakage with `var` in loops |
| `11_var_explained.js` | `var` — function-scoped, can be re-declared within a function |
| `12_let.js` | `let` — block-scoped, reassignable variable (`retryCount`) |
| `13_const.js` | `const` — block-scoped, immutable binding (price/discount calculation) |

### Scoping

| File | Description |
|------|-------------|
| `14_var_function_scope.js` | Shows how `var` ignores block scope inside `if` and overwrites function-scoped variables |
| `15_let_function_scope.js` | Same structure but with `let` — block scope is respected, inner blocks have their own variable |

### Hoisting

| File | Description |
|------|-------------|
| `16_Hoisiting.js` | `var` hoisting — accessing a variable before declaration returns `undefined` |
| `17_Hoisting_function.js` | Hoisting inside a function — `var` is hoisted to the top of the function scope |

### Functions

| File | Description |
|------|-------------|
| `10_functions` | Basic function declaration and invocation (`greet`, `reuse`) |

### Assignments

| File | Description |
|------|-------------|
| `18_assignment.js` | Classic `var` vs `let` in loop with `setTimeout` — demonstrates scope binding differences |
