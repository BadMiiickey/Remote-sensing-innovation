import dataclasses

from backend.core.utils.type.data.Image import Image
from backend.core.utils.type.data.Stats import Stats
from backend.core.utils.type.data.TimeNode import TimeNode

from typing import TYPE_CHECKING

if (TYPE_CHECKING):
    from core.config.MongoDBConfig import MongoDBConfig

class ImageManager:
    def __init__(self, db: 'MongoDBConfig.MongoDB'):
        self.db = db

    def createImage(self, path: str, **kwargs):
        image = Image(
            path=path,
            tags=kwargs.get('tags', []),
            phenomena=kwargs.get('phenomena', []),
            timeNode=TimeNode(
                acquisitionTime=kwargs.get('acquisitionTime', None),
                analyseTime=kwargs.get('analyseTime', None)
            ),
            stats=Stats(
                satellite=kwargs.get('satellite', None),
                sensor=kwargs.get('sensor', None)
            )
        )

        imageData = dataclasses.asdict(image)

        imageData.pop('_id', None)
        self.db.images.insert_one(imageData)

        return image
    

