export const lightenDarkenColor = (color: string, amount: number): string => {
  let usePound = false

  if (color[0] === '#') {
    // eslint-disable-next-line no-param-reassign
    color = color.slice(1)
    usePound = true
  }

  const num = parseInt(color, 16)

  // eslint-disable-next-line no-bitwise
  let r = (num >> 16) + amount

  if (r > 255) {
    r = 255
  } else if (r < 0) {
    r = 0
  }

  // eslint-disable-next-line no-bitwise
  let b = ((num >> 8) & 0x00ff) + amount

  if (b > 255) {
    b = 255
  } else if (b < 0) {
    b = 0
  }

  // eslint-disable-next-line no-bitwise
  let g = (num & 0x0000ff) + amount

  if (g > 255) {
    g = 255
  } else if (g < 0) {
    g = 0
  }

  // eslint-disable-next-line no-bitwise
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}
