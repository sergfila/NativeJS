type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

type UserType2 = {
    name: string
    age: number
}

const icreaseAge = (u: UserType) => {
    u.age++
}

test('reference type test', () => {

    let user: UserType = {
        name: 'Sergey',
        age: 34,
        address: {
            title: 'Lipetsk'
        }
    }

    icreaseAge(user)

    expect(user.age).toBe(35)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('reference type test', () => {

    let user: UserType = {
        name: 'Sergey',
        age: 34,
        address: {
            title: 'Lipetsk'
        }
    }

    let addr = user.address

    let user2: UserType = {
        name: 'Marina',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Moscow'

    expect(user.address.title).toBe('Moscow')
})

test('array reference test', () => {

    let users: UserType2[] = [
        {
            name: 'Sergey',
            age: 34
        },
        {
            name: 'Alina',
            age: 32
        }
    ]

    let admins = users

    admins.push({name: 'Valera', age: 10})

    expect(users.length).toBe(3)
    expect(users[2]).toEqual({name: 'Valera', age: 10})
})

test('reference array type test', () => {

    let address = {
        title: 'Lipetsk'
    }

    let user: UserType = {
        name: 'Sergey',
        age: 34,
        address: address
    }

    let addr = user.address

    let user2: UserType = {
        name: 'Marina',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Katya', age: 18, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Serg'

    expect(user.name).toBe('Serg')
})

test('value type test', () => {

    let usersCount = 100;

    let adminsCount = usersCount

    adminsCount += 1

    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)
})

test('sort array test', () => {

    const arr = ['c', 'd', 'a', 'f', 'b']
    arr.sort();

    expect(arr).toEqual(['a', 'b', 'c', 'd', 'f'])
})