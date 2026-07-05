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
| `vs code Keyboard shortcut mac.md` | VS Code keyboard shortcuts reference for macOS |
| `vs code keyboard shortcut windows.md` | VS Code keyboard shortcuts reference for Windows |

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

## chapter05_literals

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

## ## Test_24th_may

JavaScript coding challenges covering identifier validation, test result processing, config merging, and more.

| File | Description |
|------|-------------|
| `Challenge_1.js` | Normalizes a label — trims, lowercases, replaces non-alphanumeric with `-`, prefixes `js-basic-` |
| `Challenge_2.js` | Validates JS identifiers — checks empty strings, reserved words, and valid pattern |
| `Challenge_3.js` | Score classification using if-else ladder (EXCELLENT / GOOD / NEEDS_PRACTICE / REVISIT) |
| `challenge_4.js` | Keyword-to-meaning lookup using an object map (node → runtime, v8 → engine, npm → package-manager) |
| `challenge_5.js` | Filters and deduplicates topics via alias mapping |
| `challenge_6.js` | Counts passing results by filtering strings containing "pass" |
| `challenge_7.js` | Summarizes results into total/passed/failed/skipped counts |
| `challenge_8.js` | Merges two config objects with spread operator and sets default retries |
| `challenge_9.js` | Builds a run label from suite name, environment, and build number |
| `challenge_10.js` | Finds the first critical-severity bug from an array |
| `challenge_11.js` | Flattens and summarizes a 2D test result matrix with failed case tracking |
| `Challenge_12.js` | Creates a sorted list of unique, normalized tags |
| `Challenge_13.js` | Readiness gate — returns "READY" only if all three boolean gates are true |
| `Challenge_14.js` | Builds a numbered checklist from non-empty trimmed items |
| `challenge_15.js` | Calculates weighted score as `(passed * 2) - failed` |

## Chapter09_UserInput

User input handling in Node.js using `readline` and `prompt-sync`.

| File | Description |
|------|-------------|
| `68_userinput.js` | User input via `readline` module — prompts for a number and checks even/odd |
| `69_Node_readline.js` | Commented-out readline example for even/odd check |
| `70_Prompt_Sync.js` | Commented-out prompt-sync (`prompt-sync` npm package) example |
| `Assignment.js` | Real-world if-else assignments — HTTP status codes, test pass/fail verdict, bug severity classifier, build health reporter, login lockout logic |

## Chapter10_loops

Looping constructs — `for`, `while`, `do-while`, and control flow with `continue`.

| File | Description |
|------|-------------|
| `71_for_loops.js` | Introduces the need for loops — repetitive `console.log` for numbers 1–10 |
| `72_For_loop.js` | Basic `for` loop — prints 0 to 5 |
| `73_For_loop2.js` | `for` loop with variable naming (`_1`) — prints 0 to 10 |
| `74_IQ.js` | `for` loop with commented-out infinite loop and conditional gift logic |
| `75_for_of_on_each.js` | Placeholder note linking `for...of` to arrays; `while` loop with attempt counter |
| `76_while.js` | `while` loop — retry attempts with counter and "Modi" repetition loop |
| `77_Do_While.js` | `do-while` loop — executes once even when condition is false |
| `78_Do_while.js` | `do-while` retry loop — runs at least once, up to 3 retries |
| `79_IQ.js` | `while` loop — descending countdown from 5 to 1 |
| `80_IQ.js` | `do-while` — decrementing loop that runs once since condition false |
| `81_IQ.js` | `for` loop with `continue` — skips iteration when `i === 1` |
| `82_IQ.js` | `do-while` vs `while` — demonstrates do-while always runs at least once |

## Chapter11_Arrays

Array creation, access, mutation, iteration, transformation, searching, and utility methods.

