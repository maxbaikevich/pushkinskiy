const ESC_KEY_CODE = 27;
let museumInput = document.querySelectorAll('.museum__input');
let museumTogle = document.querySelectorAll('.museum__togle-label');
let btnLogin = document.querySelector('.page-header__user');
let form = document.querySelector('.form')
museumInput.forEach((el, i)=> {
    el.addEventListener('click', e => {
        museumTogle.forEach(el => el.classList.remove('museum__togle--active'))
        museumTogle[i].classList.add('museum__togle--active')
    })
})
const keyDown = (keyCode, element) => {
    window.onkeydown = ( (event) =>{
        if ( event.keyCode === keyCode) {
            element.remove();
        }
    });
};

const popUpAlert = () => {
    const popUpTemplate = document.querySelector('#pop-up').content.querySelector('.form');
    const popUpElement = popUpTemplate.cloneNode(true);
    document.body.append(popUpElement);
    const popUpBtnClose = popUpElement.querySelector('.form__btn-cloce');
    popUpBtnClose.addEventListener('click', (evt) => {
        evt.preventDefault();
        popUpElement.remove();
    });
    keyDown(ESC_KEY_CODE, popUpElement);
    
  };
  btnLogin.addEventListener('click', ()=> {
    popUpAlert()
  });
