import Input from "../components/Input";
import Button from "../components/Button";
const Signin = () => {
  return (
    <div className="h-screen w-screen flex items-center bg-gray-200 justify-center">
      <div className="bh-white rounded border min-w-48 flex flex-col p-5 gap-2">
        <Input placeholder="Username" onChange={()=>{}}/>
        <Input placeholder="Password" onChange={()=>{}}/>
        <Button variant="primary" size="medium" text="Signin"/>
      </div>
    </div>
  );
};

export default Signin;
