from core.manager.ImageManager import ImageManager
from core.utils.helper.FilterHelper import FilterHelper
from core.utils.type.Image import Image

from datetime import datetime
from typing import List

class ImageGetter(ImageManager):

    # 根据ID获取图像
    def getImageById(self, imageId: str):
        idFilter = FilterHelper.idFilter(imageId)
        image = self.db.images.find_one(idFilter)

        if (image is None): return None

        return Image(**image)

    # 根据路径获取图像
    def getImageByPath(self, path: str):
        pathFilter = FilterHelper.pathFilter(path)
        image = self.db.images.find_one(pathFilter)

        if (image is None): return None

        return Image(**image)

    # 根据标签获取图像列表
    def getImageListByTag(self, tag: List[str] | str):
        tagFilter = FilterHelper.tagFilter(tag)
        imageList = self.db.images.find(tagFilter)

        return [Image(**image) for image in imageList]

    # 根据采集时间获取图像列表
    def getImageListByAcquisitionTime(self, acquisitionTime: datetime | None):
        acquisitionTimeFilter = FilterHelper.acquisitionTimeFilter(acquisitionTime)
        imageList = self.db.images.find(acquisitionTimeFilter).sort("timeNode.acquisitionTime", 1)

        return [Image(**image) for image in imageList]

    # 根据卫星获取图像列表
    def getImageListBySatellite(self, satellite: str | None):
        satelliteFilter = FilterHelper.satelliteFilter(satellite)
        imageList = self.db.images.find(satelliteFilter)

        return [Image(**image) for image in imageList]

    # 根据传感器获取图像
    def getImageBySensor(self, sensor: str | None):
        sensorFilter = FilterHelper.sensorFilter(sensor)
        imageList = self.db.images.find(sensorFilter)

        return [Image(**image) for image in imageList]
    
