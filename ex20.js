function repeat(str = '',timesopt=1)
{
    var resultat = '';
    for(let i=0; i < timesopt; i++)
    {
        resultat += str; 
    }

    return resultat
}

console.log(repeat('w',3));

console.log(repeat('gomu',0));


