import { useCallback } from 'react'
import { CONFETTI_COLORS } from '../../constants/MarvelThemedBirthday/heroesData.js'

export function useConfetti(containerRef) {
  const launchConfetti = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const shapes = ['circle', 'square', 'triangle']

    for (let i = 0; i < 120; i++) {
      setTimeout(() => {
        const piece = document.createElement('div')
        piece.className = 'confetti-piece'

        const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]
        const shape = shapes[Math.floor(Math.random() * shapes.length)]
        const size = Math.random() * 10 + 6
        const left = Math.random() * 100
        const duration = (Math.random() * 2.5 + 2).toFixed(2)
        const delay = (Math.random() * 0.5).toFixed(2)

        piece.style.left = `${left}%`
        piece.style.top = '-20px'
        piece.style.width = `${size}px`
        piece.style.height = `${size}px`
        piece.style.animationDuration = `${duration}s`
        piece.style.animationDelay = `${delay}s`

        if (shape === 'circle') {
          piece.style.borderRadius = '50%'
          piece.style.background = color
        } else if (shape === 'triangle') {
          piece.style.background = 'transparent'
          piece.style.borderLeft = `${size / 2}px solid transparent`
          piece.style.borderRight = `${size / 2}px solid transparent`
          piece.style.borderBottom = `${size}px solid ${color}`
          piece.style.width = '0'
          piece.style.height = '0'
        } else {
          piece.style.background = color
        }

        container.appendChild(piece)
        setTimeout(() => piece.remove(), (parseFloat(duration) + parseFloat(delay)) * 1000 + 500)
      }, i * 15)
    }
  }, [containerRef])

  return { launchConfetti }
}
