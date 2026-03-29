const img_zoomIn = document.querySelector(".img-zoomIn");
const imgbox = document.querySelector("#imgbox");
const imgbox_img = document.querySelector("#imgbox-img");
// const north = document.querySelector(".north");
// const center = document.querySelector(".center");
// const south = document.querySelector(".south");
const btn = document.querySelectorAll(".btn");

const menu =
{
    north: "/images/menu/north_menu.webp",
    center: "/images/menu/center_menu.webp",
    south: "/images/menu/south_menu.webp",
};
    

img_zoomIn.addEventListener("click", () => {
    imgbox.style.display = "flex";
    imgbox_img.src = img_zoomIn.src;
})

imgbox.addEventListener("click", (e) => {
    if (e.target === imgbox) {
        imgbox.style.display = "none";
    }

})

btn.forEach((item) =>{
    item.addEventListener("click",(e)=>{
        const region = e.target.dataset.region;
        img_zoomIn.src = menu[region];
    })
})

// north.addEventListener("click",()=>{
//     img_zoomIn.src = menu.north;
// })

// center.addEventListener("click", () => {
//     img_zoomIn.src = menu.center;
// });

// south.addEventListener("click",()=>{
//     img_zoomIn.src = menu.south;
// })