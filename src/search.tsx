import { FormEvent, useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom';

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams()
    const params = searchParams.get('search') || ''
    const [search, setSearch] = useState<string>(params)

    useEffect(() => {
      setSearch(params)
    }, [params])

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchParams.set('search', search)
        setSearchParams(searchParams)
    }

    return (
      <form onSubmit={submit} className="w-full flex items-center isolate -space-x-px text-sm">
        <input type="text" placeholder="Masukkan URL disini" value={search} onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-slate-50 rounded-l-md py-2 px-3 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-slate-950 outline-none" />
        <button type="submit" disabled={!search} 
        className="font-medium bg-slate-50 py-2 px-3 rounded-r-md ring-1 ring-inset ring-slate-300 hover:bg-slate-200 disabled:bg-slate-300 disabled:text-slate-600">
          Cari
        </button>
      </form>
    )
}