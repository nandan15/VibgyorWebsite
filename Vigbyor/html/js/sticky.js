jQuery(function() {
	// all var
	var totop = jQuery('#totop');
	var bodyScroll = jQuery('html,body');
	var brandblack = jQuery('.navbar-brand.white img.black');
	var brandwhite = jQuery('.navbar-brand.white img.white');
	var headernav = jQuery('header');
	var subheader = jQuery('.subheader');

	if ($('#wpadminbar').length) {
	        $('.navbar-default-white').css('margin', '90px auto');
	     }


	var sticky = (function(){

		var $window, 
			$stickyNav, 
			$stickyParent, 
			stickyPos;

		var init = function(elem, options){
			$window 	       = jQuery(window);
			$stickyNav             = $(elem);
			$stickyParent          = $stickyNav.parent();
			stickyPos              = $stickyNav.offset().top  > 0 && top != 272 ;
			
			_eventHandlers();
		}

		var _stickyValidation = function(){

			var scrollPos = $window.scrollTop();
			
			if((scrollPos && jQuery(window).width() > 1199) >= stickyPos){
				 $stickyNav.addClass('sticky');
				 headernav.addClass('show');
				 brandblack.show();
				 brandwhite.hide();
				 $('.subheader').addClass('show');
				 if ($('#wpadminbar').length) {
	              $('.navbar-default-white').css('margin', '90px auto');
	             }
			}else{
				$stickyNav.removeClass('sticky');
				headernav.removeClass('show');
				$('.subheader').removeClass('show');
				brandblack.hide();
				brandwhite.show();
			}
			if (jQuery(window).width() < 1200) {
	        	brandblack.show();
				brandwhite.hide();
	        }
			if(scrollPos >= 100){
				totop.addClass('show');
			}else{
				totop.removeClass('show');
			}
		}
	    
		var _eventHandlers = function(){
			window.addEventListener('scroll', _stickyValidation);
			jQuery(document).height(_stickyValidation);
		}

		return {
			init: init
		}

	}());

	//Create jquery plugin
	if (window.jQuery) {
	    (function($) {
	        $.fn.sticky = function(options) {
	            this.each(function() {
	                sticky.init(this, options);
	            });
	            return this;
	        };
	    })(window.jQuery);
	}else{
		console.warn("jQuery library not defined");
	}
	  
	 // totop var
	 totop.on("click", function(e) {
	    e.preventDefault();
	    bodyScroll.animate({
	      scrollTop: 0
	    }, 800);
	  });

	// tambahan
	  if ($('#wpadminbar').length) {
	        $('.navbar-default-white').css('margin', '90px auto');
	     }
	     
	var iScrollPos = 0;
	$(window).scroll(function () {
	    var iCurScrollPos = $(this).scrollTop();
	    if (iCurScrollPos > iScrollPos) {
	        if ($('#wpadminbar').length) {
	         $('.navbar-default-white').css('margin', '30px auto');
	        }
	    } else {
	        if ($('#wpadminbar').length) {
	        $('.navbar-default-white').css('margin', '90px auto');
	      }
	    }
	    iScrollPos = iCurScrollPos;
	});
});
$(document).ready(function(){
    $("#owl-logo").owlCarousel({
      loop: true,
      margin: 20,
      nav: false, /* No manual navigation */
      autoplay: true, /* Enable auto-scrolling */
      autoplayTimeout: 2000, /* Scroll every 2 seconds */
      autoplayHoverPause: false, /* Keep scrolling on hover */
      smartSpeed: 1000, /* Smooth transition */
      responsive: {
        0: { items: 2 },
        600: { items: 3 },
        1000: { items: 5 }
      }
    });
  });

//   jQuery(document).ready(function() {
// 	jQuery("#revolution-slider-half").revolution({
// 		sliderType: "standard",
// 		sliderLayout: "auto",
// 		delay: 5000, // 5 seconds for each slide
// 		navigation: {
// 			arrows: { enable: true }
// 		},
// 		responsiveLevels: [1240, 1024, 778, 480], // These control the height for different screen widths
// 		gridwidth: [1240, 1024, 778, 480], // Width for different screens
// 		gridheight: [700, 600, 500, 400], // Height for different screens
// 		autoHeight: "on",
// 		disableProgressBar: "on"
// 	});
// });

