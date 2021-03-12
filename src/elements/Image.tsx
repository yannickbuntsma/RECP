import * as React from 'react'


export type Props = {
  src: string
  alt?: string
  height?: number
  backgroundSize?: 'cover' | 'contain'
}

export const Image: React.FC<Props> = ({
  src,
  alt,
  height,
  backgroundSize = 'cover',
}) => (
  <div
    aria-hidden
    className="image"
    style={{
      backgroundImage: `url('${src}')`,
      backgroundSize,
      backgroundPosition: 'center',
      height,
    }}
  >
    <img src={src} alt={alt} style={{ width: '0', height: '0' }} />
  </div>
)

export default Image
