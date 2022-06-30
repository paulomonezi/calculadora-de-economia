document.getElementById('btn-confirm').addEventListener('click', () => {
    var userActual = document.getElementById('input-actual').value * 12
    var userOffer = document.getElementById('input-offer').value * 12
    console.log(userActual)
    console.log(userOffer)

    document.querySelector('.user-actual').innerHTML = `Custo do sistema atual em 12 meses: R$ ${userActual},00`
    document.querySelector('.user-offer').innerHTML = `Custo do sistema Vale Up em 12 meses: R$ ${userOffer},00. <br><span>Você terá uma economia de <strong>R$${userActual - userOffer},00</strong></span>`

})