import logging

from core.manager.ImageManager import ImageManager
from core.utils.helper.FilterHelper import FilterHelper
from backend.core.utils.type.data.Phenomena import Phenomena

from typing import List

class ImageUpdater(ImageManager):

    # 更新图片标签
    def updateTags(self, imageId: str, newTags: List[str] | str):
        try:
            tagsToAdd = [newTags] if (isinstance(newTags, str)) else newTags
            idFilter = FilterHelper.idFilter(imageId)
            updateQuery = {
                "$addToSet": {
                    "tags": {
                        "$each": tagsToAdd
                    }
                }
            }
            result = self.db.images.update_one(idFilter, updateQuery)

            return result.modified_count > 0
        except Exception as e:
            logging.error(f"❌ 更新图片标签失败: { str(e) }")

    # 更新图片气象信息
    def updatePhenomena(self, imageId: str, newPhenomena: List[Phenomena] | Phenomena):
        try:
            phenomenaToAdd = [newPhenomena] if (isinstance(newPhenomena, Phenomena)) else newPhenomena
            idFilter = FilterHelper.idFilter(imageId)
            updateQuery = {
                "$addToSet": {
                    "phenomena": {
                        "$each": phenomenaToAdd
                    }
                }
            }
            result = self.db.images.update_one(idFilter, updateQuery)

            return result.modified_count > 0
        except Exception as e:
            logging.error(f"❌ 更新图片气象信息失败: { str(e) }")

    # 更新图片卫星信息
    def updateSatellite(self, imageId: str, newSatellite: str):
        try:
            idFilter = FilterHelper.idFilter(imageId)
            updateQuery = {
                "$set": {
                    "stats.satellite": newSatellite
                }
            }
            result = self.db.images.update_one(idFilter, updateQuery)

            return result.modified_count > 0
        except Exception as e:
            logging.error(f"❌ 更新图片卫星信息失败: { str(e) }")

    # 更新图片传感器信息
    def updateSensor(self, imageId: str, newSensor: str):
        try:
            idFilter = FilterHelper.idFilter(imageId)
            updateQuery = {
                "$set": {
                    "stats.sensor": newSensor
                }
            }
            result = self.db.images.update_one(idFilter, updateQuery)
            
            return result.modified_count > 0
        except Exception as e:
            logging.error(f"❌ 更新图片传感器信息失败: { str(e) }")