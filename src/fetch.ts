import axios, { AxiosError } from "axios"

export default async function fetch(url: string) {
    try {
        const res = await axios.get(url)
        const parser = new DOMParser()
        const string = parser.parseFromString(res.data, 'text/html')
        const tag = string.body.getElementsByTagName('a')
        const array = Array.from(tag)
        const filter = array.map(item => item.textContent ? item.textContent.trim() : '').filter(item => item !== '')
        const data = Array.from(new Set(filter))
        
        return {success: data}
    } catch (err) {
        const error = err as AxiosError

        return {error: error.code}
    }
}