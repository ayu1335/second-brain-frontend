import { useRef } from "react";
import CrossIcon from "../icons/CrossIcon"
import Button from "./Button"
import Input from "./Input"
// import { API_URL } from "../config";
// import axios from "axios";

interface CreateContextProps{
  onClick:()=>void,
}

export const CreateContentModel = (props:CreateContextProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  // async function submit() {
  //   const title = titleRef.current?.value;
  //   const link = linkRef.current?.value;
  //  await axios.post(`${API_URL}/api/content/add`, {
  //     data:{
  //       title,
  //       link
  //     }
  //   })
  //   alert('Content Created Successfully')
  // }
  return (
    <>
    <div className="inset-0 bg-blue-500 opacity-50 fixed z-50 " onClick={props.onClick}>
    </div>
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg z-50 flex flex-col gap-4 w-96">
          <Input placeholder="Title" ref={titleRef}/>
        <Input placeholder="Link" ref={linkRef}/>
        <Button variant="primary" size="medium" text="Create" onClick={submit}/>
        <button  className="absolute h-4 w-4 top-0 right-3" onClick={props.onClick}><CrossIcon/></button>
      </div>
    </>
  )
}
