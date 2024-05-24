class Person{
    constructor(name = "not updated",age = "not updated",gender = "not updated",
    dateOfBirth = "not updated",mobileNumber = "not updated",
    email = "not updated",occupation = "not updated"){
      this.name = name;
      this.gender = gender;
      this.dateOfBirth = dateOfBirth;
      this.mobileNumber = mobileNumber;
      this.email = email;
      this.occupation = occupation; 
      this.age = age; 
    }
    get welcome(){
        this.name == "not updated"? console.log("Welcome!") 
        : console.log(`Welcome ${this.name}`) 
    }
    get isAdult(){
        let returnValue;
        if(this.age == "not updated"){
            console.log("Please enter your age!");
            
        }
        else{
            returnValue = this.age >= 18 ? true : false;
            console.log(returnValue);}
    }
    updateMobileNumber(newNumber){
        this.mobileNumber = newNumber;
        console.log(`Your updated mobile number: ${this.mobileNumber}`);
    }
    updateEmail(email){
        this.email = email;
        console.log(`Your updated email: ${this.email}`);
    }
    updateOccupation(occupation){
        this.occupation = occupation;
        console.log(`Your updated occupation: ${this.occupation}`);
    }

}

let bala = new Person("Bala",21,"male","30.01.2003");
console.log(bala);
console.log("----------------------");

bala.welcome;
bala.isAdult;
bala.updateMobileNumber("123456789");
bala.updateEmail("bala@xyz.com");
bala.updateOccupation("Software Developer");

console.log("---------------------");
console.log(bala);


