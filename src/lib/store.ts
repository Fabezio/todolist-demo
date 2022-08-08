<<<<<<< HEAD
import {writable } from 'svelte/store'
// import type {todoObject} from "$lib/utils/types"

export const todoList = writable([])
export const hasChanged = writable()
export const msg = writable("")
=======
import { writable } from "svelte/store";
import type { TODO } from "./types";

export const todoList = writable([]);
export const hasChanged = writable();
export const msg = writable("");
>>>>>>> 191c119818ed9c1e8cf2deed057949b39518c7d2
