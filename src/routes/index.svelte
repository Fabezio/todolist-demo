<script context="module">
  export const prerender = true;
</script>

<script>
// @ts-nocheck

  import { onMount } from "svelte";
  import { todoList, hasChanged, msg } from "$lib/store";
  import List from "$lib/components/List.svelte";
  import Message from "$lib/components/Message.svelte";
  import DeleteButton from "$lib/components/DeleteButton.svelte";

  onMount(() => {
    $hasChanged = false;
  });

  $msg = "liste effacée";

  const title = "todoList";

  let todo = "";

  function addTodo(e) {
    if (todo.length && e.key === "Enter") {

      const newTodo = {
        id: Date.now(), 
        text: todo, 
        done: false
      }
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
  <input class="py-1 px-3 fs-5 border-1 border-info rounded-pill" on:keydown={addTodo} type="text" bind:value={todo} />
  <div class="box">
    <List />
    {#if $todoList.length}
    <DeleteButton />
    {:else if $hasChanged}
    <Message />
    {/if}
  </div>

</main>

<style>
  main {
    text-align: center;
    padding: 0.5em;

    margin: 0 auto;


  }
  div.title {
    margin: 3em auto;


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
      width: 50%;
    }
  }
</style>
