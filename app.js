function updateProduct(product, isIncreasing, price) {
    const updateNumber = document.getElementById(product+ '-number');
    if (isIncreasing == true) {
        updateNumber.value = parseInt(updateNumber.value) + 1;
    }
    if (isIncreasing == false) {
        if (updateNumber.value > 0) {
            updateNumber.value = parseInt(updateNumber.value) - 1;
        }
    }
    const productPrice = document.getElementById(product+ '-total');
    productPrice.innerText = updateNumber.value * price;

    const phoneTotal = document.getElementById('phone-total');
    const caseTotal = document.getElementById('case-total');
    const subTotal = document.getElementById('sub-total');
    const taxAmount = document.getElementById('tax');
    const totalAmount = document.getElementById('total');
    subTotal.innerText = parseInt(phoneTotal.innerText) + parseInt(caseTotal.innerText);
    taxAmount.innerText = (subTotal.innerText *2) / 100;
    totalAmount.innerText = parseInt(subTotal.innerText) + parseFloat(taxAmount.innerText);
}


document.getElementById('phone-plus').addEventListener('click', function(){
      updateProduct('phone', true, 1219);
})

document.getElementById('phone-minus').addEventListener('click', function(){
      updateProduct('phone', false, 1219)
})
document.getElementById('case-plus').addEventListener('click', function(){
      updateProduct('case', true, 59);
})

document.getElementById('case-minus').addEventListener('click', function(){
      updateProduct('case', false, 59)
})
