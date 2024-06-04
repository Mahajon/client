"use client"

import React from "react"
import { Next13ProgressBar } from "next13-progressbar"
import NextTopLoader from "nextjs-toploader"

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
      <NextTopLoader
        color="#000000"
        initialPosition={0.08}
        crawlSpeed={200}
        height={4}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #000000,0 0 5px #000000"
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
    </>
  )
}

export default Providers
