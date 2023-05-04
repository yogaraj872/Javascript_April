class Account{
    constructor(name,acc,min_Bal,loc){
        this.acc_name = name
        this.acc_acc = acc
        this.acc_loc = loc
        this.min_Bal = min_Bal
    }
}
    class SA extends Account {
        min_Bal = 1000
        acc_Bal;
        constructor(name,acc,amount,loc){
        super(name,acc,loc);
        this.acc_Bal = amount
    }
    get_Bal() {
        return this.acc_Bal - this.min_Bal
    }
}    
  class CA extends Account {
    min_Bal = 1500
    acc_Bal;
    constructor(name,acc,amount,loc){
    super(name,acc,loc);
    this.acc_Bal = amount
}
get_Bal() {
    return this.acc_Bal - this.min_Bal
}
}
    let sa1 = new SA('Yogaraj',91594963,6000,'Central Silk Board')
    let ca1 = new CA('Sandy',93613068,25000,'HSR Layout')
    console.log(sa1)
    console.log(ca1)
    console.log(sa1.get_Bal())
    console.log(ca1.get_Bal())
    

