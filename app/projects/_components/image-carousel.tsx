"use client"

import Image from "next/image"
import { useState, useCallback } from "react"

interface ImageCarouselProps {
    images: string[]
    alt: string
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }, [images.length])

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, [images.length])

    if (images.length === 0) return null

    if (images.length === 1) {
        return (
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                    src={images[0]}
                    alt={alt}
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        )
    }

    return (
        <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                    src={images[currentIndex]}
                    alt={`${alt} - ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                    priority={currentIndex === 0}
                />
            </div>

            <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
                aria-label="Previous image"
            >
                &#8592;
            </button>

            <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
                aria-label="Next image"
            >
                &#8594;
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${index === currentIndex
                                ? "w-4 bg-foreground"
                                : "w-1.5 bg-foreground/40"
                            }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
