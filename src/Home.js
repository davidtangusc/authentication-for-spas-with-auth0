import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { getAccessTokenSilently } = useAuth0();

  async function fetchPosts() {
    const token = await getAccessTokenSilently();

    await fetch("https://json-server-posts-api.herokuapp.com/api/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return (
    <div>
      Home page
      <button type="button" onClick={fetchPosts}>
        Get posts
      </button>
      <Profile />
    </div>
  );
}
