'use client'

import React from 'react'
import Image from 'next/image'
import styles from './WhatsAppButton.module.css'

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/923185851061" 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.whatsappButton}
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/assets/WhatsApp.svg.webp"
        alt="WhatsApp"
        width={35}
        height={35}
        priority
      />
    </a>
  )
}

export default WhatsAppButton 