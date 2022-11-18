// Add your code here
function submitData(userName,userEmail){
    return fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
            'Content-Type':"application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(resp => resp.json())
    .then(user => document.body.innerHTML = user.id)
    .catch(function(error){
        document.body.innerHTML = error.message
    })
}