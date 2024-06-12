// get to top function

window.addEventListener('scroll' , function(){
    if(window.pageYOffset > 200){
        document.getElementById('go_to_top').style.visibility = "visible";
    }
    else{
        document.getElementById('go_to_top').style.visibility = "hidden";
    }
});

// mobile menubar slider

const menuicon = document.getElementById("menuicon");
const menubar = document.getElementById("menubar");
menuclick = 0;
menuicon.addEventListener('click', function(){
    
    menuclick++;
    if(menuclick == 1){
        menubar.style.right = "0%";
        
    }
    else if(menuclick == 2){
        menubar.style.right = "-100%";
        menuclick = 0;
    }
});
// mobile menubar slider end



// headline animation

const phrases = ["ARBAZ KARIMI", "FRONTEND DEVELOPER"];
const textElement = document.getElementById("text");

function typeWriter(phrases, element, index) {
  const text = phrases[index];
  let currentCharIndex = 0;

  function type() {
    if (currentCharIndex < text.length) {
      element.textContent += text[currentCharIndex];
      currentCharIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => erase(text), 1000);
    }
  }

  function erase(text) {
    if (text.length > 0) {
      element.textContent = text.slice(0, -1);
      setTimeout(() => erase(text.slice(0, -1)), 100);
    } else {
      index = (index + 1) % phrases.length;
      setTimeout(() => typeWriter(phrases, element, index), 500);
    }
  }

  type();
}

typeWriter(phrases, textElement, 0);

// headline animation end 





// projects button store in variable
const all_btn = document.getElementById("all_btn");
const education_btn = document.getElementById("education_btn");
const e_commerce_btn = document.getElementById("e-commerce_btn");
const portfolio_btn = document.getElementById("portfolio_btn");

// projects sections store in variable
const sarasvati = document.getElementById("sarasvati");
const arkCoders = document.getElementById("arkCoders");
const educate = document.getElementById("educate");
const portfolio = document.getElementById("portfolio");

// here the value use inside the event
project_btn_value = 0;

// for all button
all_btn.addEventListener('click', function(){
    if(project_btn_value == 0){    
        arkCoders.style.display = "block";
        portfolio.style.display = "block";
        sarasvati.style.display = "block";
        educate.style.display = "block";

        all_btn.classList.add('active_btn');
        education_btn.classList.remove('active_btn');
        e_commerce_btn.classList.remove('active_btn');
        portfolio_btn.classList.remove('active_btn');
    }
});

// for Education button
education_btn.addEventListener('click', function(){
    
    if(project_btn_value == 0){    
        arkCoders.style.display = "none";
        portfolio.style.display = "none";
        sarasvati.style.display = "block";
        educate.style.display = "block";

        all_btn.classList.remove('active_btn');
        education_btn.classList.add('active_btn');
        e_commerce_btn.classList.remove('active_btn');
        portfolio_btn.classList.remove('active_btn');
    }
});

// for E-Commerce button
e_commerce_btn.addEventListener('click', function(){
    if(project_btn_value == 0){
        sarasvati.style.display = "none";
        educate.style.display = "none";
        arkCoders.style.display = "none";
        portfolio.style.display = "none";

        all_btn.classList.remove('active_btn');
        education_btn.classList.remove('active_btn');
        e_commerce_btn.classList.add('active_btn');
        portfolio_btn.classList.remove('active_btn');
    } 
});

// for Portfolio button
portfolio_btn.addEventListener('click', function(){
    
    if(project_btn_value == 0){
        sarasvati.style.display = "none";
        educate.style.display = "none";
        arkCoders.style.display = "block";
        portfolio.style.display = "block";

        all_btn.classList.remove('active_btn');
        education_btn.classList.remove('active_btn');
        e_commerce_btn.classList.remove('active_btn');
        portfolio_btn.classList.add('active_btn');
    }    
});

// language skills load when scroll

const html_progress = document.getElementById("html_progress");
const css_progress = document.getElementById("css_progress");
const javascript_progress = document.getElementById("javascript_progress");
const bootstrap_progress = document.getElementById("bootstrap_progress");

