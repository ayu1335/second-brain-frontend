interface CreateContextProps {
    ref: any;
    title?: string;
    type?: string;
    
    link?: string;
    placeholder?: string;
}
const Input = (props: CreateContextProps) => {
  return (
    <input ref={props.ref} placeholder={props.placeholder} type={props.type} className="border border-gray-300 rounded-md p-2 " />
  )
}   

export default Input