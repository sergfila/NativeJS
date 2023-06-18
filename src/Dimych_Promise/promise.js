const promise1 = axios.get('https://google.com')
promise1.then((data) => {})
console.log(promise1)

const promise2 = findUserInDB(100)
promise2
    .then((user) => {
        console.log(user)
    })
    .catch((error) => {
        console.warn(error)
    })
    .finally(() => {
        console.log('finish')
    })

const otherPromise = Promise.all([promise1, promise2])
const otherPromise2 = Promise.allSettled([promise1, promise2])

otherPromise
    .then((results) => {
        const dataFromGoogle = results[0]
        const dataFromDB = results[1]
        console.log(dataFromGoogle, dataFromDB)
    })
    .catch(() => {
        console.log('error')
    })