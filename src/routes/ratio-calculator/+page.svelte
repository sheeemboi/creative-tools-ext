<script lang="ts">
  import Hero from "$lib/layout/Hero.svelte";
  import { Button, Input } from "flowbite-svelte";

  const h = 1080;
  const w = 1920;
  let newH: number;

  /**
   Formula:
   for height:
   height = (original height/original width) * new width

   generally:
   (new width/original width) = (new height/original height)
  */

  function calculateW() {
    let newW = (h / w) * newH;
    console.log("newW", newW);
  }
</script>

<Hero
  header="Ratio Manager"
  description="Manage canvas ratio, calculate width and height, and choose from the preselected ratio."
/>

<Input type="number" bind:value={newH} />
<Button on:click={calculateW}>Calculate</Button>
