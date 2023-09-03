let Nav = document.getElementById("Nav");

function showMenu() {
    Nav.style.left = "0";
}
function hideMenu() {
    Nav.style.left = "-80%";
}

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });
// const scroll = new LocomotiveScroll(".main");

function navScroller(){
    const body = document.getElementById("Header");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if(currentScroll <= 0){
            body.classList.remove("scroll-up");
        }

        if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
        }

        if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
            body.classList.add("scroll-up");
            body.classList.remove("scroll-down");
        }



        lastScroll = currentScroll;
    });

}

// navScroller();