
    
    //Массив хранит значение температуры за 90 дней зимы

    let winterDays = [-48, -46, 48, 27, -20, -35, 43, 4, 9, 10, 41, -46, -4, 0, -38, -49, 25, -46, -48, -23, -25, -22, 12, 38, 19, -20, 26, 4, 19, 23, 26, -41, 4, -13, -9, -11, -7, 38, 27, 41, 14, -35, -38, -44, -44, -22, -24, 29, -32, 41, 7, -25, 3, 27, -45, 10, 48, 8, -34, -49, 17, -16, 41, -11, -50, -6, -34, 20, 14, -18, 39, -28, -33, -27, -48, 40, -37, -44, 0, 46, 36, -34, -50, 8, -3, 26, 40, 10, -36, 24];

    let frost = 0;

    for (let i = 0; i < winterDays.length; i++) {     
        if (winterDays[i] >= 0 && winterDays[i+1] < 0) {
            frost++
            console.log(`Заморозки ${winterDays[i]}  ${winterDays[i+1]} `)
        }      
    }
    console.log(`Из ${winterDays.length} дней в ${frost} были заморозки `)

/////////////////////////////////////////////////////////////////////

    console.log('\nКогда были заморзки')

    let firstdayfrost = 0;
    let lastdayfrost = 0;

    let arrfirstday = [];
    let arrlastday = [];

    for (i = 0; i < winterDays.length; i++) {
        if (winterDays[i] < 0) {
            if (firstdayfrost == 0) {
                firstdayfrost = i + 1;
            }
            
        }else if(winterDays[i-1]<0){
            lastdayfrost = i;
            arrfirstday.push(firstdayfrost);
            arrlastday.push(lastdayfrost);
            firstdayfrost = 0;
            lastdayfrost = 0;
        }
        
    }

    let maxfrost = arrlastday[0] - arrfirstday[0];
    let result;
    for (i = 0; i < arrfirstday.length; i++) {

        if(arrfirstday[i] == arrlastday[i]){
            console.log(`${arrlastday[i]} дня`);
        }else{
            console.log(`от ${arrfirstday[i]} до ${arrlastday[i]} дня`);
        }
            result = arrlastday[i] - arrfirstday[i];
        if (result > maxfrost) {
            maxfrost = result
            firstdayfrost = arrfirstday[i];
            lastdayfrost = arrlastday[i];
        }
    }

    console.log(`от ${firstdayfrost} до ${lastdayfrost} дня самый большой интервал заморозков с температурами:`);

    for (let i = firstdayfrost - 1; i <= lastdayfrost - 1; i++) {
        console.log(winterDays[i]);
        
    }

    //////////////////////

    let bitcoin = [10, 18, 33, 7, 31, 3, 40, 8, 22, 29, 7, 8, 28, 9, 23, 18, 25]

    console.log('\n\nИщем лутшую прибыль')

    let daySale;
    let cost;
    let maxcost;
    let daysSale = [];
    let profit = [];
    for (let i = 0; i < bitcoin.length; i++) {
        maxcost = bitcoin[i];

        for (let j = i; j < bitcoin.length; j++) {
            cost = bitcoin[j];
            if (maxcost < cost) {
                maxcost = cost;
                daySale = j + 1;
            }
            
        }
        daysSale.push(daySale);
        profit[i] = maxcost - bitcoin[i]
        console.log(`Для дня покупки ${i + 1} будет выгодней продать ${daySale} дня, за ценой ${maxcost}, и прибылю ${profit[i]}`)
    }

    let maxprofit = profit[0];
    let dayBuy;
    for ( i = 0; i < profit.length; i++) {
        if (maxprofit < profit[i]) {
            maxprofit = profit[i];
            dayBuy = i + 1;
            daySale = daysSale[i];
        }
    }

    console.log(`\n\nНайбольшую выгоду можно получить купив ${dayBuy} дня биткон и продать ${daySale} дня`)
    console.log(`Прибыль: ${maxprofit}$`)