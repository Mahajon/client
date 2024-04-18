"use client"

import Image from "next/image"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import UndrawQuestions from "./undraw_questions.svg"

const faqdata = [
  {
    question: "Is Mahajon compatible with my existing website?",
    answer:
      "No, Mahajon currently doesn&apos;t support third party integrations.",
  },
  {
    question: "How does Mahajon ensure the security of my data?",
    answer: "Mahajon uses industry standard encryption to protect your data.",
  },
  {
    question: "What payment methods does Mahajon support?",
    answer:
      "Mahajon currently supports only bkash. We are working on adding more payment methods.",
  },
  {
    question: "What payment methods does Mahajon support?",
    answer:
      "Mahajon currently supports only bkash. We are working on adding more payment methods.",
  },
  {
    question: "What payment methods does Mahajon support?",
    answer:
      "Mahajon currently supports only bkash. We are working on adding more payment methods.",
  },
  {
    question: "What payment methods does Mahajon support?",
    answer:
      "Mahajon currently supports only bkash. We are working on adding more payment methods.",
  },
]

export default function FAQSection() {
  return (
    <section className="w-full  border-t bg-background py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="font-cal text-3xl sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-3 lg:mt-8 xl:gap-12">
          <div className="col-span-2">
            <Accordion type="single" collapsible className="w-full">
              {faqdata.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="hidden flex-col items-center justify-start md:flex">
            <Image
              alt="Illustration"
              className="rounded-lg object-cover"
              src={UndrawQuestions.src}
              unoptimized
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
