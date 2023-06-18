// findUser(1)
//     .then(user => user.name) // получили имя юзера
//     .then(name => console.log(name)) // вывели имя юзера в консоль

// axios.get('https://gogole.com')
//     .then(response => (response.data))
//     .then(data => console.log(data))

const getVacanciesCountFromGoogle = () => {
    // const pr = axios.get('https://gogole.com')
    // const pr2 = pr.then(res => res.data)
    // return pr2

    return axios.get('https://google.com')
        .then(res => res.data)
        .then(data => data.vacancies)
}

getVacanciesCountFromGoogle()
    .then(vacancies => console.log(vacancies))