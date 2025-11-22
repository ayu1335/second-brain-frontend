import Input from "../components/Input";
import Button from "../components/Button";
import { useRef, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value?.trim();
    const password = passwordRef.current?.value?.trim();

    if (!username || !password) {
      alert("Username and password are required.");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${API_URL}/api/user/signup`, {
        username,
        password,
      });

      alert("Signup successful!");
      navigate("/signin");
    } catch (error: any) {
      alert(error.response?.data?.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen w-screen flex items-center bg-gray-200 justify-center">
      <div className="bg-white rounded border min-w-48 flex flex-col p-5 gap-2 shadow-md">
        <Input placeholder="Username" ref={usernameRef} />
        <Input placeholder="Password" type="password" ref={passwordRef} />
        <Button
          variant="primary"
          size="medium"
          text="Signup"
          loading={loading}
          onClick={signup}
        />
      </div>
    </div>
  );
};

export default Signup;
