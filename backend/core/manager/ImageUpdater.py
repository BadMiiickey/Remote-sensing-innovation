import logging

from core.manager.ImageManager import ImageManager

from typing import List

class ImageUpdater(ImageManager):

    # 更新图片标签
    def updateTags(self, ImageId: str, newTags: List[str] | str):
        try:
            tagsToAdd = [newTags] if (isinstance(newTags, str)) else newTags
            idFilter = {
                "_id": ImageId
            }
            updateQuery = {
                "$addToSet": {
                    "tags": {
                        "$each": tagsToAdd
                    }
                }
            }
            self.db.images.update_one(idFilter, updateQuery)
        except Exception as e:
            logging.error(f"❌ 更新图片标签失败: { str(e) }")