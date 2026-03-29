const heroImg = document.querySelector(".drink_wrap >img");
const about_img = document.querySelector(".about_img");

const map = document.querySelector("#map_img");
const store_img = document.querySelector(".store_img");

const mainimg = document.querySelector(".mainimg");
const title = document.querySelector(".title");
const content = document.querySelector(".content");

const featured_right_content = document.querySelector(".featured_right_content");
const nextBtn = document.querySelector("#next");
const next_rwd = document.querySelector("#next_rwd");
const prevBtn = document.querySelector("#prev");
const bg1 = document.querySelector("#bg1");
const bg2 = document.querySelector("#bg2");
const bg3 = document.querySelector("#bg3");
const bg4 = document.querySelector("#bg4");

if (window.innerWidth <= 768) {
    heroImg.src = 'images/hero/phone/banner_drink.avif';
    about_img.src = 'images/index_about/phone/about2.avif';
} else {
    heroImg.src = 'images/hero/banner_drink.webp';
    about_img.src = 'images/index_about/about2.webp';
}

store_img.addEventListener("mousemove", (e) => {
    const { offsetWidth: width, offsetHeight: height } = store_img;
    const { offsetX: x, offsetY: y } = e;

    const rotateX = ((x / width) - 0.5) * -20;
    const rotateY = ((y / height) - 0.5) * 20;

    map.style.setProperty('--ry', `${rotateY}deg`);
    map.style.setProperty('--rx', `${rotateX}deg`);
});

store_img.addEventListener("mouseleave", (e) => {
    map.style.setProperty('--ry', `0deg`);
    map.style.setProperty('--rx', `0deg`);
});

