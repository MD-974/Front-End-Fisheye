/**
     * Fonction constructeur pour initialiser la propriété "medias".
     * @param {Array} medias - Un tableau optionnel d'objets média.
     * @return {void} 
     */
export class PhotographerMedia {
    constructor (medias = null) {
        if (medias !== null) {
            this.medias = Array.from(medias)
            this.medias.forEach(media => {
                media.islike = false
            })
        }
        else {
            this.medias = []
        }
    }
}