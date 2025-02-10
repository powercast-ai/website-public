document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolling');
    }   else {
        header.classList.remove('scrolling');
    }
    })


