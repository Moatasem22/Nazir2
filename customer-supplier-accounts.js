// customer-supplier-accounts.js

// Customer and Supplier Account Management System

class Account {
    constructor(name, type) {
        this.name = name; // Customer or Supplier name
        this.type = type; // 'customer' or 'supplier'
        this.balance = 0;
        this.creditLimit = 0;
        this.transactionHistory = [];
    }

    setCreditLimit(limit) {
        this.creditLimit = limit;
    }

    addTransaction(amount, date) {
        this.transactionHistory.push({ amount, date });
        this.balance += amount;
    }

    getDebtAgingAnalysis() {
        // Logic to analyze aging of debts
        let agingAnalysis = {};
        this.transactionHistory.forEach(transaction => {
            const age = (new Date() - new Date(transaction.date)) / (1000 * 60 * 60 * 24);
            agingAnalysis[age] = (agingAnalysis[age] || 0) + Math.abs(transaction.amount);
        });
        return agingAnalysis;
    }

    getLiquidityRatios() {
        // Logic to calculate liquidity ratios
        return {
            currentRatio: this.balance / (this.creditLimit || 1),
            quickRatio: (this.balance - this.debtAgingAnalysis()) / (this.creditLimit || 1)
        };
    }

    getAccountAnalytics() {
        // Logic for detailed account analytics
        return {
            name: this.name,
            type: this.type,
            balance: this.balance,
            creditLimit: this.creditLimit,
            transactions: this.transactionHistory.length,
            debtAging: this.getDebtAgingAnalysis(),
            liquidityRatios: this.getLiquidityRatios()
        };
    }
}

class Customer extends Account {
    constructor(name) {
        super(name, 'customer');
    }
    // Additional customer-specific methods can be added here
}

class Supplier extends Account {
    constructor(name) {
        super(name, 'supplier');
    }
    // Additional supplier-specific methods can be added here
}

// Example usage:
const customer = new Customer('John Doe');
customer.setCreditLimit(5000);
customer.addTransaction(-200, '2026-02-20');
console.log(customer.getAccountAnalytics());

const supplier = new Supplier('ACME Corp');
supplier.setCreditLimit(10000);
supplier.addTransaction(1000, '2026-02-22');
console.log(supplier.getAccountAnalytics());
