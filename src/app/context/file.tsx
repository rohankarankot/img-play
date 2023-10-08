"use client"

import { createContext, useContext, ReactNode, useState } from "react"

type FileUploadContextType = {
  uploadedFile: File | null
  uploadedFileSrc: string | null
  setUploadedFile: Function
  cssValues: any
  setCssValues: Function
}

const FileUploadContext = createContext<FileUploadContextType | undefined>(
  undefined
)

export function FileUploadProvider({ children }: { children: ReactNode }) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [uploadedFileSrc, setUploadedFileSrc] = useState<string | null>(null)
  const [cssValues, setCssValues] = useState<any>({
    brightness: 0,
    sepia: 0,
    saturate: 0,
    invert: 0,
    grayscale: 0,
    contrast: 0,
  })

  const handleFileChange = (file: File, src: string | null) => {
    setUploadedFile(file)
    setUploadedFileSrc(src)
  }

  return (
    <FileUploadContext.Provider
      value={{
        uploadedFile,
        uploadedFileSrc,
        setUploadedFile: handleFileChange,
        cssValues,
        setCssValues,
      }}>
      {children}
    </FileUploadContext.Provider>
  )
}

export function useFileUploadContext() {
  const context = useContext(FileUploadContext)

  if (context === undefined) {
    throw new Error(
      "useFileUploadContext must be used within a FileUploadProvider"
    )
  }

  return context
}
