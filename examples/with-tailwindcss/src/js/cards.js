import './../css/style.scss'
//für die Karten
const wrapper = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');

wrapper.addEventListener('mousemove', function ($event){
    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        const x = $event.clientX - rect.left;
        const y = $event.clientY - rect.top;

        card.style.setProperty('--xpos', `${x}px`);
        card.style.setProperty('--ypos', `${y}px`);
    });

});

