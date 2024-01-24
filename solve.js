function isPalindrome(string) {
    const cleanedString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedString === cleanedString.split('').reverse().join('');
}

console.log(isPalindrome("level"));