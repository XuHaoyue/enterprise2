
window.onload=function () {
    //轮播图
    let banner=document.querySelector(".banner");
    let imgbox=document.querySelectorAll(".banner .imgbox  li");
    let dian=document.querySelectorAll(".btn li");
    let boxwidth=parseInt(getComputedStyle(imgbox[0],null).width);
    // console.log(banner, imgbox, dian, boxwidth);
    let current=0;
    let next=0;
    let t=setInterval(move,2000);
    function move() {
        next++;
        if(next==imgbox.length){
            next=0;
        }
        dian[current].classList.remove("hot");
        dian[next].classList.add("hot");
        imgbox[next].style.left=boxwidth+'px';
        animate(imgbox[current],{left:-boxwidth});
        animate(imgbox[next],{left:0})
        current=next;
    }
    dian.forEach(function(e,index){
        e.onclick=function(){
            dian[current].classList.remove('btn hot');
            dian[index].classList.add('btn hot');
            if(current>index){
                imgbox[index].style.left=-boxwidth+"px";
                animate(imgbox[current],{left:boxwidth});
                animate(imgbox[index],{left:0});
            }
            if(current<index){
                imgbox[index].style.left=boxwidth+"px";
                animate(imgbox[current],{left:-boxwidth});
                animate(imgbox[index],{left:0});
            }
            current=index
        }
    })
    //导航下拉
    let nav=document.querySelector(".nav");
    let liss=nav.querySelectorAll(".nav>li");
    let meun=nav.querySelectorAll(".bigw");
    for(let i=1;i<liss.length;i++){        
        liss[i].onmouseenter=function () {
            meun[i-1].style.zIndex="10";
            meun[i-1].style.top="50px"
                }  
        liss[i].onmouseleave=function (){
            meun[i-1].style.zIndex="0";
            meun[i-1].style.top="70px"
        } 
    }
        
    let section=document.querySelector("section");
    let liss1=section.querySelectorAll(".navanthore>li");
    let meun1=section.querySelectorAll(".bigw");
       
    // console.log(section);
    window.onscroll=function () {
        let st=document.body.scrollTop||document.documentElement.scrollTop;
        if(st>135){
            section.style.top="0";
            for(let i=1;i<liss.length;i++){        
        liss1[i].onmouseenter=function () {
            meun1[i-1].style.zIndex="50";
            meun1[i-1].style.top="50px"
                }  
        liss1[i].onmouseleave=function (){
            meun1[i-1].style.zIndex="0";
            meun1[i-1].style.top="70px"
        } 
    }
        }else {
            section.style.top="-70px"
        }
     
    }

}

