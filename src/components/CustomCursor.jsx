"use client"

import { useState, useEffect } from "react"

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const mMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const mLeave = () => {
      setHidden(true)
    }

    const mDown = () => {
      setClicked(true)
      setTimeout(() => setClicked(false), 150)
    }

    const handleLinkHoverIn = () => {
      setLinkHovered(true)
    }

    const handleLinkHoverOut = () => {
      setLinkHovered(false)
    }

    document.addEventListener("mousemove", mMove)
    document.addEventListener("mouseleave", mLeave)
    document.addEventListener("mousedown", mDown)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHoverIn)
      link.addEventListener("mouseleave", handleLinkHoverOut)
    })

    return () => {
      document.removeEventListener("mousemove", mMove)
      document.removeEventListener("mouseleave", mLeave)
      document.removeEventListener("mousedown", mDown)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverIn)
        link.removeEventListener("mouseleave", handleLinkHoverOut)
      })
    }
  }, [])

  const cursorClasses = `custom-cursor ${hidden ? "opacity-0" : "opacity-100"} ${
    clicked ? "scale-75" : linkHovered ? "scale-150" : "scale-100"
  }`

  // Only show custom cursor on non-touch devices
  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0
  }

  if (isTouchDevice()) {
    return null
  }

  return (
    <div
      className={cursorClasses}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${clicked ? 0.75 : linkHovered ? 1.5 : 1})`,
      }}
    />
  )
}

export default CustomCursor

