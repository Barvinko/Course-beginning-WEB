let secret = 0;
let times = 0;
let dicrationAnswer

function play(){
    if (times == 0)  {
        secret = Math.random();
        secret *= 100;
        secret = Math.floor(secret) + 1;
        console.log(secret);
    }
    if (times < 10) {
        let number = +setnumber.value;
        let answer;
        times++;
        round.innerHTML = times;

        dicrationAnswer = document.querySelector('div + h3');
        // console.log(dicrationAnswer)
        if(number < secret){
            console.log('you numb <');
            dicrationAnswer.classList.add('text-danger');
            answer = 'меньше угаданого';
        }else if(number > secret){
            console.log('you numb >');
            dicrationAnswer.classList.add('text-danger');
            answer = 'больше угаданого';
        }

        if (number == secret) {
            console.log('win');
            answer = 'верное. ВЫ ПОБЕДИЛИ!!!'
            dicrationAnswer.classList.remove('text-danger');
            dicrationAnswer.classList.add('text-warning');
            dialogH1.innerHTML = 'ВЫ ПОБЕДИЛИ!!!';
            getsecret.innerHTML = `ПОЗДРОВЛЯЕМ!!!`;
            dialogH1.classList.add('text-warning');
            dialog.showModal();
        }

        getanswer.innerHTML = answer;
    }else{
        console.log('lose');
        getsecret.innerHTML = `Секретное число: ${secret}`;
        dialogH1.classList.add('text-danger');
        dialogH1.innerHTML = 'Вы Проиграли';
        dialog.showModal();
    }  
}

function restart(){
    times = 0;
    round.innerHTML = '';
    setnumber.value = '';
    getanswer.innerHTML = '';
    dicrationAnswer.classList.remove('text-danger');
    dicrationAnswer.classList.remove('text-warning');
    dialogH1.classList.remove('text-warning');
    dialogH1.classList.remove('text-danger');
}