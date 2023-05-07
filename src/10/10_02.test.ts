import {
    Man2Type,
    Man3Type,
    Man4Type,
    Man5Type,
    Man6Type,
    Man7Type,
    ManType,
    MotherType,
    Numbers,
    PeopleType
} from "./10_02";

test('1. Simple object', () => {
    let man: ManType = {
        name: 'John',
        age: 28
    };

    let manFullCopy  = {...man}

    expect(man).not.toBe(manFullCopy)
})
test('2. Array of primitives', () => {
    let numbers:Array<Numbers> = [1, 2, 3];

    let numbersFullCopy = [...numbers]

    expect(numbers).not.toBe(numbersFullCopy)
})
test('3. Object inside an object', () => {
    let man1: ManType & MotherType = {
        name: 'John',
        age: 28,
        mother: {
            name: 'Kate',
            age: 50
        }
    };

    let man1FullCopy = {...man1, mother: {...man1.mother}}

    expect(man1).not.toBe(man1FullCopy)
    expect(man1.mother).not.toBe(man1FullCopy.mother)
})
test('4. Array of primitives inside an object', () => {
    let man2: Man2Type = {
        name: 'John',
        age: 28,
        friends: ["Peter", "Steven", "William"]
    };

    let man2FullCopy = {...man2, friends: [...man2.friends]}

    expect(man2).not.toBe(man2FullCopy)
    expect(man2.friends).not.toBe(man2FullCopy.friends)
})
test('5. Array of objects', () => {
    let people: PeopleType[] = [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ];

    let peopleFullCopy = [...people]

    expect(people).not.toBe(peopleFullCopy)
})
test('6. Array of objects inside object', () => {
    let man3: Man3Type  = {
        name: 'John',
        age: 28,
        friends: [
            {name: "Peter", age: 30},
            {name: "Steven", age: 32},
            {name: "William", age: 28}
        ]
    };

    let man3FullCopy = {...man3, friends: [...man3.friends]}

    expect(man3).not.toBe(man3FullCopy)
    expect(man3.friends).not.toBe(man3FullCopy.friends)
})
test('7. Object inside an object, inside an object', () => {
    let man4: Man4Type = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            }
        }
    };

    let man4FullCopy = {...man4, mother: {...man4.mother, work: {...man4.mother.work}}}

    expect(man4).not.toBe(man4FullCopy)
    expect(man4.mother).not.toBe(man4FullCopy.mother)
    expect(man4.mother.work).not.toBe(man4FullCopy.mother.work)
})
test('8. Array of objects inside object -> object', () => {
    let man5: Man5Type = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {name: "Kevin", age: 80},
                {name: "Jennifer", age: 78},
            ]
        }
    };

    let man5FullCopy = {...man5, mother: {...man5.mother, work: {...man5.mother.work}, parents: [...man5.mother.parents]}}

    expect(man5).not.toBe(man5FullCopy)
    expect(man5.mother).not.toBe(man5FullCopy.mother)
    expect(man5.mother.work).not.toBe(man5FullCopy.mother.work)
    expect(man5.mother.parents).not.toBe(man5FullCopy.mother.parents)
})
test('9. Object inside an object -> array -> object ->  object', () => {
    let man6: Man6Type = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {
                    name: "Kevin",
                    age: 80,
                    favoriteDish: {
                        title: "borscht"
                    }
                },
                {
                    name: "Jennifer",
                    age: 78,
                    favoriteDish: {
                        title: "sushi"
                    }
                },
            ]
        }
    };

    let man6FullCopy = {...man6, mother: {...man6.mother, work: {...man6.mother.work}, parents: man6.mother.parents.map(el =>
                ({...el, favoriteDish: {...el.favoriteDish}}))}}
    expect(man6).not.toBe(man6FullCopy)
    expect(man6.mother).not.toBe(man6FullCopy.mother)
    expect(man6.mother.work).not.toBe(man6FullCopy.mother.work)
    expect(man6.mother.parents).not.toBe(man6FullCopy.mother.parents)
    expect(man6.mother.parents[0].favoriteDish).not.toBe(man6FullCopy.mother.parents[0].favoriteDish)
})
test('10. Array of objects inside an object -> object -> array -> object ->  object', () => {
    let man7: Man7Type = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {
                    name: "Kevin",
                    age: 80,
                    favoriteDish: {
                        title: "borscht",
                        ingredients: [
                            {title: "beet", amount: 3},
                            {title: "potatoes", amount: 5},
                            {title: "carrot", amount: 1},
                        ]
                    }
                },
                {
                    name: "Jennifer",
                    age: 78,
                    favoriteDish: {
                        title: "sushi",
                        ingredients: [
                            {title: "fish", amount: 1},
                            {title: "rise", amount: 0.5}
                        ]
                    }
                },
            ]
        }
    };

    let man7FullCopy = {...man7, mother: {...man7.mother, work: {...man7.mother.work}, parents: man7.mother.parents.map(el =>
                ({...el, favoriteDish: {...el.favoriteDish, ingredients: [...el.favoriteDish.ingredients]}}))}}

    expect(man7).not.toBe(man7FullCopy)
    expect(man7.mother).not.toBe(man7FullCopy.mother)
    expect(man7.mother.work).not.toBe(man7FullCopy.mother.work)
    expect(man7.mother.parents).not.toBe(man7FullCopy.mother.parents)
    expect(man7.mother.parents[0].favoriteDish).not.toBe(man7FullCopy.mother.parents[0].favoriteDish)
    expect(man7.mother.parents[0].favoriteDish.ingredients).not.toBe(man7FullCopy.mother.parents[0].favoriteDish.ingredients)
})