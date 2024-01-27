import {
  createSearchParams,
  LoaderFunction,
  Outlet,
  redirect,
} from "react-router-dom";
import { FC } from "react";

import { useAuthStore } from "../../stores/AuthStore.ts";

export const loader: LoaderFunction = ({ request }) => {
  const { isAuthenticated } = useAuthStore.getState();
  const pathname = new URL(request.url).pathname;
  if (pathname === "/login") {
    return null;
  }
  if (isAuthenticated) {
    return null;
  }
  const toParams = createSearchParams({
    from: pathname,
  });
  return redirect("/login?" + toParams);
};

export const Conponent: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
