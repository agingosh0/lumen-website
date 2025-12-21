export function getStrapiURL(path = "") {
  if (!process.env.NEXT_PUBLIC_STRAPI_API_URL) {
    console.error("❌ Strapi URL missing in env")
    return ""
  }

  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`
}

export async function fetchAPI(
  path: string,
  urlParamsObject: any = {},
  options: RequestInit = {}
) {

  // Build query string for populate + filters
  const params = new URLSearchParams()

  if (urlParamsObject.populate) {
    params.append("populate", urlParamsObject.populate)
  }

  if (urlParamsObject.filters) {
    Object.keys(urlParamsObject.filters).forEach(key => {
      params.append(`filters[${key}][$eq]`, urlParamsObject.filters[key])
    })
  }

  const queryString = params.toString()

  // Build request URL
  const requestUrl = getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )

  try {
    // Build headers with optional API token authentication
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...(options.headers ?? {})
    }

    // Add Authorization header if API token is provided
    // Use STRAPI_API_TOKEN (server-side only) or NEXT_PUBLIC_STRAPI_API_TOKEN
    const apiToken = process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
    if (apiToken) {
      headers["Authorization"] = `Bearer ${apiToken}`
    }

    const res = await fetch(requestUrl, {
      ...options,
      headers,
      // 🔥 Prevent static build attempt caching
      next: { revalidate: 60 },
    })

    // 🔥 DO NOT THROW ERROR — causes Vercel build fail
    if (!res.ok) {
      console.error("Strapi Response Error:", res.status, res.statusText)
      return null
    }

    return res.json()

  } catch (err) {
    // 🔥 Never throw error → Vercel build dies
    console.error("Strapi fetch failed:", err)
    return null
  }
}

export function getStrapiMedia(url: string | null) {
  if (!url) return null
  if (url.startsWith("http") || url.startsWith("//")) return url
  return `${getStrapiURL()}${url}`
}
