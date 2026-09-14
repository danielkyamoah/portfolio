const navList = document.getElementById("nav-links");
const navItems =  document.querySelectorAll('.nav-links a');
const hamburBtn = document.getElementById("hamburger-menu");



function toggleMenu () {
    navList.classList.toggle('active');
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active')
        })
    })

}

hamburBtn.addEventListener('click', toggleMenu);



