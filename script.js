function page2animatiom(){


let tl = gsap.timeline()
tl.from("#img3",{
  y:400,
    duration:0.2,
    scrollTrigger :{
trigger:"#page2",
scroller:"body",
start:"top 70%",
end:"50% 50%",
scrub:1
    }
})

gsap.from("#img2",{
    y:600,
    duration:0.5,
    scrollTrigger :{
trigger:"#page2",
scroller:"body",
start:"top 70%",
end:"50% 50%",
scrub:1
    }
},"hello")
gsap.from("#img4",{
    y:600,
    duration:0.5,
    scrollTrigger :{
trigger:"#page2",
scroller:"body",
start:"top 70%",
end:"50% 50%",
scrub:1
    }
},"hello")

gsap.from("#img1",{
    y:600,
    duration:0.5,
    scrollTrigger :{
trigger:"#page2",
scroller:"body",
start:"top 70%",
end:"50% 50%",
scrub:1
    }
},"he")
gsap.from("#img5",{
    y:600,
    duration:0.5,
    scrollTrigger :{
trigger:"#page2",
scroller:"body",
start:"top 50%",
end:"50% 50%",
scrub:1
    }
},"he")
}

page2animatiom()


let tl2 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: '#page5',
        pin: true, 
        start: '50% 70%',
        end: '100% 60%', 
        scrub: 1, 
        duration:2
       
       
    }
});
tl2.to("#scroll-1",
{
    bottom:"60vh"

},'ff')

.to("#phone-image",{
    x:"-100%"
},'anim1')      
.to("#scroll-2",
{opacity:1
},'anim1')
.to("#scroll-1",
    {opacity:0
    },'ff')
.to("#scroll-2",
    {
        bottom:"60vh"
    })

.to("#scroll-3",
    {opacity:1
    },'anim2')
    .to("#phone-image",{
        x:"-200%"
    },'anim2')   
    .to("#scroll-2",
        {opacity:0
        })
        .to("#scroll-3",
            {
                bottom:"60vh"
            })


            .to("#scroll-3",
                {opacity:0
                })
                .to("#scroll-4",
                    {opacity:1
                    },'anim3') 
                    .to("#phone-image",{
                        x:"-300%"
                    },'anim3')   
              
                    var swiper = new Swiper(".mySwiper", {
                        spaceBetween: 30,
                        centeredSlides: true,
                        autoplay: {
                          delay: 3000,
                          disableOnInteraction: false,
                        },
                        pagination: {
                          el: ".swiper-pagination",
                          clickable: true,
                        },
                     
                      });                 