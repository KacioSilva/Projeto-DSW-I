 var header = document.getElementById('.header');
 var navgationHeader = document.getElementById('navigationHeader');
 var content = document.getElementById('main');
 var showSideBar = false;

function toogleSidebar(){
    showSideBar =! showSideBar;
    console.log(showSideBar);

    if(showSideBar){
        navgationHeader.style.marginLeft= '-10vw';
        navgationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)'; 
             
    }

    else{
        navgationHeader.style.marginLeft = '-100vw';
        navgationHeader.style.animationName = '';
        content.style.filter = ''; 
    }
    
}
function closeSidebar(){
    if(showSideBar){
        toogleSidebar();
    }
}
window.addEventListener('resize', function(event){
    if(this.window.innerWidth > 768 && showSideBar){
      toogleSidebar(); 
    }
})