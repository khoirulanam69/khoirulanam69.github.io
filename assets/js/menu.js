window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


const li = document.querySelectorAll('header a');
const ul = document.querySelector('header ul')
li.forEach(
    element => element.addEventListener("click", (event) => {
        ul.querySelector('.active').classList.remove('active');
        event.target.classList.add('active');
        window.scrollTo({
            top: document.querySelector(event.currentTarget.getAttribute('href')).offsetTop-60,
            behavior: "smooth"
        });
        event.preventDefault();
    })
);


const about = document.querySelector('.btn-about');
about.addEventListener('click', (event)=>{
    window.scrollTo({
        top: document.querySelector(about.getAttribute('href')).offsetTop-60,
        behavior: "smooth"
    });
    event.preventDefault();
})