function getDark() {
    var btn = document.getElementsByClassName('dark');
    console.log(btn[0]);
    btn[0].style.visibility = "visible";
}

document.addEventListener("click", getDark());