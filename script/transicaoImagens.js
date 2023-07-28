function slider (anything){
    document.querySelector ('.celularAmostra') .src = anything;
};

let menu = document.querySelector ('.btnIconHeader');
let navbar = document.querySelector ('.navigationHeader');

menu.onclick = () => {
menu.classList.toggle ('bx-x');
navbar.classList.toggle ('open');
}
