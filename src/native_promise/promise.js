// promise

// const fetch = (url, callback) => {
//     callback()
// }

// callbackhell - ад колбеков
// fetch('https://shop/authors', (err, data) => {
//     if(err) {
//         console.log(err)
//     } else {
//         fetch('https://shop/authors/id=1', (err, data) => {
//             if(err) {
//                 console.log(err)
//             } else {
//                 fetch('https://shop/authors/id=1/books', (err, data) => {
//                     if(err) {
//                         console.log(err)
//                     } else {
//                         fetch('https://shop/authors/id=1/books/id=23', (err, data) => {
//                             if(err) {
//                                 console.log(err)
//                             } else {
//                                 fetch('https://shop/authors/id=1/books/id=23/122', (err, data) => {
//                                     if(err) {
//                                         console.log(err)
//                                     } else {
//
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

//тоже самое что выше но then catch
fetch('https://shop/autors')
    .then((data) => {
        return fetch('https://shop/autors/65')
    })
    .then((data) => {
        return fetch('https://shop/autors/65/books')
    })
    .then((data) => {
        return fetch('https://shop/autors/65/books/23')
    })
    .then((data) => {
        return fetch('https://shop/autors/65/books/23/55')
    })
    .catch((err) => {
        console.log(err)
    })

// промис ждет ответа - pending
// промис получил ответ - fulfilled
// промис получил ошибку - rejected

// const server = {
//     getData(url) {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 const data = {}
//                 if (data) {
//                     res(data)
//                 } else {
//                     rej('Sorry some')
//                 }
//             }, 2000)
//         })
//     }
// }
// const promise = server.getData()
// console.log(promise

// // пример промиса, для собеса
// const pr = new Promise((res, rej) => {
//     const data = {}
//     const err = {}
//     if(data) {
//         res(data)
//     } else {
//         rej(err)
//     }
// })

const server = {
    getData(url) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                // res('some data')
                rej('something went wrong')
            }, 2000)
        })
    }
}

server
    .getData()
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })


    // .then((data) => {
    //     console.log('then2')
    // })
    // .then((data) => {
    //     console.log('then3')
    // })

// const promise = server.getData()
//
// promise.then((data) => {
//     console.log(data)
// });



// так на практике не делают
// promise.then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// });

// promise.catch((err) => {
//     console.log(err)
// })
//
// promise.finally(() => {
//     console.log('finally')
// })