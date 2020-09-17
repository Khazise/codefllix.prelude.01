function slice(str = '',start,endop=str.length)
{

    var resultat = '';
    if(start < 0){ start =str.length + start;}
    for(let i=0;i < endop ;i++)
    {   
        if((start + i) == endop) {break;}
        resultat += str[i+start];     
    }

    return resultat
}
console.log(slice('ch0pper',1));
console.log(slice('ch0pper',-4));
console.log(slice('ch0pper',1,4));

