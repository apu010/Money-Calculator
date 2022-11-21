function calculate(income,expenses) {
    let sumofExpenses = expenses.reduce(function(result, currentValue){
        return result + currentValue
    },0)
    let balance = income - sumofExpenses
    return{
        balance : balance,
        expenses : sumofExpenses
    }
}

let food = 0
        let living = 0
        let lifeStyle = 0
        let income = 0
        let expenses = []
        document.getElementById('from').addEventListener('change', function(){
            food = parseInt(document.getElementById('food').value)
            living = parseInt(document.getElementById('living').value)
            lifeStyle = parseInt(document.getElementById('lifeStyle').value)
            income = parseInt(document.getElementById('income').value)
            expenses = [food, living, lifeStyle]
        })
        document.getElementById('process').addEventListener('click', function(){
            let caluclation = calculate(income, expenses)
            document.getElementById('expenses').innerText = caluclation.expenses
            document.getElementById('balance').innerText = caluclation.balance
        })