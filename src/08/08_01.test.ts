type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '24231': {id: 24231, name: 'Natasha'},
        '555': {id: 555, name: 'Valera'},
        '41999': {id: 41999, name: 'Katya'}
    }
})

test('should update corresponding user', () => {
    users['555'].name = 'Alex'

    expect(users['555']).toEqual({id: 555, name: 'Alex'}); //toEqual для сравнения объектов (по значению, так как {} != {}
})

test('should delete corresponding user', () => {
    delete users['555']

    expect(users['555']).toBeUndefined()
})