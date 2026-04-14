import { useState, useEffect, useRef } from 'react'

const rand = (a, b) => Math.random() * (b - a) + a

export function useFallingStars() {
  const [fallingStars, setFallingStars] = useState([])
  const nextId = useRef(0)

  useEffect(() => {
    let timerId

    const schedule = () => {
      timerId = setTimeout(() => {
        const id = nextId.current++
        setFallingStars((prev) => [...prev, id])
        setTimeout(() => {
          setFallingStars((prev) => prev.filter((x) => x !== id))
        }, 2000)
        schedule()
      }, rand(2000, 3000))
    }

    schedule()
    return () => clearTimeout(timerId)
  }, [])

  const removeStar = (id) =>
    setFallingStars((prev) => prev.filter((x) => x !== id))

  return { fallingStars, removeStar }
}
