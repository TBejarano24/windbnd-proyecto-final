/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from "./stays.js";

function analyzeBeds(beds_value) {
  if (beds_value === null) {
    return "";
  } else if (beds_value === 1) {
    return ". 1 bed";
  } else {
    return `. ${beds_value} beds`;
  }
}

let staysContainer = document.querySelector("#stays_container");
let filterButton = document.querySelector("#filter_button");

staysContainer.textContent = "";
filterButton.addEventListener("click", () => {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div id="filter_menu" class="fixed inset-0 bg-[#1f3f7a80] flex items-start justify-center">
        <div
            class="bg-white w-full h-[420px] grid grid-cols-1 grid-rows-[0.5fr_1fr_1fr_1fr_2fr] lg:grid-rows-1 place-items-center gap-2 lg:h-[270px]">
            <div class="w-full flex justify-between items-center lg:hidden">
                <span class="text-[10px] m-[10px_0px_0px_9px]">Edit your search</span>
                <button id="close_filter_menu" class="m-[10px_12px_0px_0px] font-bold">X</button>
            </div>
            <div class="w-[90%] border border-[#ececec] rounded-lg lg:hidden">
                <div class="border-b border-b-[#ececec]">
                    <div class="flex flex-col m-[4px_10px]">
                        <span class="text-[7px] text-[#818181] font-semibold">LOCATION</span>
                        <span class="text-[10px]">Vaasa, Finland</span>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-col m-[4px_10px]">
                        <span class="text-[7px] text-[#818181] font-semibold">GUESTS</span>
                        <span class="text-[10px]">5 Guests</span>
                    </div>
                </div>
            </div>
            <div class="w-[85%] my-2 lg:hidden">
                <div class="flex flex-col max-w-[80px]">
                    <span class="text-[11px] font-bold text-[#333]">Adults</span>
                    <span class="text-[10px] mb-1 text-[#c7c7c7]">Ages 13 or above</span>
                    <div class="flex justify-between items-center">
                        <button
                            class="px-[5px] bg-[#e4e4e4] border border-[#a0a0a0] text-[10px] text-[#a0a0a0] rounded-sm">-</button>
                        <span class="text-[10px] text-[#333] font-bold">4</span>
                        <button
                            class="px-[5px] bg-[#e4e4e4] border border-[#a0a0a0] text-[10px] text-[#a0a0a0] rounded-sm">+</button>
                    </div>
                </div>
            </div>
            <div class="w-[85%] my-2 lg:hidden">
                <div class="flex flex-col max-w-[80px]">
                    <span class="text-[11px] font-bold text-[#333]">Children</span>
                    <span class="text-[10px] mb-1 text-[#c7c7c7]">Ages 13 or above</span>
                    <div class="flex justify-between items-center">
                        <button
                            class="px-[5px] bg-[#e4e4e4] border border-[#a0a0a0] text-[10px] text-[#a0a0a0] rounded-sm">-</button>
                        <span class="text-[10px] text-[#333] font-bold">1</span>
                        <button
                            class="px-[5px] bg-[#e4e4e4] border border-[#a0a0a0] text-[10px] text-[#a0a0a0] rounded-sm">+</button>
                    </div>
                </div>
            </div>
            <button
                class="flex items-center w-[80px] justify-around bg-[#eb5757] p-[4px_8px] rounded-lg self-end mb-3 lg:hidden">
                <img class="w-[13px]" src="./src/images/icons/search-white.svg" alt="">
                <span class="text-[12px] text-white ">search</span>
            </button>

            <div
                class="hidden w-[85%] border border-[#ebebeb] lg:grid lg:grid-cols-3 rounded-xl justify-self-center self-start mt-[50px]">
                <div class="border-r border-[#ebebeb]">
                    <div class="flex flex-col m-[4px_10px]">
                        <span class="text-[7px] text-[#818181] font-semibold">LOCATION</span>
                        <span class="text-[10px]">Vaasa, Finland</span>
                    </div>
                </div>
                <div class="border-r border-[#ebebeb]">
                    <div class="flex flex-col m-[4px_10px]">
                        <span class="text-[7px] text-[#818181] font-semibold">GUESTS</span>
                        <span class="text-[10px]">5 Guests</span>
                    </div>
                </div>
                <button
                    class="flex items-center w-[80px] justify-around bg-[#eb5757] p-[4px_8px] rounded-lg place-self-center">
                    <img class="w-[13px]" src="./src/images/icons/search-white.svg" alt="">
                    <span class="text-[12px] text-white ">search</span>
                </button>
            </div>
        </div>
    </div>
    `
  );
  let filterMenu = document.querySelector("#filter_menu");
  filterMenu.addEventListener("click", (event) => {
    if (event.target.id === "filter_menu") {
      filterMenu.remove();
    }
  });

  let closeFilterMenuButton = document.querySelector("#close_filter_menu");
  closeFilterMenuButton.addEventListener("click", () => {
    filterMenu.remove();
  });
});

let totalGuestsCounter = document.querySelector("#total_guests_counter");
let adultsCounter = document.querySelector("#adults_counter");
let childrenCounter = document.querySelector("#children_counter");

let adultsMinusButton = document.querySelector("#adults_minus_button");
adultsMinusButton.addEventListener("click", () => {
  let actualCounterValue = adultsCounter.textContent;
  let actualTotalCounter = totalGuestsCounter.textContent;
  if (parseInt(adultsCounter.textContent) > 0) {
    adultsCounter.textContent = parseInt(actualCounterValue) - 1;
    totalGuestsCounter.textContent = parseInt(actualTotalCounter) - 1;
  } else {
    return;
  }
});

let adultsPlusButton = document.querySelector("#adults_plus_button");
adultsPlusButton.addEventListener("click", () => {
  let actualCounterValue = adultsCounter.textContent;
  let actualTotalCounter = totalGuestsCounter.textContent;
  adultsCounter.textContent = parseInt(actualCounterValue) + 1;
  totalGuestsCounter.textContent = parseInt(actualTotalCounter) + 1;
});

let childrenMinusButton = document.querySelector("#children_minus_button");
childrenMinusButton.addEventListener("click", () => {
  let actualCounterValue = childrenCounter.textContent;
  let actualTotalCounter = totalGuestsCounter.textContent;
  if (parseInt(childrenCounter.textContent) > 0) {
    childrenCounter.textContent = parseInt(actualCounterValue) - 1;
    totalGuestsCounter.textContent = parseInt(actualTotalCounter) - 1;
  } else {
    return;
  }
});

let childrenPlusButton = document.querySelector("#children_plus_button");
childrenPlusButton.addEventListener("click", () => {
  let actualCounterValue = childrenCounter.textContent;
  let actualTotalCounter = totalGuestsCounter.textContent;
  childrenCounter.textContent = parseInt(actualCounterValue) + 1;
  totalGuestsCounter.textContent = parseInt(actualTotalCounter) + 1;
});

stays.forEach((stay) => {
  let div = document.createElement("div");
  div.classList.add(
    "w-[230px]",
    "place-self-center",
    "m-[10px_10px_0_10px]",
    "flex",
    "flex-col",
    "gap-1",
    "sm:w-[240px]",
    "lg:w-[220px]",
    "lg:h-[200px]",
    "xl:w-[300px]",
    "xl:h-[280px]"
  );

  let img = document.createElement("img");
  img.classList.add("rounded-xl", "object-cover", "h-[150px]");
  img.setAttribute("src", `${stay.photo}`);

  let div2 = document.createElement("div");
  if (stay.superHost === true) {
    div2.classList.add(
      "grid",
      "grid-cols-[1.5fr_2.5fr_1fr]",
      "items-center",
      "justify-start"
    );
  } else if (stay.superHost === false) {
    div2.classList.add(
      "grid",
      "grid-cols-[3fr_1fr]",
      "items-center",
      "justify-start"
    );
  }

  let span = document.createElement("span");
  span.classList.add(
    "text-[9px]",
    "ml-1.5",
    "text-[#8d8d8d]",
    "sm:text-[10px]",
    "xl:text-[12px]"
  );
  span.textContent = `${stay.type} ${analyzeBeds(stay.beds)}`;

  let span2 = document.createElement("span");
  span2.classList.add(
    "text-[8px]",
    "mr-1.5",
    "text-[#605a59]",
    "flex",
    "gap-1",
    "xl:text-[12px]",
    "justify-self-end"
  );
  span2.insertAdjacentHTML(
    "afterbegin",
    `<img src="./src/images/icons/star.svg" alt="" width="10px">${stay.rating}`
  );

  let span3 = document.createElement("span");
  span3.classList.add(
    "text-[8px]",
    "font-bold",
    "border",
    "border-[#605a59]",
    "px-2",
    "rounded-lg",
    "text-[#605a59]",
    "sm:text-[10px]",
    "xl:text-[12px]"
  );
  span3.textContent = "SUPERHOST";

  let h3 = document.createElement("h3");
  h3.classList.add(
    "text-[9px]",
    "font-bold",
    "text-[#605a59]",
    "ml-1.5",
    "sm:text-[10px]",
    "xl:text-[15px]"
  );

  h3.textContent = `${stay.title}`;
  div.appendChild(img);
  if (stay.superHost === true) {
    div2.appendChild(span3);
  }
  div2.appendChild(span);
  div2.appendChild(span2);
  div.appendChild(div2);
  div.appendChild(h3);
  staysContainer.appendChild(div);
});
