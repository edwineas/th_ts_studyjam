function registerUser (name : string, birthYear: number) {
    const ifage = checkAge(birthYear)
    if(ifage){
        console.log(name + ' has been registered')
    }
    else{
        console.log(name + ' Registraion failed!')
    }
}

function checkAge (birthYear: number){
    const age = 2023 - birthYear;
    if (age >= 18){
        return true
    }
    else {
        return false
    }
}

registerUser('Edwin', 2003)

export {}