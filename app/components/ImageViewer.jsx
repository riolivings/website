import { useEffect } from "react"

function ImageViewer({image, onClose}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return ()=> {
      document.body.style.overflow = '';
    }
  }, [])
  
  return (
    <div className="fixed inset-0 backdrop-brightness-[0.2] flex items-center justify-center z-30" onClick={()=>{onClose(null)}}>
      <img src={image} alt="image_preview" className="w-[95%] lg:w-1/2" />
    </div>
  )
}

export default ImageViewer