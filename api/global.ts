import ky from 'ky-universal'
import { baseURL } from '../lib/consts'

export interface GlobalResponseBody {
  categories: string[]
}

export function fetchGlobalResponseBody(): Promise<GlobalResponseBody> {
  return ky(baseURL + '/api/global').json()
}
