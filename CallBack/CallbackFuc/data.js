let createEmployee = () => {
    console.log("Create Employee")
}
let getEmaployee = () =>{
    console.log("Get Emaployee")
}

setTimeout(()=>{
  createEmployee()  
},4000)
setTimeout(()=>{
    getEmaployee()
},2000)