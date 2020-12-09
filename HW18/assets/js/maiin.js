
let m = +prompt('Введите вашу масу(кг):');
let h = prompt('Введите ваш рост(см):')/100;
let result;

let index = Math.round((m / (h ** 2))*100) / 100;
console.log(index);

if(index <= 16){
    result = 'Выраженный дефицит массы тела';
}else if(index < 18.5){
    result = 'Недостаточная (дефицит) масса тела';
}else if(index < 25){
    result = 'Норма';
}else if(index < 30){
    result = 'Избыточная масса тела (предожирение)';
}else if(index < 35){
    result = 'Ожирение';
} else if(index < 40){
    result = 'Ожирение резкое';
}else if(index >= 40){
    result = 'Очень резкое ожирение';
}else{
    result = 'не возможно высчетать, так как вы вели не коректные даные или оставели поле пустым';
}

alert(`Ваше соответствие между массой и ростом: ${result}`);

let year = +prompt('Введите год')

if(year%4 != 0 || year%100 == 0 && year%400 != 0){
    alert('Ваш год обычный')
}
else{
    alert('Ваш год высокосный')
}

