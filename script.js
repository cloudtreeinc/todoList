/*const loginForm = document.querySelector('#login-form');
const userInput = loginForm.querySelector('input');
const button = loginForm.querySelector('button');
button.disabled = true;
console.dir(button);
const onClickButton = function () {
  let user =  userInput.value;
  alert(user);
}

function onBlurEvent() {
    let user = userInput.value;
    if (user.length > 3)
        button.disabled = false;
    else
        button.disabled = true;
    console.log('userId', user);
}
button.addEventListener('click', onClickButton);
userInput.addEventListener('input', onBlurEvent);
*/

const loginForm = document.querySelector('#login-form');

const greeting = document.querySelector('.greeting');
const greetingText = greeting.querySelector('h1');
const CLASS_HIEEN = 'hidden';
const logOut =  document.querySelector('#logout');
function onSubmitEvent(event) {

    event.preventDefault();   
    const data = new FormData(event.target);
    const userId = data.get('userId');  
    if (userId != '') {
        greeting.classList.remove(CLASS_HIEEN);

        loginForm.classList.add(CLASS_HIEEN);
        const postData =
        {
            'userId': userId,
            'message': `hello ${userId}`
        }

        localStorage.setItem(
            'userInfo', JSON.stringify(postData)
        );
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        greetingText.innerText = ` Hello ${userInfo.userId.toUpperCase()}`;
    } else {
        alert('Please enter your ID');
        return false;
    }

}

const userInfo = JSON.parse(localStorage.getItem('userInfo'));
if (userInfo === null) {

    greeting.classList.add(CLASS_HIEEN);
    loginForm.classList.remove(CLASS_HIEEN);
} else {
    greeting.classList.remove(CLASS_HIEEN);
    loginForm.classList.add(CLASS_HIEEN);
    greetingText.innerText = ` Hello ${userInfo.userId.toUpperCase()}`;
}


function handleLogOut() {
    localStorage.removeItem('userInfo');
   
    window.location.reload();

}

loginForm.addEventListener("submit", onSubmitEvent);
logOut.addEventListener('click', handleLogOut);

const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    // console.log(date);
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minuts = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    /*
    $input = "1";
    $padded_string = str_pad($input, 2, "0", STR_PAD_LEFT);
    echo $padded_string; // 출력: 01
    */

    clock.innerHTML = `${year}-${month}-${day} ${hours}:${minuts}:${seconds}`;
}
setInterval(getClock, 1000);