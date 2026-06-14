import React from 'react'

export default function DarkToggle() {
  const toggle = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <button onClick={toggle} className="p-2 rounded-md bg-gray-100 dark:bg-gray-800" aria-label="Toggle theme">
      🌓
    </button>
  )
}
