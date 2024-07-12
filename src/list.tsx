import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import fetch from "./fetch";

export default function List() {
    const [load, setLoad] = useState<boolean>(false)
    const [data, setData] = useState<string[]>([])
    const [err, setErr] = useState<string>('')
    const [searchParams] = useSearchParams()
    const params = searchParams.get('search') || ''

    const url = (url: string) => {
        try {
          new URL(url);
          return true;
        } catch (error) {
          return false;
        }
    }

    useEffect(() => {
        if (params && !url(params)) {
            setErr('Invalid URL')
        } else {
            setLoad(true)
            fetch(params).then(res => {
                if (res.success) {
                    setData(res.success)
                    setErr('')
                }
                else if (res.error) {
                    setErr(res.error)
                    setData([]) 
                }
                else setErr('Something went wrong')
                setLoad(false)
            })
        }
    }, [params])

    if (!params) {
        return <h1 className="text-center text-slate-600">Belum ada pencarian</h1>
    }

    if (load) {
        return <h1 className="text-center">Memuat data...</h1>
    }

    if (err) {
        return <h1 className="text-center text-red-500">{err}</h1>
    }

    return (<>
        <h1 className="font-medium text-sm bg-slate-50 border border-slate-300 rounded-full py-1 px-3 w-max">
            {data.length} link(s) in page
        </h1>
        <div className="grid w-full divide-y divide-slate-300">
            {data.map((item, i) => 
                <h1 key={i} className="py-2 break-words">{item}</h1>
            )}
        </div>
    </>)
}