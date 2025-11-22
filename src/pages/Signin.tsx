import Input from "../components/Input";
import Button from "../components/Button";
import { useRef, useState } from "react";
import { API_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value?.trim();
    const password = passwordRef.current?.value?.trim();

    if (!username || !password) {
      alert("Username and password are required.");
      return;
    }

    try {
      setLoading(true);
      const resp = await axios.post(`${API_URL}/api/user/signin`, {
        username,
        password,
      });

      // Expect token or user object — adapt to your API
      const token = resp.data?.token;
      if (token) {
        localStorage.setItem("auth_token", token);
      } else if (resp.data?.user) {
        // fallback: store user
        localStorage.setItem("user", JSON.stringify(resp.data.user));
      }

      alert("Signin successful");
      navigate("/dashboard");
    } catch (err: any) {
      // preferred: show a nicer toast or UI error instead of alert
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Signin failed. Check credentials and try again.";
      alert(msg);
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
          text="Signin"
          loading={loading}
          onClick={signin}
        />
      </div>
    </div>
  );
};

export default Signin;
