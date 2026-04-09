"use client";
import SettingsItem from "../../../ui/SettingsItem";
import { useState } from "react";
import { Bell, Globe, Moon, Shield, Trash } from "phosphor-react";
import Switch from "@/ui/primitives/Switch";

const Page = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold uppercase tracking-wide">
        Settings
      </h1>
      <div className="flex flex-col gap-2">
        <SettingsItem
          title="Notifications"
          description="Receive notifications when new songs are added to the library."
          icon={<Bell />}
        >
          <Switch onChange={() => setEnabled(!enabled)} enabled={enabled} />
        </SettingsItem>
        <SettingsItem
          title="Dark Mode"
          description="Enable dark mode for the app."
          icon={<Moon />}
        >
          <Switch />
        </SettingsItem>
        <SettingsItem
          title="Language"
          description="Select the language for the app."
          icon={<Globe />}
        />
        <SettingsItem
          title="Password"
          description="Change your password."
          icon={<Shield />}
        />
        <SettingsItem
          title="Delete Account"
          description="Delete your account and all of your data."
          icon={<Trash />}
        />
      </div>
    </div>
  );
};

export default Page;
