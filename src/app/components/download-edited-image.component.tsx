import React, { useRef } from "react"

interface FilteredImageWithDownloadProps {
  uploadedFileSrc: string
  cssValues: {
    brightness: number
    sepia: number
    saturate: number
    invert: number
    grayscale: number
    contrast: number
  }
  imgRes: {
    width: number
    height: number
  }
}

const FilteredImageWithDownload: React.FC<FilteredImageWithDownloadProps> = ({
  uploadedFileSrc,
  cssValues,
  imgRes,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const applyFilters = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const image = new Image()

    image.onload = () => {
      canvas.width = imgRes.width
      canvas.height = imgRes.height

      ctx.filter = `brightness(${cssValues.brightness / 10 || 1}) 
                    sepia(${cssValues.sepia / 10 || 0}) 
                    saturate(${cssValues.saturate / 10 || 1}) 
                    invert(${cssValues.invert / 10 || 0}) 
                    grayscale(${cssValues.grayscale / 10 || 0}) 
                    contrast(${cssValues.contrast / 10 || 1})`

      ctx.drawImage(image, 0, 0, imgRes.width, imgRes.height)
    }

    image.src = uploadedFileSrc
  }

  const handleDownload = () => {
    applyFilters()

    const canvas = canvasRef.current
    if (!canvas) return

    const dataURL = canvas.toDataURL("image/png")

    const link = document.createElement("a")
    link.href = dataURL
    link.download = "filtered_image.png"
    link.click()
  }

  return (
    <div>
      <button onClick={handleDownload}>Download Image</button>
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  )
}

export default FilteredImageWithDownload
