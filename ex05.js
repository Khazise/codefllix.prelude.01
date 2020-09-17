function decapitalize(str = '')
{
    let tmp;
    str = str.substring(0,1).toLowerCase() + str.substring(1)

    return str
}

console.log(decapitalize('Wooman'));
console.log(decapitalize('El Drago'));


