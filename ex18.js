function lastIndexOf(str = '',search,fromIndexopt = str.length)
{
    for(let i=str.length; i > 0; i--)
    {
        if(str[i] == search )
        {
            return i;
        }
    }
    return -1
}

console.log(lastIndexOf('ch0pper','p'));

console.log(lastIndexOf('ch0pper','o'));


