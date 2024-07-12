import { BrowserRouter } from 'react-router-dom';
import Search from './search';
import List from './list';

function App() {
  return (
    <BrowserRouter>
      <div className='font-main bg-slate-100 text-slate-950 w-full min-h-dvh'>
        <a href='/'>
          <h1 className='text-2xl font-semibold text-center p-4 bg-slate-50 border-b border-slate-300'>Scraper</h1>
        </a>
        <div className='grid gap-y-6 w-full max-w-lg mx-auto py-8 px-4'>
          <Search />
          <List />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
