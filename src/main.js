// import Navigo from "navigo";

// const router = new Navigo("/", { linksSelector: "a" });

// router.on({
//     "/": () => console.log("home page"),
//     "/about": () => console.log("about page"),
// });

// router.resolve();

import { menu, news } from "./data";

const menuE = document.querySelector(".menu");
if (menuE) {
    const result = menu.map((item) => ` <li class="menu-item">
                            <a href="" class="menu-item__link">${item}</a>
                        </li>`).join("");
    menuE.innerHTML = result;
}

const newsListE = document.querySelectorAll(".news-list");
if (newsListE) {
    const result = news.map(({ img, title, description }) => `
    <div class="p-4 border-solid border border-[#c2c2c2]">
        <a href="">
            <img src="${img}" alt="">
            <h3 class="text-[#ae3e00] text-lg font-bold py-2">${title}
            </h3>
            <p class="text-sm">${description}
            </p>
        </a>
    </div>`).join("");

    newsListE.forEach((item) => {
        item.innerHTML = result;
    });
}