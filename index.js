var months = 12

document.getElementById('btn-confirm').addEventListener('click', () => {
    var userActual = document.getElementById('input-actual').value * months
    var userOffer = document.getElementById('input-offer').value * months
    var userDeploymentActual = document.getElementById('input-deployment-expenses').value
    var userDeploymentOffer = document.getElementById('input-deployment-costs').value

    console.log(userActual)
    console.log(userDeploymentActual)
    var actualTotalCosts = parseInt(userActual) + parseInt(userDeploymentActual)
    console.log(actualTotalCosts)

    console.log(userOffer)
    console.log(userDeploymentOffer)
    var offerTotalCosts = parseInt(userOffer) + parseInt(userDeploymentOffer)

    if (userDeploymentActual == "0") {
        document.querySelector('.user-actual').innerHTML = `Custo do sistema atual em ${months} meses: R$ ${userActual},00`
        document.querySelector('.user-offer').innerHTML = `Custo do sistema Vale Up em ${months}: R$ ${offerTotalCosts},00. <br><span>Você terá uma economia de <strong>R$${userActual - offerTotalCosts},00</strong></span>`

    }
    else {
        document.querySelector('.user-actual').innerHTML = `Custo do sistema atual em ${months} meses: R$ ${actualTotalCosts},00`
        document.querySelector('.user-offer').innerHTML = `Custo do sistema Vale Up em ${months}: R$ ${offerTotalCosts},00. <br><span>Você terá uma economia de <strong>R$${actualTotalCosts - offerTotalCosts},00</strong></span>`
    }




})

document.getElementById('radio-yes').onclick = function () {
    const disabled = document.getElementById("input-deployment-expenses").disabled;
    if (disabled) {
        document.getElementById("input-deployment-expenses").disabled = false;
    }

}

document.getElementById('radio-no').onclick = function () {
    const disabled = document.getElementById("input-deployment-expenses").disabled;
    if (disabled != true) {
        document.getElementById("input-deployment-expenses").disabled = true;
    }
}
