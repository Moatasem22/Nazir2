// tax-zakat-system.js

// VAT Calculation
function calculateVAT(amount, rate = 15) {
    return (amount * rate) / 100;
}

// Zakat Calculation
function calculateZakat(amount, rate = 2.5) {
    return (amount * rate) / 100;
}

// Withholding Tax Calculation
function calculateWithholdingTax(amount, rate) {
    return (amount * rate) / 100;
}

// Generate ZATCA Compliance Report
function generateZATCAReport(data) {
    // Logic to generate report
    return `ZATCA Compliance Report: ${JSON.stringify(data)}`;
}

// Tax Disclosure Statement
function generateTaxDisclosureStatement(income, expenses) {
    const taxableIncome = income - expenses;
    return `Taxable Income: ${taxableIncome}`;
}

// Budget vs Actual Analysis
function budgetVsActual(budget, actual) {
    const variance = actual - budget;
    return `Budget Variance: ${variance}`;
}

// Tax Obligation Tracking
let taxObligations = [];

function trackTaxObligation(type, amount) {
    taxObligations.push({ type, amount, date: new Date() });
}

// Example usage
console.log(calculateVAT(1000));
console.log(calculateZakat(1000));
console.log(calculateWithholdingTax(1000, 5));
console.log(generateZATCAReport({ /* data */ }));
console.log(generateTaxDisclosureStatement(2000, 500));
console.log(budgetVsActual(1500, 2000));
trackTaxObligation('VAT', 150);
console.log(taxObligations);