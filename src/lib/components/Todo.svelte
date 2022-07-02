<script>
// @ts-nocheck

  import {todoList, hasChanged, msg} from "$lib/store"

  export let todo = {}
  export let index = 0
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

<div class="d-flex justify-content-between text-uppercase alert alert-{index % 2 === 0 ? 'primary' : 'warning'} fs-5">
  <span>{todo.text}</span>
  <div>
    <span role="button" on:click={()=> todo.done = !todo.done} class:text-success={todo.done} class="fw-bold me-2">&check;</span>
    <span role="button" class="remove fw-bold" on:click={deleteTask(todo.id)} >
      &times;
    </span>
  </div>
</div>