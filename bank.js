

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

