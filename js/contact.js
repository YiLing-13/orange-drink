gsap.registerPlugin(ScrollTrigger);

const PcMedia = gsap.matchMedia();
PcMedia.add("((min-width: 992px))", () => {
    gsap.fromTo(".content_left", { x: -50, opacity: 0 }, {
        scrollTrigger: {
            trigger: ".content_left",
            toggleActions: "play none none none",
            start: "top 90%",
        },
        x: 0,
        duration: 1,
        ease: "power1.inOut",
        opacity: 1
    })

    gsap.fromTo(".content_right", { x: 50, opacity: 0 }, {
        scrollTrigger: {
            trigger: ".content_right",
            toggleActions: "play none none none",
            start: "top 90%",
        },
        x: 0,
        duration: 1,
        ease: "power1.inOut",
        opacity: 1
    })
})

const mobileMedia = gsap.matchMedia();
mobileMedia.add("((max-width: 991px))", () => {
    gsap.fromTo(".content_right", { y: 50, opacity: 0 }, {
        scrollTrigger: {
            trigger: ".content_right",
            toggleActions: "play none none none",
            start: "top 90%",
        },
        y: 0,
        duration: 1,
        ease: "power1.inOut",
        opacity: 1
    })
})
