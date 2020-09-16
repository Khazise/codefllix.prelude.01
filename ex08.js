function swapCase(str = '')
{
    let result = '';
    for(let i = 0; i < str.length; i++)
    {
        const code = str.charCodeAt(i);

        if(code >= 97 && code <= 122)
        {
            result += (String.fromCharCode(code-32));
        }
        else if (code >= 65 && code <= 90)
        {
            result += (String.fromCharCode(code+32)) ;
        }
        else
        {
            result += str[i];
        }
    }
    return result
}

console.log(swapCase('One Code'));
console.log(swapCase('1337 Fruit'));

