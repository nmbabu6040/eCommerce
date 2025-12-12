$('.productSlider').owlCarousel({
    loop:true,
    margin:30,
    items:4,
    smartSpeed: 500,
    nav: true,
    navText:['<i class="fas fa-angle-left fs-1"></i>','<i class="fas fa-angle-right fs-1"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3,
            
        },
        1000:{
            items:4,
           
        }
    }
})


$('.arraivleSlider').owlCarousel({
    loop:true,
    margin:20,
    items:5,
    smartSpeed: 500,
    nav: true,
    navText:['<i class="fas fa-angle-left fs-1"></i>','<i class="fas fa-angle-right fs-1"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3,
            
        },
        1000:{
            items:5,
           
        }
    }
})


$('.clientSlider').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    smartSpeed: 500,
    nav: true,
    navText:['<i class="fas fa-angle-left fs-1"></i>','<i class="fas fa-angle-right fs-1"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
            
        },
        1000:{
            items:1,
           
        }
    }
})


$('.blogSlider').owlCarousel({
    loop:true,
    margin:30,
    items:3,
    smartSpeed: 500,
    nav: true,
    navText:['<i class="fas fa-angle-left fs-1"></i>','<i class="fas fa-angle-right fs-1"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
           
        }
    }
})


$('.brandPartSlider').owlCarousel({
    loop:true,
    margin:10,
    items:6,
    smartSpeed: 500,
    autoplay: true,
    nav: true,
    navText:['<i class="fas fa-angle-left fs-1"></i>','<i class="fas fa-angle-right fs-1"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        576:{
            items:3,
            
        },
        1000:{
            items:6,
           
        }
    }
})


window.addEventListener("scroll", function () {
    let fxBtn = document.getElementById("fxButton");

    if (window.scrollY > 200) {
        fxBtn.classList.add("active");   // spelling ঠিক
    } else {
        fxBtn.classList.remove("active");
    }
});


	
new DataTable('#example');