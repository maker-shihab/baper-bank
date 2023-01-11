let depositValue = document.getElementById('deposit-value');
let depositOutput = document.getElementById('deposit-output');
let withdrawValue = document.getElementById('withdraw-value');
let withdrawOutput = document.getElementById('withdraw-output');
let balanceOutput = document.getElementById('balance-output');

function addMoney(currentBalance, newBalance) {
  return Number(currentBalance) + Number(newBalance);
};

function getMoney(currentBalance, newBalance) {
  return Number(currentBalance) - Number(newBalance);
};


function deposit() {
  depositOutput.innerText = addMoney(depositOutput.innerText, depositValue.value);
  balanceOutput.innerText = addMoney(balanceOutput.innerText, depositValue.value);

  depositValue.value = "";
};

function withdraw() {
  withdrawOutput.innerText = Number(withdrawValue.value) + Number(withdrawOutput.innerText);

  withdrawOutput.innerText = addMoney(withdrawValue.value, withdrawOutput.innerText);

  balanceOutput.innerText = getMoney(balanceOutput.innerText, withdrawValue.value);

  withdrawValue.value = "";
};