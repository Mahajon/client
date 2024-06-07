import Image from "next/image"
import { Upload } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import ImageUploadModal from "./upload-modal"

export default function ImageSection({
  images,
  product,
  slug,
}: {
  images: any[]
  product: string
  slug: string
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Product Images</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2">
          {images.map((image, idx) => (
            <div key={idx} className="aspect-square">
              <Image
                alt="Product image"
                className="w-full h-full rounded-md object-center object-cover"
                height="512"
                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/products/${image.id}`}
                width="512"
              />
            </div>
          ))}

          <ImageUploadModal productId={product} shopSlug={slug} />
        </div>
      </CardContent>
    </Card>
  )
}
