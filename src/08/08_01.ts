

export const userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '24231': {id: 24231, name: 'Natasha'},
    '555': {id: 555, name: 'Valera'},
    '41999': {id: 41999, name: 'Katya'}
}

let user = {id: 1000, name: 'Alex'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Andrey'

//users['555'] скорость O(1)

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 24231, name: 'Natasha'},
    {id: 555, name: 'Valera'},
    {id: 41999, name: 'Katya'}
]

//usersArray.find(el => el.id === 1000)
//let usersCopy = [...usersArray.filter(), user]
// let usersArray = usersArray.filter(el => el.id !== user.id

//usersArray.find(el => el.id === 555) скорость O(n)