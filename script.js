/*==================================================
MAXDENT DENTAL CLINIC
JAVASCRIPT PART 1
==================================================*/

/*==============================
MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){

menuBtn.innerHTML='<i class="fas fa-times"></i>';

}else{

menuBtn.innerHTML='<i class="fas fa-bars"></i>';

}

});

}

/*==============================
CLOSE MENU
==============================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

if(menuBtn){

menuBtn.innerHTML='<i class="fas fa-bars"></i>';

}

});

});

/*==============================
SCROLL TO TOP
==============================*/

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollBtn.classList.add("show");

}else{

scrollBtn.classList.remove("show");

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==============================
FAQ ACCORDION
==============================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

const answer=item.querySelector(".faq-answer");

const icon=question.querySelector("i");

question.addEventListener("click",()=>{

document.querySelectorAll(".faq-answer").forEach(box=>{

if(box!==answer){

box.style.maxHeight=null;

box.previousElementSibling.querySelector("i").classList.remove("fa-minus");

box.previousElementSibling.querySelector("i").classList.add("fa-plus");

}

});

if(answer.style.maxHeight){

answer.style.maxHeight=null;

icon.classList.remove("fa-minus");

icon.classList.add("fa-plus");

}else{

answer.style.maxHeight=answer.scrollHeight+"px";

icon.classList.remove("fa-plus");

icon.classList.add("fa-minus");

}

});

});

/*==============================
ACTIVE NAVBAR
==============================*/

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-140;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});/*==================================================
MAXDENT DENTAL CLINIC
JAVASCRIPT PART 2
==================================================*/

/*==============================
WHATSAPP APPOINTMENT FORM
==============================*/

const form = document.getElementById("whatsappForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();
const phone=document.getElementById("phone").value.trim();
const email=document.getElementById("email").value.trim();
const treatment=document.getElementById("treatment").value;
const date=document.getElementById("date").value;
const message=document.getElementById("message").value.trim();

if(name==="" || phone===""){

alert("Please enter your Name and Mobile Number.");

return;

}

const whatsappMessage=

`🦷 *New Appointment Request*

👤 Name : ${name}

📞 Mobile : ${phone}

📧 Email : ${email}

🦷 Treatment : ${treatment}

📅 Preferred Date : ${date}

📝 Message : ${message}

Please confirm my appointment.`;

const url=

`https://wa.me/918949053447?text=${encodeURIComponent(whatsappMessage)}`;

window.open(url,"_blank");

form.reset();

});

}

/*==============================
SCROLL REVEAL
==============================*/

const revealElements=document.querySelectorAll(

".trust-box,.about-image,.about-content,.why-card,.treatment-card,.review-card,.appointment-content,.appointment-form,.faq-item,.contact-card,.emergency,.footer-grid"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition="all .8s ease";

revealObserver.observe(el);

});

/*==============================
COUNTER ANIMATION
==============================*/

const counters=document.querySelectorAll(".stat-box h2");

let counterStarted=false;

window.addEventListener("scroll",()=>{

const trust=document.querySelector(".trust");

if(!trust) return;

const top=trust.offsetTop-400;

if(window.scrollY>top && !counterStarted){

counterStarted=true;

counters.forEach(counter=>{

const original=counter.innerText;

const target=parseInt(original.replace(/\D/g,""));

if(!target) return;

let count=0;

const update=()=>{

count+=Math.ceil(target/40);

if(count>=target){

counter.innerText=original;

}else{

counter.innerText=original.includes("+")
?count+"+"
:original.includes("★")
?count+".0★"
:count;

requestAnimationFrame(update);

}

};

update();

});

}

});

/*==============================
AUTO YEAR
==============================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*==============================
PAGE LOADED
==============================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

console.log("✅ Maxdent Dental Clinic Website Loaded Successfully"); 
