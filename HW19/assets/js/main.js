
let key = +prompt('1. числа от 0 до 100 (включительно); \n2. Выведите числа от 21 до 57 (включительно); \n3. Выведите четные чисел в промежутке от 0 до 100 (включительно); \n4. С помощью цикла найдите сумму чисел от 1 до 100 (включительно); \n5. Вывести все простые числа от 3 до 1000 (включительно) \n\nВведите номер задачи которую хотите выполнить');

switch (key) {
    case 1:
        
        for (let i1 = 0; i1 <= 100; i1++) {
            
            console.log(i1);
        }

        break;
    case 2:
        
        for (let i2 = 21; i2 <= 57; i2++) {
            
            console.log(i2);
        }

        break;
    case 3:
        
        for (let i3 = 0; i3 <= 100; i3++) {
            if (i3 % 2 == 0) {
                console.log(i3);   
            }
        }


        break;
    case 4:

        let sum = 0;
        for (let i4 = 0; i4 <= 100; i4++) {
            
            sum += i4;
        }
        console.log(sum);

        break;
    case 5:
        
        for (let i5 = 2; i5 <= 100; i5++) {
            for (let j = 2; j < i5; j++) {
                
                if (i5 % j == 0) {
                   break;
                }
                else if(i5 == (j + 1)){
                    console.log(i5);  
                }
                
            }
            
        }
        break;

    default:
        alert('Вы ввели не номер задачи, так что обновите страницу и введите с 1 до 5 при выборе задачи ')
        break;
}