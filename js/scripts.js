/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('software engineer.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("creative thinker.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("problem solver.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("communicator.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("collaborator.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("self-starter.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("thank you for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .start();

});