import { ObjectId } from "bson";
import { Filter } from "mongodb";
import { Image } from "../type/data/Image";

export class FilterHelper {

    public static idFilter(id: string): Filter<Image> {
        return { _id: new ObjectId(id) }
    }

    public static pathFilter(path: string): Filter<Image> {
        return { path: path }
    }

    public static tagFilter(tag: string | string[]): Filter<Image> {
        if (Array.isArray(tag)) {
            return { tags: { $all: tag } }
        }

        return { tags: tag }
    }

    public static acquisitionTimeFilter(acquisitionTime: Date): Filter<Image> {
        return {
            'timeNode.acquisitionTime': {
                '$gte': acquisitionTime
            }
        }
    }

    public static satelliteFilter(satellite: string): Filter<Image> {
        return { 'stats.satellite': satellite }
    }

    public static sensorFilter(sensor: string): Filter<Image> {
        return { 'stats.sensor': sensor }
    }
}