export type StreetType = {
    title: string
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type GovermentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    govermentBuildings: Array<GovermentBuildingsType>
    citizensNumber: number
}