| File | Description |
|------|-------------|
| `83_Arrays.js` | Array literals — mixed types, index access, `undefined` for out-of-bounds |
| `84_Arrays.js` | Array constructors — `new Array()`, `Array.of()`, `Array.from()` |
| `85_Access_Arrays` | Index and `at()` access, modifying elements by index |
| `86_Arrays_Addings.js` | `push`, `pop`, `unshift`, `shift` — adding/removing from ends |
| `87_Adding_remove.js` | `splice` — insert, replace, and remove elements at any position |
| `88_Real_example.js` | Browser list manipulation — `pop`, `shift`, loop with condition |
| `89_searching.js` | `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`, `findLast`, `findLastIndex` |
| `90_Iterate.js` | Iteration — `for` loop, `for...of`, `forEach`, `for...in`, `entries()` |
| `91_transform_array.js` | `map`, `filter`, `reduce`, `flat` — transforming and aggregating arrays |
| `92_array.js` | `sort` — natural (lexicographic) vs numeric sorting with comparator |
| `93_Array_slicing.js` | `slice` (non-mutating) vs `splice` (mutating) — extracting and removing |
| `94_Concat_Array.js` | `concat`, spread operator (`...`), and `join` for strings |
| `95_array_checking.js` | `Array.isArray`, `every`, `some` — checking array contents and type |

## Chapter12_Functions

Function types, expressions, arrow functions, IIFE, default/rest parameters, closures, higher-order functions, and pure functions.

| File | Description |
|------|-------------|
| `96_Function.js` | Basic function definition and invocation (`greet`) |
| `97_Type1_Fn_Basic_Functions.js` | Type 1 — no param, no return (`greet`) |
| `98_Type2_Fn_With_Param_No_Return.js` | Type 2 — with param, no return (`greetByName`, `begger`) |
| `99_Type3_Fn_without_Param_Return_Type.js` | Type 3 — no param, with return (`goToRelativeHouse`) |
| `100_Type4_Fn_With_Param_With_Return.js` | Type 4 — with param and return (`sumOfTwoNumner`) |
| `101_Template_literal.js` | Function returning a template literal string |
| `102_Fn_Expression.js` | Function expressions vs declarations |
| `103_Arrow_Fn.js` | Arrow functions — concise syntax, implicit return |
| `104_Arrow_Fn_REAL.js` | Real-world arrow function — HTTP status code validation |
| `105_IIFE.js` | Immediately Invoked Function Expressions (IIFE) |
| `106_Default_Param_Fn..js` | Default parameters — retry config with defaults |
| `107_IQ.js` | Function with multiple params returning formatted string |
| `108_Rest_Param_Fn.js` | Rest parameters — capturing variable arguments |
| `109_IQ.js` | Function hoisting — calling `sayHi` before `const` declaration (TDZ error) |
| `110_Spead_IQ.js` | Spread operator with functions — passing arrays as arguments |
| `111_Scope._Fn.js` | Global vs local scope in functions |
| `112_IQ.js` | Nested function scope — inner accessing outer, but not vice versa |
| `113_Closure.js` | Basic closure — inner function captures outer `message` variable |
| `114_Closure.js` | Closure with counter — `increment`, `decrement`, `get` methods |
| `115_API_REAL_Closure.js` | Real-world closure — retry tracker with attempt limiting |
| `116_Higher_Order_Fn.js` | Higher-order function — `runWithLoggin` takes a test function as argument |
| `117_Pure_Function.js` | Pure vs impure functions — `calculatePassRate` vs `isPassing` with external dependency |

## Task_22nd_may

Coding tasks from 22nd May covering conditional logic and FizzBuzz.

| File | Description |
|------|-------------|
| `Task_22nd_may.js` | Triangle classifier (equilateral/isosceles/scalene) and FizzBuzz (1–100) |

## Chapter13_String

String methods — creation, properties, search, extraction, transformation, and a cheat sheet reference.

