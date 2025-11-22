import { iconSizeVaraent, type iconProps } from "."

export const PlusIcon=(props:iconProps)=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className={iconSizeVaraent[props.size]}>
  <path  d="M12 4.5v15m7.5-7.5h-15" />
</svg>

    )
}
