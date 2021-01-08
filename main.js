// console.log(`21 01 07 JS Higher Order Functions Primary`);

// Create a class BankAccount with properties account name, account number, account type, and a list of account spending.
class BankAccount{
    constructor(name, number, type){
        this.name = name;
        this.number = number;
        this.type = type;
        this.spending = [];
    }
    // The method outputProperties will output object properties in the console 
    outputProperties(){
        console.log(`The ${this.type} account ${this.number} is owned by ${this.name}.\nThere are currently ${this.spending.length} charges to the account`);
    } 
    addCharge(){
        // prompt for a store and an amount in the browser.
        let store = prompt("Enter the store");
        let amount = parseInt(prompt("Enter the amount"));
        // Create an object with store and charge properties using object literal notation and add the object to the list of account spending.
        this.spending.push({
            store : store,
            amount : amount,
        });
    }
    // The method totalSpending will iterate through the list of store/amount objects using a foreach to output the message STORE : $CHARGE to the console for each item.
    totalSpending(){
        console.log(`-----Account Charges-----`);
        this.spending.forEach(charge => console.log(`${charge.store} : $${charge.amount}`));
    } 
    outputStoresOnly(){
        // to use map to create a new list of store names from the spending
        let storesOnly = this.spending.map(charge => charge.store);
        console.log(`-----Stores Only-----`);
        // then iterate through the list of store names using foreach.
        storesOnly.forEach(store => console.log(store));
    }

    filterPurchases(){
        // prompt for a store name in the browser
        let enteredStore = prompt("Enter a store to see purchases made there");
        // create a new list of spending object by filtering through the original list and only returning object with the correct store
        let filteredSpending = this.spending.filter(charge => charge.store == enteredStore);
        if(filteredSpending.length > 0){
            // iterate through the list of store/amount objects using a foreach to output the message
            console.log(`-----${enteredStore} Charges-----`);
            filteredSpending.forEach(charge => console.log(`${charge.store} : $${charge.amount}`));
        } else {
            // If there are no items in the filtered list output the message
            console.log(`There are no charges to ${enteredStore}`);
        }
    }
    sumCharges(){
        // total of all spending object charges using reduce
        // let total = this.spending.reduce((total, charge) => total.amount + charge.amount);

        // to account for the accumulator changing type after the first element map through the array returning only the amount property
        let amounts = this.spending.map(charge => charge.amount);
        let total = amounts.reduce((total, amount) => total + amount);
        console.log(`-----Total Spending-----`);
        console.log(`Total Spent : $${total}`);
    }

}
// create at least one instance of this class and call each method once.
let sampleAccount = new BankAccount("Autumn Chris", 4587328764 , "savings");
// initial info
sampleAccount.outputProperties();
// It is advised to call the addCharge method at least three times on the instance of your class.
sampleAccount.addCharge();
sampleAccount.addCharge();
sampleAccount.addCharge();
// info after adding charges
sampleAccount.totalSpending();
sampleAccount.outputStoresOnly();
sampleAccount.filterPurchases();
sampleAccount.sumCharges();
