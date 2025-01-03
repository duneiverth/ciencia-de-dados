const url = 'https://raw.githubusercontent.com/duneiverth/ciencia-de-dados/refs/heads/main/base-de-dados/esportes-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasNoMundo = (dados.total_pessoas_mundo / 7.888e9)
    const pessoasPraticam = (dados.total_pessoas_que_praticam_esportes_regularmente / 3.0e9)
    const horas = parseInt(dados.tempo_medio_semana_praticando_esportes)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasPraticam / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo} bilhões</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_que_praticam_esportes_regularmente} bilhões</span> que praticam algum esporte e passam em média <span>${horas} horas</span> praticando.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão se exercitando.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
