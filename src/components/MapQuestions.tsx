/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { MapNode } from '../components/MapNode'
import { MapIntro } from '../components/MapIntro'
import { styles } from './MapQuestions.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { getFinalNodeTitle } from '../firestore/firestore'

export const MapQuestions = (props) => {
  const { questions, questionChildren, setMapDepth, setMaxMapDepth } = props

  const [selectedChild, setSelectedChild] = React.useState(null)

  const theme: Theme = useTheme()
  const s = styles(theme)

  return (
    <div css={s.responsiveFlex}>
      <MapIntro />
      <ul css={s.questionList}>
        {questions.map((question, questionIndex) => (
          <MapNode
            key={question._key}
            nodeId={question._key}
            topLevel={true}
            title={getFinalNodeTitle(question)}
            nodeChildren={questionChildren[questionIndex].childNodes}
            depth={1}
            setMapDepth={setMapDepth}
            setMaxMapDepth={setMaxMapDepth}
            isSelected={question._key === selectedChild}
            setIsSelected={() => {
              setSelectedChild(question._key)
            }}
          />
        ))}
      </ul>
    </div>
  )
}
