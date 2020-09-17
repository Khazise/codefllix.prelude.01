function isAlpha(str = '')
{
    var charac = '';
    var cpt = 0;
    for(let i = 0; i < str.length ;i++)
    {
        charac = str.charCodeAt(i)
        if (!((charac > 47 && charac < 58) || (charac > 64 && charac < 91) || (charac > 96 && charac < 123))){return false;}
    }

    return true;
}

console.log(isAlpha('Ch0pper'));
console.log(isAlpha('Ch0pper!'));
console.log(isAlpha('Ch0pper and Usopp'));


