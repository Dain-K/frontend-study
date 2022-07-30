// class => object
// { mark: 'mail', jade: 'mail' }
// { chloe: 'femaile', alex: 'male', anna: 'female' }

class Students {
    [index: string]: "male" | "female";
    // 정해진 값만 넣을 수 있음
    mark: 'male' = "male";
}

const a = new Students();
a.mark = "male";
a.jade = "male";

console.log(a);

const b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";

console.log(b);