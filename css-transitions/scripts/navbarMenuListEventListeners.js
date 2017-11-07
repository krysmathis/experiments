/**
    * Hamburger Menu
    * That will look like something interesting
    */
const addNavbarMenuEventListeners = function() {
    const menu = document.querySelector(".menu-list"); 
    document.querySelector(".menu-col").addEventListener("click", ()=>{
    
        const displayStyle = menu.style.display;
        if (displayStyle === "none" || displayStyle === "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
    
    document.querySelector(".menu-list").addEventListener("click", ()=>{
        
        const displayStyle = menu.style.display;
        if (displayStyle === "none" || displayStyle === "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
    
    /**
     * If the user resizes the window the drop down menu will disappear
     */
    window.addEventListener("resize", () => {
        menu.style.display = "none";
    });
};

module.exports = addNavbarMenuEventListeners;