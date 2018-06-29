window.onload=function () {
    //导航下拉
    let nav=document.querySelector(".nav");
    let liss=nav.querySelectorAll(".nav>li");
    // console.log(liss);
    let meun=nav.querySelectorAll(".bigw");
    // console.log(meun);
    liss[1].onmouseenter=function () {
        meun[0].style.zIndex="10";
        meun[0].style.top="50px"
        meun[0].style.display="block"
    }
    liss[1].onmouseleave=function () {
        meun[0].style.zIndex="0";
        meun[0].style.top="70px"
        meun[0].style.display="none"

    }
    liss[2].onmouseenter=function () {
        meun[1].style.zIndex="10";
        meun[1].style.top="50px"
        meun[1].style.display="block"

    }
    liss[2].onmouseleave=function () {
        meun[1].style.zIndex="0";
        meun[1].style.top="70px"
        meun[1].style.display="none"

    }
    liss[3].onmouseenter=function () {
        meun[2].style.zIndex="10";
        meun[2].style.top="50px"
        meun[2].style.display="block"

    }
    liss[3].onmouseleave=function () {
        meun[2].style.zIndex="0";
        meun[2].style.top="70px"
        meun[2].style.display="none"

    }
//顶部
    let section=document.querySelector("section");
    console.log(section);
    window.onscroll=function () {
        let st=document.body.scrollTop||document.documentElement.scrollTop;
        if(st>135){
            section.style.top="0"
        }else {
            section.style.top="-70px"
        }

        return;
    }
    let section1=document.querySelector("section");
    let liss1=section.querySelectorAll(".nav>li");
    // console.log(liss);
    let meun1=section.querySelectorAll(".bigw");
    // console.log(meun);
    liss[1].onmouseenter=function () {
        meun[0].style.zIndex="10";
        meun[0].style.top="50px"
        meun[0].style.display="block"
    }
    liss[1].onmouseleave=function () {
        meun[0].style.zIndex="0";
        meun[0].style.top="70px"
        meun[0].style.display="none"

    }
    liss[2].onmouseenter=function () {
        meun[1].style.zIndex="10";
        meun[1].style.top="50px"
        meun[1].style.display="block"

    }
    liss[2].onmouseleave=function () {
        meun[1].style.zIndex="0";
        meun[1].style.top="70px"
        meun[1].style.display="none"

    }
    liss[3].onmouseenter=function () {
        meun[2].style.zIndex="10";
        meun[2].style.top="50px"
        meun[2].style.display="block"

    }
    liss[3].onmouseleave=function () {
        meun[2].style.zIndex="0";
        meun[2].style.top="70px"
        meun[2].style.display="none"

    }
}