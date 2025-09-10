import { Collection, Db } from "mongodb";
import { Image } from "../utils/type/data/Image";
import { CreateImageDto } from "../utils/type/data/CreateImageDto";
import { LogConfig } from "../config/LogConfig";

export class ImageManager {
    public collection: Collection<Image>
    public logger: ReturnType<typeof LogConfig.initLogging>

    constructor(db: Db) {
        this.collection = db.collection<Image>("images")
        this.logger = LogConfig.initLogging()
    }

    public async createImage(data: CreateImageDto): Promise<Image> {

        const newImage: Omit<Image, '_id'> = {
            path: data.path,
            tags: data.tags ?? [],
            phenomena: data.phenomena ?? [],
            timeNode: {
                acquisitionTime: data.acquisitionTime,
                analyseTime: data.analyseTime
            },
            stats: {
                satellite: data.satellite,
                sensor: data.sensor
            }
        }

        const result = await this.collection.insertOne(newImage)

        return {
            _id: result.insertedId,
            ...newImage
        }
    }
}