<script lang="ts" >
  import { todoList, msg, hasChanged } from "$lib/store";
  import { fly } from "svelte/transition";
  import type {todoObject} from "$lib/utils/types"
  //   export let hasChanged;

  console.log($todoList);
  function displayMsg() {
    $hasChanged = true;
    setTimeout(() => {
      $hasChanged = false;
    }, 1500);
  }

  function deleteTask(id: number) {
    // console.log(id);
    const removedItem = $todoList.filter((itm:todoObject) => itm.id !== id);
    console.log(removedItem);
    $todoList = removedItem;
    if ($todoList.length === 0) {
      console.log($msg);
      displayMsg();
    }
  }
  function deleteDone() {
    // console.log(id);
    const removedItem = $todoList.filter((itm:todoObject) => !itm.done);
    console.log(removedItem);
    $todoList = removedItem;
    if ($todoList.length === 0) {
      console.log($msg);
      displayMsg();
    }
  }
</script>

<div class="list">
  {#each $todoList as {id, text, done}, i}
    <!-- <p>{todoList[0]}</p> -->
    <div class="todo {i % 2 === 0 ? 'primary' : 'secondary'}">
      <span>
        {text}
      </span>
      <div>
        <span role="button" class:check={done==true} class="semibold" on:click={() => done = !done }
          >&check;</span>
        <span role="button" class="remove semibold" on:click={() => deleteTask(id)}
          >&times;</span>        
      </div>
    </div>
  {/each}
  {#if $todoList.length}
  <div class="button-group">
    <button
      transition:fly={{ duration: 1000, y: 500 }}
      class="info delete"
      on:click={() => {
        $todoList = [];
        displayMsg();
      }}
    >
      tout effacer
    </button>
    <button
      transition:fly={{ duration: 1000, y: 500 }}
      class="success delete"
      on:click={deleteDone}
    >
      effacer terminés
    </button>
    </div>
  {/if}
</div>

<style>
  /* @keyframes fade {
    0%,
    100% {
      opacity: 0;
    }
    10%,
    90% {
      opacity: 1;
    }
  } */
  .semibold {
    font-weight: 600;
  }

  .list {
    width: 100%;
    margin-bottom: 1em;
    margin: 0 auto;
  }
  .check, .done {
    color: #0d0;
  }

  .todo {
    display: flex;
    justify-content: space-between;

    text-indent: 8px;
    padding: 8px;
    margin-bottom: 8px;
    font-variant: small-caps;
  }
  button, .todo {
    font-size: 1.25em;
    border-radius: 8px;
    color: #444;
    
  }
  button {
    text-transform: uppercase;
    letter-spacing: 1pt;

    /* padding: 8px; */
    /* margin-bottom: 8px; */
  }
  .primary {
    background: rgba(127, 0, 127, 0.3);
  }
  .success {
    background: rgba(0, 255, 0, 0.7);
  }
  .secondary {
    background: rgba(127, 127, 0, 0.3);
  }
  .info {
    background: rgba(0, 127, 255, 0.3);
    padding: 0.75em;
    /* box-shadow: 8px 8px 1em rgba(0, 0, 0, 0.5); */
  }
  
  .remove, 
  .delete {
    padding: 0.75em;
    cursor: pointer;
  }
  .button-group {
    display: flex;
    justify-content: stretch;
    align-items: center;
    gap: 5px;
    flex-direction: column;

  }
  .button-group * {
    /* margin-bottom: 0.5em; */
    width: 100%;
    justify-self: center;
    /* margin: 0.5em 0; */
  }

  
  @media (min-width: 640px) {
    .list {
      /* width: 50%; */
    }
    .button-group {
      flex-direction: row;
    }
    .button-group * {
      /* margin-bottom: 0.5em; */
      width: 100%;
      /* margin: 0 0.5em; */
  
    }
  }
</style>
