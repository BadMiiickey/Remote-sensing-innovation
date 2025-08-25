from bson import ObjectId
from datetime import datetime
from typing import List

class FilterHelper:

    @staticmethod
    def idFilter(imageId: str):
        return {
            '_id': ObjectId(imageId)
        }

    @staticmethod
    def pathFilter(path: str):
        return {
            'path': path
        }

    @staticmethod
    def tagFilter(tag: List[str] | str):
        if (isinstance(tag, str)):
            tag = [tag]

        return {
            'tags': {
                '$in': tag
            }
        }

    @staticmethod
    def acquisitionTimeFilter(acquisitionTime: datetime | None):
        if (acquisitionTime is None):
            return {}

        return {
            'timeNode.acquisitionTime': {
                '$gte': acquisitionTime
            }
        }
    
    @staticmethod
    def satelliteFilter(satellite: str | None):
        if (satellite is None):
            return {}

        return {
            'satellite': satellite
        }
    
    @staticmethod
    def sensorFilter(sensor: str | None):
        if (sensor is None):
            return {}

        return {
            'sensor': sensor
        }