<script>
  import {todoList, hasChanged} from "$lib/store"
  import { fade, fly } from "svelte/transition";
  import displayMsg from "$lib/utils/displayMsg"

</script>


  <!-- <DisplayData data={$todoList} /> -->
  <div class="d-grid">

    <button
      in:fly={{ duration: 1000, y: 500 }} out:fade
      class="btn-lg d-grid fs-5 rounded-pill text-uppercase fw-bold shadow-lg btn-danger py-3 "

      on:click={() => {
        $todoList = [];
        displayMsg($hasChanged);
      }}
    >
      effacer liste
    </button>
  </div>
