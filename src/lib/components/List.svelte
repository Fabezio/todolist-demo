<script lang="ts">
  import { todoList } from "../store";
  import Todo from './Todo.svelte'

  console.log($todoList);
</script>

<div class="list">
  {#each $todoList as thisTodo, i}
  <Todo todo={thisTodo} index={i} />
  
  {/each}
  
</div>


