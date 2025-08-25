import os

from typing import Final

class DirectoryState:
    CORE_DIR: Final[str] = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))) # 后端封装类文件夹路径
    BACKEND_DIR: Final[str] = os.path.dirname(CORE_DIR) # 后端文件夹路径
    PROJECT_DIR: Final[str] = os.path.dirname(BACKEND_DIR) # 项目根目录路径
    LOG_DIR: Final[str] = os.path.join(BACKEND_DIR, 'logs') # 日志文件夹路径
    IMAGE_DIR: Final[str] = os.path.join(BACKEND_DIR, 'images') # 图片文件夹路径