| File | Description |
|------|-------------|
| `118_Strings.js` | String quotes (single/double/backtick), template literals, multiline strings, `String()` conversion |
| `119_String_Properties.js` | `length`, bracket/index access, `at()`, `charAt()`, `charCodeAt()` |
| `120_Search_check_str.js` | `includes`, `startsWith`, `endsWith`, `indexOf`, `lastIndexOf`, `search()` with regex |
| `121_Substring.js` | `slice()` vs `substring()` — extracting parts of a string |
| `122_transfer_str.js` | `toUpperCase`, `toLowerCase`, `trim`, `replace`, `replaceAll`, `split`, `join`, `concat` |
| `123_sc.js` | String conversion — `toString()`, `Number()`, `parseInt()`, `parseFloat()` |
| `assgnment_3rdjune.js` | Palindrome checker — reverses a string and compares to original |
| `javascript_stringcheat_sheet.md` | Comprehensive cheat sheet — search, extract, transform, trim, replace, and misc methods |

## Chapter14_Objects

Objects — creation, properties, destructuring, spread, getter/setter methods, and real-world usage.

| File | Description |
|------|-------------|
| `124_Objects.js` | Object literal basics — key-value pairs, accessing properties |
| `125_Object_2.js` | Object with mixed value types — string, number, boolean, array, nested object |
| `126_Objects_Creation.js` | Object creation patterns — literal, `new Object()`, constructor function, `Object.create()` |
| `127_Objects_REAL.js` | Real-world user profile object — nested properties and methods |
| `128_Primitive_Ref.js` | Primitive vs reference types — value copy vs reference sharing |
| `129_Ob_Examples.js` | Browser profile object — browser name, version, engines, viewport settings |
| `130_IQ.js` | Reference mutation — modifying a shared object reference affects all references |
| `131_Object_Fn.js` | Methods inside objects — `this` keyword and function values as properties |
| `132_Obj_Decon.js` | Object destructuring — extracting properties into variables |
| `133_Spead.js` | Spread operator with objects — merging and cloning |
| `134_Objects_GET_SET_Methods.js` | Getter and setter methods — `get`/`set` syntax with computed property |
| `135_IQ.js` | Dynamic property access — bracket notation with variable keys |
| `136_Obj_REAL.js` | Real-world test config object — environment, browser, retries, timeouts |
| `137_Let_const_obj.js` | `const` with objects — reference immutability, properties can still change |

## Chapter15_2D_Array

Two-dimensional arrays — creation, iteration, transformation, and real-world tabular data handling.

| File | Description |
|------|-------------|
| `138_2D_Array.js` | 2D array literal — matrix creation and element access |
| `139_2d.js` | Nested loop iteration over a 2D array — printing rows and columns |
| `140_REAL.js` | Real-world test result matrix — iterating and printing with labels |
| `141_2d_Array_Fn.js` | 2D array functions — adding rows, transposing, mapping over elements |
| `142_IQ_Right_Pattern_Py.js` | Right-angle triangle pattern using nested loops |
| `testdata.csv` | CSV test data file used with 2D array processing |

## Chapter16_Callback

Callback functions — synchronous vs asynchronous callbacks, callback hell, and parameter passing patterns.

| File | Description |
|------|-------------|
| `143_Callback.js` | Basic callback — passing a function as an argument |
| `144_CB.js` | Callback with parameters — greeting function with callback |
| `145_CB_Fn.js` | Named callback functions — reusing defined functions as callbacks |
| `146_PW_CB.js` | Playwright-style callback — page action with callback |
| `147_JS_CB.js` | JavaScript array method callback — `forEach` with inline callback |
| `148_Sync_CB.js` | Synchronous callback — executed immediately in the call stack |
| `149_Async_CB.js` | Asynchronous callback — `setTimeout` delaying execution |
| `150_CB_Hell.js` | Callback hell — nested callbacks with `setTimeout` pyramid |
| `151_CB_Hell_20_Steps.js` | Deeply nested callback hell — 20-step sequential timeout chain |
| `152_CB_Parameter.js` | Passing parameters to callbacks — encapsulating data with closure |
| `153_CB_Return.js` | Returning a value from a callback — synchronous callback with return |

