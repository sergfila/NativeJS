import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: any;

beforeEach(() => {
    city = {
        title: 'Lipetsk',
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street:
                        {
                            title: 'White street'
                        }
                }
            }, {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street:
                        {
                            title: 'Happy street'
                        }
                }
            }, {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street:
                        {
                            title: 'Happy street'
                        }
                }
            }
        ],
        govermentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            }, {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            },
        ],
        citizensNumber: 500000
    }
})

test('budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.govermentBuildings[0], 100000);

    expect(city.govermentBuildings[0].budget).toBe(300000);
})

test('budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.govermentBuildings[1], -100000);

    expect(city.govermentBuildings[1].budget).toBe(400000);
})

test('house should be repaired', () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})

test('staff should be increased', () => {
    toFireStaff(city.govermentBuildings[0], 20);

    expect(city.govermentBuildings[0].staffCount).toBe(180);
})

test('staff should be increased', () => {
    toHireStaff(city.govermentBuildings[0], 30);
    toFireStaff(city.govermentBuildings[1], 300);

    expect(city.govermentBuildings[0].staffCount).toBe(230);
    expect(city.govermentBuildings[1].staffCount).toBe(700);
})

