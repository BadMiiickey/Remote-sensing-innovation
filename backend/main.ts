import { LogConfig } from "./src/core/config/LogConfig"
import { initializeServices } from "./src/core/handler/InitHandler"

const logger = LogConfig.initLogging()

try {
    await initializeServices()

    logger.info("✅ 后端服务已启动")
} catch (error) {
    logger.error("❌ 后端服务启动失败:", error)
    process.exit(1)
}