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

staysContainer.textContent = "";

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
