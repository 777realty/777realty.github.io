import { useState, useEffect, useRef } from 'react'

export function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 50)
      setIsAtTop(currentScrollY < 50)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isVisible, isAtTop }
}
