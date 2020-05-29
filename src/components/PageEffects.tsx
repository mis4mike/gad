import * as React from 'react'

export const PageEffects = (props) => {
  const { animation, duration, options } = props

  var ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
      ua = 'chrome'
    } else {
      ua = 'safari'
    }
  }

  let keyframes = {
    fadeOut: [
      // keyframes
      { opacity: 1 },
      { opacity: 0 },
    ],
  }

  let timingOptions = {
    once: {
      // timing options
      duration: duration,
      iterations: 1,
      fill: 'forwards',
    },
  }

  let linkClickHandler = (e) => {
    e.preventDefault()
    if (ua !== 'safari') {
      document.getElementsByClassName('page')[0].animate(keyframes[animation], timingOptions[options])
    }
    window.setTimeout(() => {
      window.location = e.target.closest('a').href
    }, duration)
  }

  let applyHandlerToLinks = () => {
    window.requestAnimationFrame(() => {
      let links = document.querySelectorAll('a:not(.external)')

      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', linkClickHandler)
      }
    })
    return () => {
      let links = document.getElementsByTagName('a')

      for (let i = 0; i < links.length; i++) {
        links[i].removeEventListener('click', linkClickHandler)
      }
    }
  }

  React.useEffect(applyHandlerToLinks, [])

  return null
}
