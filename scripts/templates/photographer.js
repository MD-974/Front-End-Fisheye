export function photographerTemplate (data) {
  const { city, country, name, portrait, price, tagline } = data
  const picture = `assets/Photographers/${portrait}`

  function getUserCardDOM () {
    // Créer le contenu de l’article
    const article = document.createElement('article')

    // Créer et définir le contenu de l’élément image
    const img = document.createElement('img')
    img.setAttribute('id', 'photographer_image')
    img.setAttribute('src', picture)
    img.setAttribute('alt', 'Photo de ' + name)
    img.setAttribute('class', 'photographer_image')
    // Créer et définir le contenu du texte pour l’élément nom
    const h2 = document.createElement('h2')
    h2.textContent = name
    h2.setAttribute('class', 'photographer_nom')

    // Créer et définir des attributs pour l’élément de lien
    const lienPhotographe = document.createElement('a')
    lienPhotographe.setAttribute('href', 'photographer.html?id=' + data.id)
    lienPhotographe.setAttribute('class', 'photographer_lien')
    lienPhotographe.appendChild(img)
    lienPhotographe.appendChild(h2)

    // Créer et définir le contenu du texte pour l’élément ville + pays
    const villeText = document.createElement('p')
    villeText.textContent = city + ', ' + country
    villeText.setAttribute('class', 'photographer_ville')

    // Créer et définir le contenu du texte pour l’élément tagline
    const taglineText = document.createElement('span')
    taglineText.textContent = tagline
    taglineText.setAttribute('class', 'photographer_tagline')

    // Créer et définir le contenu du texte pour l’élément de prix
    const priceText = document.createElement('span')
    priceText.textContent = price + '€/jour'
    priceText.setAttribute('class', 'photographer_prix')

    // ajout de article.appendChild pour l'affichage dans l'ordre des elements
    article.appendChild(lienPhotographe)
    article.appendChild(villeText)
    article.appendChild(taglineText)
    article.appendChild(priceText)

    // Retourne l’élément article créé
    return (article)
  }
  return { city, country, name, picture, price, tagline, getUserCardDOM }
}
