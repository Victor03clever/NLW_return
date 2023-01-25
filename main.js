function onScroll() {
  backToTopButton.classList.toggle('show',scrollY>1200)
  nav.classList.toggle("scroll", scrollY > 40)

  const navLinks = document.querySelectorAll('#main li a');
    const section = document.querySelectorAll('section,#home');
    let current='';
    section.forEach(sec =>{
        const secTop = sec.offsetTop;
        const secheight = sec.clientHeight
        if(this.scrollY + 50 >= secTop)
        {
            current= sec.getAttribute('id')
        }

    })

    navLinks.forEach(nav => {
        
        if(nav.classList.contains(current))
        {
            nav.classList.add('actived')
        }else{
          nav.classList.remove('actived');
        }
    console.log(nav)

    })
    console.log(current)
}
// obs: nav e um identificador unico


const openNav = document.querySelector(".open-menu");
  openNav.addEventListener("click", function () {
  document.body.classList.add("menu-expanded");
});

const closeNav = document.querySelector(".close-menu");
closeNav.addEventListener("click", function () {
  document.body.classList.remove("menu-expanded");
});

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}






ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,#about header,#about img,
#contacts, #contacts h2, #contacts img`);
