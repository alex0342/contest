import './js/splide.js'
import './js/inputmask.js'
import './style.css'

const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')

const answerCards = document.querySelectorAll('.answers__card')

answerCards.forEach((item) => {
  const btn = item.querySelector('.answers__btn')
  const answer = item.querySelector('.answers__answer')
  const question = item.querySelector('.answers__question')
  const text = item.querySelector('.answers__text')
  function openAnswer() {
    btn.classList.toggle('answers__btn_open')
    answer.classList.toggle('answers__answer_open')
    question.classList.toggle('answers__question_open')
    answer.classList.contains('answers__answer_open')
      ? (answer.style.height = text.clientHeight + 'px')
      : (answer.style.height = 0 + 'px')
  }

  item.addEventListener('click', openAnswer)
})

function openMenu() {
  burger.classList.toggle('header__burger_open')
  menu.classList.toggle('header__menu_open')
}
burger.addEventListener('click', openMenu)
const smoothLinks = document.querySelectorAll('a[href^="#"]')
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault()
    openMenu()
    const id = smoothLink.getAttribute('href')

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}
