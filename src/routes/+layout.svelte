<script lang="ts">
  import "../app.css";
  import Header from "$lib/layout/Header.svelte";
  import Sidebar from "$lib/layout/Sidebar.svelte";
</script>

<div class="relative bg-gray-100 w-full min-h-screen">
  <Header></Header>
  <Sidebar></Sidebar>
  <slot />
</div>
