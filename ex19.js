function insert(str = '',toInserttopt='',positionopt = 0)
{
    var resultat = '';
    for(let i=0; i < str.length; i++)
    {
        
        if(i == positionopt)
        {
            resultat += toInserttopt;
        }
        resultat += str[i]
    }

    if(positionopt >= str.length)
    {
        resultat += toInserttopt; 
    }
    return resultat
}

console.log(insert('chpper','0',2));

console.log(insert('Tony',' Tony Ch0pper',4));


