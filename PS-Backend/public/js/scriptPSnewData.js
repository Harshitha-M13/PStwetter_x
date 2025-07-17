let textareaPS = document.querySelector("#updateMessage") ;
let inputPS = document.querySelector("#updatePostImg") ;


if(textareaPS.value) {
    let postMesPS = textareaPS.value ;
    if(inputPS.value) {
        let postImgAddPS = inputPS.value ;
    }
    else {
        alert(`Please enter the Post image address`) ;
    }
}
else {
    alert(`Please enter the Post Message`) ;
}
