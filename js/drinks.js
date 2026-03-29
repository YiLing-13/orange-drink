document.addEventListener("DOMContentLoaded", (event) => {
    const img = document.querySelector(".drinks_img");
    const right_arrow = document.querySelector(".right_arrow");
    const left_arrow = document.querySelector(".left_arrow");
    const left_arrow_rwd = document.querySelector(".left_arrow_rwd");
    const right_arrow_rwd = document.querySelector(".right_arrow_rwd");
    const bottom_title = document.querySelector(".bottom_title");
    const bottom_content = document.querySelector(".bottom_content");


    const bottomTop = gsap.timeline({ repeat: -1 });
    bottomTop

        .to(".bottom_top_text", { y: -20, duration: 1, stagger: 0.2, ease: "power1.inOut" })
        .to(".bottom_top_text", { y: 0, duration: 1, stagger: 0.2, ease: "power1.inOut" }, "-=0.3")

    // let topTop = gsap.timeline({ repeat: -1 });

    // topTop
    //     .to(".TOP", { y: -20, duration: 0.5, stagger: 0.1, ease: "power1.inOut" })
    //     .to(".TOP", { y: 0, duration: 0.5, stagger: 0.1, ease: "power1.inOut" }, "-=0.3")
    
    
    // scroll-------------------------------------------------------------------------
    gsap.registerPlugin(ScrollTrigger);

    const PCmedia = gsap.matchMedia();
    PCmedia.add("(min-width: 576px)", () => {
        gsap.fromTo(".top_left", { rotate: -5, scale: 1.4 }, {
            scale: 1.5,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        })

        gsap.fromTo(".top_right", {x:100, opacity: 0 }, {
        scrollTrigger: {
            trigger: ".top_right",
            toggleActions: "play none none none",
            start: "top 90%",
        },
        x:0,
        duration: 1.5,
        ease: "power1.inOut",
        opacity:1
    })
    })

    const mobileMedia = gsap.matchMedia();
    mobileMedia.add("(max-width: 576px)",()=>{
        gsap.fromTo(".top_left", { y: 50, opacity: 0 }, {
        scrollTrigger: {
            trigger: ".top_left",
            toggleActions: "play none none none",
            start: "top 90%",
        },
        y: 0,
        duration: 1.5,
        ease: "power1.inOut",
        opacity: 1
    })
    gsap.fromTo(".top_title", { y: 50, opacity: 0 }, {
        scrollTrigger: {
            trigger: ".top_title",
            toggleActions: "play none none none",
            start: "top 100%",
        },
        y: 0,
        duration: 1.5,
        ease: "power1.inOut",
        opacity: 1,
        delay:0.3
    })
    gsap.fromTo(".top_content", { y: 50, opacity: 0 }, {
        scrollTrigger: {
            trigger: ".top_content",
            toggleActions: "play none none none",
            start: "top 100%",
        },
        y: 0,
        duration: 1.5,
        ease: "power1.inOut",
        opacity: 1,
        delay:0.3
    })
    })

    gsap.fromTo(".bottom", { y: 100, opacity: 0 }, {
        scrollTrigger: {
            trigger: ".bottom",
            toggleActions: "play none none none",
            start: "top 90%",
        },
        y: 0,
        duration: 1.5,
        ease: "power1.inOut",
        opacity: 1
    })
    // ---------------------slide---------------------------
    const drinks = [
        {
            img_pc: "/images/featured-drinks/2.webp",
            img_mobile: "/images/featured-drinks/phone/2.webp",
            name: "橙香氣泡飲",
            content: "「輕盈氣泡包裹著清新橙香，帶來滿滿清新能量！嚴選新鮮橙汁調製，無負擔的微甜氣泡，讓每一口都充滿活力與驚喜。」"
        },
        {
            img_pc: "/images/featured-drinks/3.webp",
            img_mobile: "/images/featured-drinks/phone/3.webp",
            name: "果粒橙飲",
            content: "「真實果粒與鮮榨橙汁完美結合，每一口都喝得到自然果肉的口感與甘甜，層次豐富又滿足！」"
        },
        {
            img_pc: "/images/featured-drinks/2-1.webp",
            img_mobile: "/images/featured-drinks/phone/2-1.webp",
            name: "橙果冰茶",
            content: "「清香茶韻融合自然橙香，帶出細緻層次的絕妙平衡！嚴選茶葉與新鮮果汁調配，讓你在每一口中感受清新與果香交織的美好。」"
        },
        {
            img_pc: "/images/featured-drinks/6.webp",
            img_mobile: "/images/featured-drinks/phone/6.webp",
            name: "柳橙冰茶",
            content: "「以清爽茶底結合鮮橙果香與蜂蜜甜韻。每一口都帶來自然果香與沁涼茶感，讓日常多一點輕柔療癒。」"
        }
    ];

    let isAnimating = false;
    let tl;
    function render() {

        if (tl) {
            tl.kill();
        }

        if (isAnimating) return;
        isAnimating = true;

        const newImgSrc = getImg(drinks[0]);
        const preloadImg = new Image();

        preloadImg.onload = () => {
            tl = gsap.timeline({
                onComplete: () => {
                    isAnimating = false;
                }// 如果在這時間軸動畫結束做什麼事情
            });
            tl.clear();

            tl.to(".drinks_img", { opacity: 0, duration: 0.2, ease: "power1.inOut" });
            tl.to(".bottom_title", { opacity: 0, duration: 0.2, ease: "power1.inOut" }, "<0.1");
            tl.to(".bottom_content", { opacity: 0, duration: 0.2, ease: "power1.inOut" }, "<0.2");

            tl.add(() => {
                img.src = newImgSrc;
                bottom_title.textContent = drinks[0].name;
                bottom_content.textContent = drinks[0].content;
            }, "-=0.2")

            tl.to(".drinks_img", { opacity: 1, duration: 0.3, ease: "power1.inOut" }, "+=0.1");
            tl.to(".bottom_title", { opacity: 1, duration: 0.5, ease: "power1.inOut" }, "<0.1");
            tl.to(".bottom_content", { opacity: 1, duration: 0.5, ease: "power1.inOut" }, "<0.2");
        }

        preloadImg.src = newImgSrc;
        // 圖片下載好了存進去newImgsrc 然後回頭呼叫onload執行動畫

    }

    function getImg(item) {
        return window.innerWidth <= 768 ? item.img_mobile : item.img_pc;
    }

    function next() {
        const first = drinks.shift();
        drinks.push(first);
    }

    function prev() {
        const last = drinks.pop();
        drinks.unshift(last);
    }

    let autoslider = gsap.timeline({ repeat: -1, duration: 5 });
    autoslider.call(() => {
        next();
        render();
    })

    let delay;
    right_arrow.addEventListener("click", () => {
        if (delay) delay.kill();
        autoslider.pause();
        // 暫停自動輪播

        if (isAnimating) return;
        next();
        render();

        delay = gsap.delayedCall(5, () => {
            autoslider.resume();
            // 5秒後恢復
        })
    });

    right_arrow_rwd.addEventListener("click", () => {
        if (delay) delay.kill();
        autoslider.pause();
        // 暫停自動輪播

        if (isAnimating) return;

        next();
        render();

        delay = gsap.delayedCall(5, () => {
            autoslider.resume();
            // 5秒後恢復
        })
    });

    left_arrow.addEventListener("click", () => {
        if (delay) delay.kill();
        autoslider.pause();
        // 暫停自動輪播

        if (isAnimating) return;

        prev();
        render();

        delay = gsap.delayedCall(5, () => {
            autoslider.resume();
            // 5秒後恢復
        })
    });

    left_arrow_rwd.addEventListener("click", () => {
        if (delay) delay.kill();
        autoslider.pause();
        // 暫停自動輪播

        if (isAnimating) return;

        prev();
        render();

        delay = gsap.delayedCall(5, () => {
            autoslider.resume();
            // 5秒後恢復
        })
    });




});