const drinks = [
    {
        img_pc: "images/featured-drinks/1.webp",
        img_mobile: "images/featured-drinks/phone/1.webp",
        name: "鮮橙日光冰沙",
        content: "「每一口都是陽光的味道，新鮮現打橙汁搭配沁涼冰沙，清爽又解渴，橘子工廠招牌必喝！每日現榨，天然無添加，讓你喝得到果實的甘甜與活力。」"
    },
    {
        img_pc: "images/featured-drinks/2.webp",
        img_mobile: "images/featured-drinks/phone/2.webp",
        name: "橙香氣泡飲",
        content: "「輕盈氣泡包裹著清新橙香，帶來滿滿清新能量！嚴選新鮮橙汁調製，無負擔的微甜氣泡，讓每一口都充滿活力與驚喜。」"
    },
    {
        img_pc: "images/featured-drinks/3.webp",
        img_mobile: "images/featured-drinks/phone/3.webp",
        name: "果粒橙飲",
        content: "「真實果粒與鮮榨橙汁完美結合，每一口都喝得到自然果肉的口感與甘甜，層次豐富又滿足！」"
    },
    {
        img_pc: "images/featured-drinks/2-1.webp",
        img_mobile: "images/featured-drinks/phone/2-1.webp",
        name: "橙果冰茶",
        content: "「清香茶韻融合自然橙香，帶出細緻層次的絕妙平衡！嚴選茶葉與新鮮果汁調配，讓你在每一口中感受清新與果香交織的美好。」"
    },
    {
        img_pc: "images/featured-drinks/6.webp",
        img_mobile: "images/featured-drinks/phone/6.webp",
        name: "柳橙冰茶",
        content: "「以清爽茶底結合鮮橙果香與蜂蜜甜韻，入口輕盈順口，酸甜平衡、清新不膩。每一口都帶來自然果香與沁涼茶感，讓日常多一點輕柔療癒。」"
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

    let newImgSrc = getImg(drinks[0]);
    let preloadImg = new Image();
    preloadImg.onload = () => {
        tl = gsap.timeline({
            onComplete: () => {
                isAnimating = false;
            }
        });

        tl.clear();
        tl
            .to(".mainimg", { opacity: 0, duration: 0.3, ease: "power1.inOut" })
            // .to(".title", { opacity: 0, duration: 0.2, ease: "power1.inOut" }, "<")
            // .to(".content", { opacity: 0, duration: 0.2, ease: "power1.inOut" }, "<")


            .add(() => {
                mainimg.src = newImgSrc;
                title.textContent = drinks[0].name;
                content.textContent = drinks[0].content;
            }, ">")

            .to(".mainimg", { opacity: 1, duration: 0.3, ease: "power1.inOut" }, "+=0.1")
        // .to(".title", { opacity: 1, duration: 0.2, ease: "power1.inOut" }, "<")
        // .to(".content", { opacity: 1, duration: 0.2, ease: "power1.inOut" }, "<")

        bg1.src = getImg(drinks[1]);
        bg2.src = getImg(drinks[2]);
        bg3.src = getImg(drinks[3]);
        bg4.src = getImg(drinks[4]);
    }

    preloadImg.src = newImgSrc;
}

function getImg(item) {
    return window.innerWidth <= 768 ? item.img_mobile : item.img_pc;
}

let autoslide = gsap.timeline({ repeat: -1, duration: 5 });
autoslide.call(() => {
    const first = drinks.shift();// 第一個移除
    drinks.push(first);
    // 放到最後

    render();
})

let delay;

nextBtn.addEventListener("click", () => {
    if (delay) delay.kill();
    if (isAnimating) return;
    autoslide.pause();

    const first = drinks.shift();// 第一個移除
    drinks.push(first);
    // 放到最後

    render();

    delay = gsap.delayedCall(5, () => {
        autoslide.resume();
    })

});

prevBtn.addEventListener("click", () => {
    if (delay) delay.kill();
    if (isAnimating) return;
    autoslide.pause();

    const last = drinks.pop();// 最後一個移除
    drinks.unshift(last);
    // 放到最前

    render();

    delay = gsap.delayedCall(5, () => {
        autoslide.resume();
    })
});

next_rwd.addEventListener("click", () => {
    if (delay) delay.kill();
    if (isAnimating) return;
    autoslide.pause();

    const first = drinks.shift();// 第一個移除
    drinks.push(first);
    // 放到最後
    render();

    delay = gsap.delayedCall(5, () => {
        autoslide.resume();
    })

});

gsap.to(".marquee_track", {
    x: -500,
    duration: 10,
    repeat: -1,
    ease: "linear"
})

// ---------------scroll---------------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".featured-drinks",{y:100}, {
    scrollTrigger: {
        trigger: ".featured-drinks",
        toggleActions: "play none none none",
        start: "top 100%",
    },
    y: 0,
    duration: 1,
    opacity: 1
})

gsap.fromTo(".about",{y:100},{
    scrollTrigger: {
        trigger: ".about",
        toggleActions: "play none none none",
        start: "top 100%",
    },
    y: 0,
    duration: 1,
})

gsap.fromTo(".about_bg",{opacity:0}, {
    scrollTrigger: {
        trigger: ".about_bg",
        toggleActions: "play none none none",
        start: "top 100%",
    },
    y: -50,
    duration: 2,
    opacity: 1,
    delay: 0.2
})

gsap.fromTo(".store_taiwan", {x:-500},{
    scrollTrigger: {
        trigger: ".store_taiwan",
        toggleActions: "play none none none",
        start: "top 100%",
    },
    x: 0,
    duration:1.5,
    ease : "power2.inOut"
})

gsap.fromTo(".store_store", {x:400},{
    scrollTrigger: {
        trigger: ".store_store",
        toggleActions: "play none none none",
        start: "top 100%",
    },
    x: 0,
    duration:1.5,
    ease : "power2.inOut"
})

// gsap.fromTo(".store_img",{opacity:0},{
//     scrollTrigger:{
//         trigger:".store_img",
//         toggleActions: "restart none none none",
//         start: "top 80%",
//     },
//     duration:1,
//     opacity:1,
// })