//Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

const posts = [
    {
        title: 'Matrix',
        content: 'Fantasy',
        image: '/img/matrix.jpg',
        tags:['Neo','Trinity','Morpheus']
    },
    {
        title: 'BatMan',
        content: 'Hero',
        image: '/img/locandinapg1.jpg',
        tags:['Bruce Wayne','Joker','Robin']
    },
    {
        title: 'Febbre da Cavallo',
        content: 'Comedy',
        image: '/img/febbre-da-cavallo.jpg',
        tags:['Mandrake','Soldatino','Dartagnan']
    },
    {
        title: 'Hannibal Lecter',
        content: 'Horror',
        image: '/img/hannibal.jpg',
        tags:['Hannibal','Anthony Hopkins','Ray Liotta']
    },
    {
        title: 'Forest Gump',
        content: 'Romance',
        image: '/img/gump.jpg',
        tags:['Tom Hanks','Bubba','Chocolate Box']
    },
]

module.exports = posts

