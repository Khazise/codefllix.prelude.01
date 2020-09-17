function trim(str = '',whitesceopt= " ")
{
    let debut = 0;
    let fin   = str.length-1;
    var resultat = '';
    for(fin;str[fin] == whitesceopt ;fin--){}
    for(debut;str[debut] == whitesceopt ;debut++){}

    for(let i=debut;i <= fin ;i++)
    {
        resultat += str[i];
    }
    return resultat
}

console.log(trim(' Tony Tony Ch0pper ' ));
console.log(trim('--Tony Tony Ch0pper--', '-'));



