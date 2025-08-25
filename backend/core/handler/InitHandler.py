import logging

from core.config.ImageConfig import ImageConfig
from core.config.LogConfig import LogConfig
from core.config.MongoDBConfig import MongoDBConfig

class InitHandler:

    @staticmethod
    def initAllServices():
        ImageConfig.initImageDirectory()
        LogConfig.initLogging()
        MongoDBConfig.initMongoDB()

        logging.info("✅ 所有服务初始化完成")