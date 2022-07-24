function error(message: string): never{
    throw new Error(message);
}

function fail() {
    return error("failed");
}

function infiniteLoop(): never {
    while(true){

    }
}

let a: string = "hello";
declare let b: string | number;

if(typeof a !== 'string') {
    a; // a: never
}

type Indexable<T> = T extends string ? T & { [index: string]: any } :never;

// const c: Indexable<{}> = '';