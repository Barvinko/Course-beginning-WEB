function to_c() {
    if (cBtn.classList.contains('selected')) {
        return;
    }

    let temp = document.querySelectorAll('.temperature');
    console.log(temp);

    cBtn.classList.add('selected');

    if(fBtn.classList.contains('selected')){
        fBtn.classList.remove('selected');
        for (const i of temp) {
            let t = i.innerHTML; 
            console.log(t);
            t = parseInt(t);
            t = (t -32)/ 1.8 ;
            t = Math.round(t);
            i.innerHTML = `${t}°C`;
            console.log(i.innerHTML);
        }
    }else{
        kBtn.classList.remove('selected');
        for (const i of temp) {
            let t = i.innerHTML; 
            console.log(t);
            t = parseInt(t);
            t = (t - 273) ;
            t = Math.round(t);
            i.innerHTML = `${t}°C`;
            console.log(i.innerHTML);
        }
    }
}

function to_f() {
    if (fBtn.classList.contains('selected')) {
        return;
    }

    let temp = document.querySelectorAll('.temperature');
    console.log(temp);

    fBtn.classList.add('selected');

    if (cBtn.classList.contains('selected')) {
        cBtn.classList.remove('selected');
        for (const i of temp) {
            let t = i.innerHTML; 
            console.log(t);
            t = parseInt(t);
            t = t * 1.8 + 32;
            t = Math.round(t);
            i.innerHTML = `${t}°F`;
            console.log(i.innerHTML);
        }
    }else{
        kBtn.classList.remove('selected');
        for (const i of temp) {
            let t = i.innerHTML; 
            console.log(t);
            t = parseInt(t);
            t = (t - 273) * 1.8 + 32;
            t = Math.round(t);
            i.innerHTML = `${t}°F`;
            console.log(i.innerHTML);
        }
    }
}

function to_k() {
    if (kBtn.classList.contains('selected')) {
        return;
    }

    let temp = document.querySelectorAll('.temperature');
    console.log(temp);

    kBtn.classList.add('selected');

    if (cBtn.classList.contains('selected')) {
        cBtn.classList.remove('selected');
        for (const i of temp) {
            let t = i.innerHTML; 
            console.log(t);
            t = parseInt(t);
            t = t + 273;
            t = Math.round(t);
            i.innerHTML = `${t}°K`;
            console.log(i.innerHTML);
        }
    }else{
        fBtn.classList.remove('selected');
        for (const i of temp) {
            let t = i.innerHTML; 
            console.log(t);
            t = parseInt(t);
            t = (t - 32) / 1.8 + 273;
            t = Math.round(t);
            i.innerHTML = `${t}°K`;
            console.log(i.innerHTML);
        }   
    }
}
    