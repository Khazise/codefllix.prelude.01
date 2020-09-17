function endsWith(str = '',end, positionopt = str.length)
{
    var resultat = '';
    for(let i = (positionopt - end.length); i < positionopt ;i++)
    {
        resultat += str[i];
    }

    console.log(resultat);

    return resultat == end
}

console.log(endsWith('Tony Tony Ch0pper', 'Ch0pper'));
console.log(endsWith('Tony Tony Ch0pper', 'Tony'));
console.log(endsWith('Ch0pper', 'h0',3));


