function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

var dateStr = new Date();
var day = getDayName(dateStr, "tr-TR");

console.log(day);
