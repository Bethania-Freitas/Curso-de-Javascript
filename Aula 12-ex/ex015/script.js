function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano ) {
        alert('Dados inválidos, tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = `Homem`
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'cria_hom.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'adol_hom.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adul_hom.jpg')
            } else {
                img.setAttribute('src', 'senh_hom.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'cria_fem.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'adol_fem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adul_fem.jpg')
            } else {
                img.setAttribute('src', 'senh_fem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Registro de <strong>${genero}</strong> com <strong>${idade}</strong> anos`
        res.appendChild(img)
    }
}