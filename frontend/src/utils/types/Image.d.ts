export interface Image {
   _id: string
   path: string
   tags: Array<string>
   phenomena: Array<{
      type: string
      geometry: {
         type: string
         coordinates: Array<Array<number>>
      }
      confidence: number
      source: string
   }>
   timeNode: {
      acquisitionTime: string | null
      analyseTime: string | null
   }
   stats: {
      satellite: string | null
      sensor: string | null
   }
}