$(document).ready(function () {
    // Hide all groups initially
    $(".group1, .group2, .group3").hide();

    $(".group img").hover(
        function () {
            const groupToShow = $(this).data("group");
            $(".group1, .group2, .group3").hide(); // Hide all groups
            $("." + groupToShow).show(); // Show only the hovered group's corresponding div
        },
        function () {
            $(".group1, .group2, .group3").hide(); // Hide all groups when not hovering
        }
    );

    // Also hide when mouse leaves the group container
    $(".group1, .group2, .group3").mouseleave(function () {
        $(".group1, .group2, .group3").hide();
    });
});

$(document).ready(function () {
    // Hide all groups initially
    $(".flex1, .flex2, .flex3").hide();

    $(".flex img").hover(
        function () {
            const flexToShow = $(this).data("flex");
            $(".flex1, .flex2, .flex3").hide(); // Hide all groups
            $("." + flexToShow).show(); // Show only the hovered group's corresponding div
        },
        function () {
            $(".flex1, .flex2, .flex3").hide(); // Hide all groups when not hovering
        }
    );

    // Also hide when mouse leaves the group container
    $(".flex1, .flex2, .flex3").mouseleave(function () {
        $(".flex1, .flex2, .flex3").hide();
    });
});

$(document).ready(function () {
    // Hide all wall groups initially
    $(".wall1, .wall2, .wall3").hide();

    $(".wall img").hover(
        function () {
            const wallToShow = $(this).data("group");
            $(".wall1, .wall2, .wall3").hide(); // Hide all groups
            $("." + wallToShow).show(); // Show only the hovered group's corresponding div
        },
        function () {
            $(".wall1, .wall2, .wall3").hide(); // Hide all groups when not hovering
        }
    );

    // Also hide when mouse leaves the group container
    $(".wall1, .wall2, .wall3").mouseleave(function () {
        $(".wall1, .wall2, .wall3").hide();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("serviceVideo");

    if (video) {
        video.muted = true;
        video.autoplay = true;
        video.loop = true;
        video.play();

        video.addEventListener("click", function () {
            video.muted = !video.muted;
        });

        video.addEventListener("ended", function () {
            video.currentTime = 0;
            video.play();
        });
    }

    syncStepsWithCarousel();
});




let step = 0;
let userData = {};
const options = [
    "Full Home Interiors",
    "Bedroom Interiors",
    "Full Home Automation",
    "Kitchen Interiors",
    "Living Room Interiors",
    "Home Renovation"
];

function toggleChat() {
    const chatContainer = document.getElementById("chatContainer");
    if (chatContainer.style.display === "block") {
        chatContainer.style.display = "none";
    } else {
        chatContainer.style.display = "block";
        resetChat(); // Reset the chat every time the popup is opened
    }
}

function closeChat() {
    document.getElementById("chatContainer").style.display = "none";
}

function resetChat() {
    step = 0;
    userData = {};
    const chatBody = document.getElementById("chatBody");
    chatBody.innerHTML = "<div class='chat-message'>Hi there! 👋 Welcome to Vibgyor!</div>" +
                        "<div class='chat-message'>Please enter your full name:</div>";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        handleSend();
    }
}

function handleSend() {
    const inputField = document.getElementById("chatInput");
    let userInput = inputField.value.trim();
    if (!userInput) return;
    
    addUserMessage(userInput);
    inputField.value = "";

    if (step === 0) {
        userData.name = userInput;
        addBotMessage("Thanks! Please enter your phone number:");
        step++;
    } else if (step === 1) {
        userData.phone = userInput;
        addBotMessage("Great! Now, please enter your email address:");
        step++;
    } else if (step === 2) {
        userData.email = userInput;
        addBotMessage("What are your requirements? Select from below:");
        showOptions();
        step++;
    }
}

function showOptions() {
    const chatBody = document.getElementById("chatBody");
    let checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkbox-container");

    options.forEach(option => {
        let label = document.createElement("label");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option;
        checkbox.onchange = toggleSubmitButton;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(" " + option));
        checkboxContainer.appendChild(label);
    });

    let queryInput = document.createElement("input");
    queryInput.type = "text";
    queryInput.placeholder = "Any other query...";
    queryInput.id = "queryInput";
    queryInput.style.marginTop = "10px";
    queryInput.style.padding = "5px";
    queryInput.oninput = toggleSubmitButton;

    chatBody.appendChild(checkboxContainer);
    chatBody.appendChild(queryInput);
    showSubmitButton();
}

function showSubmitButton() {
    const chatBody = document.getElementById("chatBody");
    let button = document.createElement("button");
    button.innerText = "Submit";
    button.classList.add("submit-button");
    button.id = "submitButton";
    button.onclick = submitForm;
    chatBody.appendChild(button);
}

