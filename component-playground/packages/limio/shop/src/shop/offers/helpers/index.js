import xss from "xss";

export function sanitizeString(string: string): string {
    const xssOptions = {
      whitelist: [],
      stripIgnoreTag: true,
      stripIgnoreTagBody: ["script"],
    };
  
    return xss(string, xssOptions);
  }