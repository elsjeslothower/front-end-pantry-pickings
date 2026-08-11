import { SignedIn, SignOutButton } from "@clerk/clerk-react";

const LogoutButton = () => {
  return (
    <SignedIn>
      <SignOutButton>
        <button className="nav-link btn btn-link">Log out</button>
      </SignOutButton>
    </SignedIn>
  );
};

export default LogoutButton;