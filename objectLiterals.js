function objectLiterals(){
    let name = "Gojo";
    let belt = "navy";
    
    let ninja = {
        
        name, belt,
        
        chop(x){
            console.log(`${this.name}, You chopped the enemy ${x} times.`)
        }
    };
    ninja.chop(5);
}

objectLiterals();