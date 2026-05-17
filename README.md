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
| `18_let_hoisting.js` | `let` hoisting — accessing a `let` variable before declaration |
| `19_let_hoisting_block` | `let` block scoping — demonstrates `let` is scoped to the nearest block |

### Functions

| File | Description |
|------|-------------|
| `10_functions` | Basic function declaration and invocation (`greet`, `reuse`) |

### Assignments

| File | Description |
|------|-------------|
| `assignment.js` | Classic `var` vs `let` in loop with `setTimeout` — scope binding differences; also demonstrates `const` reassignment error |
| `20_let_const.js` | `let` vs `const` — reassignment behavior comparison |

## Chapter05_Literals

JavaScript literal types — values, strings, numbers, and template literals.

### Literals

| File | Description |
|------|-------------|
| `22_literal.js` | Basic literal values — string, boolean, number, null, undefined |
| `23_null_undefined.js` | `null` vs `undefined` — key differences and type coercion behavior |
| `26_Literal_Number_all.js` | Number types — integer, float, hex, octal, binary, BigInt, special numbers (Infinity, NaN) |
| `27_string.js` | String quotes — single vs double quotes and embedding |
| `28_template_literals.js` | Template literals — interpolation for URLs, Playwright locators, logging, JSON payloads |
| `29_Backtick_single_double.js` | String comparison — single quotes, double quotes, backticks, escaping, and tagged templates |

## Chapter06_Operators

JavaScript operators — assignment, arithmetic, comparison, logical, and more.

| File | Description |
|------|-------------|
| `30_operators.js` | Assignment operator (`=`) |
| `31_Arithmetic.js` | Arithmetic operators — `+`, `-`, `*`, `/` |
| `32_modulus_op.js` | Modulus operator (`%`) — remainder calculation and even/odd check |
| `33_expo_op.js` | Exponentiation operator (`**`) |
| `34.IQ.js` | Compound assignment operators — `+=`, `-=`, `*=`, `/=`, `%=` |
| `35_Comparison.js` | Comparison operators — `>`, `<`, `>=`, `<=` |
| `36_Comparison_strict_loose.js` | Strict (`===`) vs loose (`==`) comparison — type coercion examples |
| `37_IQ_Loose_Strict.js` | Loose vs strict gotchas — transitivity break, `null`/`undefined` coercion |
| `38_confusing_comparison.js` | Comprehensive guide to confusing comparisons — `==` vs `===` edge cases |
| `39_logical_operation.js` | Logical operators — `&&` (AND), `||` (OR), `!` (NOT) |
| `40_string_con_op.js` | String concatenation with `+=` |
| `41_ternary_op.js` | Ternary operator (`? :`) |
| `42_type_op.js` | `typeof` operator |
| `43_incre_decre_op.js` | Increment/decrement operators (`++`, `--`) |
| `44_Null_op.js` | Nullish coalescing operator (`??`) |