const progress_counter_1 = document.getElementById("html_per");
const progress_counter_2 = document.getElementById("css_per");
const progress_counter_3 = document.getElementById("javscript_per");
const progress_counter_4 = document.getElementById("bootstrap_per");

let progress_counter_No1 = 0;
let progress_counter_No2 = 0;
let progress_counter_No3 = 0;
let progress_counter_No4 = 0;

// for check the window scroll value
console.log(window.scrollY);

window.addEventListener('scroll', function(){
    if(window.innerWidth <= 767){
        progress_min_width_scroll();
        function progress_min_width_scroll(){
            if(window.pageYOffset > 1200){
                html_progress.style.animationName = "progress1"
                css_progress.style.animationName = "progress2"
                javascript_progress.style.animationName = "progress3"
                bootstrap_progress.style.animationName = "progress4"

                // for counter_1
                progress_counter1condition();
                function progress_counter1condition(){
                    progress_counter_No1++;
                    if(progress_counter_No1 > 90){  
                        progress_counter_No1 = 90;
                    }
                    progress_counter_1.textContent = progress_counter_No1;
                }

                // for counter_2
                progress_counter2condition();
                function progress_counter2condition(){
                    progress_counter_No2++;
                    if(progress_counter_No2 > 82){  
                        progress_counter_No2 = 82;
                    }
                    progress_counter_2.textContent = progress_counter_No2;
                }

                // for counter_3
                progress_counter3condition();
                function progress_counter3condition(){
                    progress_counter_No3++;
                    if(progress_counter_No3 > 75){  
                        progress_counter_No3 = 75;
                    }
                    progress_counter_3.textContent = progress_counter_No3;
                }

                // for counter_4
                progress_counter4condition();
                function progress_counter4condition(){
                    progress_counter_No4++;
                    if(progress_counter_No4 > 85){  
                        progress_counter_No4 = 85;
                    }
                    progress_counter_4.textContent = progress_counter_No4;
                }
                setInterval(progress_counter1condition, 12);
                setInterval(progress_counter2condition, 12);
                setInterval(progress_counter3condition, 12);
                setInterval(progress_counter4condition, 12);
            } 
        }
    }
    else if(window.innerWidth >= 768){
        progress_max_width_scroll();
        function progress_max_width_scroll(){
            if(window.pageYOffset > 1000){
                html_progress.style.animationName = "progress1"
                css_progress.style.animationName = "progress2"
                javascript_progress.style.animationName = "progress3"
                bootstrap_progress.style.animationName = "progress4"

                // for counter_1
                progress_counter1condition();
                function progress_counter1condition(){
                    progress_counter_No1++;
                    if(progress_counter_No1 > 90){  
                        progress_counter_No1 = 90;
                    }
                    progress_counter_1.textContent = progress_counter_No1;
                }

                // for counter_2
                progress_counter2condition();
                function progress_counter2condition(){
                    progress_counter_No2++;
                    if(progress_counter_No2 > 82){  
                        progress_counter_No2 = 82;
                    }
                    progress_counter_2.textContent = progress_counter_No2;
                }

                // for counter_3
                progress_counter3condition();
                function progress_counter3condition(){
                    progress_counter_No3++;
                    if(progress_counter_No3 > 75){  
                        progress_counter_No3 = 75;
                    }
                    progress_counter_3.textContent = progress_counter_No3;
                }

                // for counter_4
                progress_counter4condition();
                function progress_counter4condition(){
                    progress_counter_No4++;
                    if(progress_counter_No4 > 85){  
                        progress_counter_No4 = 85;
                    }
                    progress_counter_4.textContent = progress_counter_No4;
                }
                setInterval(progress_counter1condition, 12);
                setInterval(progress_counter2condition, 12);
                setInterval(progress_counter3condition, 12);
                setInterval(progress_counter4condition, 12);
            }
        }
    }
});


// counter programm

const counter_1 = document.getElementById("counter_1");
const counter_2 = document.getElementById("counter_2");
const counter_3 = document.getElementById("counter_3");
const counter_4 = document.getElementById("counter_4");

