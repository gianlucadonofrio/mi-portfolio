import { useEffect, useState } from 'react'

export const useTheme = (initialTheme) => {
  const [themeIcon, setThemeIcon] = useState('🌞')
  const [theme, setTheme] = useState(initialTheme)

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      setThemeIcon('🌚')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      setThemeIcon('🌞')
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    if (localStorage.getItem('theme') === 'dark') {
      setTheme('dark')
      setThemeIcon('🌚')
    } else {
      setTheme('light')
      setThemeIcon('🌞')
    }
  }, [theme])

  return [handleTheme, themeIcon]
}
