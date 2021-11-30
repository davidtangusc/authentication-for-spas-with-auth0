import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user } = useAuth0();

  // console.log(user);

  return (
    <>
      {user && (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <img
            src={user.picture}
            alt={user.name}
            className="rounded-circle"
            width="150"
          />
        </div>
      )}
    </>
  );
}
