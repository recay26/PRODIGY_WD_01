const swiper = new Swiper('.swiper', {
    slidesPerView: 3,  // Affiche 3 slides à la fois
    spaceBetween: 30,  // Espace entre chaque slide
    loop: false,  // Pas de boucle infinie (pour s'assurer que la première slide commence visible)

    // Défilement un slide à la fois
    slidesPerGroup: 1,  // Se déplace d'un slide à chaque défilement

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation flèches
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },

    // Activer le premier slide visible avec les deux suivants
    initialSlide: 0,  // Démarrer avec la première slide (index 0)
});
