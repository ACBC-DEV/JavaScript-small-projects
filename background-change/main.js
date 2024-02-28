import "./style.css";
import { changeBackground } from "./changeBack.js";
document.querySelector("#app").innerHTML = `
<!--
// v0 by Vercel.
// https://v0.dev/t/RKqWalYI7Pt
-->
<div id="card" class="flex justify-center items-center space-x-4 h-screen">
<button id="prev" class="inline-flex items-center duration-200 hover:scale-110 justify-center  ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 text-lg font-bold">
Prev
</button>
<button id="next" class="inline-flex items-center duration-200 hover:scale-110 justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 text-lg font-bold">
Next
</button>
<button id="copy" class="inline-flex border-2 rounded-3xl text-white border-white items-center justify-center  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  bg-background hover:bg-slate-200 hover:text-stone-800 h-10 px-4 py-2  ">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="h-5 w-5"
>
  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
</svg>
</button>
<button id="auto" class="border-2 border-white inline-flex items-center justify-center rounded-3xl text-sm font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-white duration-200 hover:scale-110">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="h-5 w-5"
>
  <polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
</div>
`;
changeBackground();
