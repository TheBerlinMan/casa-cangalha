import React from "react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import EventList from "../components/EventList";

const Admin = () => {
  return (
    <div>
      <SignedOut>
        <div>Please sign in.</div>
      </SignedOut>
      <SignedIn>
        <div>
          <Link href="/admin/eventForm">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              New Event
            </button>
          </Link>
          <EventList />

        </div>
      </SignedIn>
    </div>
  );
};

export default Admin;
