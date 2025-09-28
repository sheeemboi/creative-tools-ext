<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import RadioChip from "$lib/components/RadioChip.svelte";
  import { Button, Input, Label, Radio } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import { calculateRatio } from "./calculateRatio";
  import { ratio } from "./ratio";

  type RatioObject = { name: string; h: number; w: number };

  let selectedRatio: string;
  let baseHeight: number;
  let baseWidth: number;
  let newH: number;
  let newW: number;

  $: if (selectedRatio) {
    let thisRatio = ratio.find(
      (r): r is RatioObject => selectedRatio === r.name
    );

    if (thisRatio) {
      baseHeight = thisRatio.h;
      baseWidth = thisRatio.w;
    }

    console.log("baseHeight:", baseHeight);
    console.log("baseWidth:", baseWidth);
  }
</script>

<Hero
  header="Ratio Manager"
  description="Manage canvas ratio, calculate width and height, and choose from the preselected ratio."
/>
<ul class="flex gap-4">
  {#each ratio as r}
    <li>
      <RadioChip name="ratio" value={r.name} bind:group={selectedRatio} />
    </li>
  {/each}
</ul>
<Label
  >Height
  <Input type="number" min={1} bind:value={newH} />
</Label>
<Label
  >Width
  <Input type="number" min={1} bind:value={newW} />
</Label>
<Button on:click={() => calculateRatio(newH, newW, baseWidth, baseHeight)}
  >Calculate</Button
>
