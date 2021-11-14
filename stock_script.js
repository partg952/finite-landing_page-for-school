fetch("https://finite-api.herokuapp.com/search/"+localStorage.getItem("code")).then(res=>res.json())
.then(results=>{
    console.log(results);
    document.title = results.name;
    document.getElementById('stock-image').src = results.image;
    document.getElementById("title").textContent = results.name;
    document.getElementById("current_price").textContent = "Current Price: "+results.current_price;
    document.getElementById("increase").textContent = "Increase In Price: "+results.increase;
    document.getElementById("code").textContent = "Code Name: "+results.code_name;
    document.getElementById("increase").style.color = changeColor(results.increase);
}).catch(err=>console.log("something went wrong!!"+err));

function changeColor(string){
    if(string.includes("+")){
        return "green";
    }
    else if(string.includes("-")){
        return "red";
    }
}