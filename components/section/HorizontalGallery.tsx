"use client"
import React, { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { projects as defaultProjects } from "@/data/projects"

gsap.registerPlugin(ScrollTrigger)

type Item = {
  id: string | number
  image: string
  title?: string
  link?: string
}

type Props = {
  items?: Item[]
  gap?: number
  itemWidth?: number // max width in px
  itemHeight?: number // max height in px
  title?: string
  className?: string
}

export default function HorizontalGallery({
  items = defaultProjects as unknown as Item[],
  gap = 16,
  itemWidth = 359,
  itemHeight = 620,
  title,
  className = "",
}: Props) {
  // sesuaikan dengan tinggi navbar (px)
  const NAV_HEIGHT = 60
  const viewportRef = useRef<HTMLDivElement | null>(null) // area that will be pinned
  const trackRef = useRef<HTMLDivElement | null>(null)
  const ctxRef = useRef<gsap.Context | null>(null)

  useEffect(() => {
    if (!viewportRef.current || !trackRef.current) return
    const viewport = viewportRef.current
    const track = trackRef.current

    const cleanTriggers = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === viewport) st.kill()
      })
    }

    const setup = () => {
      cleanTriggers()
      const distance = Math.max(0, track.scrollWidth - viewport.clientWidth)
      if (distance === 0) return null

      const stepPx = itemWidth + gap
      // progress-step for snap (fraction of full progress)
      const stepFraction = stepPx / distance

      const ctx = gsap.context(() => {
        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: viewport,
            // trigger when center of the viewport area reaches center of the screen
            // this makes the pinned area and motion start from vertical center
            start: "center center",
            end: () => `+=${distance}`, // map scroll px to track travel px
            pin: true, // pin the viewport only (title is outside)
            scrub: 0.6,
            snap: {
              // snap to nearest item step in progress-space
              snapTo: (value: number) => {
                if (stepFraction <= 0) return value
                const nearest = Math.round(value / stepFraction) * stepFraction
                return Math.max(0, Math.min(1, nearest))
              },
              duration: 0.35,
              ease: "power2.out",
            },
            invalidateOnRefresh: true,
            // markers: true,
          },
        })
      }, viewport)

      return ctx
    }

    // initial setup
    ctxRef.current = setup()

    // when images load or resize, recompute and refresh
    const refresh = () => {
      // revert previous context then re-setup
      if (ctxRef.current) ctxRef.current.revert()
      ctxRef.current = setup()
      ScrollTrigger.refresh()
    }

    const ro = new ResizeObserver(() => {
      refresh()
    })
    ro.observe(viewport)
    ro.observe(track)

    // also refresh after all images loaded (covers Next/Image lazy load)
    const images = Array.from(track.querySelectorAll("img"))
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", refresh, { once: true })
      }
    })
    // fallback: ensure refresh after small timeout in case lazy loading delays
    const to = window.setTimeout(refresh, 500)

    return () => {
      if (ctxRef.current) ctxRef.current.revert()
      ro.disconnect()
      clearTimeout(to)
      cleanTriggers()
    }
  }, [items, gap, itemWidth, itemHeight])

  return (
    // beri padding-top sebesar tinggi navbar supaya area pinned tidak menempel ke navbar
    <section
      className={`w-full relative py-8 ${className}`}
      aria-label="Horizontal gallery section"
      style={{ paddingTop: `${NAV_HEIGHT}px` }}
    >
      {/* title kept outside the pinned viewport so it remains visible.
          Add sticky so it keeps visible at top while viewport is pinned */}
      {title && (
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-4"
            // sticky di bawah navbar; z-index tinggi agar tidak tertutup
            style={{
              position: "sticky",
              top: `${NAV_HEIGHT + 12}px`,
              zIndex: 60,
              background: "transparent",
            }}
          >
            {title}
          </h2>
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* viewportRef is the area that will be pinned; title above remains visible */}
        {/* make viewport a flex container and center content vertically so track is centered */}
        <div
          ref={viewportRef}
          className="w-full overflow-hidden flex"
          style={{
            alignItems: "center", // center vertically inside pinned area
            minHeight: `calc(${itemHeight}px + 40px)`, // ensure enough vertical space for centering
          }}
        >
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${gap}px`,
              willChange: "transform",
              alignItems: "center", // center each item vertically
              paddingBottom: 6,
            }}
          >
            {items.map((it) => (
              <div
                key={it.id}
                className="relative rounded-lg overflow-hidden flex-shrink-0 shadow-lg bg-neutral-900"
                style={{
                  // responsive: allow images to become larger on small screens,
                  // but never exceed provided max width/height.
                  width: `clamp(180px, 60vw, ${itemWidth}px)`,
                  height: `clamp(280px, 60vh, ${itemHeight}px)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={it.image}
                  alt={it.title || "gallery image"}
                  fill
                  sizes="(max-width: 640px) 60vw, 300px"
                  style={{ objectFit: "cover" }}
                />
                {it.title && (
                  <div className="absolute left-0 bottom-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h3 className="text-sm font-semibold">{it.title}</h3>
                  </div>
                )}
                {it.link && (
                  <Link href={it.link} className="absolute inset-0 z-10" aria-label={it.title || "Open"} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}