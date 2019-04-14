import * as React from 'react'
import styled from '@emotion/styled'

export interface Props {
  src: string
  alt?: string
  fill?: 'cover' | 'contain'
}

const Image: React.FC<Props> = ({ src, alt, fill = 'cover' }) => (
  <Styled>
    <div
      aria-hidden
      className="image"
      style={{
        backgroundImage: `url('${src}')`,
        backgroundSize: fill,
      }}
    />
    <img src={src} alt={alt} style={{ width: '0', height: '0' }} />
  </Styled>
)

const Styled = styled.div``

export default Image
