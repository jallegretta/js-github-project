
searches GitHub for users by name and displays the results on the screen


const searchBtn = document.querySelector("#github-form > input[type=submit]:nth-child(2)")
searchBtn.addEventListener('click', searchForUser)

function searchForUser(){
   let user = document.getElementById('search').value 
   fetch('https://api.github.com/users/' + user + '/repos', () => {
       console.log(response)
   })
}






Clicking on a specific user will show all the repositories for that user.



The index.html file has a form with a search input. When the form is submitted, 
it should take the value of the input and search GitHub for user matches using the User Search Endpoint.
Using the results of the search, display information about the users to the page. (You might include showing their username, 
    avatar and a link to their profile.)
Clicking on one of these users should send a request to the User Repos Endpoint and return data about all the repositories for that user.
Using the response from the Users Repos Endpoint, display all the repositories for that user on the page.