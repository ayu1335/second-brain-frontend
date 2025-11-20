

const SideBarItem = ({text,icon,className}:{text:string, icon?:React.ReactElement, className?:string}) => {
  return (
    <div className={`flex items-center gap-4 p-4 hover:bg-gray-200 cursor-pointer rounded-md text-gray-800 transition-all duration-200 ${className}`}>
        {icon}
        {text}  
    </div>
  )
}

export default SideBarItem