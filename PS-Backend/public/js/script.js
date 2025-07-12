let navBarElePS = document.querySelectorAll(".PSchild-3") ;

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