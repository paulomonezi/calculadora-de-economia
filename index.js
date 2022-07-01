var months = 12

document.getElementById('btn-confirm').addEventListener('click', () => {
    var userActual = document.getElementById('input-actual').value * months
    var userOffer = document.getElementById('input-offer').value * months
    var userDeploymentOffer = document.getElementById('input-deployment-costs').value
    console.log(userActual)
    console.log(userOffer)
    console.log(userDeploymentOffer)

    document.querySelector('.user-actual').innerHTML = `Custo do sistema atual em ${months} meses: R$ ${userActual},00`
    document.querySelector('.user-offer').innerHTML = `Custo do sistema Vale Up em ${months}: R$ ${userOffer},00. <br><span>Você terá uma economia de <strong>R$${userActual - userOffer},00</strong></span>`

})