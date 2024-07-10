// IIEF immediately invoked expression function
(()=>{
    const openNavMenu = document.querySelector('.open-nav-menu');
    const closeNavMenu = document.querySelector('.close-nav-menu');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const mediaSize = 991;

    openNavMenu.addEventListener('click', toggleNav);
    closeNavMenu.addEventListener('click', toggleNav);

    // close the nav menu by clicking outside
    menuOverlay.addEventListener('click', toggleNav);

    function toggleNav(){
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    };

    navMenu.addEventListener('click', (e)=>{
       if(e.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize){
        e.preventDefault();
        const menuItemHasChildren = e.target.parentElement;
        console.log(menuItemHasChildren);

        //if menuhaschildren has already been expanded
        if(menuItemHasChildren.classList.contains("active")){
            collapseMenu();
        }else{

        // collapse existing collapsable menu
        if(navMenu.querySelector('.menu-item-has-children.active')){
            collapseMenu();
        }
        menuItemHasChildren.classList.add("active");
        const subMenu = document.querySelector('.sub-menu');
        subMenu.style.maxHeight = subMenu.scrollHeight + "px"; 
       }  
    }
    });

    function collapseMenu(){
        navMenu.querySelector('.menu-item-has-children.active .sub-menu')
        .removeAttribute("style");
        navMenu.querySelector('.menu-item-has-children.active')
        .removeAttribute("active");
    }

    function resizeFix(){
        if(navMenu.classList.contains("open")){
            toggleNav();
        }
        if(navMenu.querySelector('.menu-item-has-children.active')){
            collapseMenu();
        }
    }

    window.addEventListener("resize", function(){
        if(this.innerWidth > mediaSize){
            resizeFix();
        }
    })


})();
