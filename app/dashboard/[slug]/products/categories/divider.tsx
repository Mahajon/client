"use client"

import { useParams } from "next/navigation"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import CategoryList from "./list"

export default function CategoryDivider({
  children,
  data,
}: {
  children: React.ReactNode
  data: any[]
}) {
  const params: { id: string } = useParams()
  const activeId = params.id
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="w-full h-[200px] p-6 lg:p-8">
          <span className="">
            <CategoryList categories={data} activeId={activeId} />
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className=" h-[200px]  p-6 lg:p-8">{children}</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
