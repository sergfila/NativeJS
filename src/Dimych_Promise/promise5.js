// findUserInDB(1).then(user => {
//     console.log(user.name)
// })

function getNumber() {
    //const promise = Promise.resolve(Math.random())

    const promise = new Promise((resolve, reject) => {
        reject('some error')
        setTimeout(() => {
            resolve(Math.random())
        }, 2000)
    })

    return promise
}

getNumber().then(n => console.log(n))
getNumber().then(n => console.log(n))


const repo = {
    save(data) {
        try {
            localStorage.setItem('some-dey', JSON.stringify(data))
        } catch(error) {
            return false
        }
        return true
    },
    saveAsync(data) {
        const promise = new Promise((res, rej) => {
            try {
                localStorage.setItem('some-dey', JSON.stringify(data))
                res()
            } catch(error) {
                rej()
            }
        })

        return promise;
    },
    read() {

        return new Promise((res, rej) => {
            const data = (JSON.parse(localStorage.getItem('some-key')))
            if (!data) {
                res(null)
            } else {
                res(JSON.parse(data))
            }
        })
    }
}

// const result = repo.save({name: 'it-kamasutra'})
// if (result) {
//     console.log('saved')
// } else {
//     console.warn('not saved')
// }
// const promise = repo.save({name: 'it-kamasutra'})
// promise
//     .then(() => console.log('saved'))
//     .catch(error => console.log('not saved' + error))

const run = async() => {
    await repo.save({name: 'it-kamasutra'})
    console.log('saved')

    const data = await repo.read()
    console.log(data)
}
run()
