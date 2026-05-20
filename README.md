# Learn Playwright 2x

A hands-on project for learning Playwright automation and JavaScript fundamentals.

## Chapter01_Basics

Node.js basics with `console.log` examples — platform, architecture, and Node version info.

| File | Description |
|------|-------------|
| `01basic.js` | Basic variable declaration and console logging (string, `process.platform`, `process.arch`, `process.version`) |
| `hotcode.js` | Function definition with loop execution (10,000 calls) |

## Chapter02_javascriptconcept

| File | Description |
|------|-------------|
| `js.js` | `var` declaration and reassignment demonstration |

## Chapter03_Identifiers_Literals

JavaScript identifier rules, naming conventions, and comments.

| File | Description |
|------|-------------|
| `06_identifiers_rules.js` | Valid identifier characters — `$`, `_`, letters, digits (not as first char), case sensitivity |
| `07_identifiers_part02.js` | Naming conventions — camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE |
| `08_comment.js` | Single-line (`//`) and multi-line (`/* */`) comments |
| `js_identifiers_rules.js` | Comprehensive guide to identifier rules, Unicode support, and naming conventions |

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
| `45_post_increment.js` | Post-increment — assignment happens before increment |
| `46_IQ_Increment.js` | Post-increment behavior — returns original value, then increments |
| `47_Advance_ID.js` | Advanced increment — combined pre/post increment expressions |
| `maximum_betn_two.js` | Maximum of two numbers using ternary operator |
| `maximum_betn_three.js` | Maximum of three numbers using nested ternary operator |

## Chapter07_if_else

Conditional branching with `if`, `else if`, and `else` statements.

| File | Description |
|------|-------------|
| `48_if_else.js` | Basic if-else for voting eligibility based on age |
| `49_ifelse_ifelse.js` | Else-if ladder for grade classification (A/B/C/D/F) by score |
| `50_real_ifelse.js` | Real-world nested if-else for role-based access control (admin/editor/viewer) |
| `51_api_ifelse` | API status code handling with if-else (200, 404) |
| `52_IQ_ifelse_ifelse.js` | Truthy/falsy values in if conditions — numbers, strings, objects, arrays |
| `53_ifelse_real.js` | Logical operators (`&&`) with if-else for login + account lock validation |
| `54_IQ.js` | Single-line `if` without braces — syntax and behavior |
| `55_IE.js` | Minimal `if (true)` statement |
| `56_IQ_EVEN_ODD.js` | Even/odd check using modulus operator |
| `57_grade.js` | Grade classification with else-if ladder based on marks |
| `58_leapyear.js` | Leap year determination with compound condition |

## Chapter08_Switch_statement

Conditional branching with `switch` statements.

| File | Description |
|------|-------------|
| `59_switch.js` | Basic switch-case for day-of-week mapping with `break` |
| `60_No_Break.js` | Fall-through behavior when `break` is omitted — executes all subsequent cases |
| `61_default.js` | Default case handling for out-of-range values |
| `62_realtime.js` | API response code handling (200, 404) with switch |
| `63_switchgroup.js` | Grouping multiple cases together (browser engine detection) |
| `64_IQ.js` | Fall-through from matching case through to default without breaks |
| `65_IQ2.js` | `switch(true)` pattern for range-based conditions (test score grading) |
| `66_IQ3.js` | Duplicate case labels — first matching case is used |
| `67_IQ4.js` | Strict comparison (`===`) behavior in switch — type matters |

## Chapter09_UserInput

User input handling in Node.js using `readline` and `prompt-sync`.

| File | Description |
|------|-------------|
| `68_userinput.js` | User input via `readline` module — prompts for a number and checks even/odd |
| `69_Node_readline.js` | Commented-out readline example for even/odd check |
| `70_Prompt_Sync.js` | Commented-out prompt-sync (`prompt-sync` npm package) example |
