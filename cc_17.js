// Task 1: Create a Customer Class

class Customer {
    // purchaseHistory outside parenthesis so that each customer gets a unique purchase history 
    constructor (name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    };

    addPurchase(amount) {
        this.purchaseHistory.push(amount)
    }

    // Sum all values in the purchaseHistory array using reduce
    getTotalSpent() { 
        return this.purchaseHistory.reduce((x, y) => x + y);
        // Doing this as an arrow function means that accessing the result outside of the function works better
    }
};

const firstCustomer = new Customer("casey", "caseytomchuk@gmail.com");
firstCustomer.addPurchase(50);
firstCustomer.addPurchase(60);

console.log(firstCustomer);
console.log(`Total Spent: $${firstCustomer.getTotalSpent()}`);