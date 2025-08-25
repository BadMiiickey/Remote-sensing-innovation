import os, logging

from core.utils.state.DirectoryState import DirectoryState

class ImageConfig:

    @staticmethod
    def initImageDirectory():
        try:
            os.makedirs(DirectoryState.IMAGE_DIR, exist_ok=True)
            logging.info('✅ 图片文件夹初始化成功')
        except Exception as e:
            logging.error(f'❌ 初始化图片文件夹失败: { str(e) }')