## Chapter17_Promise

Promise creation, chaining, error handling, and static methods for real-world async patterns.

| File | Description |
|------|-------------|
| `154_Promise.js` | Basic Promise — resolves with `"Pizza is delivered..."` on success or rejects on failure |
| `155_Promise_REAL_API.js` | Mock API Promise — resolves with `status: 200` and logs via `.then()` |
| `156_Promise_REAL_API_PART2.js` | Rejected Promise — simulates `"500 Error"` handled via `.catch()` |
| `157_finally.js` | Promise with `.finally()` — cleanup runs regardless of resolve or reject |
| `158_Call_Py_Problem.js` | Promise chain — sequential browser login flow (open, navigate, enter credentials, click) |
| `159_Promise_ALL.js` | `Promise.allSettled()` — collects results from mixed resolve/reject promises |
| `160_Promise_IQ.js` | Collection of Promise patterns — resolve/reject, chaining, `Promise.all()`, `Promise.allSettled()` for API checks |

## Chapter18_Async&Await

Async/await syntax for cleaner asynchronous code — sequential, parallel, error handling, and Playwright integration.

| File | Description |
|------|-------------|
| `161_Async.js` | `async` function with `await` on rejected promise — caught with try/catch and finally |
| `162_Aysnc_P2.js` | `async` function awaiting a resolved token value (`"abc123"`) |
| `163_PyODom.js` | Browser E2E flow with `async/await` — open browser, login, enter credentials (with commented `.then()` version) |
| `164_Async_Ex.js` | Basic `async` function returning `"Pass"` and a Playwright test for `playwright.dev` title |
| `165_AA_Parallel.js` | Parallel execution — three API calls (`Auth`, `User Creation`, `Support`) via `Promise.allSettled` |
| `165_AA_Seq.js` | Sequential execution — three API calls (`Login`, `Dashboard`, `Report`) with timing measurement |
| `166_IQ.js` | Sequential await — three resolved promises (`Opened browser`, `Clicked login`, `Verified dashboard`) |
| `167_ACLogin.js` | Playwright test — logs in as `standard_user`, asserts login button hidden, and checks page title |

## Chapter19_PlaywrightBasic

Basic Playwright test scripts for the TTACart demo application.

| File | Description |
|------|-------------|
| `tta_cart.spec.ts` | Login attempt with invalid credentials (`abc`/`sbsbsbs`) |
| `tta_cart_pass.spec.ts` | Login with valid credentials and assertions on the primary header |
| `tta_cart_login_purchasecomplete.spec.ts` | Complete E2E flow — login, add item to cart, and complete purchase |

## Chapter20_Export_Import

JavaScript ES6 module system — `import`/`export` patterns with named and default exports.

| File | Description |
|------|-------------|
| `01_EXPORT_IMPORT/168_EXPORT_IMPORT.js` | Importing named exports (`BASE_URL`, `formatTestName`) from `testutils.js` |
| `01_EXPORT_IMPORT/169_Utils.js` | Importing with aliases from multiple utility modules |
| `01_EXPORT_IMPORT/170_Logger.js` | Default import of a logger function |
| `01_EXPORT_IMPORT/utils.js` | Utility module with named exports |
| `01_EXPORT_IMPORT/testutils.js` | Test utility module with named exports |
| `01_EXPORT_IMPORT/logger.js` | Logger module with default export |

## Chapter21_Classes_and_Objects

Object-oriented programming with ES6 classes — constructors, methods, private fields, and static members.

| File | Description |
|------|-------------|
| `171_Class_Object.js` | Basic `Person` class with attributes and behaviours |
| `172_Class_Object2.js` | `Person` class with constructor that logs on instantiation |
| `173_Car.js` | `Car` class with parameterized constructor and `drive()` method |
| `174_REAL_Browser.js` | `TestCase` class — name, status, priority with display method |
| `175_IQ.js` | `Browser` class — launch, start, and browser management |
| `176_Private_Public.js` | Private fields (`#apiKey`) vs public fields |
| `177_Statis.js` | `Student` class with static fields and methods |
| `178_Statis.js` | `Person` class with static `nationality` field |

