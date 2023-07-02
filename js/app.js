/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const new_section = document.querySelector("main");
const new_kid = document.createElement("section");
let current="";

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const nav = document.querySelector("#navbar__list");
nav.innerHTML = "<li><a>Section 1</a></li> <li><a >Section 2</a></li> <li> <a>Section 3</a></li> <li><a >Section 4</a> </li>";
// changing color of letters to black in the list
const list_ = document.querySelectorAll("li a");
// list_.forEach(
//     (lista) => {
//         // lista.style.cssText = 'color: black; font-size: 15px; padding:15px;'
//     }
// )
list_[0].setAttribute("class","menu__link section1 nav-active");
list_[1].setAttribute("class","menu__link section2");
list_[2].setAttribute("class","menu__link section3");
list_[3].setAttribute("class","menu__link section4");

list_[0].setAttribute("data-nav","section1");
list_[1].setAttribute("data-nav","section2");
list_[2].setAttribute("data-nav","section3");
list_[3].setAttribute("data-nav","section4");






// add contents to new section 4
new_kid.setAttribute("id", "section4");
new_kid.setAttribute("data-nav", "section 4");
new_kid.innerHTML = document.querySelectorAll("section")[1].innerHTML;
new_kid.querySelector("h2").textContent = "Section 4";
new_section.appendChild(new_kid);



// // Add class 'active' to section when near top of viewport
const our_paragraphs = document.querySelectorAll("section");
const nav_bar = document.querySelectorAll("header nav ul li a ");

window.addEventListener("scroll",()=>{
    our_paragraphs.forEach( paragraph=>{
        const sectionTop = paragraph.offsetTop;
        const sectionHeight = paragraph.clientHeight;
        if (pageYOffset>=(sectionTop-sectionHeight/2)){
            current = paragraph.getAttribute("id");
        }
    })

    nav_bar.forEach(li=>{
        li.classList.remove("nav-active");
        if (li.classList.contains(current)){ 
            li.classList.add("nav-active")

        }
    })

})


// window.addEventListener("scroll", function () {
//     our_paragraphs.forEach((paragraph)=>{
//         let current =""
//         const bounds = paragraph.getBoundingClientRect();
//         const isViewPort = bounds.top >= 0
//         if (isViewPort) {
//            
//             paragraph.style.background = "brown"
//             paragraph.classList.add("active");
//             current = paragraph.getAttribute("id");
//         } else {
//             paragraph.classList.remove("active");
//             paragraph.style.background = "rgb(168, 212, 191)";

//         }
//     })   
//     })


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click
const myLinks = document.querySelectorAll("header nav ul li")
myLinks.forEach((elem)=>{
    elem.addEventListener("click", (event)=>{
        event.preventDefault();
        // event.target.style.background="yellow"
        const block= event.target.dataset.nav;
        document.getElementById(block).scrollIntoView({
            behavior:"smooth"
        })
    })
})


// XXXXXXXXXXXXXXXXXX NOT NEEDED XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// myLinks.forEach((elem)=>{
//     elem.addEventListener("mouseout", (event)=>{
//         event.preventDefault();
//         const block= event.target.dataset.nav;

//     })
// })

// myLinks.forEach((elem)=>{
//     elem.addEventListener("mouseover", (event)=>{
//         event.preventDefault();
//         const block= event.target.dataset.nav;

//     })
// })


// // set background color to brown
// const our_paragraph_colors = document.querySelectorAll(".active");

// our_paragraph_colors.forEach((paragraph)=>{
//     paragraph.style.background="brown";
// })



// // Set sections as active
window.addEventListener("scroll",()=>
    {
        our_paragraphs.forEach(part=>{
            part.classList.remove("active");
            if (part.id === (current)){
                part.classList.add("active")
            }
        })
    }
)









