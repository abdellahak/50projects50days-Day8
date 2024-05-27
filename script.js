// character animation
let inputs = document.querySelectorAll('.form input')

inputs.forEach(input => {
    let label =input.previousElementSibling;
    if (input.value.length !=0){
        for(let i = 0; i< label.children.length; i++){
            label.children[i].style.transform = "translateY(0px)"
            label.children[i].classList.toggle('labelstyle')
        }
    }
    input.addEventListener('focus', moveOnFocus)
    input.addEventListener('focusout', moveOutFocus)
})

function moveOnFocus(){
    let label =this.previousElementSibling;
    if (this.value.length ==0){
        for(let i = 0; i< label.children.length; i++){
            label.children[i].style.transition = `transform 0.2s ease ${i/10}s, color 0.2s linear`
            label.children[i].style.transform = "translateY(0px)"
            label.children[i].classList.toggle('labelstyle')
        }
    }
}
function moveOutFocus(){
    let label =this.previousElementSibling;
    if (this.value.length ==0){
        for(let i = 0; i< label.children.length; i++){
            label.children[i].style.transition = `transform 0.2s ease ${i/10}s`
            label.children[i].style.transform = "translateY(43px)"
            label.children[i].classList.toggle('labelstyle')
        }
    }
}

// display login or register

let btnSwitch = document.querySelectorAll('.register');
let loginform = document.getElementById('loginform');
let registerform = document.getElementById('registerform');

btnSwitch.forEach(element => {
    element.addEventListener('click', function(){
        if (loginform.style.display == "none"){
            loginform.style.display = "flex";
            registerform.style.display = "none";
        }else{
            loginform.style.display = "none";
            registerform.style.display = "flex";
        }
    })
})