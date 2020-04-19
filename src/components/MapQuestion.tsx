/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { MapNode } from '../components/MapNode'
import { getFinalNodeTitle } from '../firestore/firestore'
import * as styles from '../styles/MapQuestion.style'
import { knockout, selected, dropShadow } from '../styles/shared.style'
import { mapNodeChildren } from '../styles/Map.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'

export const MapQuestion = (props) => {
  const {
    question,
    currentQuestion,
    setMapDepth,
    setMaxMapDepth,
    setCurrentQuestion,
    questionChildren,
    questionIndex,
  } = props

  const theme: Theme = useTheme()

  const [expandedChild, setExpandedChild] = React.useState(null)

  const isSelected = question.current._key == currentQuestion

  return (
    <>
      <li
        css={[styles.mapQuestion(theme), isSelected ? selected(theme) : {}, dropShadow(theme)]}
        key={questionIndex}
        onClick={() => {
          if (Object.keys(questionChildren).length) {
            if (isSelected) {
              setMapDepth(0)
            } else {
              setMapDepth(1)
            }
            setCurrentQuestion(question.current._key)
          } else {
            setMapDepth(0)
            setMaxMapDepth(0)
          }
        }}
      >
        <div css={[knockout(theme), styles.convoCount(theme)]}>
          <p>{Object.keys(questionChildren).length}</p>
          <p>Convos</p>
        </div>
        <h3 css={[styles.title(theme)]}>{getFinalNodeTitle(question)}</h3>
      </li>
      {isSelected && (
        <ul css={mapNodeChildren} key={`${questionIndex}-children`}>
          {Object.keys(questionChildren).map((childNodeKey) => {
            const childNode = questionChildren[childNodeKey]
            return (
              <MapNode
                nodeId={childNodeKey}
                title={childNode.title}
                nodeChildren={childNode.childNodes}
                depth={2}
                setMapDepth={setMapDepth}
                setMaxMapDepth={setMaxMapDepth}
                isExpanded={childNodeKey === expandedChild}
                setIsExpanded={() => {
                  setExpandedChild(childNodeKey)
                }}
                key={childNodeKey}
              />
            )
          })}
        </ul>
      )}
    </>
  )
}
