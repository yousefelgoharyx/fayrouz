"use client";
import SettingsItem from "../../../ui/SettingsItem";
import Switch from "../../../ui/Switch";
import BellIcon from "../../../icons/Bell";
import GlobeIcon from "../../../icons/Globe";
import MoonIcon from "../../../icons/Moon";
import ShieldIcon from "../../../icons/Shield";
import TrashIcon from "../../../icons/Trash";
import { useState } from "react";
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
          icon={BellIcon}
        >
          <Switch onChange={() => setEnabled(!enabled)} enabled={enabled} />
        </SettingsItem>
        <SettingsItem
          title="Dark Mode"
          description="Enable dark mode for the app."
          icon={MoonIcon}
        >
          <Switch />
        </SettingsItem>
        <SettingsItem
          title="Language"
          description="Select the language for the app."
          icon={GlobeIcon}
        />
        <SettingsItem
          title="Password"
          description="Change your password."
          icon={ShieldIcon}
        />
        <SettingsItem
          title="Delete Account"
          description="Delete your account and all of your data."
          icon={TrashIcon}
        />
      </div>
    </div>
  );
};

export default Page;
