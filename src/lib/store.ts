import { writable } from "svelte/store";
import type { TODO } from "./types";

export const todoList = writable([]);
export const hasChanged = writable();
export const msg = writable("");
