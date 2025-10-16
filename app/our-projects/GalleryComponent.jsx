'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function GalleryComponent({ images }) {
  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <img src={process.env.NEXT_PUBLIC_S3_BASE_URL + image} />
        </div>
      ))}
    </Carousel>
  )
}

export default GalleryComponent