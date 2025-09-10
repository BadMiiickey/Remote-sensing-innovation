import fs from 'fs';
import { DirectoryState } from '../utils/state/DirectoryState';
import { LogConfig } from './LogConfig';

export async function initilizeImageDirectory(): Promise<void> {
    try {
        fs.mkdirSync(DirectoryState.IMAGE_DIR, { recursive: true })
        LogConfig.initLogging().info('✅ 图片文件夹初始化成功')
    } catch (error) {
        LogConfig.initLogging().error('❌ 图片文件夹初始化失败', error)
        throw error
    }
}