## Chapter22_Encapsulation

Data hiding using JavaScript private fields (`#`) with controlled access via getters.

| File | Description |
|------|-------------|
| `179_Ecap.js` | `BankAccount` — private `#balance` with `deposit`/`getBalance` methods |
| `180_REAK_EXAMPLE.js` | `Person` — hiding private children (`#child1`, `#child2`) with getter access |
| `181_Ecap_Car.js` | `Car` — private `#engine` field exposed via `getEngine()` |
| `182_ECap_Bank.js` | `ICICI` bank account — private `#balance` with deposit, withdraw, and getBalance |

## Chapter23_Inheritance

Class inheritance — single, multilevel, hierarchical, and real-world Page Object Model patterns.

| File | Description |
|------|-------------|
| `183_Single_Inheritance.js` | `BasePage` → `LoginPage` — single inheritance with `extends` |
| `184_SI_Example.js` | `Animal` → `Dog`/`Cat` — inheritance with method reuse |
| `185_Single_Inheritance_Con.js` | `BaseTest` → `APITest` — constructor/method inheritance |
| `186_IQ.js` | `BaseTest` → `UITest` — overriding `setup()` with `super` call |
| `187_IQ2.js` | `TestCase` → `UnitTest`/`IntegrationTest` — polymorphic `execute()` |
| `188_REAL_PageObject_Model.js` | Page Object Model — `BasePage` → `LoginPage` with `verify()` method |
| `189_Multiple_Inheritance.js` | Multiple inheritance simulation via mixins (F1 → F2 conflict) |
| `190_Multiple_Level_Inheritance.js` | Multilevel — `BasePage` → `AuthPage` → `AdminPage` with chained `super` |
| `191_Hierarchial_Inheritance.js` | Hierarchical — `Father` → `Son1`, `Son2` |

## Chapter24_Polymorphism

Polymorphism via method overriding.

| File | Description |
|------|-------------|
| `192_Method_Overriding.js` | `BaseTest` → `APIPage`/`UIPage` — overriding `setup()` for different behaviour |

## Chapter25_OOP_Interview_Questions

Object-oriented programming exercises covering common interview patterns.

| File | Description |
|------|-------------|
| `EX1.js` | `Bug` class — title/severity with display method |
| `EX2.js` | `Environment` — constructor with default params and `getURL()` |
| `EX3.js` | `User` — demonstrates `this` referring to the current object |
| `EX4.js` | `Counter` — method chaining with `return this` |

## Chapter26_Typescript

TypeScript fundamentals — primitive types, function annotations, arrays, and type inference.

| File | Description |
|------|-------------|
| `193_TS.js` | Plain JS before TypeScript — loosely typed `add` function |
| `194_TS_HelloWorld.js` | JS version of typed hello world |
| `194_TS_HelloWorld.ts` | First TypeScript — typed `testName` and `add_ts` with `: number` |
| `195_TS_Part1.ts` | Function with `void` return type annotation |
| `196_TS_Part2.ts` | Primitive types — `string`, `number`, `boolean`, `null`, `undefined` |
| `197_TS_Part2.ts` | `unknown` type and type narrowing with `typeof` |
| `198_Part3.ts` | Function annotations with `void` and `never` return types |
| `199_IQ.ts` | Typed functions — `buildEndpoint`, `isSuccessCode`, `logTestStep` |
| `200_IQ.ts` | Typed arrays — `number[]` with `filter` for failed HTTP codes |

## Chapter27_TypeScript_Interface

TypeScript interfaces — defining object shapes, optional properties, and readonly modifiers.

