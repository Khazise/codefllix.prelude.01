function last(str = '',len=1)
{
    var taille = str.length
    return str.substring(taille - len, taille);
}
console.log(last('chopper'));
console.log(last('chopper',2));
console.log(last('tony',5));

