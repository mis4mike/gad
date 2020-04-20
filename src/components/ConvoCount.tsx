/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { styles } from './ConvoCount.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'

export const ConvoCount = ({ numberConvos }) => {
  const theme: Theme = useTheme()
  const s = styles(theme)
  return (
    <div css={s.convoCount}>
      <p css={s.number}>{numberConvos}</p>
      <p css={s.convos}>convos</p>
    </div>
  )
}
