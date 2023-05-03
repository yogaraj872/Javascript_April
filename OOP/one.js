class Student {
    Stu_Id;
    Stu_Name;
    constructor(Id,Name){
        this.Stu_Id = Id
        this.Stu_Name = Name
    }

}
let S1 = new Student (102,"Sakthi")
let S2 = new Student (104, "Yogaraj")

console.log(S1)
console.log(S2)

console.log(S1.Stu_Name)
console.log(S2.Stu_Id)