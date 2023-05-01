import Medias from './typings/medias.interface'
import { screenSize } from './constants'
/*
0 - 600px:      Phone
600 - 900px:    Tablet portrait
900 - 1200px:   Tablet landscape
[1200 - 1800] is where our normal styles apply
1800px + :      Big desktop

$breakpoint arguement choices:
- phone
- tab-port
- tab-land
- big-desktop

ORDER: Base + typography > general layout + grid > page layout > components

1em = 16px
*/
const mediaQueries: Medias = {
  bigDesktop: `@media (max-width: ${screenSize.bigDesktop})`,
  tabLand: `@media (max-width: ${screenSize.tabLand})`,
  tabPort: `@media (max-width: ${screenSize.tabPort})`,
  phone: `@media (max-width: ${screenSize.phone})`,
}

export default mediaQueries
