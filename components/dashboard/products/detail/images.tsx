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

export default function ImageSection({ images }: { images: any[] }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Product Images</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2">
          <button>
            <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-cover"
              height="84"
              src="/placeholder.svg"
              width="84"
            />
          </button>
          <button>
            <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-cover"
              height="84"
              src="/placeholder.svg"
              width="84"
            />
          </button>
          <button>
            <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-cover"
              height="84"
              src="/placeholder.svg"
              width="84"
            />
          </button>
          <button>
            <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-cover"
              height="84"
              src="/placeholder.svg"
              width="84"
            />
          </button>

          <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
            <Upload className="size-4 text-muted-foreground" />
            <span className="sr-only">Upload</span>
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
