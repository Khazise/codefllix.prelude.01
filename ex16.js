function countWords(str = '',patternopt)
{
    var resultat = [] ;
    var cpt = 0;
    let tmp = ' ';
    str = str.replace(/-/g,' ');
    str = str.trim();
    str = str.split(" ");

    for(let i =0; i< str.length;i++)
    { 
        if(str[i].match(/[A-Z][a-z]+/g) != null)
        {
            resultat.push(str[i].match(/[A-Z][0-9a-z]+/g));
        }  
    }
    
    resultat = resultat.toString();
    resultat = resultat.split(",");
    return resultat.length
}

console.log(countWords('Tony Tony Ch0pper'));

console.log(countWords('TonyTonyCh0pper'));

console.log(countWords('Tony Tony - Ch0pper'));

