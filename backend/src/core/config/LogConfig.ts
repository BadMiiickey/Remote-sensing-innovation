import fs from 'fs'
import path from 'path'
import winston from 'winston'

import { DirectoryState } from '../utils/state/DirectoryState'

export class LogConfig {
    private static logger: winston.Logger

    public static initLogging(): winston.Logger {
        if (this.logger) {
            return this.logger
        }

        try {
            fs.mkdirSync(DirectoryState.LOG_DIR, { recursive: true })
            this.clearOldLogs()

            const stripAnsiFormatter = winston.format(info => {

                const ansiRegex = /\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])/g

                if (typeof info.message === 'string') {
                    info.message = info.message.replace(ansiRegex, '')
                }

                return info
            })

            const fileLogFormat = winston.format.combine(
                stripAnsiFormatter(),
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.align(),
                winston.format.printf(info => `${info.timestamp} - ${info.level.toUpperCase()} - ${info.message}`)
            )

            this.logger = winston.createLogger({
                level: 'info',
                format: fileLogFormat,
                transports: [

                    // 控制台输出
                    new winston.transports.Console({
                        format: winston.format.combine(
                            winston.format.colorize(),
                            winston.format.printf(info => `${info.timestamp} - ${info.level} - ${info.message}`)
                        )
                    }),

                    // 总日志文件记录
                    new winston.transports.File({
                        filename: path.join(DirectoryState.LOG_DIR, 'app.log'),
                        zippedArchive: true,
                        maxsize: 20 * 1024 * 1024, // 20 MB
                        maxFiles: 30,
                    }),

                    // ERROR 日志文件记录
                    new winston.transports.File({
                        level: 'error',
                        filename: path.join(DirectoryState.LOG_DIR, 'error.log'),
                    }),

                    // INFO 日志文件记录
                    new winston.transports.File({
                        level: 'info',
                        filename: path.join(DirectoryState.LOG_DIR, 'info.log'),
                        format: winston.format.combine(
                            winston.format(info => info.level === 'info' ? info : false)()
                        )
                    }),

                    // WARN 日志文件记录
                    new winston.transports.File({
                        level: 'warn',
                        filename: path.join(DirectoryState.LOG_DIR, 'warn.log'),
                        format: winston.format.combine(
                            winston.format(info => info.level === 'warn' ? info : false)()
                        )
                    })
                ],
                exitOnError: false
            })

            this.logger.info('✅ 日志系统初始化成功')
            return this.logger
        } catch (error) {
            console.error(`❌ 初始化自定义日志系统失败: ${ error }`)
            return console as unknown as winston.Logger
        }
    }

    private static clearOldLogs(): void {
        try {
            const files = fs.readdirSync(DirectoryState.LOG_DIR)

            files?.forEach(file => {
                if (file.endsWith('.log')) {

                    const filePath = path.join(DirectoryState.LOG_DIR, file)

                    fs.writeFileSync(filePath, '')
                }
            })
        } catch (error) {
            console.error('❌ 清理旧日志文件失败:', error)
        }
    }
}