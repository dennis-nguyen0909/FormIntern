
const $form = document.getElementById("loginForm");
$form.addEventListener('submit', (e) => {
    e.preventDefault();
    let $username = document.getElementById("username").value.trim();
    let $password = document.getElementById("password").value.trim();
    let $messageError = document.getElementById("emailError");
    let $passwordError = document.getElementById("passwordError");
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!emailRegex.test($username)) {
        $messageError.style.display = 'block';
        $messageError.style.color = 'red';
    } else {
        $messageError.style.display = 'none';
    }

    if ($password.length < 6) {
        $passwordError.style.display = 'block';
        $passwordError.style.color = 'red';

    } else {
        $passwordError.style.display = 'none';

    }
    if (emailRegex.test($username) && $password.length > 6) {
        document.getElementById("resultText").innerText = `Email: ${$username} / Password: ${$password}`
    } else {
        document.getElementById("resultText").innerText = ''
    }


})
