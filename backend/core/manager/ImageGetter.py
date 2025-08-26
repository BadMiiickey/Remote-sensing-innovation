import logging

from core.manager.ImageManager import ImageManager
from core.utils.helper.FilterHelper import FilterHelper
from backend.core.utils.type.data.Image import Image

from datetime import datetime
from typing import List

class ImageGetter(ImageManager):

    # 根据ID获取图像
    def getImageById(self, imageId: str) -> Image | None:
        try:
            idFilter = FilterHelper.idFilter(imageId)
            image = self.db.images.find_one(idFilter)

            if (image is None): return None

            return Image(**image)
        except Exception as e:
            logging.error(f"❌ 根据ID获取图像失败: { str(e) }")

    # 根据路径获取图像
    def getImageByPath(self, path: str) -> Image | None:
        try:
            pathFilter = FilterHelper.pathFilter(path)
            image = self.db.images.find_one(pathFilter)

            if (image is None): return None

            return Image(**image)
        except Exception as e:
            logging.error(f"❌ 根据路径获取图像失败: { str(e) }")

    # 根据标签获取图像列表
    def getImageListByTag(self, tag: List[str] | str, page: int = 1, limit: int = 10) -> List[Image] | None:
        try:
            tagFilter = FilterHelper.tagFilter(tag)
            imageList = list(self.db.images.find(tagFilter)
                .skip((page - 1) * limit)
                .limit(limit))
        except Exception as e:
            logging.error(f"❌ 根据标签获取图像列表失败: { str(e) }")

        return [Image(**image) for image in imageList]

    # 根据采集时间获取图像列表
    def getImageListByAcquisitionTime(self, acquisitionTime: datetime | None, page: int = 1, limit: int = 10) -> List[Image] | None:
        try:
            acquisitionTimeFilter = FilterHelper.acquisitionTimeFilter(acquisitionTime)
            imageList = list(self.db.images.find(acquisitionTimeFilter)
                .sort("timeNode.acquisitionTime", 1)
                .skip((page - 1) * limit)
                .limit(limit))
        except Exception as e:
            logging.error(f"❌ 根据采集时间获取图像列表失败: { str(e) }")

        return [Image(**image) for image in imageList]

    # 根据卫星获取图像列表
    def getImageListBySatellite(self, satellite: str | None, page: int = 1, limit: int = 10) -> List[Image] | None:
        try:
            satelliteFilter = FilterHelper.satelliteFilter(satellite)
            imageList = list(self.db.images.find(satelliteFilter)
                .skip((page - 1) * limit)
                .limit(limit))
        except Exception as e:
            logging.error(f"❌ 根据卫星获取图像列表失败: { str(e) }")

        return [Image(**image) for image in imageList]

    # 根据传感器获取图像
    def getImageListBySensor(self, sensor: str | None, page: int = 1, limit: int = 10) -> List[Image] | None:
        try:
            sensorFilter = FilterHelper.sensorFilter(sensor)
            imageList = list(self.db.images.find(sensorFilter)
                .skip((page - 1) * limit)
                .limit(limit))
        except Exception as e:
            logging.error(f"❌ 根据传感器获取图像列表失败: { str(e) }")

        return [Image(**image) for image in imageList]
    
