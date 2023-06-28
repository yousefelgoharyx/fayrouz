"use client";
import * as RadixSwitch from "@radix-ui/react-switch";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Switch({
  enabled,
  onChange,
}: {
  enabled?: boolean;
  onChange?: (enabled: boolean) => void;
}) {
  return (
    <RadixSwitch.Root
      checked={enabled}
      onCheckedChange={onChange}
      className={classNames(
        enabled ? "bg-green-600" : "bg-neutral-600",
        "relative inline-flex h-6 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
      )}
    >
      <RadixSwitch.Thumb
        className={classNames(
          enabled ? "translate-x-4" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      />
    </RadixSwitch.Root>
  );
}

