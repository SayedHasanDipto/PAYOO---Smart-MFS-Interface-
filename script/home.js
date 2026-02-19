console.log('home connected');
document.getElementById('cashout-btn').addEventListener('click', function () {
    // 1- Get the agent number and validation
    const agentNumberInput = document.getElementById('agent-number');
    const agentNumber = agentNumberInput.value;
    console.log('Agent Number:', agentNumber);
    if (agentNumber.length !== 11) {
        alert('Invalid Agent Number');
        return;
    }
    // 2- Get the amount, validation, convert to number
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    console.log('CashOut Amount:', cashoutAmount);
    // 3- Get the crunt balance, validation, convert to number
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log('Current Blance:', balance);
    // 4- Calculate New balance
    const newBalance = Number(balance) - Number(cashoutAmount);

    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }
    // console.log('new blacne', newBalance);
    // 5- Get the pin and varify
    const pinNumber = document.getElementById('cashout-pin');
    const cashoutPin = pinNumber.value;
    if (cashoutPin === '0000') {
        // 5.1- true ==> show an aleart  > set balance
        alert('Cashout Successfull');
        pinNumber.value = "";
        console.log('New Blacnce', newBalance);
        balanceElement.innerText = newBalance;
    }
    else {
        // 5.2- flase ==> show an error aleart  > return
        alert('Invalid PIN');
        pinNumber.value = "";
        return;
    }
});