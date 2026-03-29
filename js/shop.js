const img_zoomIn = document.querySelector(".img_zoonIn");
const imgbox = document.querySelector(".img_box");
const imgbox_img = document.querySelector("#imgbox_img");
const roller_box_top = document.querySelector(".roller_box-top")

const btn = document.querySelectorAll(".btn");
const list_rwd = document.querySelector(".list_rwd");

const button_area = document.querySelector(".button_area");
const roller = document.querySelector(".roller");

const list_item = document.querySelector(".list_item")

const btnAreas = document.querySelectorAll(".btn_area");


const allshop = {
    north: [
        {
            shop: "新莊果香店",
            area: "新北市",
            tel: "02-29904567",
            address: "新北市新莊區果香路 88 號",
            img: "images/shop/shop1.webp",
        },
        {
            shop: "中和晨橙店",
            area: "新北市",
            tel: "02-22436789",
            address: "新北市中和區晨橙街 256 號",
            img: "images/shop/shop2.webp",
        },
        {
            shop: "板橋橘光店",
            area: "新北市",
            tel: "02-29681234",
            address: "新北市板橋區橘光路一段 128 號",
            img: "images/shop/shop3.webp",
        },
        {
            shop: "新竹橙町店",
            area: "新竹市",
            tel: "03-5312789",
            address: "新竹市東區橙町路 168 號",
            img: "images/shop/shop4.webp",
        }
    ],
    center: [
        {
            shop: "台中日橘店",
            area: "台中市",
            tel: "04-23281234",
            address: "台中市西區日橘路 210 號",
            img: "images/shop/shop5.webp",
        },
        {
            shop: "台中果嶼店",
            area: "台中市",
            tel: "04-24305678",
            address: "台中市北屯區果嶼一路 520 號",
            img: "images/shop/shop6.webp",
        }
    ],
    south: [
        {
            shop: "台南果光店",
            area: "台南市",
            tel: "06-2956789",
            address: "台南市安平區果光路二段 560 號",
            img: "images/shop/shop8.webp",

        },
        {
            shop: "台南暖橘店",
            area: "台南市",
            tel: "06-2083456",
            address: "台南市東區暖橘街 92 號",
            img: "images/shop/shop9.webp",
        },
        {
            shop: "高雄晨果店",
            area: "高雄市",
            tel: "07-2867890",
            address: "高雄市新興區晨果街 115 號",
            img: "images/shop/shop10.webp",
        },
        {
            shop: "高雄果嶼店",
            area: "高雄市",
            tel: "07-3384567",
            address: "高雄市苓雅區果嶼路 190 號",
            img: "images/shop/shop11.webp",
        }
        ,
        {
            shop: "高雄橘港店",
            area: "高雄市",
            tel: "07-5521345",
            address: "高雄市左營區橘港路 300 號",
            img: "images/shop/shop12.webp",
        }
    ]
}

img_zoomIn.addEventListener("click", () => {
    imgbox.style.display = "flex";
    imgbox_img.src = img_zoomIn.src;
})

imgbox.addEventListener("click", (e) => {
    if (e.target === imgbox) {
        imgbox.style.display = "none";
    }
})

roller_box_top.addEventListener("click", () => {
    imgbox.style.display = "flex";
    imgbox_img.src = img_zoomIn.src;
})

// 生跑馬燈文字
btnAreas.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const item = allshop.north[index];
        list_item.innerHTML = "";
        roller.innerHTML = "";
        roller.innerHTML = `
                                <div class="shop_title">${item.shop}</div>
                                <hr>
                                <div>地區：${item.area}</div>
                                <div>電話：${item.tel}</div>
                                <div>地址：${item.address}</div>
                            `
        list_item.innerHTML = `
                                <div class="shop_title">${item.shop}</div>
                                <hr>
                                <div>地區：${item.area}</div>
                                <div>電話：${item.tel}</div>
                                <div>地址：${item.address}</div>
                            `
        img_zoomIn.src = item.img;
    })
})

// 換地區
btn.forEach((button) => {
    button.addEventListener("click", (e) => {
        button_area.innerHTML = "";
        const region = e.target.dataset.region;
        const regionData = allshop[region];
        if (region === "south") {
            button_area.classList.add("isStart");
        }else if(region === "north"){
            button_area.classList.remove("isStart");
            button_area.classList.add("isStartNorth");
        }
        else{
            button_area.classList.remove("isStartNorth");
            button_area.classList.remove("isStart");
        }
            
        

        let tl = gsap.timeline();

        if (document.querySelector(".btn_area")) {
            tl
                .to(".btn_area", { opacity: 0, duration: 0.3, ease: "power1.inOut" })
        }
        tl
            .add(() => {
                regionData.forEach((item) => {
                    const btn_area = document.createElement("button");
                    btn_area.type = "button";
                    btn_area.classList.add("btn_area");
                    btn_area.dataset.area = item.data;
                    btn_area.textContent = item.shop;
                    button_area.appendChild(btn_area);

                    btn_area.addEventListener("click", () => {
                        list_item.innerHTML = "";
                        roller.innerHTML = "";
                        roller.innerHTML = `
                                <div class="shop_title">${item.shop}</div>
                                <hr>
                                <div>地區：${item.area}</div>
                                <div>電話：${item.tel}</div>
                                <div>地址：${item.address}</div>
                            `
                        list_item.innerHTML = `
                                <div class="shop_title">${item.shop}</div>
                                <hr>
                                <div>地區：${item.area}</div>
                                <div>電話：${item.tel}</div>
                                <div>地址：${item.address}</div>
                            `
                        img_zoomIn.src = item.img;
                    })
                });

                tl.from(".btn_area", { opacity: 0, duration: 0.5, stagger: 0.1, ease: "power1.inOut" })
            });


    });
});



