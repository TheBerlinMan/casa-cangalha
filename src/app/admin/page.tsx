import React from "react";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Admin = () => {
  return (
    <div>
      <SignedOut>
        <div>Please sign in.</div>
      </SignedOut>
      <SignedIn>
        <div>
          Welcome, User.
        </div>
      </SignedIn>
    </div>
  );
};

export default Admin;
