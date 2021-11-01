let museumInput = document.querySelectorAll('.museum__input');
let museumTogle = document.querySelectorAll('.museum__togle-label');
museumInput.forEach((el, i)=> {
    el.addEventListener('click', e => {
        museumTogle.forEach(el => el.classList.remove('museum__togle--active'))
        museumTogle[i].classList.add('museum__togle--active')
    })
})

