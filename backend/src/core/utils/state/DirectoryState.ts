import path from 'path';

export const DirectoryState = {
    PROJECT_DIR: process.cwd(),
    BACKEND_DIR: path.join(process.cwd(), 'backend'),
    CORE_DIR: path.join(process.cwd(), 'backend', 'src', 'core'), 
    LOG_DIR: path.join(process.cwd(), 'backend', 'logs'),
    IMAGE_DIR: path.join(process.cwd(), 'backend', 'images')
}