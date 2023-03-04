const circleE1 = document.getElementById('circle')
const upBtnE1 = document.getElementById('upBtn')
const downBtnE1 = document.getElementById('downBtn')

var rotateValue =circleE1.style.transform;
var rotateSum;

upBtnE1.onclick=function(){
    rotateSum=rotateValue+"rotate(-90deg)"
    circleE1.style.transform=rotateSum;
    rotateValue=rotateSum;
};
downBtnE1.onclick=function(){
    rotateSum=rotateValue+"rotate(90deg)"
    circleE1.style.transform=rotateSum;
    rotateValue=rotateSum;
};

