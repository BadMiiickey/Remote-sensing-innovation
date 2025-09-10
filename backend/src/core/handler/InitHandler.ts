import { Db } from "mongodb";
import { MongoConfig } from "../config/MongoConfig";
import { ImageManager } from "../services/ImageManager";
import { ImageGetter } from "../services/ImageGetter";
import { ImageUpdater } from "../services/ImageUpdater";
import { LogConfig } from "../config/LogConfig";

export interface AppServices {
    db: Db
    imageManager: ImageManager
    imageGetter: ImageGetter
    imageUpdater: ImageUpdater
}

export const services: Partial<AppServices> = {}

export async function initializeServices(): Promise<void> {

    const db = await MongoConfig.getInstance().connect()

    if (!db) {
        throw new Error("❌ 初始化服务失败: 数据库未初始化或连接失败")
    }

    const imageManager = new ImageManager(db)
    const imageGetter = new ImageGetter(db)
    const imageUpdater = new ImageUpdater(db)

    services.db = db
    services.imageManager = imageManager
    services.imageGetter = imageGetter
    services.imageUpdater = imageUpdater

    LogConfig.initLogging().info("✅ 服务初始化完成")
}