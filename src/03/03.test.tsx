import {StudentType} from "../02/02";
import {addSkill, addSkill2, makeStudentActive, doesStudentLiveIn} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Sergey",
        age: 34,
        isActive: true,
        address: {
            street: 'Energostroiteley',
            city: {
                title: 'Lipetsk',
                country: 'Russia'
            }
        },

        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'JS'
            }
        ]
    }
})

test('new tech skill should be added to student',() => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, 'React');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('React');
    expect(student.technologies[3].id).toBeDefined();
})

test('student is active',() => {
    expect(student.isActive).toBe(true);

    makeStudentActive(student);

    expect(student.isActive).toBe(false);

})

test('student lives in city?', () => {

    let result1 = doesStudentLiveIn(student, 'Moscow');
    let result2 = doesStudentLiveIn(student, 'Lipetsk');

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})