function getDayName(dateStr,locale)
{
    const d = new Date(dateStr); 
    return d.toLocaleDateString(locale, {weekday: 'long'});
}

for(var i = 2014; i < 2050; i++)
{
    const dateStr = new Date(i, 0, 1); 
    var day = getDayName(dateStr,'tr-TR');
    if(day === "Pazar")
    {
        console.log(i);
    }

}
