"use client"

import { constants } from "buffer"
import { useState } from "react"
import { LoaderIcon, Upload, UploadCloud } from "lucide-react"
import { toast } from "sonner"
import { v4 as uuid4 } from "uuid"

import { generateSignedUrl, uploadProductImages } from "@/lib/actions/storage"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ImageUploadModal({
  productId,
  shopSlug,
}: {
  productId: string
  shopSlug: string
}) {
  const [files, setFiles] = useState<File[]>([])
  const [loading, setLoading] = useState(false)
  const [fileEnter, setFileEnter] = useState(false)
  const removeFile = (file: File) => {
    const newFiles = Array.from(files).filter((f) => f !== file)
    setFiles(newFiles)
  }
  const appendFiles = (newFiles: any) => {
    const oldFiles = Array.from(files)
    setFiles([...oldFiles, ...newFiles])
  }

  async function putImageToServer(signedUrl: string, file: File) {
    try {
      console.log(signedUrl)
      const response = await fetch(signedUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      })
      if (!response.ok) {
        const data = await response.json()
        console.log(data)
        throw new Error(data)
      } else {
        console.log("Image uploaded")
        return true
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async function uploadImages() {
    setLoading(true)
    try {
      if (files && files.length > 0) {
        const form = new FormData()
        for (const file of files) {
          const uuid = uuid4()
          const signedUrl = await generateSignedUrl(`products/${uuid}`)
          if (signedUrl) {
            console.log(signedUrl.url)
            const res = await putImageToServer(signedUrl.url, file)
            form.append("images", uuid as string)
          }
        }
        form.append("productId", productId)
        form.append("shopSlug", shopSlug)
        console.log(form.getAll("images"))
        const res = await uploadProductImages(form)
        setFiles([])
        toast("Images uploaded successfully")
      } else {
        toast("No images to upload")
      }
    } catch (error) {
      console.log(error)
      toast("Failed to upload images")
    }
    setLoading(false)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <button className="h-full flex w-full items-center justify-center rounded-md border border-dashed">
            <Upload className="size-4 text-muted-foreground" />
            <span className="sr-only">Upload</span>
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Images</DialogTitle>
          <DialogDescription>
            Click or drag and drop images to upload
          </DialogDescription>
        </DialogHeader>
        <>
          <label
            htmlFor="imageUploader"
            className={`aspect-square w-full h-full flex flex-col py-8 items-center justify-center gap-1 rounded-lg border-2 border-dashed ${
              fileEnter ? "border-blue-500" : "border-gray-300"
            } cursor-pointer`}
            onDrop={(e) => {
              e.preventDefault()
              setFileEnter(false)
              appendFiles(e.dataTransfer.files)
            }}
            onDragOver={(e) => {
              e.preventDefault()
              setFileEnter(true)
            }}
          >
            <UploadCloud />
            <p className="text-center text-sm font-bold">
              {fileEnter
                ? "Drop here"
                : files.length > 0
                ? files.length + " Files Selected"
                : "Upload Images"}
            </p>

            <input
              type="file"
              name="images"
              accept="image/*"
              id="imageUploader"
              hidden
              multiple
              onChange={(e) => appendFiles(e.target.files)}
            />
          </label>
          <div className="grid grid-cols-2 gap-2">
            {files.length > 0 &&
              Array.from(files).map((file: File, idx) => (
                <div
                  className={`w-full aspect-square relative rounded-lg overflow-hidden`}
                >
                  <img
                    className="h-full w-full object-cover object-center rounded-lg"
                    src={URL.createObjectURL(file)}
                    alt=""
                  />
                  <div className="absolute bottom-0 w-full p-2">
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="w-full text-xs h-6"
                      onClick={() => removeFile(file)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </>

        <DialogFooter>
          <Button onClick={uploadImages} disabled={loading}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <LoaderIcon className="animate-spin" />
                "Uploading..."{" "}
              </span>
            ) : (
              "Confirm Upload"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
