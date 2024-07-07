"use client";

import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";

export interface FallbackImageProps extends ImageProps {
  fallback: StaticImageData;
}

export default function FallbackImage(props: FallbackImageProps) {
  const [didFail, setDidFail] = useState(false);

  const { fallback, ...imageProps } = props;

  if (!didFail) {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
        {...imageProps}
        onError={() => {
          setDidFail(true);
        }}
      />
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...imageProps} src={props.fallback} />
  );
}
