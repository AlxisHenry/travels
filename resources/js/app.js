import '../css/app.css'

// J'aimerais que les cards soient animées l'une après l'autre

const colors = ['#8C18FF', '#4DFE89', 'yellow', '#FF0080', '#00FFFF']
const cards = document.querySelectorAll('.travel__card')

cards.forEach((card, index) => {
  card.style.animation = `travelCardAnim 1s ease forwards ${index / 7 + 0.5}s`
  card.addEventListener('mouseover', () => {
    let swap = true
    if (swap) {
      card.querySelector('.card__content .title').style.color =
        colors[Math.floor(Math.random() * colors.length)]
      swap = false
    }
  })
  card.addEventListener('mouseout', () => {
    card.querySelector('.title').style.color = '#46444C'
  })
})
