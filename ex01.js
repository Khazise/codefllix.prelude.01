function lowerCase(str = '')
{
    let result = '';
    for(let i = 0; i < str.length; i++)
    {
        const code = str.charCodeAt(i);

        if(code >= 65 && code <= 90)
        {
            result += (String.fromCharCode(code+32));
        }
        else
        {
            result += (String.fromCharCode(code)) ;
        }
    }
    return result
}

console.log(lowerCase('CaSiS'));

