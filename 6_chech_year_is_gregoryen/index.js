function leapyear(year)
{
    return year % 100 === 0 ? year %400 === 0 : year%4 === 0;
}
const is_leapyear = year => new Date(year, 1, 29).getMonth() === 1;
console.log(is_leapyear(2016));
console.log(is_leapyear(2000));
console.log(is_leapyear(1700));
console.log(is_leapyear(1800));
console.log(is_leapyear(100));
