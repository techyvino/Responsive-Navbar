const navSlide = () => {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav-links");
    const navList = document.querySelectorAll(".nav-links li")


    menu.addEventListener("click", ()=>{
        nav.classList.toggle("nav-active");
        
        navList.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade .5s ease forwards ${index/5 + 0.2}s`
            }
        });
        menu.classList.toggle("toggle");
    });
}
navSlide();