const headerE1 =document.getElementById('header');
const mS =document.getElementById('ModelS');
const m3 =document.getElementById('Model3');
const mX =document.getElementById('ModelX');
const mY =document.getElementById('ModelY');
const sixtyE1 =document.getElementById('60mph');
const topSpeedE1 =document.getElementById('topSpeed');
const maxRangeE1 =document.getElementById('maxRange');
const modelE1 =document.getElementById('model');

mS.onclick = function(){
    headerE1.style.backgroundImage= "url(./images/image-2.jpeg)"
    sixtyE1.innerHTML ='1.99s'
    topSpeedE1.innerHTML ='200mph'
    maxRangeE1.innerHTML='369 mi'
    modelE1.innerHTML='Model S'
}
m3.onclick = function(){
    headerE1.style.backgroundImage= "url(./images/image-3.png)"
    sixtyE1.innerHTML ='3.10s'
    topSpeedE1.innerHTML ='162mph'
    maxRangeE1.innerHTML='358 mi'
    modelE1.innerHTML='Model 3'
}
mX.onclick = function(){
    headerE1.style.backgroundImage= "url(./images/image-4.png)"
    sixtyE1.innerHTML ='2.50s'
    topSpeedE1.innerHTML ='155mph'
    maxRangeE1.innerHTML='333 mi'
    modelE1.innerHTML='Model X'
}
mY.onclick = function(){
    headerE1.style.backgroundImage= "url(./images/image-5.png)"
    sixtyE1.innerHTML ='4.79s'
    topSpeedE1.innerHTML ='135mph'
    maxRangeE1.innerHTML='330 mi'
    modelE1.innerHTML='Model Y'
}