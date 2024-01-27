import { FC } from "react";
import { useAuthStore } from "../stores/AuthStore.ts";
import { useNavigate } from "react-router-dom";

export const Component: FC = () => {
  const navigate = useNavigate();
  const { username, signout } = useAuthStore();

  return (
    <div>
      Hello <strong>{username}</strong>
      <button
        onClick={() => {
          signout();
          navigate("/");
        }}
      >
        退出
      </button>
    </div>
  );
};
