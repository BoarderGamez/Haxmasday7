
const date = new Date();  
const days = date.getDate();  
const month = date.getMonth() + 1;  
const year = date.getFullYear();  
  
const ornamentImg = ["1.png","2.png","3.svg","4.png","5.png","6.png",];  
const stars = ["⭐", "💫", "💖", "🎄", "👾"];  
  
function changeStar(){  
    let randomIndex = Math.floor(Math.random() * stars.length);  
    document.getElementById("star").innerText = stars[randomIndex];  
}  
  

document.addEventListener('DOMContentLoaded', () => {  
    const decorations = document.getElementById("decorations");  
    const dateText = document.getElementById("date");  
    const star = document.getElementById("star");  
  
    dateText.innerText = days + "/" + month + "/" + year;  
  
    if(month === 12){  
        let daysTilChristmas = Math.max(25-days,0);  
  
        for(let i = 0; i < daysTilChristmas; i++){  
            const randomImg = ornamentImg[Math.floor(Math.random() * ornamentImg.length)];  
            decorations.innerHTML += `<img src="img/ornaments/${randomImg}" class="ornament" id="ornament${i}">`;  
            const ornament = document.getElementById("ornament"+i);  
            ornament.style.marginLeft = (Math.random()*10+15)+"vw";  
            ornament.style.marginTop = (Math.random()*1+2.5)+"rem";  
        }  
    }  
  
    star.addEventListener('click', changeStar);  
})