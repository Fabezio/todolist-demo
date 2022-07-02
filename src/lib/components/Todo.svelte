<script>
  import {todoList, hasChanged, msg} from "$lib/store"

  export let todo
  export let index
  // $: console.log(to)
  function displayMsg() {
    $hasChanged = true;
    setTimeout(() => {
      $hasChanged = false;
    }, 1500);
  }
  function deleteTask(id) {
    // console.log(id);
    const removedItem = $todoList.filter((itm) => itm.id !== id);
    console.log(removedItem);
    $todoList = removedItem;
    if ($todoList.length === 0) {
      console.log($msg);
      displayMsg();
    }
  }

</script>

<div class="todo {index % 2 === 0 ? 'primary' : 'secondary'}">
      <span>
        {todo.text}
      </span>
      <div>
        <span role="button" on:click={()=> todo.done = !todo.done} class:check={todo.done == true} class=" semibold">&check;</span>
        <span role="button" class="remove semibold" on:click={deleteTask(todo.id)}
          >&times;</span
        >
      </div>
    </div>

    <style>
      .semibold {
    font-weight: 600;
  }

  .check {
    color: green;
    transform: brightness(125%);
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
  .primary {
    background: rgba(127, 0, 127, 0.3);
  }
  .secondary {
    background: rgba(127, 127, 0, 0.3);
  }
  
  

  .remove {
    cursor: pointer;
  }

  /* @media (min-width: 640px) {
    .list {
      width: 50%;
    }
  } */
    </style>