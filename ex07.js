function kebabCase(str = '')
{
    let tmp = ' ';
    str = str.replace(/-/g,' ');
    str = str.trim();
    str = str.split(" ");

    for(let i =0; i< str.length;i++)
    {
        if(str[i].match(/[A-Z][a-z]+/g) != null)
        {
            str[i] = str[i].match(/[A-Z][a-z]+/g)
        }

    }
    
    str = str.toString();
    str = str.replace(/,/g,'_')
    str = str.toLowerCase()
    return str
}


console.log(kebabCase('gold d roger'));

console.log(kebabCase('GoldDRoger'));

console.log(kebabCase('-Gold-D-Roger-'));


