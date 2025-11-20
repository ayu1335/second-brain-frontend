import React from 'react'
import SideBarItem from './SideBarItem'
import XIcon from '../icons/XIcon'
import YtIcon from '../icons/YtIcon'
import BugIcon from '../icons/BugIcon'

const Sidebar = () => {
  return (
    <div className='h-full bg-white border-r-2 border-gray-300 w-72 top-0 left-0 fixed'>
        <h1 className="flex items-center gap-2 p-4 text-2xl font-bold bg-gray-100"><BugIcon/>Brainly</h1>
        <div>
            <SideBarItem text="Tweets" icon={<XIcon/>} />
        <SideBarItem text="YouTube Videos" icon={<YtIcon/>} />
        <SideBarItem text="Articles" icon={<XIcon/>} />
        <SideBarItem text="Books" icon={<XIcon/>} />
        <SideBarItem text="Podcasts" icon={<XIcon/>} />
        </div>
    </div>
  )
}

export default Sidebar