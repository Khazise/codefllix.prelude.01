function substr(str = '',len=1)
{
    var taille = str.length
    return str.substring(taille - len, taille);
}
console.log(substr('chopper'));
console.log(substr('chopper',2));
console.log(substr('tony',5));

