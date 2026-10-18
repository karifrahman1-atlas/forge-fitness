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

const goalContent={
  strength:{title:"Start with the foundations.",copy:"Explore the Starter plan, learn the equipment basics, and build a manageable routine before increasing complexity."},
  routine:{title:"Choose consistency over intensity.",copy:"Compare the sample plans and think about the days and times you can realistically train each week. A repeatable routine is a useful starting point."},
  guidance:{title:"Explore a more guided approach.",copy:"The sample Coached plan illustrates how goal-setting and structured support could fit into a membership. Confirm the actual coaching details before joining a real gym."}
};
document.querySelectorAll(".goal-option").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".goal-option").forEach(option=>{option.classList.remove("active");option.setAttribute("aria-pressed","false")});
  button.classList.add("active");button.setAttribute("aria-pressed","true");
  const content=goalContent[button.dataset.goal];
  document.querySelector("#goal-title").textContent=content.title;
  document.querySelector("#goal-copy").textContent=content.copy;
}));

const dialog=document.querySelector("#booking-dialog");
const bookingForm=document.querySelector("#booking-form");
const formMessage=document.querySelector("#form-message");
document.querySelectorAll("[data-open-booking]").forEach(button=>button.addEventListener("click",()=>{
  if(dialog&&typeof dialog.showModal==="function") dialog.showModal();
}));
document.querySelectorAll("[data-close-booking]").forEach(button=>button.addEventListener("click",()=>dialog?.close()));
if(dialog) dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close()});
if(bookingForm) bookingForm.addEventListener("submit",event=>{
  event.preventDefault();
  if(!bookingForm.reportValidity()) return;
  formMessage.textContent="Demo complete: your sample request has been previewed. No information was sent or saved.";
  formMessage.classList.add("visible");
});
