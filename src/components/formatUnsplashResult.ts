export interface imageData {
    width: number,
    height: number,
    url: string,
    cover: string, 
    title: string,
    description: string,
    links: {
        html: string,
        download: string,
    },
    user: {
        name: string,
        link: string,
        profile_image: string
    }
}

export function formatUnsplashResult(result: any) {    
    
    const format: imageData = {
        width: result.width,
        height: result.height,
        url: result.urls.raw,
        cover: result.urls.small,  
        title: result.description,
        description: result.alt_description,
        links: {
            html: result.links.html,
            download: result.urls.full,
        },
        user: {
            name: result.user.name,
            link: result.user.links.html,
            profile_image: result.user.profile_image.medium 
        }
    }

    return format
}
