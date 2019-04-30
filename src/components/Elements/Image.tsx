import * as React from 'react'
import styled from '@emotion/styled'

export interface Props {
  src: string
  alt?: string
  backgroundSize?: 'cover' | 'contain'
}

export const Image: React.FC<Props> = ({ src, alt, backgroundSize = 'cover' }) => (
  <div
    aria-hidden
    className="image"
    style={{
      backgroundImage: `url('${src}')`,
      backgroundSize,
    }}
  >
    <img src={src} alt={alt} style={{ width: '0', height: '0' }} />
  </div>
)

export default styled(Image)``
