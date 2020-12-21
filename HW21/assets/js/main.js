function calc() {
    let height = +setheight.value;
    let weight = +setweight.value;

    if (height > 5) {
        height = height / 100;
    }

    let result = weight / (height ** 2);

    result = Math.round(result * 100) / 100;
    
    console.log(result);
    getindex.innerHTML = result;
    let definition;

    if(result <= 16){
        definition = 'Выраженный дефицит массы тела';
    }else if(result < 18.5){
        definition = 'Недостаточная (дефицит) масса тела';
    }else if(result < 25){
        definition = 'Норма';
    }else if(result < 30){
        definition = 'Избыточная масса тела (предожирение)';
    }else if(result < 35){
        definition = 'Ожирение';
    } else if(result < 40){
        definition = 'Ожирение резкое';
    }else if(result >= 40){
        definition = 'Очень резкое ожирение';
    }else{
        definition = 'Не возможно высчетать';
    }

    getdefinition.innerHTML = definition;
}