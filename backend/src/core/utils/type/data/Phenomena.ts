export interface Phenomena {
    type: string
    geometry: {
        type: string
        coordinates: Array<number[]>
    }
    confidence: number
    source: string
}