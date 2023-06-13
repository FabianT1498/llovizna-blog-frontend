import React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: "OpenSans";
            src: url('../../assets/fonts/OpenSans-Bold.ttf') format('truetype');
            font-weight: 700;
            font-style: normal;
        }
        @font-face {
            font-family: "OpenSans";
            src:  url('../../assets/fonts/OpenSans-SemiBold.ttf') format('truetype');
            font-weight: 600;
            font-style: normal;
        }
        @font-face {
            font-family: "OpenSans";
            src:  url('../../assets/fonts/OpenSans-Regular.ttf') format('truetype');
            font-weight: 400;    /* or whatever weight you need to use for "bolder" */
        }
        @font-face {
            font-family: "OpenSans";
            src:  url('../../assets/fonts/OpenSans-Light.ttf') format('truetype');
            font-weight: 300;    /* or whatever weight you need to use for "bolder" */
        }
    `}
  />
)

export { Fonts }
