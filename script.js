document.getElementById('generate').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value);
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSpecial = document.getElementById('include-special').checked;

    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
        alert('You must select at least one character type.');
        return;
    }

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecial);
    document.getElementById('password').value = password;
});

document.getElementById('copy').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecial) {
    const lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberCharset = "0123456789";
    const specialCharset = "!@#$%^&*()_+[]{}|;:,.<>?/";
    
    let charset = "";
    if (includeLowercase) charset += lowercaseCharset;
    if (includeUppercase) charset += uppercaseCharset;
    if (includeNumbers) charset += numberCharset;
    if (includeSpecial) charset += specialCharset;

    if (charset === "") return "";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
