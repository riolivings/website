import useWhatsapp from '@/app/hooks/useWhatsapp'
import Link from 'next/link'
import React from 'react'

function WhatsappIcon() {
  const {generateLink} = useWhatsapp()
  return (
    <Link href={generateLink("Hello, I'm reaching out to get more information about your services. Can you please assist me?")} className='z-40 relative' target='_blank'>
      <div className='fixed bottom-10 right-10 cursor-pointer bg-[#25D366] p-3 rounded-full shadow-lg'>
        <img src='/whatsapp.png' alt='whatsapp_logo' />
      </div>
    </Link>
  )
}

export default WhatsappIcon