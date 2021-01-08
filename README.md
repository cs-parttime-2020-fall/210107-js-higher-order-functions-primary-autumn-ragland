# 21 01 07 JS Higher Order Functions Primary

Add comments above each exercise solution (at minium). HTML and JS files have already been included in the assignment. Push after completing each exercise. Comment out any broken code before 9PM submission and provide context on what's not working. 

## Bank Account Class
Create a class `BankAccount` with properties account name, account number, account type, and a list of account spending. The class will have six `outputProperties`, `addCharge`, `totalSpending`, `outputStores`, `filterPurchases`, and `sumCharges`. You will create at least one instance of this class and call each method once. 

The method `outputProperties` will output object properties in the console in the message :
```
The TYPE account NUMBER is owned by NAME

There are currently NUMBER_OF_CHARGES_IN_SPENDING_LIST charges to the account
```

The method `addCharge` will prompt for a store and an amount in the browser. Create an object with store and charge properties using object literal notation and add the object to the list of account spending. It is advised to call the addCharge method at least three times on the instance of your class.

The method `totalSpending` will iterate through the list of store/amount objects using a foreach to output the message `STORE : $CHARGE` to the console for each item.

The method `outputStoresOnly` to use map to create a new list od store names from the spending then iterate through the list of store names using foreach.

The `filterPurchases` method will prompt for a store name in the browser then create a new list of spending object by filtering through the original list and only returning object with the correct store. If there are no items in the filtered list output the message `There are no charges to STORE` Otherwise iterate through the list of store/amount objects using a foreach to output the message `STORE : $CHARGE` to the console for each item.

THe `sumCharges` method will get a total of all spending object charges using reduce and output the message `Total Spent : $TOTAL`

