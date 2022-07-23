console.log(Symbol('foo') == Symbol("foo")); // false

const sym = Symbol();

const obj = {
    [sym]: "value",
};

// obj["sym"] - 접근 불가능
obj[sym]

