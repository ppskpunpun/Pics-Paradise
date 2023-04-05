export interface imageData {
    url: string,
    title: string,
    description: string
}

export function formatUnsplashResult(result: any) {    
    
    const format: imageData = {
        url: result.urls.raw,
        title: result.description,
        description: result.alt_description
    }

    return format
}
