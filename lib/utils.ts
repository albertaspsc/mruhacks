import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function IsObject(x: unknown): x is Record<string, unknown> {
  return typeof x === "object" && !Array.isArray(x) && x !== null;
}

export function mergeObjects<T extends object>(obj1: T, obj2: T): T {
  const result = { ...obj1 }; // Start with the first object

  // Iterate through the second object
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      // If the key exists in obj1 and is not undefined, keep the original value
      // Otherwise, use the value from obj2
      if (result[key] == null) {
        result[key] = obj2[key];
      }
    }
  }

  return result;
}
