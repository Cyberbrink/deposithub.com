(() => {
  const balanceEl = document.getElementById('balance');
  const amountInput = document.getElementById('amount');
  const depositBtn = document.getElementById('depositBtn');
  const withdrawBtn = document.getElementById('withdrawBtn');

  let balance = 0;
  function update() {
    balanceEl.textContent = balance.toFixed(2);
  }

  depositBtn.addEventListener('click', () => {
    const amt = parseFloat(amountInput.value);
    if (!isNaN(amt) && amt >= 0) {
      balance += amt;
      update();
    }
    amountInput.value = '';
  });

  withdrawBtn.addEventListener('click', () => {
    const amt = parseFloat(amountInput.value);
    if (!isNaN(amt) && amt >= 0 && amt <= balance) {
      balance -= amt;
      update();
    }
    amountInput.value = '';
  });

  update();
})();
