"use client";

import { signIn } from "@/lib/auth-client";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={async () => await signIn.social({ provider: "google" })}>
        Sign In
      </button>
    </div>
  );
}
