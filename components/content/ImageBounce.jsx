import React from "react";

export default function ImageBounce({ src, alt, className }) {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
}
