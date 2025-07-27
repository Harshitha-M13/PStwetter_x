// in refers to input
let inUsernamePS = document.querySelector("#username") ;
let inPostMesPS = document.querySelector("#postMessage") ;
let inProfilePicPS = document.querySelector("#profilePicPS") ;
let inPostImagePS = document.querySelector("#postImage") ;
let form = document.querySelector("form") ;

form.addEventListener("submit" , (event) => {
    event.preventDefault() ;
    console.dir(event) ;
    if(inUsernamePS.value) {
        if(inPostMesPS.value) {
            if(inProfilePicPS.value) {
                if(inPostImagePS.value) {
                    console.log(`ParvatiammaShivappa says , data is being proceeded to be stored`) ;
                    form.submit() ;
                }
                else {
                    console.log(`ParvatiammaShivappa says , please fill in the details , else the post will not contain any image`) ;
                }
            }
            else {
                alert(`ParvatiammaShivappa says , please fill in the details , else the profile image will be un-updated`) ;
            }
        }
        else {
            alert(`ParvatiammaShivappa says , please fill the Post Message , if not the post Message would be ${inPostMesPS.value}`) ;
        }
    }
    else {
        alert("ParvatiammaShiappa says , please enter the details , it is neccessary to create new posts") ;
    }
});