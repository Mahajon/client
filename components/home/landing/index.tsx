import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import CustomersSection from "./customers"
import FAQSection from "./faq"
import Hero from "./hero"

export default function LandingPage() {
  return (
    <main className="flex-1 ">
      <Hero />

      <section className="bg-background border-t py-12 lg:py-18">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 xl:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-cal tracking-tighter sm:text-5xl">
                  The Modern Workflow Platform
                </h2>
                <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Accelerate your team's productivity with the platform built
                  for the modern web. From the creators of Next.js, the world's
                  leading frontend framework.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:gap-8">
              <div className="flex flex-col gap-1.5">
                <CheckCircleIcon className="w-6 h-6 opacity-50" />
                <span className="text-base font-medium tracking-wide">
                  Streamlined Inventory Management
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Keep track of your products effortlessly with our intuitive
                  inventory management system. Say goodbye to stockouts and
                  overselling, and hello to seamless inventory control.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <CheckCircleIcon className="w-6 h-6 opacity-50" />
                <span className="text-base font-medium tracking-wide">
                  Efficient Order Management
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Take control of your orders from start to finish with
                  Mahajon's efficient order management tools. Process orders,
                  manage returns, and keep your customers satisfied every step
                  of the way.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <CheckCircleIcon className="w-6 h-6 opacity-50" />
                <span className="text-base font-medium tracking-wide">
                  Instant E-commerce Website Generation
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Launch your online store in minutes with our one-click website
                  generation feature. No coding required - just choose your
                  template, customize to your heart's content, and start
                  selling!
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <CheckCircleIcon className="w-6 h-6 opacity-50" />
                <span className="text-base font-medium tracking-wide">
                  Facebook Page Management
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Stay connected with your customers on the world's largest
                  social media platform. Manage your Facebook page directly from
                  Mahajon, and take your social commerce to the next level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" border-t w-full py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 xl:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  How It Works
                </div>
                <h2 className="text-3xl font-cal tracking-tighter sm:text-5xl">
                  Streamlined workflow. Effortless deployment.
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Let your team focus on shipping features instead of managing
                  infrastructure with automated CI/CD, built-in testing, and
                  integrated collaboration.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:gap-8">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-200 border-gray-200 bg-white text-sm font-cal shadow-sm border-gray-200 text-gray-900 dark:bg-gray-950 dark:border-gray-950 dark:text-gray-50">
                  1
                </div>
                <div className="grid gap-1">
                  <h3 className="font-cal">Sign Up for Mahajon</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Create your Mahajon account and gain access to our suite of
                    e-commerce tools.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-200 border-gray-200 bg-white text-sm font-cal shadow-sm border-gray-200 text-gray-900 dark:bg-gray-950 dark:border-gray-950 dark:text-gray-50">
                  2
                </div>
                <div className="grid gap-1">
                  <h3 className="font-cal"> Set Up Your Store</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Customize your online store using our intuitive website
                    generation feature.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-200 border-gray-200 bg-white text-sm font-cal shadow-sm border-gray-200 text-gray-900 dark:bg-gray-950 dark:border-gray-950 dark:text-gray-50">
                  3
                </div>
                <div className="grid gap-1">
                  <h3 className="font-cal">Manage Your Inventory and Orders</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Use Mahajon's inventory and order management tools to keep
                    your business running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomersSection />
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Performance
              </div>
              <h2 className="lg:leading-tighter text-3xl font-cal tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Traffic spikes should be exciting, not scary.
              </h2>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-950"
                href="#"
              >
                Get Started
              </Link>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Security
              </div>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Fully managed infrastructure designed to scale dynamically with
                your traffic, a global edge to ensure your site is fast for
                every customer, and the tools to monitor every aspect of your
                app.
              </p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-950"
                href="#"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
    </main>
  )
}

function CheckCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
