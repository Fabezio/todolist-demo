<script lang="ts" context="module">
  export const prerender = true;
</script>

<script lang="ts" >
  import { onMount } from "svelte";
  import type {TODO} from "$lib/types"
  import List from "$lib/components/List.svelte";
  import Message from "$lib/components/Message.svelte";
  import { todoList, hasChanged, msg } from "$lib/store";
<<<<<<< HEAD
  import type {todoObject} from "$lib/utils/types"

=======
  // $todoList:  ;
>>>>>>> 191c119818ed9c1e8cf2deed057949b39518c7d2
  onMount(() => {
    $hasChanged = false;
  });

  $msg = "liste effacée";
  //   export let name;
  const title = "todoList";

  $todoList = [];
  let todo = "";
  type evt= {
    key: string
  }

<<<<<<< HEAD
  function addTodo(e: evt) {
=======
  function addTodo(e: {key: string}) {
>>>>>>> 191c119818ed9c1e8cf2deed057949b39518c7d2
    // hasChanged = false;
    // console.log(e.key);
    if (todo.length && e.key === "Enter") {
      const newTodo: todoObject = {
        id: Date.now(),
        text: todo,
        done: false,
      };
      console.log(typeof e);
      // textStatus = "valid";
<<<<<<< HEAD
      $todoList = [...$todoList, newTodo];
=======
      const newTodo:TODO = {
        id: Date.now(), 
        text: todo, 
        done: false,
      }
      $todoList  = [...$todoList, newTodo];
>>>>>>> 191c119818ed9c1e8cf2deed057949b39518c7d2
      todo = "";
    }
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="text-center ">
  <h1 class="title">{title}</h1>
</div>

<input on:keydown={addTodo} type="text" bind:value={todo} />

<List />
<Message />

<style>
  
  .title {
    margin: 3em auto;
  }

  h1 {
    background: -webkit-linear-gradient(
      -135deg,
      violet,
      indigo,
      blue,
      green,
      gold,
      orange,
      red
    );
    text-align: center;
    margin: auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-size: 3.5em;
    font-weight: 300;
  }
  input {
    width: 100%;
    text-indent: 0.75em;
    height: 2.5em;
    border-radius: 0.25em;
    margin-bottom: 1em; 
  }

  @keyframes fade {
    0%,
    100% {
      opacity: 0;
    }
    10%,
    90% {
      opacity: 1;
    }
  }
<<<<<<< HEAD

  input {
    width: 100%;
    margin-bottom: 1em;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
    input,
    .box {
      width: 90%;
    }
  }
</style>
=======
</style>
>>>>>>> 191c119818ed9c1e8cf2deed057949b39518c7d2
