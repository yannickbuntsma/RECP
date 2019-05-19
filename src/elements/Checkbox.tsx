import * as React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { ThemeProps } from '../theme/theme'

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
  width: ${({ size }) => getSizePixels(size)};
  height: ${({ size }) => getSizePixels(size)};
  background: ${(props: Props) =>
    props.checked ? props.theme.colors.primary : 'papayawhip'};
  border-radius: 3px;
  transition: all 150ms;

  // @ts-ignore // TODO: Fix tslint error
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${HiddenCheckbox}:disabled + & {
    background: ${(props: Props) => (props.disabled ? 'salmon' : 'papayawhip')};
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 1rem;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const Checkbox: React.FC<Props> = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox type="checkbox" {...props} />
    <StyledCheckbox checked={checked} {...props}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default withTheme(Checkbox)