let counterNo1 = 0;
let counterNo2 = 0;
let counterNo3 = 0;
let counterNo4 = 0;

window.addEventListener('scroll', function(){
    if(window.innerWidth <= 767){
        counter_min_width_scroll();
        function counter_min_width_scroll(){
            if(window.pageYOffset > 3180){

                // for counter_1
                counter1condition();
                function counter1condition(){
                    counterNo1++;
                    if(counterNo1 > 20){  
                        counterNo1 = 20;
                    }
                    counter_1.textContent = counterNo1;
                }

                // for counter_2
                counter2condition();
                function counter2condition(){
                    counterNo2++;
                    if(counterNo2 > 23){  
                        counterNo2 = 23;
                    }
                    counter_2.textContent = counterNo2;
                }

                // for counter_3
                counter3condition();
                function counter3condition(){
                    counterNo3++;
                    if(counterNo3 > 14){  
                        counterNo3 = 14;
                    }
                    counter_3.textContent = counterNo3;
                }

                // for counter_4
                counter4condition();
                function counter4condition(){
                    counterNo4++;
                    if(counterNo4 > 15){  
                        counterNo4 = 15;
                    }
                    counter_4.textContent = counterNo4;
                }
                setInterval(counter1condition, 100);
                setInterval(counter2condition, 100);
                setInterval(counter3condition, 100);
                setInterval(counter4condition, 100);
            }
        }
    }
    else if(window.innerWidth >= 768 && window.innerWidth <= 992){
        counter_mid_width_scroll();
        function counter_mid_width_scroll(){
            if(window.pageYOffset > 2900){

                // for counter_1
                counter1condition();
                function counter1condition(){
                    counterNo1++;
                    if(counterNo1 > 20){  
                        counterNo1 = 20;
                    }
                    counter_1.textContent = counterNo1;
                }

                // for counter_2
                counter2condition();
                function counter2condition(){
                    counterNo2++;
                    if(counterNo2 > 23){  
                        counterNo2 = 23;
                    }
                    counter_2.textContent = counterNo2;
                }

                // for counter_3
                counter3condition();
                function counter3condition(){
                    counterNo3++;
                    if(counterNo3 > 14){  
                        counterNo3 = 14;
                    }
                    counter_3.textContent = counterNo3;
                }

                // for counter_4
                counter4condition();
                function counter4condition(){
                    counterNo4++;
                    if(counterNo4 > 15){  
                        counterNo4 = 15;
                    }
                    counter_4.textContent = counterNo4;
                }
                setInterval(counter1condition, 100);
                setInterval(counter2condition, 100);
                setInterval(counter3condition, 100);
                setInterval(counter4condition, 100);
            }
        }
    }
    else if(window.innerWidth >= 992){
        counter_max_width_scroll();
        function counter_max_width_scroll(){
            if(window.pageYOffset > 2060){

                // for counter_1
                counter1condition();
                function counter1condition(){
                    counterNo1++;
                    if(counterNo1 > 20){  
                        counterNo1 = 20;
                    }
                    counter_1.textContent = counterNo1;
                }

                // for counter_2
                counter2condition();
                function counter2condition(){
                    counterNo2++;
                    if(counterNo2 > 23){  
                        counterNo2 = 23;
                    }
                    counter_2.textContent = counterNo2;
                }

                // for counter_3
                counter3condition();
                function counter3condition(){
                    counterNo3++;
                    if(counterNo3 > 14){  
                        counterNo3 = 14;
                    }
                    counter_3.textContent = counterNo3;
                }

                // for counter_4
                counter4condition();
                function counter4condition(){
                    counterNo4++;
                    if(counterNo4 > 15){  
                        counterNo4 = 15;
                    }
                    counter_4.textContent = counterNo4;
                }
                setInterval(counter1condition, 100);
                setInterval(counter2condition, 100);
                setInterval(counter3condition, 100);
                setInterval(counter4condition, 100);
            }
        }
    }
});