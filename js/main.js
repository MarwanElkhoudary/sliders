let slideIndex = 0;

const showSlide = () => {
    const slides = document.getElementsByClassName('myslider');
    const dots = document.getElementsByClassName('dot');

    for(let i=0; i<slides.length; i++) {
        slides[i].style.display = 'none';
    }


    for(let i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }
    
    slideIndex++;

    if (slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';

    setTimeout( showSlide ,3000)
}

showSlide();