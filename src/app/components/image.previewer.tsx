"use client"

import React, { useState } from "react"
import { useFileUploadContext } from "../context/file"
import Image from "next/image"

const ImagePreviewer = () => {
  const { uploadedFileSrc, cssValues } = useFileUploadContext()
  const { brightness, sepia, saturate, invert, grayscale, contrast } = cssValues

  const filterStyles = {
    filter: `brightness(${brightness / 10 || 1}) 
             sepia(${sepia / 10 || 0}) 
             saturate(${saturate / 10 || 1}) 
             invert(${invert / 10 || 0}) 
             grayscale(${grayscale / 10 || 0}) 
             contrast(${contrast / 10 || 1})`,
  }
  const [imgRes, setImgRes] = useState({
    width: 550,
    height: 200,
  })
  return (
    <div>
      {uploadedFileSrc && (
        <>
          <Image
            src={uploadedFileSrc}
            alt="Preview"
            width={imgRes?.width}
            height={imgRes?.height}
            style={filterStyles}
          />
          <div className="inline-flex rounded-md shadow-sm pt-6" role="group">
            <button
              type="button"
              onClick={() =>
                setImgRes({
                  ...imgRes,
                  width: imgRes?.width + 10,
                })
              }
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 whitespace-nowrap	">
              + Zoom In
            </button>
            <button
              type="button"
              onClick={() =>
                setImgRes({
                  width: 550,
                  height: 200,
                })
              }
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 whitespace-nowrap	">
              Fit Screen
            </button>
            <button
              type="button"
              onClick={() =>
                setImgRes({
                  ...imgRes,
                  width: imgRes?.width - 10,
                })
              }
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 whitespace-nowrap	">
              - Zoom Out
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default ImagePreviewer
