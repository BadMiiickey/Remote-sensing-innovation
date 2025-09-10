import Background from '../components/Background'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import NavBar from '../components/NavBar'

import '../styles/image-analysis/Background.css'
import '../styles/image-analysis/Header.css'
import '../styles/image-analysis/HintContainer.css'
import '../styles/image-analysis/Title.css'

import { ASSETS } from '../utils/assets'

const ImageAnalysis: React.FC = () => (
   <Background>

      <NavBar />

      <MainContent>

         { /** 上传图片Icon渲染 */}
         <div className='image-analysis-board-upload-hint-container'>
            <img 
               src={ ASSETS.UPLOAD } 
               alt='Upload' 
               style={{ width: 24, height: 24 }}
            />
         </div>

         { /** 云图分析板块 */}
         <div className='image-analysis-board-background'>
            <div className='image-analysis-board-header'>
               <span className='image-analysis-board-title'>云图分析</span>
            </div>
         </div>
         
      </MainContent>

      <Footer />

   </Background>
)

export default ImageAnalysis