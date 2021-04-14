window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

const searchBtn = document.querySelector("#github-form > input[type=submit]:nth-child(2)")
searchBtn.addEventListener('click', searchForUser)

function searchForUser(){
   let user = document.getElementById('search').value 
   fetch('https://api.github.com/search/users?q='+user, () => {
        console.log(response)
    })
    let newLi = document.createElement("li");
    newLi.innerHTML = user;
    document.getElementById("user-list").appendChild(newLi);  
}
});