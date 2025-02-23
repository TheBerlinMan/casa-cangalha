import React from "react";


import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NewEventForm from "../components/NewEventForm";

const Admin = () => {
  return (
    <div>
      <SignedOut>
        <div>Please sign in.</div>
      </SignedOut>
      <SignedIn>
        <div>

        <NewEventForm />
        </div>
      </SignedIn>
    </div>
  );
};

export default Admin;
