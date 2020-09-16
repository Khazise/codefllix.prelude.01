function capitalize(str = '', restToLowerropt=false)
{
    let tmp;
    if(restToLowerropt === false)
    {
        str = str.substring(0,1).toUpperCase() + str.substring(1)
    }
    else
    {
        str = str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase()
    }

    return str
}

console.log(capitalize('cASIS'));
console.log(capitalize('cASIS',true));

