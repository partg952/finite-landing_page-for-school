


const stocks_data = [
  {
    name:'Tesla',
    code:'TSLA',
    returns:'743',
    image:'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
    image_dimensions:'100px',
  },
  {
    name:'Apple',
    code:'AAPL',
    returns:'80',
    image:'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    image_dimensions:'100px',

  },
  {
    name:'Nvidia',
    code:'NVDA',
    returns:'122',
    image:'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg',
    image_dimensions:'100px',
  },
  {
    name:'Moderna',
    code:'MRNA',
    returns:'434',
    image:'https://upload.wikimedia.org/wikipedia/commons/6/6a/Moderna_logo.svg',
    image_dimensions:'100px',
  },
  {
    name:'Nikola',
    code:'NKLA',
    returns:'55',
    image:'https://upload.wikimedia.org/wikipedia/commons/1/10/Nikola_logo.svg',
    image_dimensions:'100px',
  },
  {
    name:'Facebook',
    code:'FB',
    returns:'33',
    image:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Facebook_New_Logo_%282015%29.svg',
    image_dimensions:'100px',
  },
  {
    name:'Amazon',
    code:'AMZ',
    returns:'76',
    image:'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    image_dimensions:'100px',
  },
  {
    name:'Microsoft',
    code:'MSFT',
    returns:'41',
    image:'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    image_dimensions:'100px',
  },
 
]


let stocks_div = document.getElementById("famous-stocks");
let navbar = document.getElementById('navbar');
let heading = document.getElementById("heading");
let form = document.getElementById('user-form');
let message = document.querySelector('#user-form > p');
let user_div = document.getElementById("user-info")
let cancel_button = document.getElementById("cancel-button");

window.onload = () =>{
  axios("http://finite-api.herokuapp.com/get-count").then(res=>{
  console.log(res.data);
  document.getElementById("visitors-text").textContent = "Number of people visited the site: "+res.data[res.data.length-1].count;
  if(localStorage.getItem('first_visit')==undefined){
    localStorage.setItem("first_visit",true);
    axios("http://finite-api.herokuapp.com/increase-count?num="+res.data[res.data.length-1].count+1).then(response=>{
      console.log(response.data);
    })
  }
  
})
}



if(sessionStorage.getItem("bring-popup") == undefined){
  sessionStorage.setItem("bring-popup",true)
  setTimeout(()=>{
    user_div.style.transform = 'translateY(0px)'
  },5000);
}

cancel_button.addEventListener('click',()=>{
  user_div.style.transform = 'translateY(-600px)'
})

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  if(e.target.name.value.length!=0 && e.target.email.value.length!=0 && e.target.number.value.length!=0 && e.target.amount.value.length!=0){

    axios.post("http://localhost:9000/add-user",{
      name:e.target.name.value,
      email:e.target.email.value.replace("@gmail.com",""),
      phone:e.target.number.value,
      amount:e.target.amount.value
    }).then(res=>{
      console.log("posted")
      message.textContent = 'Please Check Your Inbox'
      
      setTimeout(()=>{
        user_div.style.transform = 'translateY(-600px)'
      },3000)
    })
  }
  else{
    alert("Please Enter Complete Info")
  }
})
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
stocks.onclick = () =>{
  gotopage(items.code);
}
stocks.innerHTML = `
<img src="${items.image}" style="height:${items.image_dimensions}; width:${items.image_dimensions};"/>
<h3>${items.name}(${items.code})</h3>
<p>${items.returns}% YTD Returns</p>
`
stocks_div.appendChild(stocks);
})

function gotopage(e){
  localStorage.setItem('code',e);
  console.log(localStorage.getItem('code'));
  window.location.href = 'stocks.html';
}



document.getElementById("bring-popup").onclick = () =>{
  user_div.style.transform = 'translateY(0px)';
}