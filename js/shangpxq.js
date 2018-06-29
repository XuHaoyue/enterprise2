window.onload=function () {
    //导航下拉
    let nav=document.querySelector(".nav");
    let liss=nav.querySelectorAll(".nav>li");
    let meun=nav.querySelectorAll(".bigw");
    for(let i=1;i<liss.length;i++){
        liss[i].onmouseenter=function () {
            meun[i-1].style.display="block";
            meun[i-1].style.top="50px"
        }
        liss[i].onmouseleave=function (){
            meun[i-1].style.display="none";
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