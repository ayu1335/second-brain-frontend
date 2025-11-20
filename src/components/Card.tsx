import ShareIcon from "../icons/ShareIcon"
interface CardProps {
  title?: string;
  link?: string;
  type?: "tweet"|"youtube";
}
const Card = (props: CardProps) => {
  return (
    <div className="bg-white rounded-md border-2 border-gray-200 max-w-72 p-6 ">
      <div className="flex justify-between">
        <div className="flex items-center text-md">
          <div className="text-gray-500 pr-2"><ShareIcon size="medium" /></div>
          {props.title||"Sample Title"}
        </div>
        <div className=" flex items-center ">
          <div className="text-gray-500 pr-2"><ShareIcon size="medium" /></div>
          <div className="text-gray-500"><a href={props.link} target="_blank"><ShareIcon size="medium" /></a></div>
        </div>
      </div>
      {props.type==="youtube"&& <iframe className="w-full rounded-md pt-4" src={props.link?.replace("watch?v=","embed/").replace("&t=","?start=")} 
      title="YouTube video player"
       frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
      {props.type==="tweet"&& <blockquote className="twitter-tweet w-full rounded-md pt-4">
  <a href={props.link?.replace("x.com","twitter.com")}></a> 
</blockquote>}
        
    </div>
  )
}

export default Card