function fn1(){
    let text1=document.getElementById("text1");
    let text2=document.getElementById("text2");
    let rd1=document.getElementById("rd1");
    let rd2=document.getElementById("rd2");
    let sb1=document.getElementById("sb1");
    let para=document.getElementsByTagName("p");
    let mypara=document.getElementsByClassName("mypara");
    
    for(let x=0;mypara.length;x++)
    {
        mypara[x].style.color="green";
    }
    para[0].style.color="red";
    para[1].style.color="blue";
    if(rd1.checked==true)
    {
        alert("Car selected"+rd1.value);
    }
    else if(rd2.checked==true)
    {
        alert("Car selected"+rd2.value);
    }
}
function setImage()
{
    document.getElementById("img1").src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg";
}
function oldImage()
{
    document.getElementById("img1").src="https://cdn.shopify.com/s/files/1/0162/2116/files/Formal_outfit_ideas_for_men_20.jpg?v=1512106528";
}