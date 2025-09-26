<script lang="ts">
  import { P, Sidebar, SidebarGroup, SidebarItem } from "flowbite-svelte";
  import { page } from "$app/stores";
  import { AngleLeftOutline, DatabaseSolid } from "flowbite-svelte-icons";
  import { routeItems } from "$lib/utils/routes";
  import { createEventDispatcher } from "svelte";
  export let isSidebarOpen = true;
  const dispatch = createEventDispatcher();
  const activeClass =
    "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-100 rounded-md dark:hover:bg-gray-700";
  const nonActiveClass =
    "flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md";
  const sidebarItemClass =
    "transition-all duration-300 {isSidebarOpen ? '' : '[&>span]:text-transparent'}";

  $: activeUrl = $page.url.pathname;
</script>

<Sidebar
  {activeUrl}
  {activeClass}
  {nonActiveClass}
  asideClass="fixed {isSidebarOpen
    ? 'w-80  px-4'
    : 'w-0'} min-h-screen border-r border-r-gray-300 dark:border-r-gray-700 bg-gray-200 dark:bg-gray-900 transition-all duration-300 overflow-hidden z-30 list-none"
>
  <div class="flex w-full py-2 h-16">
    <button
      class="block: sm:hidden ml-auto w-10 h-10 border border-gray-600 dark:border-gray-200 border-opacity-50 dark:border-opacity-50 p-2 rounded-lg"
      on:click={() => dispatch("click")}><AngleLeftOutline /></button
    >
  </div>
  {#each routeItems as route, i}
    <SidebarItem
      label={route.label}
      href={route.href}
      data-sveltekit-preload-data="off"
      class={isSidebarOpen ? "" : "hidden"}
    >
      <svelte:fragment slot="icon">
        <svelte:component this={route.icon} />
      </svelte:fragment>
    </SidebarItem>
  {/each}
</Sidebar>
