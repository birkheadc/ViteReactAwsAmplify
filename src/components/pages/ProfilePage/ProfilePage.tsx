import React from "react";
import utils from "../../../utils";
import { User } from "../../../types/user/user";
import { useRefreshToast } from "../../../hooks/useRefreshToast/useRefreshToast";

function ProfilePage(): JSX.Element | null {
  const toast = useRefreshToast("profile-page");

  React.useEffect(() => {
    (async function fetchMe() {
      try {
        const result = await utils.apiFetch({
          path: `me`,
          init: {
            method: "GET",
          },
          builder: User.fromJson,
        });
        console.log(result);
      } catch (error) {
        toast("Failed to fetch me", "error");
      }
    })();
  }, [toast]);

  return (
    <div>
      <h1>ProfilePage</h1>
      <p>Todo: Show profile</p>
    </div>
  );
}

export default ProfilePage;
