import { css } from '@emotion/core'
import { mq } from './App.styles'

export const mapMovementTransitionSpeed = '0.8s'
export const mapFooterHeight = '32px'

export const slideToDepth = (depth) =>
  mq({
    label: 'moveToLevel',
    transform: [
      `translate3d(${-80 * depth + 4}%, 0, 0)`,
      `translate3d(${-40 * depth + 4}%, 0, 0)`,
      `translate3d(${-40 * depth + 4}%, 0, 0)`,
    ],
    transition: 'transform 1s ease',
    WebkitFontSmoothing: 'antialiased',
  })

export const map = (theme) => ({
  label: 'map',
  opacity: 0, // something could use theme here
  animationName: 'fade-in',
  animationDuration: '1s',
  animationFillMode: 'forwards',
  titleBlock: {
    background: 'transparent',
  },
})

export const topContainer = (theme) => ({
  margin: `${theme.spacing.M} ${theme.spacing.M} ${theme.spacing.L} ${theme.spacing.M}`,
  height: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  img: {
    maxWidth: '350px',
  },
})

export const mapContainer = {
  label: 'mapContainer',
  transition: `transform ${mapMovementTransitionSpeed}`,
  WebkitFontSmoothing: 'antialiased',
  paddingBottom: mapFooterHeight,
}

export const mapFooter = css({
  label: 'mapFooter',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: mapFooterHeight,
})

// shared

export const mapNodeChildren = css({
  label: 'nodeChildren',
  position: 'absolute',
  left: '100%',
  top: 0,
  listStyleType: 'none',
  width: '100%',
  height: '100%',
  opacity: 0,
  animationName: 'fade-in',
  animationDelay: '0.4s',
  animationDuration: '1s',
  animationFillMode: 'forwards',
})
