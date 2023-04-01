import {StudentType} from "../02/02";
import {GovermentBuildingsType, HouseType} from "../02/02_02";

type AddSkillType = (student: StudentType, skill: string) => void
type DoesStudentLiveInType = (student: StudentType, cityName: string) => void
type AddMoneyToBudgetType = (bilding: GovermentBuildingsType, budget: number) => void;
type RepairHouseType = (houseType: HouseType) => void;
type ToFireStaffType = (build: GovermentBuildingsType, staffCount: number) => void;
type ToHireStaffType = (ToFireStaffType);
type makeStudentActiveType = (student: StudentType) => void;

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill: AddSkillType = (student, skill) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const addSkill2: AddSkillType = (student, skill) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive: makeStudentActiveType = function(student) {
    student.isActive = false;
}

export const doesStudentLiveIn: DoesStudentLiveInType = (student, cityName) => {
    return student.address.city.title === cityName;
}

export const addMoneyToBudget: AddMoneyToBudgetType = (bilding, budget) => {
    bilding.budget += budget;
}

export const repairHouse: RepairHouseType = (houseType) => {
    houseType.repaired = true;
}

export const toFireStaff: ToFireStaffType = (build: GovermentBuildingsType, staffCount: number) => {
    build.staffCount -= staffCount;
}

export const toHireStaff: ToHireStaffType = (build: GovermentBuildingsType, staffCount: number) => {
    build.staffCount += staffCount;
}