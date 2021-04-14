window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    document.getElementById("myAnchor").addEventListener("click", function(event){
        event.preventDefault()
      });
    const searchBtn = document.querySelector("#github-form > input[type=submit]:nth-child(2)");
    searchBtn.addEventListener('click', searchForUser)
            {searchForUser.preventDefault();}

    function searchForUser(){
    let user = document.getElementById('search').value 
    fetch('https://api.github.com/search/users?q='+user, () => {
            console.log(response)
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
        let newLi = document.createElement("li");
        newLi.innerHTML = user;
        document.getElementById("user-list").appendChild(newLi);  
    }

    function searchForRepo(){
        let user = document.getElementById('search').value 
        fetch('https://api.github.com/users/'+user+'/repos', () => {
            console.log(response)
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
        let newLi = document.createElement("li");
        newLi.innerHTML = user;
        document.getElementById("repo-list").appendChild(newLi);  
    }

});