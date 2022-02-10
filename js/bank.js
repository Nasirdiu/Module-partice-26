document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // console.log('bank balance');
    const depositInput = document.getElementById("deposit-input");
    const depositInputText = depositInput.value;
    const depositAmount = parseFloat(depositInputText);
    // console.log(depositAmount);

    //update deposit
    const depositTotal = document.getElementById("deposit-add");
    const depositCurrent = depositTotal.innerText;
    const depositCurrentAmount = parseFloat(depositCurrent);
    const newDepositAmount = depositCurrentAmount + depositAmount;
    depositTotal.innerText = newDepositAmount;

    // update account balance
    const balanceTotal=document.getElementById('balance-update');
    const balanceTotalText=balanceTotal.innerText;
    const balanceTotalAmount=parseFloat(balanceTotalText);
    const newBalanceTotal=balanceTotalAmount+newDepositAmount;
    balanceTotal.innerText=newBalanceTotal;

    depositInput.value='';
  });

  // handle withdraw balance
  document.getElementById('withdraw-button').addEventListener('click',function(){
    //   console.log('withdraw');

    const withdrawInput=document.getElementById('withdraw-input');
    const withdrawInputText=withdrawInput.value ;
    const newWithdrawAmount=parseFloat(withdrawInputText);

    //set withdraw total
    const withdrawTotal=document.getElementById('withdraw-total');
    const withdrawTotalText=withdrawTotal.innerText;
    const withdrawAmount=parseFloat(withdrawTotalText);

    const newWithdrawTotalAmount=withdrawAmount+newWithdrawAmount;
    withdrawTotal.innerText=newWithdrawTotalAmount;

    //balance low
    const balanceTotal =document.getElementById('balance-update');
    const balanceTotalText=balanceTotal.innerText;
    const balanceUpdate =parseFloat(balanceTotalText);
    const newBalanceTotal=balanceUpdate- newWithdrawAmount;
    balanceTotal.innerText=newBalanceTotal;


    withdrawInput.value='';
  })
