<script lang="ts">
  import { Heading, P } from "flowbite-svelte";
  export let header: string = "";
  export let description: string = "";
  export let className: string = "";
</script>

<!--
@component
Hero section for each tools.

Props:
  ```typescript
  export let header: string = "";
  export let description: string = "";
  export let className: string = "";
  ```
-->
<section class={className}>
  <Heading class="text-center">{header}</Heading>
  <P align="center">{description}</P>
</section>
