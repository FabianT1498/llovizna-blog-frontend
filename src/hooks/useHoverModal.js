import { useRef, useState, useEffect } from 'react'

const useHoverModal = () => {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const enter = () => setHovered(true)
  const leave = () => setHovered(false)

  useEffect(() => {
    const el = ref.current // cache external ref value for cleanup use
    if (el) {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)

      return () => {
        el.removeEventLisener('mouseenter', enter)
        el.removeEventLisener('mouseleave', leave)
      }
    }

    return null
  }, [])

  return [ref, hovered]
}

export default useHoverModal
