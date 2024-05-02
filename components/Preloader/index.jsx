"use client";
import React from 'react'
import preloader from '../../public/gif/preloader-valley-gif.gif'
function Preloader() {

    
  return (
    <div>
 
      
        <div id="preloader">
          <div id="ctn-preloader" class="ctn-preloader ctn-preloader1">
            <div class="animation-preloader">
               {/* <div class="spinner"></div> */}

              <div class="cp-preloader cp-preloader_type2">
                <span class="cp-preloader__letter" data-preloader="V">V</span>
                <span class="cp-preloader__letter" data-preloader="A">A</span>
                <span class="cp-preloader__letter" data-preloader="L">L</span>
                <span class="cp-preloader__letter" data-preloader="L">L</span>
                <span class="cp-preloader__letter" data-preloader="E">E</span>
                <span class="cp-preloader__letter" data-preloader="Y">Y</span>
                <span class="cp-preloader__letter" data-preloader="J">J</span>
                <span class="cp-preloader__letter" data-preloader="O">O</span>
                <span class="cp-preloader__letter" data-preloader="U">U</span>
                <span class="cp-preloader__letter" data-preloader="R">R</span>
                <span class="cp-preloader__letter" data-preloader="N">N</span>
                <span class="cp-preloader__letter" data-preloader="E">E</span>
                <span class="cp-preloader__letter" data-preloader="Y">Y</span>


                {/* <img src={preloader} alt='preloaderValley'/> */}
              </div>

            </div>	
            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
          </div>
        </div>
    
  
    </div>
  )
}

export default Preloader