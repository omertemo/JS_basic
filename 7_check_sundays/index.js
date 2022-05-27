for(var i = 2014; i < 2050; i++)
{
    const d = new Date(i,0,1)
    if(d.getDay() === 0)
    {
        console.log(`1st January is being a Sunday ${i}`);
    }
}