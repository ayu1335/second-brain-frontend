
import { useState } from 'react'
import Button from './components/Button'
import  Card from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import ShareIcon from './icons/ShareIcon'
import { CreateContentModel } from './components/CreateContentModel'
import Sidebar from './components/Sidebar'



const App = () => {
  const [isCreateContentModelOpen, setCreateContentModelOpen] = useState(false)
  
  return (
    <div>
      <Sidebar/>
      <div className='p-4 ml-72 min-h-screen bg-gray-100'>
      {isCreateContentModelOpen && <CreateContentModel onClick={()=>setCreateContentModelOpen(false)} />}
      <div className='flex justify-end gap-4'>
        <Button variant='primary' text="Add Content" size="small"  startIcon={<PlusIcon size='medium'/>} onClick={() => setCreateContentModelOpen(true)}/>
      <Button variant='secondary' text="Share Brain" size="medium" startIcon={<ShareIcon size='medium'/>} />
      </div>
      <div className='gap-4 items-start flex'>
        <Card type='tweet' link='https://x.com/samirande_/status/1987108643838566695?s=20' title='yo yo yo'/>
        <Card type='youtube' link='https://www.youtube.com/watch?v=4FOZ9V35KTw&t=139s' title='yo yo yo'/>
      </div>
    </div>
    </div>
  )
}

export default App