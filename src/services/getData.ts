import data from 'data.json';

export interface Comuna {
    number: number
    name: string
}

export interface ComunaWithCity {
    number: number
    name: string
    city: City
}

export interface City {
    name: string
    code: string
    comunas?: Comuna[]
}

export interface Reporter {
    phonenumber: string
    names: string
    surnames?: string
}

export interface AddtionalNote {
    reporter: Reporter,
    note: string,
    datetime: string
}

export interface Contact {
    phonenumber: string,
    name?: string
}

export interface Prominent {
    reporter: Reporter,
    datetime: string
}

export interface Property {
    idProperty: string,
    cityCode: string,
    comunaNumber?: number,
    zone: string,
    areaInSquareMeters: number,
    address: string,
    roomsNumber: number,
    bathroomsNumber: number,
    garagesNumber: number,
    propertyTypeId: string,
    propertyStateId: string,
    additionalNotes: AddtionalNote[],
    contacts: Contact[],
    picturesPath: string,
    price: number,
    isProminent: Prominent[],
    datetimeCreated: string,
    reporter: Reporter,
    enabled: boolean
}

export const allCities: City[] = data.cities
export const allReporters: Reporter[] = data.reporters
export const allProperties: Property[] = data.properties

export function getProperties(): Property[] {
    const properties: Property[] = data.properties.filter((property) => {
        return property
    }
    )
    return properties
}

export const allComunas: ComunaWithCity[] = getComunas()
function getComunas() {
    let arr: ComunaWithCity[] = []
    allCities.forEach((city) => {
        if (city.comunas) {
            arr = [
                ...arr,
                ...(city.comunas.map((comuna) => ({ city: { name: city.name, code: city.code }, name: comuna.name, number: comuna.number })))
            ]
        }
    })
    return arr
}