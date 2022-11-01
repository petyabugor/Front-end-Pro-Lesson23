//1
const mainForm = document.forms.main;
const telephone = mainForm.telephone;
const text= document.querySelector('.form-popup-text')

const regexTel = /^\+3\d{9}$/;
mainForm.addEventListener('submit', function (event) {
    if(!regexTel.test(telephone.value)){
        text.innerHTML= 'Неверный формат телефона';
    }
    event.preventDefault()
})



//2
const htmlTage = '<div>Hello</div><span>world</world>';
const regExp = /(<.*?>)/g
const result = htmlTage.replace(regExp, " ");
console.log(result);