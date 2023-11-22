// Exercise: Transaction analysis

const transactions = [
  { id: 1, description: 'Grocery Shopping', amount: -50 },
  { id: 2, description: 'Salary Deposit', amount: 2000 },
  { id: 3, description: 'Utility Bill Payment', amount: -100 },
  { id: 4, description: 'Online Purchase', amount: -30 }
]

// 1. Calculate Total Balance

const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
console.log('Total Balance: ', totalBalance)

// 2. Find the Largest Transaction (Income or Expense)

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
  return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])
console.log('Largest Transaction: ', largestTransaction)

// 3. Filter Purchase Transactions

const purchaseTransactions = transactions.filter(transaction => transaction.amount < 0)
console.log(' Purchase Transactions: ', purchaseTransactions)

// 4. Find a Transaction by Description

const specificTransaction = transactions.find(transaction => transaction.description === 'Online Purchase')
console.log('Specific Transaction: ', specificTransaction)

// 5. Find the index of a Transaction by Amount

const indexTransactionWithAmount = transactions.findIndex(transaction => transaction.amount === -30)
console.log('Index Transaction With Amount -30: ', indexTransactionWithAmount)

// 6. Update Transaction Descriptions

transactions.forEach(transaction => {
  if (transaction.amount < 0) {
    transaction.description = `Expense: ${transaction.description}`
  } else {
    transaction.description = `Income: ${transaction.description}`
  }
})
console.log('Udated Transactions: ', transactions)