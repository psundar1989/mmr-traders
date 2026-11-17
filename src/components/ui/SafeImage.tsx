"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export const FALLBACK_IMAGE = "/images/fallback.svg";

/**
 * next/image wrapper that swaps to a branded fallback image if the
 * source fails to load — prevents broken-image icons.
 */
export default function SafeImage({ src, alt, ...props }: ImageProps) {
  const [failedSrc, setFailedSrc] = useState<ImageProps["src"] | null>(null);
  const failed = failedSrc === src;

  return (
    <Image
      {...props}
      src={failed ? FALLBACK_IMAGE : src}
      alt={alt}
      onError={() => setFailedSrc(src)}
    />
  );
}
