/**
 * Convert size to tailwind class string
 * TODO: use regex to distinguish size presentations
 * @param size {number|string} string or number to convert to tailwind class
 * @returns {string} converted class string
 */
export const mapper = {
  primary: "bg-primary-800",
};
export function size2Class(size: number | string): string {
  if (typeof size === "string") {
    if (size === "") {
      return size;
    }
    if (isNaN(Number(size[0])) || size.includes("/")) {
      return `-${size}`;
    } else {
      return `-[${size}]`;
    }
  }
  return `-${size}`;
}

export function color2Class(color: string): string {
  if (color.startsWith("#") || color.startsWith("rgb")) {
    return `-[${color}]`;
  }
  return `-${color}`;
}