function toggleSubmitButton() {
    let selectedOptions = document.querySelectorAll(".checkbox-container input[type='checkbox']:checked").length > 0;
    let otherQuery = document.getElementById("queryInput").value.trim().length > 0;
    let submitButton = document.getElementById("submitButton");
    
    if (selectedOptions || otherQuery) {
        submitButton.style.display = "block";
    } else {
        submitButton.style.display = "none";
    }
}

function submitForm() {
    console.log("User Data Submitted:", userData);

    // Clear everything and show only "Thank you!"
    const chatBody = document.getElementById("chatBody");
    chatBody.innerHTML = "<div class='chat-message'>Thank you!</div>";

    // Remove input fields
    document.querySelector(".chat-input-container").style.display = "none";

    // Close chat after 2 seconds
    setTimeout(() => {
        closeChat();
        document.querySelector(".chat-input-container").style.display = "flex"; // Restore input fields for next session
    }, 2000);
}

function addUserMessage(text) {
    document.getElementById("chatBody").innerHTML += `<div class='chat-message user-message'>${text}</div>`;
}

function addBotMessage(text) {
    document.getElementById("chatBody").innerHTML += `<div class='chat-message'>${text}</div>`;
}



$(document).ready(function() {
    $(".read-more-btn").click(function() {
      var fullText = $(this).siblings(".full-text");
      var shortText = $(this).siblings(".short-text");
  
      if (fullText.is(":visible")) {
        fullText.hide();
        shortText.show();
        $(this).text("Read More");
      } else {
        fullText.show();
        shortText.hide();
        $(this).text("Read Less");
      }
    });
  });
  
  //scrooler image
  document.addEventListener("DOMContentLoaded", function () {
    function setupSlider(sliderSelector) {
        let slider = document.querySelector(sliderSelector);
        if (!slider) return; // Ensure slider exists before running script

        let images = slider.querySelectorAll("img");
        let currentIndex = 0;
        let totalImages = images.length;

        function showNextImage() {
            images.forEach((img, index) => {
                img.classList.toggle("active", index === currentIndex);
            });

            currentIndex = (currentIndex + 1) % totalImages; // Loop back after last image
        }

        images[currentIndex].classList.add("active"); // Start with first image
        setInterval(showNextImage, 3000); // Change image every 3 seconds
    }

    // Initialize independent sliders
    setupSlider(".image-slider.first");  // First section's slider
    setupSlider(".image-slider.second");
    setupSlider(".image-slider.third");
    setupSlider(".image-slider.four");  // First section's slider
    setupSlider(".image-slider.five");
    setupSlider(".image-slider.six"); // Second section's slider
});


// let currentStep = 1;
// const totalSteps = 5;

// function showStep(step) {
//     // Hide all images
//     document.querySelectorAll('.step-image').forEach(img => img.classList.remove('active'));

//     // Show only the selected image
//     document.getElementById('step' + step).classList.add('active');

//     // Remove 'active' class from all steps
//     document.querySelectorAll('.step-item').forEach(item => item.classList.remove('active'));

//     // Add 'active' class to selected step
//     document.querySelector(`.step-item[data-step="${step}"]`).classList.add('active');
// }

// function autoRotate() {
//     showStep(currentStep);
//     currentStep = (currentStep % totalSteps) + 1; // Loops back after 5
// }

// // Start Auto Loop Every 3 Seconds
// setInterval(autoRotate, 3000);

let currentStep = 1;
const totalSteps = 5;
let interval;

function showStep(step) {
    // Hide all images
    document.querySelectorAll('.step-image').forEach(img => img.classList.remove('active'));
    document.getElementById('step' + step).classList.add('active');

    // Remove 'active' class from all steps
    document.querySelectorAll('.step-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`.step-item[data-step="${step}"]`).classList.add('active');
}

function autoRotate() {
    showStep(currentStep);
    currentStep = (currentStep % totalSteps) + 1; // Loops back after 5
}

function setStep(step) {
    clearInterval(interval);
    currentStep = step;
    showStep(step);
    interval = setInterval(autoRotate, 3000); // Restart auto-rotation
}

// Start Auto Loop Every 3 Seconds
interval = setInterval(autoRotate, 3000);

function close()
{
    document.getElementById("chatForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Hide the modal after submission
        var chatModal = new bootstrap.Modal(document.getElementById("chatModal"));
        chatModal.hide();

        // (Optional) Show a success message
        // alert("Form submitted successfully!");
    });
}

