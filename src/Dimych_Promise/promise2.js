// const resolvedPromise = Promise.resolve([{}])
// resolvedPromise
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//
// const rejectedPromise = Promise.reject({message: 'Some error'})
// rejectedPromise
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const usersAPI = {
    getAllUsers() {
        return Promise.resolve([{name: 'Sergey'}, {name: 'Alex'}])
    },
    logon(login, password) {
        if (login !== '123' && password !== '123') {
            return Promise.reject({message: 'incorrect login and password'})
        } else {
            return Promise.resolve({name: 'Sergey', id: 12})
        }
    }
}

const pr = usersAPI.getAllUsers()
pr.then(users => console.log(users))

usersAPI.login('123', '12345')
    .then((data) => {
        // make redirect
    })
    .catch(error => {
        //show error
    })