<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import RadioChip from "$lib/components/RadioChip.svelte";
  import { Button, Input, Label, P, Radio, Select } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import { calculateRatio } from "./calculateRatio";
  import { ratio } from "./ratio";
  import { validateNumberOnly } from "$lib/utils/validateNumberOnly";
  type RatioObject = { name: string; value: string; h: number; w: number };

  let selectedRatio: string;
  let baseHeight: number;
  let baseWidth: number;
  let newH: number | undefined;
  let newW: number | undefined;

  $: baseHeight = baseHeight;
  $: baseWidth = baseWidth;

  function selectRatio() {
    newW = undefined;
    newH = undefined;
    let thisRatio = ratio.find(
      (r): r is RatioObject => selectedRatio === r.value
    );

    if (thisRatio) {
      let selectedH = thisRatio.h;
      let selectedW = thisRatio.w;
      baseHeight = selectedH;
      baseWidth = selectedW;
    }

    console.log("baseHeight:", baseHeight);
    console.log("baseWidth:", baseWidth);
  }

  function manualRatio(e: Event) {
    selectedRatio = "Custom";
    newW = undefined;
    newH = undefined;
    validateNumberOnly(e);
  }
</script>

<Hero
  header="Ratio Manager"
  description="Manage canvas ratio, calculate width and height, and choose from the preselected ratio."
/>
<ul class="flex gap-4">
  {#each ratio as r}
    <li>
      <RadioChip
        name="ratio"
        value={r.value}
        bind:group={selectedRatio}
        on:change={selectRatio}
      />
    </li>
  {/each}
</ul>
<!-- <Select items={ratio} bind:value={selectedRatio}/> -->
<div class="max-w-full flex gap-2 [&>div]:flex [&>div]:gap-2 [&>div]:flex-1">
  <div class="[&>label]:flex-1">
    <Label
      >Width
      <Input
        type="text"
        min={1}
        bind:value={baseWidth}
        on:input={(e) => {
          manualRatio(e);
        }}
      />
    </Label>
    <P class="flex items-center">:</P>
    <Label
      >Height
      <Input
        type="text"
        min={1}
        bind:value={baseHeight}
        on:input={(e) => manualRatio(e)}
      />
    </Label>
  </div>
  <P class="flex items-center">=</P>
  <div class="[&>label]:flex-1">
    <Label
      >Width
      <Input
        type="text"
        min={1}
        bind:value={newW}
        on:input={(e) => {
          newH = undefined;
          validateNumberOnly(e);
        }}
      />
    </Label>
    <Label
      >Height
      <Input
        type="text"
        min={1}
        bind:value={newH}
        on:input={(e) => {
          newW = undefined;
          validateNumberOnly(e);
        }}
      />
    </Label>
    <P class="flex items-center">:</P>
  </div>
</div>
<Button
  on:click={() =>
    ([newH, newW] = calculateRatio(newH, newW, baseWidth, baseHeight))}
  >Calculate</Button
>

<div></div>
