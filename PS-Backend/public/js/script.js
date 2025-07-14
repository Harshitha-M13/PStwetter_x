let navBarElePS = document.querySelectorAll(".PSchild-3") ;
let topNavElePS = document.querySelectorAll(".topNavElePS") ;

for(let i = 0 ; i < navBarElePS.length ; i++) {
    navBarElePS[i].addEventListener("click" , () => {
        navBarElePS.forEach((ele) => {
            ele.children[0].style = "color : #3B3C3C" ;
            ele.children[1].classList.remove("PS-click-bold") ;
        });
        navBarElePS[i].children[0].style = "color : #000" ;
        navBarElePS[i].children[1].classList.add("PS-click-bold") ;
    });
}
for(let i = 0 ; i < topNavElePS.length ; i++) {
    topNavElePS[0].children[1].classList.remove("rm-ele-PS") ;
    topNavElePS[i].addEventListener("click" , () => {
        topNavElePS.forEach((ele) => {
            ele.children[1].classList.add("rm-ele-PS") ;
        });
        topNavElePS[i].children[1].classList.remove("rm-ele-PS") ;
    });
}