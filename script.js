var currentTitle = '';
var index = '<span class="project-title index-text">Index</span><span class="vs-dot index-text">.</span>';
var massimo = '<span class="project-title massimo-text">Massimo&#39;s</span><span class="vs-dot massimo-text">.</span>';
var echoroom = '<span class="project-title echoroom-text">EchoRoom</span><span class="vs-dot echoroom-text">.</span>';
var designMuseum = '<span class="project-title designmuseum-text">Design Museum</span><span class="vs-dot designmuseum-text">.</span>';
var instance = new TypeIt('.type-project-title', {
    strings: index,
    cursor: false,
    startDelete: false,
    startDelay: 600
});
var navWidth = '0';
var breakWidth = 900;
$(document).ready(()=>{
    
});
document.addEventListener('DOMContentLoaded',function(event){
    $(this).find('.ti-cursor').addClass('is-hidden');
});

 /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
   function openNav() {
    var screenWidth = screen.width;
       if (screenWidth > breakWidth){
            navWidth = '40vw';
       } else {
            navWidth = '100vw';
       };
    document.getElementById("nav-side-menu").style.width = navWidth;
    
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("nav-side-menu").style.width = "0";
}

    $('.nav-menu-link').on('mouseover', event =>{
        $(event.currentTarget).children('span').removeClass('bracket');
    });

    $('.nav-menu-link').on('mouseleave', event =>{
        $(event.currentTarget).children('span').addClass('bracket');
    });

      $("button").on('click', event =>{
        var target = $(event.currentTarget).data("target");
        
        switch(target){
            case '#index':
                if (currentTitle !== index){
                    instance.empty().type(index);
                    currentTitle = index;
                };  
            break;
            case '#echoroom':
                if (currentTitle !== echoroom){
                    instance.empty().type(echoroom);
                    currentTitle = echoroom;
                }; 
            break;
            case '#massimo':
                if (currentTitle !== massimo){
                    instance.empty().type(massimo);
                    currentTitle = massimo;
                };
            break;
            case '#design-museum':
                if (currentTitle !== designMuseum){
                    instance.empty().type(designMuseum);
                    currentTitle = designMuseum;
                };
        }   
        
        $(target).siblings().removeClass('active-project');
        $(target).addClass("active-project"); 
        $(target).find('.ti-cursor').addClass('is-hidden');
        $(target).find('.project-img-container').addClass("img-animation"); 
        $(target).find('.project-btn').addClass('project-btn-animation');
        $(event.currentTarget).addClass('active-link');
        $(event.currentTarget).siblings().removeClass('active-link');
    });
