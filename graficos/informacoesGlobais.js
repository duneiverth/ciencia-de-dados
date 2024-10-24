const url = 'https://raw.githubusercontent.com/duneiverth/ciencia-de-dados/refs/heads/main/base-de-dados/esportes-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasPraticam = (dados.total_pessoas_mundo / 7.888e9)
    const pessoasNoMundo = (dados.total_pessoas_que_praticam_esportes_regularmente / 3.0e9)
    const horas = parseInt(dados.tempo_medio_semana_praticando_esportes)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasPraticam / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${total_pessoas_mundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasPraticam} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
