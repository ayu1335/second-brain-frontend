interface CreateContextProps {
    onChange?:()=>void,
    title?: string;
    link?: string;
    placeholder?: string;
}
const Input = (props: CreateContextProps) => {
  return (
    <input onChange={props.onChange} placeholder={props.placeholder} type="text" className="border border-gray-300 rounded-md p-2 " />
  )
}   

export default Input