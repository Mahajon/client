"use client"

import React, { useEffect, useRef, useState } from "react"

export default function Background({
  children,
}: {
  children: React.ReactNode
}) {
  const ref = useRef(null)
  const [isIntersecting, setIntersecting] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setIntersecting(window.scrollY > 200)
      )
    }
  }, [])
  return (
    <header
      ref={ref}
      className={`sticky top-0 z-40 w-full  ${
        isIntersecting ? "bg-background border-b" : "bg-transparent"
      }`}
    >
      {children}
    </header>
  )
}
