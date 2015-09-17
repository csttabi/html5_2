// Módosítjuk a H1 elem tartalmát
document.querySelector('h1').innerHTML = 'Hello ITFactory';

//Kép forrásának módosítása
function changeUrl(){
    document.querySelector('img').src = 'http://kep.cdn.index.hu/1/0/36_cbb6a3b884f4f88b3a8e3d44c636cbd8/514899_063ffdec48440a09bb85886fb0e712b2_wm.jpg';
};

//Stilus módosítása
function changeStyle(){
    document.querySelector('img').style.width = '40px';
};

//Adatok ellenőrzése
function validate(){
    
    //Az input mező és a hiba üzenet kiválasztása
    var input = document.querySelector('.input-validate');
    var errorP = document.querySelector('.no-validate');
    
    //Az input mező értékének a kiolvasása
    var inputValue = input.value;
    
    // Az input mező értéke nagyobb legyen mint 5 és kisebb mint 21
    if(inputValue < 6 || inputValue > 20){
        console.log('Az érték nem megfelelő');
        errorP.innerHTML = 'Az érték nem megfelelő';
    }else{
        errorP.style.color = 'green';
        errorP.innerHTML = 'Az érték megfelelő';
    }
};


