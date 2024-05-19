// when you have a class and when you have a generice 
// class and want to create 
// a new child class of that generic class while maintaining its features but a little bit extra.

class person {
    constructor (_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe () {
        console.log(`I am ${this.name} and I am ${this.age} years old.`)
    }

}

class Programmer extends person {
    constructor (_name, _age, _yearsOfExperience) {
        super(_name, _age);


        //custom behaviur of the programmer 
        this.yearsOfExperience = _yearsOfExperience;
    }

    code () {
        console.log(`${this.name} is coding.`)
    }
}



const programmers =[
    new Programmer ("jeff", 45),
    new Programmer("dom", 45, 12)
];




function developSoftware (programmers){
    
    //develop software
    for (let programmer of programmers){
        programmer.code();
    }
}

developSoftware(programmers);