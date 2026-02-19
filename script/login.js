console.log('js connected');

document.getElementById('login-btn').addEventListener('click', function() {
    // console.log('login button hitted')
    // 1. Get NUmber input
    const numberInput = document.getElementById('input-number');
    const idNumber = numberInput.value;
    console.log(idNumber);

    // 2. Get the Pass input
    const passInput = document.getElementById('input-pass');
    const idPass = passInput.value;
    console.log(idPass);

    // 3. Match Pin and MObile nUmber
    if(idNumber == '01234567890' && idPass == '0000') {
        // 3.1 true ==> alert > Homepage
        alert('Login Successfull');

        window.location.assign('./home.html');

    }

    else{
        // 3.2 fasle ==> alert > Login failed
        alert('Login failed');
        return;
    }

})