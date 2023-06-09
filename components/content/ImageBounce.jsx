import React from "react";
import Image from "next/image";

export default function ImageBounce({ src, alt, className }) {
  return (
    <div className={className}>
      <Image src={src} alt={alt} className='bounce' />
    </div>
  );
}
