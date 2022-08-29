import {useState, useEffect} from 'react'
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

const Graffiti = () => {
const [images, setImages] = useState([]);

useEffect(() => {
  fetch("http://localhost:8000/images")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setImages(data);
  })
  .catch(err => alert(err.message))
}, [])

    


// The options of the gallery (from the playground current state)
const options = {
      "layoutParams": {
          "structure": {
              "galleryLayout": 0
          }
      }
      };
  
      // The size of the gallery container. The images will fit themselves in it
      const container = {
        width: window.innerWidth,
        height: window.innerHeight
      };
  
      // The eventsListener will notify you anytime something has happened in the gallery.
      const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 
  
      // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
      const scrollingElement = window;
  return (
    <div>Graffiti
      <>
      {images && <ProGallery
        items={images}
        options={options}
        container={container}
        eventsListener={eventsListener}
        scrollingElement={scrollingElement}
      />}
      </>
    </div>
  )
}

export default Graffiti