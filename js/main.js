/**
 * Descrizione:
Partendo dalla struttura base, allegata sotto, rifare l’esercizio dello slider come fatto insieme in classe.
In allegato con la base con HTML e CSS trovate anche un file con i dati necessari per lo slider.
Bonus
Applicare l’autoplay allo slider: ogni 3 secondi cambia immagine automaticamente.
Docs
Introduzione: https://vuejs.org/v2/guide/index.html
Conditionals e loops: https://vuejs.org/v2/guide/index.html#Conditionals-and-Loops
Class binding (toggle dinamico di una classe): https://vuejs.org/v2/guide/class-and-style.html

 */


/*
 * Vue Slider
 */

const app = new Vue({
    el: '#root',
    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title:
                    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
        ],
        activeSlide: 0,
    },
    created() {
        
        /**
         * Changing slide every 3 seconds
         */
        
        setInterval(() => {
            this.activeSlide++;
            if(this.activeSlide > this.slides.length - 1) {
                this.activeSlide = 0;
            };
        }, 3000);


    },
    methods: {

        /**
         * Previous slide
         */

        prevSlide() {
            this.activeSlide--;

            if(this.activeSlide < 0) {
                this.activeSlide = this.slides.length - 1;
            };
        },

        /**
         * Next slide
         */

        nextSlide() {
            this.activeSlide++;

            if(this.activeSlide > this.slides.length - 1) {
                this.activeSlide = 0;
            };
        },

        /**
         * Set slide on click
         */

        slideClick(slideIndex) {
            this.activeSlide = slideIndex;
        }, 
    },
});