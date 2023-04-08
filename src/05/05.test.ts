import {createGreetingMessage, ManType} from "./05";

let people: ManType[] = []

beforeEach(() => {
    people = [
        {name: 'Sergey Filippov', age: 34},
        {name: 'Alina Kazanskaya', age: 32},
        {name: 'Alexander Filippov', age: 36},
    ]
})


test ('should get array of greeting messages', () => {

    let messages = createGreetingMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Privet Sergey')
    expect(messages[1]).toBe('Privet Alina')
    expect(messages[2]).toBe('Privet Alexander')
})