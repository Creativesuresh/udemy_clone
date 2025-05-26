var owl = $('#owl-banner');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

$('#owlskillcourse').owlCarousel({
    stagePadding: 50,
    loop:true,
    dots:false,
    margin:20,
    responsiveClass:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },

        500:{
            items:2
        },

        700:{
            items:3
        },
        
        980:{
            items:4
        },
        1200:{
            items:5
        },
        1400:{
            items:6
        }
    }
})

$('#owl__skillblock').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
      
        580:{
            items:2
        },
   
        865:{
            items:3,
            nav:false
        },

        1150:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$('#our__sponsor--slider').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    items:4,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:false
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:8,
            nav:false,
            loop:false
        }
    }
})

$('#owl__learingblock').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    items:4,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
      
        580:{
            items:2
        },
   
        865:{
            items:3,
            nav:false
        },

        1160:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$('#testimonial').owlCarousel({
    loop:true,
    margin:20,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        800:{
            items:3,
            nav:false
        },
        1100:{
            items:4,
            nav:false,
            loop:false
        }
    }
})

$('#owl__business').owlCarousel({
    items:1,
    loop:true,
    dots:false,
    nav:true,
    items:1,
    responsiveClass:true,
})



/* Mobile Menu Script Start */
$(document)
.off("click", ".trigger__menunav--act")
.on("click", ".trigger__menunav--act", function (e) {
  
  e.stopPropagation();
  $("body").toggleClass("mbl__hiden");
  $(".mobile__menu").toggleClass("active");
});
  $(document).click(function (e) {
    if (!$(e.target).is(".trigger__menunav--act, .menu, .menu * ")) {
      if ($(".menu").is(":visible")) {
        $(".mobile__menu").removeClass("active");
        $("body").removeClass("mbl__hiden");
      }
    }
  });

  class Accordion {
  constructor(element) {
    this.element = element;
    this.buttons = this.initializeAccordions();
    this.addListeners();
  }
  initializeAccordions() {
    if (!this.element) {
      throw new Error("You must pass an ID before initializing");
    }
    return [...this.element.querySelectorAll(".accordion__button")];
  }

  activateContent(e) {
    const button = e.target;
    const contentId = button.getAttribute("aria-controls");
    const content = document.getElementById(contentId);
    const expanded = button.getAttribute("aria-expanded") === "true";

    // Toggle the aria-expanded state of the button
    button.setAttribute("aria-expanded", !expanded);
  }

  // Add event listeners to each accordion button
  addListeners() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", this.activateContent.bind(this));
    });
  }
}

// Initialize each accordion instance
const accordions = document.querySelectorAll("[data-accordion-item]");
accordions.forEach((element) => {
  new Accordion(element);
});



