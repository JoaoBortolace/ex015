function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (Number(fano.value) > ano || fano.value.length == 0) {
        alert('Data Inválida! Verifique os Dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if (idade < 21) {
                //Adolescente
                img.setAttribute('src', 'foto-joven-m.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'foto-crianca-f.png')
            } else if (idade < 21) {
                //Adolescente
                img.setAttribute('src', 'foto-joven-f.png')
            } else if (idade < 60) {
                //Adulta
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idosa
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Verificado: ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
