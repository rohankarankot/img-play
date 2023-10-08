import FileUploadComponent from "./components/file-upload.component"
import ImageEditor from "./components/image.editor"
import ImagePreviewer from "./components/image.previewer"

export default function Home() {
  return (
    <div className="mx-10">
      <FileUploadComponent />
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center">
        <ImagePreviewer />
        <ImageEditor />
      </div>
    </div>
  )
}
