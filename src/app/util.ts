export function get_image_url(id : string, fullsize: boolean) {
    return `https://snucaligraphy.s3.ap-northeast-2.amazonaws.com/works/${fullsize?"full":"low"}/${id}.jpg`
}

export function get_online_imgae_url(id: string, fullsize: boolean) {
    return `https://snucaligraphy.s3.ap-northeast-2.amazonaws.com/images/${id}.jpg`
}