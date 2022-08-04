abstract class AbstractPerson {
    protected _name: string= 'Mark';

    abstract setName(name: string): void;
}
// abstract의 경우 기능이 완전하지 않아
// new abstract()를 바로 사용할 수 없음

class APerson extends AbstractPerson {
    setName(name: string): void {
        this._name = name;
    }
}

const p = new APerson();
p.setName('MArk');