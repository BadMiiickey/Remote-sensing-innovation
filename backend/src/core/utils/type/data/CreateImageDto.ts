export interface CreateImageDto {
    path: string
    tags?: string[]
    phenomena?: Array<{
        type: string
        geometry: {
            type: string
            coordinates: Array<number[]>
        }
        confidence: number
        source: string
    }>
    acquisitionTime?: Date
    analyseTime?: Date
    satellite?: string
    sensor?: string
}