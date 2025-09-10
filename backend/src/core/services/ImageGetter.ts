import { FilterHelper } from "../utils/helper/FilterHelper";
import { Image } from "../utils/type/data/Image";
import { ImageManager } from "./ImageManager";

export class ImageGetter extends ImageManager {

    // 根据ID获取图像
    public async getImageById(id: string): Promise<Image | null> {
        try {
            const idFilter = FilterHelper.idFilter(id)
            const image = await this.collection.findOne(idFilter)

            return image
        } catch (error) {
            this.logger.error("❌ 根据ID获取图像失败: ", error)
            return null
        }
    }

    // 根据路径获取图像
    public async getImageByPath(path: string): Promise<Image | null> {
        try {
            const pathFilter = FilterHelper.pathFilter(path)
            const image = await this.collection.findOne(pathFilter)

            return image
        } catch (error) {
            this.logger.error("❌ 根据路径获取图像失败: ", error)
            return null
        }
    }

    // 根据标签获取图像列表
    public async getImageListByTag(tag: string | string[], page: number = 1, limit: number = 10): Promise<Image[] | [] | null> {
        try {
            const tagFilter = FilterHelper.tagFilter(tag)
            const imageList = await this.collection.find(tagFilter)
                .skip((page - 1) * limit)
                .limit(limit)
                .toArray()

            return imageList
        } catch (error) {
            this.logger.error("❌ 根据标签获取图像列表失败: ", error)
            return []
        }
    }

    // 根据采集时间获取图像列表
    public async getImageListByAcquisitionTime(acquisitionTime: Date, page: number = 1, limit: number = 10): Promise<Image[] | [] | null> {
        try {
            const acquisitionTimeFilter = FilterHelper.acquisitionTimeFilter(acquisitionTime)
            const imageList = await this.collection.find(acquisitionTimeFilter)
                .skip((page - 1) * limit)
                .limit(limit)
                .toArray()

            return imageList
        } catch (error) {
            this.logger.error("❌ 根据获取时间获取图像列表失败: ", error)
            return []
        }
    }

    // 根据卫星获取图像列表
    public async getImageListBySatellite(satellite: string, page: number = 1, limit: number = 10): Promise<Image[] | [] | null> {
        try {
            const satelliteFilter = FilterHelper.satelliteFilter(satellite)
            const imageList = await this.collection.find(satelliteFilter)
                .skip((page - 1) * limit)
                .limit(limit)
                .toArray()

            return imageList
        } catch (error) {
            this.logger.error("❌ 根据卫星获取图像列表失败: ", error)
            return []
        }
    }

    // 根据传感器获取图像列表
    public async getImageListBySensor(sensor: string, page: number = 1, limit: number = 10): Promise<Image[] | [] | null> {
        try {
            const sensorFilter = FilterHelper.sensorFilter(sensor)
            const imageList = await this.collection.find(sensorFilter)
                .skip((page - 1) * limit)
                .limit(limit)
                .toArray()

            return imageList
        } catch (error) {
            this.logger.error("❌ 根据传感器获取图像列表失败: ", error)
            return []
        }
    }
}