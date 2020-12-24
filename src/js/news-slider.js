var Flickity = require('flickity')
var newsSlider = document.querySelector('.js-news-slider')
var progressBar = document.querySelector('.news-slider__progress')

var flkty = new Flickity(newsSlider, {
    groupCells: 2,
    groupCells: '50%',
    pageDots: false
})

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress))
    progressBar.style.width = progress * 100 + '%'
})
