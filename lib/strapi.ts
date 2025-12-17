export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

export async function fetchAPI(
  path: string,
  urlParamsObject: any = {},
  options: RequestInit = {}
) {
  try {
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    }

    // Build query string manually to avoid qs dependency
    const params = new URLSearchParams()
    
    if (urlParamsObject.populate) {
      if (typeof urlParamsObject.populate === 'object') {
         // handle object populate if needed, for now simplistic
         // This might fail if complex populate is passed, but we use "*"
         // For deeper populate we might need a recursive function or just string
      } else {
         params.append('populate', urlParamsObject.populate)
      }
    }

    if (urlParamsObject.filters) {
      Object.keys(urlParamsObject.filters).forEach(key => {
        params.append(`filters[${key}][$eq]`, urlParamsObject.filters[key])
      })
    }

    const queryString = params.toString()
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`

    const response = await fetch(requestUrl, mergedOptions)

    if (!response.ok) {
      console.error(response.statusText)
      throw new Error(`An error occurred please try again`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    )
  }
}

export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null
  }
  if (url.startsWith("http") || url.startsWith("//")) {
    return url
  }
  return `${getStrapiURL()}${url}`
}
