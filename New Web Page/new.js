   //   -------------------         ABOUT ME javascript ----------------------  //

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for(linktab of tablinks){                                 //linktab is just a word im used it, It's not a key word but  (tablinks are the variable we asigned it) 
        linktab.classList.remove("active-link");
    }
    for(content of tabcontents){                             //content is just a word im used it, It's not a key word  but  (tabcontents are the variable we asigned it)
        content.classList.remove("active-tab");
    }
   event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



//  -----------------------  to open a side menu ----------------------------  //

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right="0";
}
function closemenu() {
    sidemenu.style.right="-200px";

}
