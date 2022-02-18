const data = require("./data.js")
const $ = jQuery = require('jquery');

window.onload = () =>{
    render()
}

console.log(data.first_name)
function render(){
    const dom = data.map((people)=>{
        return `<div class="card col-3 text-center m-3" style="width: 18rem;">
                <img class="card-img-top" src="${people.image}" style="width:100%;height:150px" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${people.first_name}</h5>
                    <p class="card-text">
                        <div>Email:${people.email}</div>
                        <div>Gender:${people.gender} </div>
                        <div> </div>
                    </p>

                </div>
                </div>`
    }).join('');
    $("#data").html(dom)
}
console.log(typeof data)