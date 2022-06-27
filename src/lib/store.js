import {writable } from 'svelte/store'

export const todoList = writable([])
export const hasChanged = writable()
export const msg = writable("")
