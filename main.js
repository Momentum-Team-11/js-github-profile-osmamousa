const url = "https://api.github.com/users/osmamousa"
console.log("Calling Fetch")


fetch(url)
    .then((res)=> res.json())
    .then((data) => {
        document.querySelector('#img').innerHTML = `<img src=${data.avatar_url}></img>`
        document.querySelector('#user-name').innerHTML = `<h2>${data.name}</h2>`
        document.querySelector('#Location').innerHTML = `<h2>${"Location:" +" "+data.location}</h2>`
        document.querySelector('#myurl').innerHTML = `<h2>${data.url}</h2>`
        document.querySelector('#gethubusername').innerHTML = `<h2>${"User name:"+" " + data.login}</h2>`
        document.querySelector('#githubrepos').innerHTML = `<h2><a href = "${data.repos_url}">Get Hub Repos<a/></h2>`
    })
