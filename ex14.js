function count(str = '')
{
    var cpt =0;
    for(var i = 0; str[i] != null; i++)
    {
        if(str.charAt(i) != str[i] ){cpt++}
    }

    return i - cpt
}

console.log(count('ch0pper'));

