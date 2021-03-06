import { createGlobalStyle } from 'styled-components'
import 'typeface-open-sans'
import 'typeface-lato'
import 'typeface-poppins'
import { space } from './functions'

export const ColorPrimary = '#e47e21'
export const ColorDark = '#252525'
export const ColorDarker = '#141414'

const GlobalStyles = createGlobalStyle`
  :root {
    --dark: ${ColorDark};
    --darker: ${ColorDarker};
    --light: #999;
    --orange: ${ColorPrimary};
    --orange-darker: #b7651a;
    --primary: var(--orange);
    --primary-darker: var(--orange-darker);
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  a {
    color: var(--primary);
    text-decoration: none;
  }
  
  .breadcrumb {    
    opacity: .4;
    &__list {
      display: grid;
      list-style: none;
      grid-auto-flow: column;
      justify-content: start;
      margin: 0;
      padding: 0;
    }
    
    &__separator {
      margin: 0 ${space(1)};
    }
  }

  body {
    background-color: var(--dark);
    color: var(--light);
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
  }
  
  .slick-list {
    margin: 0 -8px;
    
    .slick-slide {
      padding: 0 8px;
    }
  }
`

export default GlobalStyles
