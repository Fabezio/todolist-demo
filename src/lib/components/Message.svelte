<script>
// @ts-nocheck

  import { hasChanged, msg } from "../store";
  

  function fade(node, { delay = 300, duration = 300 }) {
    const o = +getComputedStyle(node).opacity;

    return {
      delay,
      duration,
      css: (t) => `opacity: ${t * o}`,
    };
  }

  console.log("list state:", $hasChanged);
</script>


  <div class="alert alert-info">
    <div out:fade class="todo info">
      {$msg}
    </div>
  </div>

<style>
  
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
  </style>
