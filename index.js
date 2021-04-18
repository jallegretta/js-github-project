window.addEventListener('DOMContentLoaded', (event) => {
    
    function fetchGithubByValue(value){
        fetch(`https://api.github.com/search/users?q=${value}`, {
            headers: {
                    "Accept": "application/vnd.github.v3+json"
            }
        })
        .then(res => res.json())
        .then(json => json.items.forEach((user) => {
            appendLi(createLi(user))
        }))
    }
    const submitBtn = document.getElementById('submit-button')
    const searchbox = document.getElementById('search')
    submitBtn.addEventListener('click' , (e) => {
        e.preventDefault()
        fetchGithubByValue(seachBox.value)
    })
    const userList = document.getElementById('user-list')

    function createLi(user){
        document.createElement(li)
    }

    const userLi = document.getElementById('user-list li')

    function appendLi(li){
        userList.append(li)
    }
});