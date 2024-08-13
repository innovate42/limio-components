/**
 * Helper for conditionally adding tailwind classes
 */
import { clsx } from "clsx"
import type { ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
