export interface DataModel {
}

export interface Project{
    name:string
    type:string
    image:string
    description: string
}

export interface Portfolio{
    id: number
    name: string
    description:string
    image:string
    count:number
}

export type DataType = Project[] | Portfolio[]