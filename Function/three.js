// with parameter and defult value
function add(a,b,c=1,d=3){
    console.log(a+b+c+d)

}
add(10,35,60,79) //184
add(20,30) //34
add(10) //NaN
add(10,30,40,50,60) //Undifine