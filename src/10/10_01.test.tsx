import {
    addNewBooksUser, CompanyType,
    makeHairstyle,
    moveUser, removeUserBook, updateBookUser, updateUserCompany,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./10_01";



test('reference type test', () => {
    let user: UserType = {
        name: 'Sergey',
        hair: 34,
        address: {
            city: 'Lipetsk',
            house: 29
        }
    }

    const copyUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(34)
    expect(copyUser.hair).toBe(17)
    expect(copyUser.address.city).toBe('Lipetsk')
})

test('change address test', () => {
    let user: UserWithLaptopType = {
        name: 'Sergey',
        hair: 34,
        address: {
            city: 'Lipetsk',
            house: 29
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Moscow')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Moscow')
})

test('upgrade laptop to MacBook test', () => {
    let user: UserWithLaptopType = {
        name: 'Sergey',
        hair: 34,
        address: {
            city: 'Lipetsk',
            house: 29
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const newLaptopUser = upgradeUserLaptop(user, 'MacBook')

    expect(user).not.toBe(newLaptopUser)
    expect(user.laptop).not.toBe(newLaptopUser.laptop)
    expect(user.laptop.title).toBe('ZenBook')
    expect(newLaptopUser.laptop.title).toBe('MacBook')
})

test('add books test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Sergey',
        hair: 34,
        address: {
            city: 'Lipetsk',
            house: 29
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['JS', 'HTML', 'CSS', 'React']
    }

    const newBooksUser = addNewBooksUser(user, ['ts', 'redux'])

    expect(user).not.toBe(newBooksUser)
    expect(user.books).not.toBe(newBooksUser.books)
    expect(user.books.length).toBe(4)
    expect(newBooksUser.books[4]).toBe('ts')
    expect(newBooksUser.books[5]).toBe('redux')
    expect(newBooksUser.books.length).toBe(6)
})

test('update book test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Sergey',
        hair: 34,
        address: {
            city: 'Lipetsk',
            house: 29
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['JS', 'HTML', 'CSS', 'React']
    }

    const newBookUser = updateBookUser(user, 'JS', 'TS')

    expect(user).not.toBe(newBookUser)
    expect(user.books).not.toBe(newBookUser.books)
    expect(user.books.length).toBe(4)
    expect(newBookUser.books[0]).toBe('TS')
    expect(newBookUser.books.length).toBe(4)
})

test('remove html book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Sergey',
        hair: 34,
        address: {
            city: 'Lipetsk',
            house: 29
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['JS', 'HTML', 'CSS', 'React']
    }

    const userDeletedBook = removeUserBook(user, 'HTML')

    expect(user).not.toBe(userDeletedBook)
    expect(user.books).not.toBe(userDeletedBook.books)
    expect(user.books.length).toBe(4)
    expect(userDeletedBook.books.length).toBe(3)
})

test('update works company', () => {
    let user: UserWithLaptopType & CompanyType = {
        name: 'Sergey',
        hair: 34,
        address: {
            city: 'Lipetsk',
            house: 29
        },
        laptop: {
            title: 'ZenBook'
        },
        company: [
            {id: 1, title: 'CDO'},
            {id: 2, title: 'VP'}
        ]
    }

    const userCopy = updateUserCompany(user, {id: 3, title: 'RTC'})

    expect(user).not.toBe(userCopy)
    expect(user.company).not.toBe(userCopy.company)
    expect(user.company.length).toBe(2)
    expect(userCopy.company.length).toBe(3)
    expect(userCopy.company[0].id).toBe(3)
    expect(userCopy.company[0].title).toBe('RTC')
})