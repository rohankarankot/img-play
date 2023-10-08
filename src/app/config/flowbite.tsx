"use client"
import React, { useEffect } from "react"
import { initFlowbite } from "flowbite"

const FlowbiteWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    initFlowbite()
  }, [])

  return <div>{children}</div>
}

export default FlowbiteWrapper
