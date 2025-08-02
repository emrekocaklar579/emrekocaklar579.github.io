export type ChannelType = {
    status: boolean,
    channels: { 
        id: number,
        name: string,
        url: string
    }[]
}

export type AdsType = {
    status: boolean,
    ads: {
        id: string,
        image: string,
        url: string
    }[]
}