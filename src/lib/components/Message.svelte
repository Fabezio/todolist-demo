<<<<<<< HEAD
<script lang="ts">
  import { todoList, hasChanged, msg } from "../store";
  // import type {todoObject} from "$lib/utils/types"

  //   export let hasChanged;
  //   export let msg;
  function fade(node: Element, { delay = 300, duration = 300 }) {
    console.log(node)
    const o = +getComputedStyle(node).opacity;

    return {
      delay,
      duration,
      css: (t:number) => `opacity: ${t * o}`,
    };
  }
=======
<script lang="ts" >
  import { todoList, hasChanged, msg } from "../store";
 import {fade} from "svelte/transition"
  //   export let hasChanged;
  //   export let msg;
  // function fade(node, { delay = 300, duration = 300 }) {
  //   const o = +getComputedStyle(node).opacity;

  //   return {
  //     delay,
  //     duration,
  //     css: (t) => `opacity: ${t * o}`,
  //   };
  // }
>>>>>>> 191c119818ed9c1e8cf2deed057949b39518c7d2

  console.log("list state:", $hasChanged);
</script>
{#if $hasChanged && !$todoList.length}
<div class="box">
    <div class="bar">
      <div transition:fade class="todo info">
        {$msg}
      </div>
    </div>
    <!-- {:else}
      <div /> -->
    </div>
  {/if}


<style>
  /* 
  @keyframes fade {
    0%,
    100% {
      opacity: 0;
    }
    10%,
    90% {
      opacity: 1;
    }
  } */

  .bar {
    /* position: relative; */
    display: inline;
    top: 0;
    left: 0;
    width: 100%;
    margin-bottom: 1em;
    margin: 0 auto;
  }

  .todo {
    display: flex;
    justify-content: space-between;

    font-size: 1.25em;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 8px;
    color: #444;
  }

  .info {
    background: rgba(0, 127, 255, 0.3);
    padding: 0.75em;
    box-shadow: 8px 8px 1em rgba(0, 0, 0, 0.5);
  }
/* 
  @media (min-width: 640px) {
    .bar {
      width: 50%;
    }
  } */
</style>
