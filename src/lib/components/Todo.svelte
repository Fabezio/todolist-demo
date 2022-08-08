<script lang="ts" >
  import {todoList, hasChanged, msg} from "$lib/store"
  import type {TODO} from "$lib/types"
  import 'bootstrap-icons/font/bootstrap-icons.scss'

  export let todo: TODO={
    id: 0,
    text: "",
    done: false,
  }
  export let index: number

  function displayMsg() {
    $hasChanged = true;
    setTimeout(() => {
      $hasChanged = false;
    }, 1500);
  }
  function deleteTask(id: number) {

    const removedItem = $todoList.filter((itm: TODO) => itm.id !== id);
    console.log(removedItem);
    $todoList = removedItem;
    if ($todoList.length === 0) {
      console.log($msg);
      displayMsg();
    }
    return $todoList
  }

</script>

<div class="todo {index % 2 === 0 ? 'primary' : 'secondary'}">
      <span>
        {todo.text}
      </span>
      <div>
        <i role="button" class="fs-4 bi bi-check" on:click={()=> todo.done = !todo.done} class:check={todo.done == true}  />
        <i role="button" class="fs-4 bi bi-x" on:click={deleteTask(todo.id)} />
        
      </div>
    </div>

    <style>
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
  
  

  /* .remove {
    cursor: pointer;
  } */

  /* @media (min-width: 640px) {
    .list {
      width: 50%;
    }
  } */
    </style>