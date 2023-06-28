"use client";
import React, { useState } from "react";
import PlusIcon from "../../icons/Plus";
import Button from "../../ui/Button/Button";
import Modal from "../../ui/Modal";

const PlaylistAdd = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>
        <PlusIcon size={28} />
      </button>
      <Modal
        control={[open, setOpen]}
        className="mx-4 w-full max-w-md cursor-auto rounded-lg bg-neutral-900 p-6 shadow-lg"
      >
        <h1 className="text-xl">Create a playlist</h1>
        <input
          type="text"
          placeholder="Playlist name"
          className="mt-4 h-[40px] w-full rounded-full bg-neutral-800 px-4 text-sm outline-none"
        />
        <div className="mt-4 flex justify-end gap-2">
          <Button
            title="Cancel"
            variant="text"
            onClick={() => setOpen(false)}
          />
          <Button title="Create" />
        </div>
      </Modal>
    </>
  );
};

export default PlaylistAdd;
