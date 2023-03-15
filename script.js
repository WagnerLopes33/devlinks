function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

        if(html.classList.contains('light')) {
            img.setAttribute('src', './assets/wagner-selfie-light.jpeg')
            img.setAttribute('alt', 'Foto do Wagner de óculos escuros(bem chave)')
        } else {
            img.setAttribute('src', './assets/wagner-selfie.jpeg')
            img.setAttribute('alt', 'Foto do Wagner de óculos de grau')
        }
        
}