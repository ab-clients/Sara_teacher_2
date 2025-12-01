"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function HomeHero({
  title,
  subtitle,
  bgImage,
  aspect = "16/9",
}: {
  title: string;
  subtitle?: string[];
  bgImage?: string;
  aspect?: string; // "width/height" like "16/9"
}) {
  const cssAspect = aspect.includes("/") ? aspect.replace("/", " / ") : aspect;

  return (
    <section className="my-8 py-16 section-alt ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              {title}
            </h1>
            {subtitle &&
              subtitle.map((line, index) => (
                <p key={index} className="text-(--muted) max-w-xl">
                  {line}
                </p>
              ))}

            <div className="flex gap-4">
              <Link href="/contact">
                <Button className="cursor-pointer">Work with me</Button>
              </Link>

              <Link href="/cv">
                <Button variant="ghost" className="cursor-pointer">
                  View CV
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <div
              className="w-full rounded-xl overflow-hidden shadow-lg"
              style={{ aspectRatio: cssAspect }}
            >
              {bgImage ? (
                <Image
                  src={bgImage}
                  alt={title}
                  className="w-full h-full object-cover block"
                  width={640}
                  height={360}
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-purple-600 to-cyan-500" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
