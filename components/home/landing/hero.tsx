import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px]">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-800">
              Mahajon
            </div>
            <h1 className="font-cal text-3xl sm:text-5xl/none lg:text-7xl">
              Your All-in-One
              <br className="" /> E-commerce Solution.
            </h1>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Welcome to Mahajon, where we&apos;re transforming the way you do
              business online. Whether you&apos;re just starting out or looking
              to scale your operations, Mahajon has everything you need to
              succeed in the digital marketplace.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Contact Sales
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Tour the Platform
              </Link>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl">
            <Image
              alt="Image"
              className="aspect-[16/9] object-cover object-center"
              height="675"
              src="/placeholder.svg"
              width="1200"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
