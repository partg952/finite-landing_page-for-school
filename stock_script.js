fetch("https://finite-api.herokuapp.com/search/"+localStorage.getItem("code")).then(res=>res.json())
.then(results=>{
    console.log(results);
    document.title = results.name;
    document.getElementById('stock-image').src = results.image;
}).catch(err=>console.log("something went wrong!!"+err));