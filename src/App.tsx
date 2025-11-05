
import Button from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import ShareIcon from './icons/ShareIcon'



const App = () => {
  
  return (
    <div className=' '>
      <Button variant='primary' text="Add Content" size="small"  startIcon={<PlusIcon size='medium'/>}/>
      <Button variant='secondary' text="Share Brain" size="medium" startIcon={<ShareIcon size='medium'/>}/>
      <Button variant='secondary' text="share brain" size="large"/>
    </div>
  )
}

export default App