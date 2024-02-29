// person.js

class Person {
    constructor(name, age = 12) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `PERSON: name=${this.name}, age=${this.age}`;
    }
}

export { Person }