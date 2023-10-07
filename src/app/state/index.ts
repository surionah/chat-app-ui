import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const isConnectedToWs = atom(false);

export const messagesList = atom<string[]>([]);

export const nickname = atomWithStorage("nickname", "");
