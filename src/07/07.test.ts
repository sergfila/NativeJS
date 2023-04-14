import {ManType} from "./07";

let props: ManType;
beforeEach(() => {
    props = {
        name: 'Sergey',
        age: 34,
        lessons: [
            {title: '1'},
            {title: '2', name: 'js'}
        ],
        address: {
            street: {
                title: 'Sovetskaya'
            }
        }
    }
})

test('', () => {

    // const age = props.age;
    // const lessons = props.lessons;

    const {age, lessons} = props
    const {title} = props.address.street

    expect(lessons.length).toBe(2)
    expect(age).toBe(34)
    expect(props.address.street.title).toBe('Sovetskaya')
    expect(title).toBe('Sovetskaya')
})

test('',() => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    expect(l1.title).toBe('1');

    const [ls1, ...restLessons] = props.lessons;

    expect(ls1.title).toBe('1');
    expect(restLessons.length).toBe(1)
    expect(restLessons[0]).toStrictEqual({title: '2', name: 'js'})
})