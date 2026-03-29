

gsap.fromTo(".orange", { rotate: 0, y: 0 }, {
    y: -10,
    rotate: 5,
    duration: 1.5,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
})

// 布幕動畫
const startImg = document.querySelector(".start_orange");
const startTl = gsap.timeline({ delay: 0.25 });
startTl
    // .to(".start_orange", {
    //     rotate: -20,
    //     duration: 0.5,
    //     ease: "power2.inOut",
    // })

    // .add(() => {
    //     startImg.src = "/images/orange-1.png";
    // }, "-=0.25")

    // .to(".start_orange", {
    //     rotate: 0,
    //     duration: 0.5,
    //     ease: "power2.inOut"
    // }, ">")

    .add(async () => {
        startTl.pause();
        const imgs = document.querySelectorAll("img");
        //  Array.from把「類陣列」變成真正的「陣列」 因為imgs回傳是NodeList 不是陣列
        // map 把「陣列裡每一個東西」拿出來處理，然後回傳一個新的陣列
        const promises = Array.from(imgs).map((item) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = item.src;

                img.onload = resolve;
                img.onerror = resolve;

                if (img.complete) resolve();
            });
        });

        await Promise.all(promises);
        startTl.resume();
    })

    .fromTo(".start_bg", { yPercent: 0 }, {
        yPercent: -100,
        duration: 1,
        ease: "power2.inOut"
    },"+=1")


    .fromTo(".start_group", { yPercent: 0 }, {
        yPercent: -100,
        duration: 1,
        ease: "power2.inOut",
    }, "-=0.95")

    .add(() => {
        const start_ani = document.querySelector(".start_ani");
        start_ani.style.display = "none";
    }, ">")


