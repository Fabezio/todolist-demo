<script lang="ts" >
  import DisplayData from "$lib/components/DisplayData.svelte"
  import "bootstrap/scss/bootstrap.scss";
  import "../app.css";
  import {supabase} from "../supabase"
  // console.log(supabase)
</script>

<!-- <DisplayData data={supabase.auth} /> -->
<div class="box">
  <slot />
</div>

<!-- <footer>
 
</footer> -->
