import { FilterHelper } from "../utils/helper/FilterHelper";
import { Phenomena } from "../utils/type/data/Phenomena";
import { ImageManager } from "./ImageManager";

export class ImageUpdater extends ImageManager {
    
    // 更新图像标签
    public async updateTags(imageId: string, newTags: string[] | string): Promise<boolean> {
        try {
            const tagsToAdd = Array.isArray(newTags) ? newTags : [newTags]
            const idFilter = FilterHelper.idFilter(imageId)
            const updateQuery = { $addToSet: { tags: { $each: tagsToAdd } } }
            const result = await this.collection.updateOne(idFilter, updateQuery)

            return result.modifiedCount > 0
        } catch (error) {
            this.logger.error("❌ 更新标签失败:", error)
            throw new Error("更新标签失败")
        }
    }

    // 更新图像气象信息
    public async updatePhenomena(imageId: string, newPhenomena: Phenomena[]): Promise<boolean> {
        try {
            const idFilter = FilterHelper.idFilter(imageId)
            const updateQuery = { $addToSet: { phenomena: { $each: newPhenomena } } }
            const result = await this.collection.updateOne(idFilter, updateQuery)

            return result.modifiedCount > 0
        } catch (error) {
            this.logger.error("❌ 更新气象信息失败:", error)
            throw new Error("更新气象信息失败")
        }
    }

    // 更新图像卫星信息
    public async updateSatellite(imageId: string, newSatellite: string): Promise<boolean> {
        try {
            const idFilter = FilterHelper.idFilter(imageId)
            const updateQuery = { $set: { 'stats.satellite': newSatellite } }
            const result = await this.collection.updateOne(idFilter, updateQuery)

            return result.modifiedCount > 0
        } catch (error) {
            this.logger.error("❌ 更新卫星信息失败:", error)
            throw new Error("更新卫星信息失败")
        }
    }

    // 更新图像传感器信息
    public async updateSensor(imageId: string, newSensor: string): Promise<boolean> {
        try {
            const idFilter = FilterHelper.idFilter(imageId)
            const updateQuery = { $set: { 'stats.sensor': newSensor } }
            const result = await this.collection.updateOne(idFilter, updateQuery)

            return result.modifiedCount > 0
        } catch (error) {
            this.logger.error("❌ 更新传感器信息失败:", error)
            throw new Error("更新传感器信息失败")
        }
    }
}