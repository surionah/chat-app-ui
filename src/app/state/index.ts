import { atom } from "jotai";

export const isConnectedToWs = atom(false);

export const messagesList = atom<string[]>([]);
