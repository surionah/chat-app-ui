"use client";

import { useState } from "react";
import Modal from "../Modal/modal";
import Input from "../Input/input";
import { nickname } from "@/app/state";
import { useAtom } from "jotai";

export default function EnterForm() {
  const [isOpen, setisOpen] = useState(true);
  const [name, setName] = useState("");
  const [_, setNickName] = useAtom(nickname);

  const handleSubmit = () => {
    setNickName(name);
    setisOpen(false);
  };

  return (
    <Modal open={isOpen}>
      <form name="enter-form" onSubmit={handleSubmit}>
        <Input
          value={name}
          onChangeValue={setName}
          placeholder="Enter your name"
          showLabel
          label="Name"
          name="nickname"
          onKeyEnter={handleSubmit}
        />
        <button type="submit">Entrar</button>
      </form>
    </Modal>
  );
}
