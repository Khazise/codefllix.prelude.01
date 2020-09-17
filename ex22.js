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

function splice(str = '',start, deleteCountop = str.length - start, toAddopt='')
{
    var resultat = '';
    var bool = false;
    if(start < 0)
    {
        start =str.length + start;
        bool = true;
    }

    
    for(let i=0;i < str.length ;i++)
    {   if(bool == true)
        {
            if(i >= deleteCountop && i < start)
            {
                resultat += str[i];  
            }
        }
        else
        {
            if(i >= deleteCountop)
            {
                resultat += str[i];  
            }
        }

    }
    
    resultat = insert(resultat,toAddopt,start)

    return resultat
}

console.log(splice('Tony Tony Ch0pper', 0,10 ));

console.log(splice('Tony Ch0pper', 0,4,'Tony Tony'));

console.log(splice('Tony Tony Usopp',-5, -5, 'Ch0pper'));


