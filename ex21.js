function reverse(str = '')
{
    var resultat = '';
    let ii =0;
    for(let i=str.length-1; i >= 0 ; i--)
    {
        resultat += str[i]; 
    }

    return resultat
}

console.log(reverse('ch0pper'));



