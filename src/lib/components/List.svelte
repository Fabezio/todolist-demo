<script lang="ts" >
  import { todoList, msg, hasChanged } from "../store";
  import { fly } from "svelte/transition";
<<<<<<< HEAD
  import type {todoObject} from "$lib/utils/types"
=======
  import Todo from './Todo.svelte'
  import DisplayData from "$lib/components/DisplayData.svelte"
>>>>>>> 191c119818ed9c1e8cf2deed057949b39518c7d2
  //   export let hasChanged;

  console.log($todoList);
  function displayMsg() {
    $hasChanged = true;
    setTimeout(() => {
      $hasChanged = false;
    }, 1500);
  }

<<<<<<< HEAD
  function deleteTask(id: number) {
    // console.log(id);
    const removedItem: todoObject = $todoList.filter((itm:todoObject) => itm.id !== id);
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
=======
  // function deleteTask(id) {
  //   console.log(id);
  //   const removedItem = $todoList.filter((itm) => itm !== id);
  //   console.log(removedItem);
  //   $todoList = removedItem;
  //   if ($todoList.length === 0) {
  //     console.log($msg);
  //     displayMsg();
  //   }
  // }
</script>

<div class="list">
  {#each $todoList as thisTodo, i}
  <Todo todo={thisTodo} index={i} />
>>>>>>> 191c119818ed9c1e8cf2deed057949b39518c7d2
    <!-- <p>{todoList[0]}</p> -->
    <!-- <div class="todo {i % 2 === 0 ? 'primary' : 'secondary'}">
      <span>
        {text}
      </span>
<<<<<<< HEAD
      <div>
        <span role="button" class:check={done=true} class="semibold" on:click={() => done = !done }
          >&check;</span>
        <span role="button" class="remove semibold" on:click={() => deleteTask(id)}
          >&times;</span>        
      </div>
    </div>
=======
      <span role="button" class="remove semibold" on:click={deleteTask(thisTodo)}
        >&times;</span
      >
    </div> -->
>>>>>>> 191c119818ed9c1e8cf2deed057949b39518c7d2
  {/each}
  {#if $todoList.length}
  <!-- <DisplayData data={$todoList} /> -->
    <div
      transition:fly={{ duration: 1000, y: 500 }}
      class="todo info delete"
      role="button"
      on:click={() => {
        $todoList = [];
        displayMsg();
      }}
    >
      effacer liste
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


  .delete {
    cursor: pointer;
  }

  /* @media (min-width: 640px) {
    .list {
      width: 50%;
    }
  } */
</style>
