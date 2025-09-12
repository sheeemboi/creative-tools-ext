<script lang="ts">
  import { DarkMode, Navbar, NavBrand, P } from "flowbite-svelte";
  import { GithubSolid } from "flowbite-svelte-icons";
</script>

<Navbar>
  <NavBrand
    ><span class="bg-primary-600 h-8 w-8 rounded-full mr-2"></span><P
      >GWDTools</P
    ></NavBrand
  >
  <div class="flex gap-2 items-center">
    <DarkMode />
    <GithubSolid />
  </div>
</Navbar>
