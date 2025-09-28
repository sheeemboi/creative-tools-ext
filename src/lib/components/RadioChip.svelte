<script lang="ts">
  import { Radio } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";

  export let name: string;
  export let value: any;
  export let group: any;
</script>

<!--
@component
Custom radio button.

Props:

```typescript
export let name: string;
export let value: any; 
export let group: any; // just a variable to store the current selected value
```
-->
<Radio id={`${value}-${group}-${name}`} {name} bind:group {value} custom>
  <div
    class={`dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 peer-checked:font-bold
    inline-flex min-w-24 cursor-pointer items-center justify-between rounded-lg 
    border border-gray-200 bg-white p-4 text-gray-500 hover:bg-gray-100 
    hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300`}
  >
    <p>{value}</p>
  </div>
</Radio>
