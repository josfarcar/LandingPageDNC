var leonardo = window.document.getElementById("leo")
var samantha = window.document.getElementById("sama")
var bruna = window.document.getElementById("bruna")
var setad = window.document.getElementById("setad")
var setae = window.document.getElementById("setae")

function Turnright(){
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setad.style ="display:none"
    setae.style ="display:flex;margin-top:140px"
}
function Turnleft(){
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    setad.style ="display:flex"
    setae.style ="display:none"
}