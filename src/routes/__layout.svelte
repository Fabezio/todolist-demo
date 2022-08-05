<script lang="ts" >
  import DisplayData from "$lib/components/DisplayData.svelte"
  import "bootstrap/scss/bootstrap.scss";
  import "../app.css";
  import {supabase} from "../supabase"
  // console.log(supabase)
</script>

<!-- <Header /> -->
<!-- <DisplayData data={supabase.auth} /> -->
<!-- <DisplayData data={supabase.auth} /> -->
<div class="box">
  <slot />
</div>

<!-- <footer>
  <p>
    visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
  </p>
</footer> -->

<style globals>
  /* main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  } */

  /* footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  } */
/*   
  .box {
    margin: 1em auto;
  }

  @media (min-width: 768px) {
    main {
      max-width: none;
    }

    .box {
      width: 750px;
    }
  } */
</style>
