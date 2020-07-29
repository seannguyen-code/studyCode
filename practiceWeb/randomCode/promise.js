const promise = new Promise((rel, rej) => {
    setTimeout(() => {
        // rel({
        //     user: "hasagi"
        // })
        console.log("Got the user")
        rej(new Error("User login err"))
    }, 1000)
})

promise.then(user => {
    console.log(user)
}).catch(err => console.log(err.message))