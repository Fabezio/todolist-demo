<script context="module">
  export const prerender = true;
</script>

<script lang="ts" >
  import { onMount } from "svelte";
  import List from "$lib/components/List.svelte";
  import Message from "$lib/components/Message.svelte";
  import { todoList, hasChanged, msg } from "$lib/store";
  import type {todoObject} from "$lib/utils/types"

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

  function addTodo(e: evt) {
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
      $todoList = [...$todoList, newTodo];
      todo = "";
    }
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>
  <div class="title">
    <h1>{title}</h1>
  </div>
  <input on:keydown={addTodo} type="text" bind:value={todo} />
  <div class="box">
    <List />
    <Message />
  </div>

  <!-- <p>{todoAdd}</p> -->
  <!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
</main>

<style>
  main {
    text-align: center;
    padding: 0.5em;
    /* max-width: 240px; */
    margin: 0 auto;

    /* box-sizing: content-box; */
  }
  div.title {
    margin: 3em auto;

    /* max-width: 16em; */
  }

  h1 {
    display: inline;
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
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-size: 3.5em;
    font-weight: 300;
  }
  .box {
    position: relative;
    margin: 0 auto;
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
