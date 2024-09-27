
const DEFAULT_MESSAGE = "Hey, I would like to become a mentor at GHCGrowthLab"
const WHATSAPP_NUMBER = "+919947135878"
function useWhatsapp() {

  const generateLink = (message=DEFAULT_MESSAGE)=>{
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  }
  
  return {generateLink}
}

export default useWhatsapp