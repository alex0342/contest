import Splide from '@splidejs/splide'

import '@splidejs/splide/dist/css/splide.min.css'
new Splide('.splide', {
  arrows: false,
  destroy: true,
  breakpoints: {
    767: {
      perPage: 1,
    },
    1024: {
      perPage: 2,
    },
  },
}).mount()
