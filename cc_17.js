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
const secondCustomer = new Customer ("albert", "albert@albertmail.com");
firstCustomer.addPurchase(50);
firstCustomer.addPurchase(60);

console.log(firstCustomer);
console.log(`Total Spent: $${firstCustomer.getTotalSpent()}`);

// Task 2: Create a SalesRep Class

class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }

    addClient(customerObject) {
        this.clients.push(customerObject)
    }

    // Finding customer who's name matches the name parameter, then we are running getTotalSpent() for that client.
    getClientTotal(name1) {
        const client = this.clients.find(customer => customer.name === name1);
        return client.getTotalSpent()
    }
};

// Creating a sales rep and running both of its methods 
const salesRep1 = new SalesRep("Elise Norman");
salesRep1.addClient(firstCustomer);
salesRep1.addClient(secondCustomer);
console.log(`Sales Rep Clients: ${salesRep1.clients}`);
console.log(`Total Spent for Client: $${salesRep1.getClientTotal("casey")}`);