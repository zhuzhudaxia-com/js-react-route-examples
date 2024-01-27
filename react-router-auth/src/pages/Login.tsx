import { FC, useEffect, useState } from "react";
import { useAuthStore } from "../stores/AuthStore.ts";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Component: FC = () => {
  const [from, setFrom] = useState<string>("/");
  const [username, setUsername] = useState<string>("");
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { signin } = useAuthStore();

  useEffect(() => {
    const from = params.get("from");
    if (from && from.startsWith("/")) {
      setFrom(from);
    }
  }, [params]);
  return (
    <div>
      <label>用户名：</label>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button
        onClick={() => {
          signin(username);
          navigate(from);
        }}
      >
        登录
      </button>
    </div>
  );
};
