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
    <div className="h-full flex items-center justify-start text-sm">
      {urlList.map((url) => (
        <Link
          key={url.url}
          href={`/dashboard/${slug}${url.url}`}
          className={`h-full flex flex-col justify-center items-center group border-b-2 ${
            pathList[3] === url.url.split("/")[1] &&
            pathList[4] === url.url.split("/")[2]
              ? " border-accent text-foreground"
              : "text-muted-foreground border-transparent"
          }`}
        >
          <span className="px-4 py-2 rounded-lg group-hover:bg-muted group-hover:text-muted-foreground">
            {url.name}
          </span>
        </Link>
      ))}
    </div>
  )
}
