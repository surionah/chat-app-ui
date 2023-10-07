"use client";

import { useState } from "react";
import Modal from "../Modal/modal";
import Input from "../Input/input";
import { nickname } from "@/app/state";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

export default function EnterForm() {
  const [name, setName] = useState("");
  const [_, setNickName] = useAtom(nickname);
  const router = useRouter();

  const handleSubmit = () => {
    setNickName(name);
    router.push("chat");
  };

  return (
    <Modal open>
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
