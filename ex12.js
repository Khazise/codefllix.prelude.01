function substr(str = '',start,len=str.length)
{

    var resultat = '';
    for(let i=0;i < len ;i++)
    {   
        if((start + i) == str.length) {break;}
        resultat += str[i+start]     
    }

    return resultat
}
console.log(substr('tony tony chopper',10));
console.log(substr('ch0pper',2,2));

