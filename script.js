// Sorting Socks Javascript Funtimes

const careers = [
    {title: "Front-End Developer", text: "Front-End Description"}, 
    {title: "Back-End Developer", text: "Back-End Description"}, 
    {title: "Software Engineer", text: "Software Engineer Description"}, {title: "CEO at Facebook", text: "CEO Description"},
    {title: "Product Manager at Google", text: "PM Description"},
    {title: "Data Analyst", text: "Data Analyst Description"},
    {title: "Supreme AI Overlord", text: "AI Overlord Description"}]

   
let button = document.querySelector("button");
let answer = document.querySelector("h1");

button.onclick = function(){
   
    let i = Math.floor(0 + Math.random()*(careers.length + 1 - 0))
	answer.innerHTML = `Your destiny is to become a ${careers[i].title}! ${careers[i].text}`;
    }