
/* function duboleIt(num){
    const ruselt = num * 2
    return ruselt;
}
const fast = duboleIt(5);
const second = duboleIt(7);
 */

function getInputValue(){
    const dipositInput = document.getElementById('diposit-input');
    const dipositAmountText = dipositInput.value;
    const dipositAmount = parseFloat(dipositAmountText);
    //   clear input filed
 dipositInput.value = ''; 
    return dipositAmount;
}


// 1 stap

document.getElementById('diposit-button').addEventListener('click', function(){
    // const dipositInput = document.getElementById('diposit-input');
    // const dipositAmountText = dipositInput.value;
    // const dipositAmount = parseFloat(dipositAmountText);
    const dipositAmount = getInputValue();
    
    // 2. get crent diposit
    const dipositTotal = document.getElementById('diposit-total');
    const dipositTotalText = dipositTotal.innerText
    const dipositTotalAmoutn = parseFloat(dipositTotalText);

    dipositTotal.innerText = dipositTotalAmoutn + dipositAmount;

    // 3. update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    balanceTotal.innerText = balanceTotalAmount + dipositTotal
  
 // clear input filed
//  dipositInput.value = '';
 
});

// handel withdrew 
document.getElementById('Withdraw-button').addEventListener('click', function(){
  const withdrewInput = document.getElementById('Withdraw-input');
  const withdrewTotalText = withdrewInput.value;
  const withdrewAmount = parseFloat(withdrewTotalText);
  
   // get creant withdrew
   const withdrewTotal = document.getElementById('withdraw-total')
   const withdrawTotalText = withdrewTotal.innerText;
   const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrewTotal.innerText = withdrawTotalAmount + withdrewAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount - withdrewAmount ;


    // clear input filed
    withdrewInput.value = '';
})