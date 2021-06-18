'use strict'

const accordionSections = document.querySelector('.accordion__sections');
const accordionHeader = document.querySelectorAll('.accordion__header');

const accordionBody = document.querySelectorAll(".accordion__body");


accordionSections.addEventListener('click', function(e){
    // console.log(e.target);

    if (e.target.closest('.accordion__header')){
        const clicked = e.target.closest(".accordion__header");

        const sibling = clicked
          .closest(".accordion__section")
          .querySelector(".accordion__body");

        const dropIcon = clicked.querySelector("img");

        //  if (!dropIcon.classList.contains("icon-rotate")){
        //    dropIcon.classList.toggle("icon-rotate");
        //  }else{
        //    dropIcon.classList.remove("icon-rotate");
        //  }


    

          const currentBody = document.querySelector(`.accordion__body-${clicked.dataset.accordion}`);

          console.log(currentBody);
          if (currentBody.classList.contains("accordion__body--hidden")){
            accordionBody.forEach((el) =>
              el.classList.add("accordion__body--hidden")
            );
            if (!dropIcon.classList.contains("icon-rotate")) {
              dropIcon.classList.toggle("icon-rotate");
            } else {
              dropIcon.classList.remove("icon-rotate");
            }
            currentBody.classList.toggle("accordion__body--hidden");
         
          }else{
             dropIcon.classList.remove("icon-rotate");
            currentBody.classList.add("accordion__body--hidden");
          }
          
        }
        

    })



