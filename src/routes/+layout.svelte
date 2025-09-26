<script lang="ts">
  import "../app.css";
  import Header from "$lib/layout/Header.svelte";
  import Sidebar from "$lib/layout/Sidebar.svelte";
  let windowWidth: number;
  $: isSidebarOpen = windowWidth > 768 ? true : false;

</script>
<svelte:window bind:innerWidth={windowWidth}/>
<div class="relative bg-gray-100 dark:bg-gray-800 w-full min-h-screen">
  <Sidebar {isSidebarOpen} on:click={() => (isSidebarOpen = !isSidebarOpen)}
  ></Sidebar>
  <Header {isSidebarOpen} on:click={() => (isSidebarOpen = !isSidebarOpen)}
  ></Header>
  <div
    class=" {isSidebarOpen
      ? 'sm:ml-80'
      : 'sm:ml-12'} transition-all duration-300 relative flex mx-auto border-x border-x-gray-200 dark:border-x-gray-800"
  >
    <main class="flex-1 min-h-[calc(100vh-64px)] mt-16 p-8">
      <slot />
    </main>
  </div>
</div>
