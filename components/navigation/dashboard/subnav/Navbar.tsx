import Link from "next/link"

export default function Navbar({
  slug,
  pathList,
  urlList,
}: {
  slug: string
  pathList: string[]
  urlList: { name: string; url: string }[]
}) {
  return (
    <div className="flex h-full items-center justify-start text-sm">
      {urlList.map((url) => (
        <Link
          key={url.url}
          href={`/dashboard/${slug}${url.url}`}
          className={`group flex h-full flex-col items-center justify-center border-b-2 ${
            pathList[3] === url.url.split("/")[1] &&
            pathList[4] === url.url.split("/")[2]
              ? " border-accent text-foreground"
              : "border-transparent text-muted-foreground"
          }`}
        >
          <span className="rounded-lg px-4 py-2 group-hover:bg-muted group-hover:text-muted-foreground">
            {url.name}
          </span>
        </Link>
      ))}
    </div>
  )
}
