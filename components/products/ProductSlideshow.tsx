import { FC } from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'
import styles from './ProductSlideshow.module.css';

interface ProductSlideshowProps {
  images: string[];
}

export const ProductSlideshow: FC<ProductSlideshowProps> = ({ images }) => {
  return (
    <Slide
      easing='ease'
      duration={ 6000 }
      transitionDuration={ 400 }
      indicators
    >
      {
        images.map(image => {

          const url = `/products/${ image }`;
          return (
            <div className={ styles['each-child'] } key={ image }>
              <div
                style={{
                  backgroundImage: `url(${ url })`,
                  backgroundSize: 'cover',
                }}
              />
            </div>
          )

        }) 
      }
    </Slide>
  )
}
