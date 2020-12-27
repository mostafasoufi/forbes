var Flickity = require('flickity')
var newsSlider = document.querySelector('.js-news-slider')
var progressBar = document.querySelector('.js-news-slider__progress')

var flkty = new Flickity(newsSlider, {
    groupCells: true,
    pageDots: false,
})

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress))
    progressBar.style.width = progress * 100 + '%'
})