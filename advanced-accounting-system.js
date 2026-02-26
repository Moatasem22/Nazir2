// advanced-accounting-system.js

class AccountingSystem {
    constructor() {
        this.journalEntries = [];
        this.accounts = {};
    }

    addJournalEntry(date, description, debitAccount, creditAccount, amount) {
        this.journalEntries.push({ date, description, debitAccount, creditAccount, amount });
        this.updateAccount(debitAccount, amount, 'debit');
        this.updateAccount(creditAccount, amount, 'credit');
    }

    updateAccount(accountName, amount, type) {
        if (!this.accounts[accountName]) {
            this.accounts[accountName] = { balance: 0 };
        }
        this.accounts[accountName].balance += (type === 'debit' ? amount : -amount);
    }

    generateTrialBalance() {
        return Object.entries(this.accounts).map(([accountName, account]) => ({ account: accountName, balance: account.balance }));
    }

    generateIncomeStatement() {
        const income = this.getTotalIncome();
        const expenses = this.getTotalExpenses();
        return {
            income,
            expenses,
            netIncome: income - expenses,
        };
    }

    getTotalIncome() {
        // Logic to calculate total income
        return Object.entries(this.accounts).filter(([name, account]) => name.startsWith('Income')).reduce((sum, [_, account]) => sum + account.balance, 0);
    }

    getTotalExpenses() {
        // Logic to calculate total expenses
        return Object.entries(this.accounts).filter(([name, account]) => name.startsWith('Expense')).reduce((sum, [_, account]) => sum + account.balance, 0);
    }

    generateBalanceSheet() {
        const assets = this.getTotalAssets();
        const liabilities = this.getTotalLiabilities();
        const equity = assets - liabilities;
        return {
            assets,
            liabilities,
            equity,
        };
    }

    getTotalAssets() {
        // Logic to calculate total assets
        return Object.entries(this.accounts).filter(([name, account]) => name.startsWith('Asset')).reduce((sum, [_, account]) => sum + account.balance, 0);
    }

    getTotalLiabilities() {
        // Logic to calculate total liabilities
        return Object.entries(this.accounts).filter(([name, account]) => name.startsWith('Liability')).reduce((sum, [_, account]) => sum + account.balance, 0);
    }

    calculateFinancialRatios() {
        const incomeStatement = this.generateIncomeStatement();
        const balanceSheet = this.generateBalanceSheet();
        return {
            currentRatio: this.calculateCurrentRatio(balanceSheet),
            debtToEquityRatio: this.calculateDebtToEquityRatio(balanceSheet),
            returnOnEquity: this.calculateReturnOnEquity(incomeStatement, balanceSheet),
        };
    }

    calculateCurrentRatio(balanceSheet) {
        const currentAssets = this.getTotalAssets(); // Simplified, should filter current assets
        const currentLiabilities = this.getTotalLiabilities(); // Simplified, should filter current liabilities
        return currentAssets / currentLiabilities;
    }

    calculateDebtToEquityRatio(balanceSheet) {
        const liabilities = this.getTotalLiabilities();
        const equity = balanceSheet.equity;
        return liabilities / equity;
    }

    calculateReturnOnEquity(incomeStatement, balanceSheet) {
        const netIncome = incomeStatement.netIncome;
        const equity = balanceSheet.equity;
        return netIncome / equity;
    }
}

// Usage Example:
const accounting = new AccountingSystem();

// Adding some journal entries
accounting.addJournalEntry('2026-02-01', 'Sale of goods', 'Cash', 'Income - Sales', 1000);
accounting.addJournalEntry('2026-02-05', 'Purchase of inventory', 'Inventory', 'Cash', 500);

// Generating reports
console.log('Trial Balance:', accounting.generateTrialBalance());
console.log('Income Statement:', accounting.generateIncomeStatement());
console.log('Balance Sheet:', accounting.generateBalanceSheet());
console.log('Financial Ratios:', accounting.calculateFinancialRatios());