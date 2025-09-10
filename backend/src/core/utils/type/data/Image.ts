import { ObjectId } from "mongodb"
import { Phenomena } from "./Phenomena"

export interface Image {
    _id?: ObjectId
    path: string
    tags: string[]
    phenomena: Phenomena[]
    timeNode: {
        acquisitionTime?: Date
        analyseTime?: Date
    }
    stats: {
        satellite?: string
        sensor?: string
    }
}