| File | Description |
|------|-------------|
| `201_IF.ts` | `TestCase` interface — typed object with id, name, status, duration |
| `202_IF_Part2.ts` | `APIResponse` interface — optional `headers` and `responseTime` |
| `203_IF_READONLY.ts` | `APIReponse` interface — `readonly statusCode` preventing mutation |
| `204_IF_READOnly.ts` | `Point` and `Data` interfaces — readonly properties and `readonly number[]` |
| `205_Interface.ts` | `Calculator` interface — method signatures in interface |
| `206_Hooks.ts` | `TestHook` interface — callable interface for beforeEach/afterEach hooks |
| `207_Bug REPORT.ts` | `BugReport` interface — bug tracking with id, title, severity, steps |
| `208_TestConfig.ts` | `TestConfig` interface — browser config with optional timeout and retries |
| `209_REAL_EXAMPLE.ts` | Interface inheritance — `LoginPage` extends `BasePage` |
| `210_Class_Interface.ts` | `Executable` interface — implemented by `TestCase` class |

## Chapter28_ENUM

TypeScript enums — named constants for test status, severity levels, browsers, and HTTP methods.

| File | Description |
|------|-------------|
| `211_ENUM.ts` | `TestStatus` enum — Pass, Fail, Skip, Pending, Blocked |
| `212_Enum_Fn.ts` | `SeverityLevels` enum — LOW to BLOCKING with severity check function |
| `213_ENUM.ts` | `Browser` enum — Chrome, Firefox, Safari, Edge with `launchBrowser` function |
| `214_API_.ts` | `HTTPMethod` enum — GET, POST, PUT, DELETE with `sendRequest` function |

## Chapter29_TypeScriptGeneric

TypeScript generics — reusable functions, generic classes, and typed API response wrappers.

| File | Description |
|------|-------------|
| `215_Generic.ts` | Generic function `getFirstResult<T>` — returns first element from typed array |
| `216_Generic_Class.ts` | `TestDataStorage<T>` — generic class with add, getFirst, getAll methods |
| `217_Generic_API_RESPONSE.ts` | `wrapResponse<T>` — wraps any data type with a status code |

## Chapter30_PRIVATE_PUBLIC_PROTECTED

TypeScript access modifiers — `public`, `private`, `protected`, `readonly`, and abstract classes.

| File | Description |
|------|-------------|
| `218_PPP.ts` | `APIClient` — public `baseURL`, private `apiKey`, protected `timeout` |
| `219_PageObjectModel.ts` | Page Object Model with protected `navigate` and private selectors |
| `220_READONLY.ts` | `PlaywrightConfig` — readonly properties for baseURL, timeout, retries |
| `221_Abstract_Class.ts` | `BaseTest` — abstract class with abstract `setup`, `execute`, `teardown` |

## Chapter31_Type_Overide_Decortors

TypeScript advanced features — type assertions, type aliases, method overriding, and decorators.

| File | Description |
|------|-------------|
| `222_Type_As.ts` | Type assertion — `unknown` cast to interface with `as` |
| `223_Type_Alias_As.ts` | Type alias assertion — `unknown` response cast to `UserResponse` |
| `224_Override.ts` | Method override — `LoginTest` overrides `nihit_ready` and `nihit_done` |
| `225_IQ.ts` | `override` keyword — `Pramod` overrides `home()` from `Father` |
| `226_Decorator.ts` | `@Log` decorator — logs method name and arguments |
| `227_Decortors_2.ts` | `@logged` decorator — wraps method with logging |
| `228_Multiple_Decor.ts` | Multiple decorators — stacked `@beforeSomething` and `@BeforeSomeSomeThing` |

## Chapter32_Playwright_Fundamental

Playwright fundamentals — test configuration, spec files, and project setup.

| File | Description |
|------|-------------|
| `tests/example.spec.ts` | Basic Playwright test spec |
| `playwright.config.ts` | Playwright configuration — browsers, reporters, timeouts |
