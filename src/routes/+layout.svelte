<script lang="ts">
  import "../app.css";
  import Header from "$lib/layout/Header.svelte";
  import Sidebar from "$lib/layout/Sidebar.svelte";
  let isSidebarOpen = true;
</script>

<div class="relative bg-gray-100 dark:bg-gray-900 w-full min-h-screen">
  <Header on:click={() => (isSidebarOpen = !isSidebarOpen)}></Header>
  <div class="relative flex max-w-6xl mx-auto pt-16 border-x border-x-gray-200 dark:border-x-gray-800">
    <Sidebar {isSidebarOpen}></Sidebar>
    <main
      class="{isSidebarOpen
        ? 'sm:ml-64'
        : 'sm:ml-14'} transition-all duration-300 flex-1 min-h-[calc(100vh-64px)]"
    >
      <slot />
    </main>
  </div>
</div>
