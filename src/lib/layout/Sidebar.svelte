<script lang="ts">
  import { P, Sidebar, SidebarGroup, SidebarItem } from "flowbite-svelte";
  import { page } from "$app/stores";
  import { DatabaseSolid } from "flowbite-svelte-icons";
  import { routeItems } from "$lib/utils/routes";
  export let isSidebarOpen = true;

  const activeClass =
    "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
  const nonActiveClass =
    "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
  const sidebarItemClass =
    "transition-all duration-300 {isSidebarOpen ? '' : '[&>span]:text-transparent'}";

  $: activeUrl = $page.url.pathname;
</script>

<Sidebar
  {activeUrl}
  asideClass="fixed {isSidebarOpen
    ? 'w-64'
    : 'w-0 sm:w-12'} sm:px-1 py-3 min-h-screen border-r border-r-gray-300 dark:border-r-gray-700 bg-gray-200 dark:bg-gray-800 transition-all duration-300 overflow-hidden"
>
  {#each routeItems as route, i}
    <SidebarItem
      label={route.label}
      href={route.href}
      data-sveltekit-preload-data="off"
      class={isSidebarOpen ? "" : "[&>span]:opacity-0"}
    >
      <svelte:fragment slot="icon">
        <svelte:component this={route.icon} />
      </svelte:fragment>
    </SidebarItem>
  {/each}
</Sidebar>
