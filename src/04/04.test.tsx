test('should take old man older then 90', () => {
    const ages = [18, 20, 1, 100, 85, 90, 13]

    const oldAges = ages.filter(el =>  el > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('should take courses chipper 160', () => {
    const courses = [
        {title: 'css', price: 110},
        {title: 'js', price: 200},
        {title: 'react', price: 150}
    ]

    const chipCourses = courses.filter(el => el.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(courses[0].title).toBe('css');
    expect(courses[2].title).toBe('react');
})

test('get only completed task', () => {
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'sugar', isDone: false},
        {id: 4, title: 'tea', isDone: true}
    ]

    const completedTasks = tasks.filter(el => el.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);
})

test('get only uncompleted task', () => {
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'sugar', isDone: false},
        {id: 4, title: 'tea', isDone: true}
    ]

    const uncompletedTasks = tasks.filter(el => !el.isDone)

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[1].id).toBe(3);
})