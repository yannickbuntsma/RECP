import * as React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { ThemeProps } from '../theme/theme'
import { lightenDarkenColor } from '../utils'

export interface Props extends ThemeProps {
  checked: boolean
  disabled?: boolean
  onChange?: () => void
  size?: 'S' | 'M' | 'L'
}
export interface PropsWithType extends Props {
  type: string
}

// TODO: Fix the typing here
// @ts-ignore
const HiddenCheckbox: React.FC<PropsWithType> = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const getSizePixels = (size: Props['size']) => {
  switch (size) {
    case 'S':
      return '16px'
    case 'M':
      return '24px'
    case 'L':
      return '32px'
  }
}

const StyledCheckbox: React.FC<Props> = styled.div`
  display: inline-block;
  margin-right: 1rem;
  width: ${({ size }) => getSizePixels(size)};
  height: ${({ size }) => getSizePixels(size)};
  border-radius: 3px;
  transition: all 150ms; // fix the 'all' when I know what to transition
  box-shadow: 0 0 0 0 pink;
  opacity: ${({ checked }: Props) => (checked ? 1 : 0.5)};
  background: ${({ theme, checked }: Props) =>
    checked ? theme.colors.primary : theme.colors.primary};
`
// // @ts-ignore // TODO: Fix tslint error
// ${HiddenCheckbox}:focus + & {
//   box-shadow: 0 0 0 4px
//     ${({ theme, checked }: Props) =>
//       checked
//         ? theme.colors.primary
//         : theme.colors.primary;
// }
//
// ${HiddenCheckbox}:disabled + & {
//   background: ${(props: Props) => (props.disabled ? 'salmon' : 'papayawhip')};
// }

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  transition: opacity 250ms ease-in-out;
  opacity: ${({ checked }: Props) => (checked ? 1 : 0)};
`

const Checkbox: React.FC<Props> = ({ checked, ...props }) => (
  <>
    <HiddenCheckbox type="checkbox" checked={checked} {...props} />
    <StyledCheckbox checked={checked} {...props}>
      <Icon viewBox="0 0 24 24" checked={checked} {...props}>
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </>
)

export default withTheme(Checkbox)
