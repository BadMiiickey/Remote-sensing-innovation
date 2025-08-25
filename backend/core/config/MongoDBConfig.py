import logging

from pymongo import MongoClient

class MongoDBConfig:

    @classmethod
    def initMongoDB(cls):
        from core.manager.ImageManager import ImageManager
        from core.manager.ImageGetter import ImageGetter
        from core.manager.ImageUpdater import ImageUpdater

        cls.db = cls.MongoDB()
        cls.imageManager = ImageManager(cls.db)
        cls.imageGetter = ImageGetter(cls.db)
        cls.imageUpdater = ImageUpdater(cls.db)

        logging.info('✅ 初始化MongoDB配置完成')

        return cls.db

    class MongoDB:
        def __init__(self, connection: str = 'mongodb://localhost:27017', database: str = 'RemoteSensingDB'):
            self.connection = connection
            self.database = database

            try:
                self.client = MongoClient(self.connection)
                self.db = self.client[self.database]

                # 测试连接
                self.client.server_info()
                logging.info('✅ 成功连接到MongoDB')
            except Exception as e:
                logging.error(f'❌ 连接MongoDB失败: { str(e) }')

            self.images = self.db.images

            self.__createIndex()

        # 创建索引
        def __createIndex(self):
            self.images.create_index('tags')
            self.images.create_index('acquisitionTime')
            self.images.create_index('satellite')
            self.images.create_index('sensor')
