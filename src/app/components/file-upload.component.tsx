"use client"

import { useFileUploadContext } from "../context/file"
import FilteredImageWithDownload from "./download-edited-image.component"

function FileUploadComponent() {
  const { uploadedFile, setUploadedFile, uploadedFileSrc, cssValues } =
    useFileUploadContext()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setUploadedFile(file, reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="m-auto py-4">
      {!uploadedFile ? (
        <>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input">
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            onChange={handleFileChange}
          />
        </>
      ) : (
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg" onClick={() => setUploadedFile(null)}>
              {"< back"}
            </h1>
            <h1 className="text-sm">(start from beginning)</h1>
          </div>

          <FilteredImageWithDownload
            uploadedFileSrc={uploadedFileSrc as string}
            cssValues={cssValues}
            imgRes={{
              width: 800,
              height: 600,
            }}
          />
        </div>
      )}
    </div>
  )
}

export default FileUploadComponent
