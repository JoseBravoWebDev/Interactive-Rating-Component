"use strict";

const ratingState = document.querySelector(".rating-state");
const tyState = document.querySelector(".ty-state");
const textValue = document.querySelector(".value");

const btnValue = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");

const changeState = () =>{
	let value = "";
	btnValue.forEach((btn)=>{
		btn.addEventListener("click", (e)=>{
			value = e.target.value;
		});
	});

	submitBtn.addEventListener("click",(e)=>{
		e.preventDefault();
		if (value != "") {
			textValue.textContent = value;
			ratingState.classList.add("hide-state");

			tyState.classList.remove("hide-state");
			tyState.classList.add("show-state");

		} else {
			return alert("Please, make us a review");
		}
	});
};

changeState();