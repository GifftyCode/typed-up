"use strict";
// const yearElement = document.getElementById("year")!;
// const thisYear = new Date().getFullYear() as unknown as string;
// yearElement.textContent = thisYear;
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("DateTime", thisYear);
year.textContent = thisYear;
