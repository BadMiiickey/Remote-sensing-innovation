import { Db, MongoClient } from "mongodb"
import { LogConfig } from "./LogConfig"

const logger = LogConfig.initLogging()

interface MongoConnectionOptions {
    uri?: string
    databaseName?: string
}

export class MongoConfig {
    private client: MongoClient
    private db: Db
    private static instance: MongoConfig

    private constructor() {}

    public static getInstance(): MongoConfig {
        if (!MongoConfig.instance) {
            MongoConfig.instance = new MongoConfig()
        }

        return MongoConfig.instance
    }

    public async connect(options?: MongoConnectionOptions): Promise<Db> {
        if (this.db) {
            return this.db
        }

        const uri = options?.uri ?? 'mongodb://localhost:27017'
        const databaseName = options?.databaseName ?? 'RemoteSensingDB'

        try {
            this.client = new MongoClient(uri)

            await this.client.connect()

            this.db = this.client.db(databaseName)

            await this.db.command({ ping: 1 })
            logger.info('✅ 成功连接到MongoDB')


            return this.db
        } catch (error) {
            logger.error('❌ 连接到MongoDB失败:', error)
            process.exit(1)
        }
    }

    public getDb(): Db {
        if (!this.db) {
            throw new Error('❌ 数据库尚未连接。请先调用 connect() 方法')
        }

        return this.db
    }

    private async createIndexes(): Promise<void> {
        try {
            const imagesCollection = this.db.collection('images')

            await imagesCollection.createIndex({ tags: 1 })
            await imagesCollection.createIndex({ 'timeNode.acquisitionTime': 1 })
            await imagesCollection.createIndex({ 'stats.satellite': 1 })
            await imagesCollection.createIndex({ 'stats.sensor': 1 })

            logger.info('✅ 成功创建索引')
        } catch (error) {
            logger.error('❌ 创建索引失败:', error)
        }
    }
}