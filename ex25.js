function includes(str = '',search, positionopt = 0)
{
    var resultat = '';
    var cpt = 0;
    for(let i = positionopt; i < str.length ;i++)
    {
        //console.log(str[i]+" : "+search[cpt]);
        if(str[i] == search[cpt])
        {
            for(cpt; str[i] == search[cpt];cpt++)
            {
                resultat += str[i];
                i++
                //console.log(resultat);
                if(resultat == search){return true;}
            }  
        }  
    }

    return resultat == search
}

console.log(includes('Ch0pper', 'pper'));
console.log(includes('Ch0pper', '0',3));


