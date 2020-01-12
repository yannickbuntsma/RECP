import * as React from 'react'
import styled from '@emotion/styled'

import { Image } from './Image'

export type Props = {
  src: string
  alt: string
  height: number
}

const Hero: React.FC<Props> = ({ src, alt, height }) => {
  return (
    <section>
      <Image src={src} alt={alt} height={height} />
    </section>
  )
}

export default styled(Hero)`
  width: 100%;
`
