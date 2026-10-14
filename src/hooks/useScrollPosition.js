import { useState, useEffect } from 'react'
 
export function useScrollPosition(defaultThreshold = 40) {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      const bar = document.getElementById('announcement-bar')
      const threshold = bar ? Math.max(bar.offsetHeight - 2, 10) : defaultThreshold
      setScrollY(y)
      setIsScrolled(y >= threshold)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [defaultThreshold])

  return { scrollY, isScrolled }
}

