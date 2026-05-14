

let balance = 1000;
let transactionHistory = [];

function atmTransaction(transactionType, amount = 0) {

    if (transactionType === "Deposit") {

        if (amount > 0) {
            balance += amount;
            transactionHistory.push(`Deposit: $${amount}`);
            console.log("Deposit successful. Balance:", balance);
        }

    } else if (transactionType === "Withdrawal") {

        if (amount > 0 && amount <= balance) {
            balance -= amount;
            transactionHistory.push(`Withdrawal: $${amount}`);
            console.log("Withdrawal successful. Balance:", balance);
        } else {
            console.log("Invalid withdrawal");
        }

    } else if (transactionType === "Undo") {

        let last = transactionHistory.pop();

        if (last) {
            let value = Number(last.split("$")[1]);

            if (last.includes("Deposit")) balance -= value;
            if (last.includes("Withdrawal")) balance += value;

            console.log("Undo successful. Balance:", balance);
        }

    } else if (transactionType === "Fee") {

        transactionHistory.unshift("Maintenance Fee: $10");
        balance -= 10;

        console.log("Fee applied. Balance:", balance);
    }

    if (transactionHistory.length > 5) {
        transactionHistory.shift();
    }
}

//  Loan proccess

function processLoans(scores) {

    let eligible = scores.filter(score => score > 700);

    let adjustedScores = scores.map(score => score + 20);

    let totalRisk = scores.reduce((sum, score) => sum + score, 0);

    let hasPerfect = scores.some(score => score === 900);

    let allValid = scores.every(score => score >= 400);

    let firstLowScore = scores.find(score => score < 500);

    let firstLowIndex = scores.findIndex(score => score < 500);

    console.log("Eligible:", eligible);
    console.log("Adjusted:", adjustedScores);
    console.log("Total Risk:", totalRisk);
    console.log("Has 900 score:", hasPerfect);
    console.log("All above 400:", allValid);
    console.log("First low score:", firstLowScore);
    console.log("Index of low score:", firstLowIndex);
}

//  Fraud 

function fraudCheck() {

    let dailyTransactions = [1042, 8922, 3301, 5510, 7719, 9920];
    let fraudID = 5510;

    let exists = dailyTransactions.includes(fraudID);
    console.log("Fraud exists:", exists);

    if (exists) {
        let index = dailyTransactions.indexOf(fraudID);
        console.log("Fraud index:", index);
    }

    let lastThree = dailyTransactions.slice(-3);
    console.log("Last 3 transactions:", lastThree);

    let removed = dailyTransactions.indexOf(fraudID);

    if (removed !== -1) {
        dailyTransactions.splice(removed, 1);
    }

    dailyTransactions.forEach(id => {
        console.log(`Transaction ${id} cleared.`);
    });
}

// Bank merger
function bankMerger() {

    let branchA = ["Alice", "Bob"];
    let branchB = ["Charlie", "Diana"];

    let allCustomers = branchA.concat(branchB);

    let messyData = [["Eve", "Frank"], ["Grace"], ["Hank", "Ivy"]];

    let flatData = messyData.flat();

    let sorted = [...flatData].sort();

    let reversed = [...sorted].reverse();

    let banner = allCustomers.join(" - ");

    let tellers = new Array(5).fill("Closed");

    console.log("All customers:", allCustomers);
    console.log("Flat:", flatData);
    console.log("Sorted Z-A:", reversed);
    console.log("Banner:", banner);
    console.log("Tellers:", tellers);
}
// Security system
function validateBankPassword(password) {

    let hasLength = password.length >= 8;

    let noWord = !password.toLowerCase().includes("password");

    let hasVowel = /[aeiou]/i.test(password);

    if (hasLength && noWord && hasVowel) {
        return "Access Granted";
    }

    return "Access Denied";
}


//  year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function generateYearlyReport(startYear, endYear) {

    for (let year = startYear; year <= endYear; year++) {

        if (isLeapYear(year)) {
            console.log(`Year ${year} is a special audit year.`);
        }

        if (year % 10 === 0) {
            console.log(`${year} - Decade Anniversary`);
        } else if (year % 5 === 0) {
            console.log(`${year} - 5 Year Anniversary`);
        }
    }
}


atmTransaction("Deposit", 400);
atmTransaction("Withdrawal",300);
atmTransaction("Fee");
atmTransaction("Undo");

console.log("Loan System:");
processLoans([650, 800, 500, 720, 410, 900]);

console.log("Fraud System:");
fraudCheck();

console.log("Bank Merger:");
bankMerger();

console.log("Password Check:");
console.log(validateBankPassword("Bank1234"));

console.log("Yearly Report:");
generateYearlyReport(2020, 2030);