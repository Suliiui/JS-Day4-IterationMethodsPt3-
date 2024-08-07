// You are given an array representing a series of transactions in a small business. 
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
    ["income", 1000],
    ["income", 1500],
    ["expense", 500],
    ["expense", 300],
    ["income", 700],
];


// Task 1
const income = transactions.filter((item)=>{
if(item[0] === "income"){
    return item}
})
console.log(income)
// Task 2
const expense = transactions.filter((item)=>{
    if(item[0] === "expense"){
        return item}
    })
    console.log(expense)
// Task 3
let sumincome = 0
const totalincome = transactions.forEach((item)=>{
    if(item[0] === "income"){
        sumincome = sumincome + item[1]
    }
})
console.log(sumincome)
// Task 4
let sumexpense = 0
const totalexpense = transactions.forEach((item)=>{
    if(item[0] === "expense"){
        sumexpense = sumexpense + item[1]
    }
})
console.log(sumexpense)
let sumIncome=0
const ntotal = transactions.forEach((item)=>{
    if(item[0] === "income"){
        sumIncome = sumIncome + item[1]
}else if(item[0] === "expense"){
    sumIncome = sumIncome - item[1]
}
})

console.log(sumIncome)

const above500 = transactions.filter((item)=>{
    if(item[1]>=500){
        return item
    }
})
console.log(above500)
/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/


/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/


/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
       Output 6) [["income", 1000], ["income", 1500]]

******************************************************************/

// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.
