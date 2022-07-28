// class => object
// { mark: 'mail', jade: 'mail' }
// { chloe: 'femaile', alex: 'male', anna: 'female' }

class Students {
    [index: string]: string;
}

const a = new Students();
a.mark = "male";
a.jade = "male";

console.log(a);

const b = new Students();
b.chloe = "femaile";
b.alex = "male";
b.anna = "female";

console.log(b)