import "./style.css"
import stocks_data from "./stocks_data"
let stocks_div = document.getElementById("famous-stocks");
let navbar = document.getElementById('navbar');
let heading = document.getElementById("heading");
window.onscroll = () =>{
  if(window.scrollY >= 20){
   navbar.classList.add("nav-colored")
   navbar.classList.remove("nav-transparent")
    heading.style.transform = 'scale(0.8)'
  }
  else{
    navbar.classList.remove("nav-colored")
    navbar.classList.add("nav-transparent")
    heading.style.transform = 'scale(1)'
  }
}
stocks_data.forEach(items=>{
let stocks = document.createElement('div');
stocks.innerHTML = `
<img src="${items.image}" style="height:${items.image_dimensions}; width:${items.image_dimensions};"/>
<h3>${items.name}(${items.code})</h3>
<p>${items.returns}% YTD Returns</p>
`
stocks_div.appendChild(stocks);
})