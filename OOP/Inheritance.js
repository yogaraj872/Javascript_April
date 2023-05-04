class User{
      constructor(name,age,email){
         this.name = name;
         this.age = age;
         this.email = email;
      }
 Login(){
     console.log('Hi',this.name)
     console.log('Your are login here')
 }
 Logout(){
    
    console.log('Your are logged out here')
}  
}
let userOne = new User('Yogaraj',25,'Yogaraj872@gmail.com')
let userTwo = new User('Sandhiya',24,'Sandygms22@gmail.com')

userOne.login()
userTwo.login()