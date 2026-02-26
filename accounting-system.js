// accounting-system.js

// Accounting Module

class AccountingModule {
    constructor() {
        this.journalEntries = [];
        this.ledger = {};
    }

    // Method to add a journal entry
    addJournalEntry(date, description, debitAccount, creditAccount, amount) {
        const entry = { date, description, debitAccount, creditAccount, amount };
        this.journalEntries.push(entry);
        this.updateLedger(debitAccount, amount, 'debit');
        this.updateLedger(creditAccount, amount, 'credit');
    }

    // Method to update ledger
    updateLedger(account, amount, type) {
        if (!this.ledger[account]) {
            this.ledger[account] = { balance: 0 };
        }
        if (type === 'debit') {
            this.ledger[account].balance -= amount;
        } else if (type === 'credit') {
            this.ledger[account].balance += amount;
        }
    }

    // Method to get the balance of an account
    getBalance(account) {
        return this.ledger[account] ? this.ledger[account].balance : 0;
    }

    // Method to get all journal entries
    getJournalEntries() {
        return this.journalEntries;
    }

    // Method for auditing
    audit() {
        console.log('Audit Report:');
        console.log('Journal Entries:', this.getJournalEntries());
        console.log('Ledger:', this.ledger);
    }
}

// Example usage:
const accounting = new AccountingModule();
accounting.addJournalEntry('2026-02-26', 'Initial investment', 'Cash', 'Capital', 1000);
accounting.audit();