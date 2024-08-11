import './../css/style.scss'

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');          
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((el) =>  observer.observe(el));
const hiddenElementsRight = document.querySelectorAll('.hidden-right');
hiddenElementsRight.forEach((el) =>  observer.observe(el));
const hiddenElementsTop = document.querySelectorAll('.hidden-top');
hiddenElementsTop.forEach((el) =>  observer.observe(el));
const hiddenElementsBottom = document.querySelectorAll('.hidden-bottom');
hiddenElementsBottom.forEach((el) =>  observer.observe(el));

