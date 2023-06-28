"use client";
import { useState } from "react";
import DotsThreeVerticalIcon from "../../icons/Dots3V";
import PencilIcon from "../../icons/Pencil";
import PushPinIcon from "../../icons/PushPen";
import ShareIcon from "../../icons/Share";
import TrashIcon from "../../icons/Trash";
import XIcon from "../../icons/X";
import Modal from "../../ui/Modal";

const PlaylistSettingsItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <button className="flex gap-2 self-start transition-transform active:scale-95">
      {icon}
      <span>{text}</span>
    </button>
  );
};
const PlaylistSettings = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>
        <DotsThreeVerticalIcon size={32} />
      </button>
      <Modal
        control={[open, setOpen]}
        className="sh relative mx-4 w-full max-w-sm rounded-md bg-neutral-900 p-4"
      >
        <div className="flex flex-col items-start justify-center gap-1">
          <h1 className=" text-xl font-bold">Morning</h1>
          <p className="text-sm text-gray-500">Control your playlists</p>
        </div>

        <button
          className="absolute top-4 right-4"
          onClick={() => setOpen(false)}
        >
          <XIcon size={24} />
        </button>
        <div className="mt-4 flex flex-col gap-4">
          <PlaylistSettingsItem text="Share" icon={<ShareIcon size={24} />} />
          <PlaylistSettingsItem
            text="Pin Playlist"
            icon={<PushPinIcon size={24} />}
          />
          <PlaylistSettingsItem
            text="Change name"
            icon={<PencilIcon size={24} />}
          />
          <PlaylistSettingsItem text="Delete" icon={<TrashIcon size={24} />} />
        </div>
      </Modal>
    </>
  );
};

export default PlaylistSettings;
