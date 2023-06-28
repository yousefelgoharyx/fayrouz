"use client";
import { useState } from "react";
import EnvelopeIcon from "../../../icons/Email";
import LockIcon from "../../../icons/Lock";
import Button from "../../../ui/Button/Button";
import Input from "../../../ui/Input";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-xl font-bold">Signup</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex w-full max-w-xs flex-col items-center justify-center gap-2"
      >
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={EnvelopeIcon}
          type="text"
          placeholder="Email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={LockIcon}
          type="password"
          placeholder="Password..."
        />
        <Button title="Login" type="submit" />
      </form>
    </div>
  );
};

export default Page;

