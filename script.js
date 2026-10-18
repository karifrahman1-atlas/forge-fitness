const toggle=document.querySelector(".menu");
const nav=document.querySelector("#nav");
if(toggle&&nav){
  toggle.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded",String(open));
    toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");
  });
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded","false");
    toggle.setAttribute("aria-label","Open navigation");
  }));
}
document.querySelectorAll(".faq-list button").forEach(button=>{
  button.addEventListener("click",()=>{
    const article=button.closest("article");
    const open=button.getAttribute("aria-expanded")==="true";
    button.setAttribute("aria-expanded",String(!open));
    article.classList.toggle("open",!open);
  });
});
const year=document.querySelector("#year");
if(year) year.textContent=new Date().getFullYear();
