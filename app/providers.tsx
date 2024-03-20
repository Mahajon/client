"use client"

import React from "react"
import { Next13ProgressBar } from "next13-progressbar"
import { SessionProvider } from "next-auth/react"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Next13ProgressBar
        height="4px"
        color="#000"
        options={{ showSpinner: true }}
        showOnShallow
      />
    </>
  )
}

export default Providers
