function countSubstrings(str = '',substring)
{
    var cpt =0;
    str = str.split(" ")
    

    for(var i = 0; i < str.length ; i++)
    {
        console.log(str[i])
        if(str[i] == substring){cpt++}
    }

    return cpt
}

console.log(countSubstrings('Tony Tony Chopper!', 'Tony'));
console.log(countSubstrings('gomu gomu no bazooka', 'gatling'));

