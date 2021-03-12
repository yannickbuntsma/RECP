import * as React from 'react'

import { Theme } from '../../theme/theme'

export interface Props  {
}

const Paragraph: React.FC<Props> = ({children}) => <p>{children}</p>

export default Paragraph
