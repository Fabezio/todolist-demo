import {writable } from 'svelte/store'
// import type {todoObject} from "$lib/utils/types"

export const todoList = writable([])
export const hasChanged = writable()
export const msg = writable("")
