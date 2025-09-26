<script lang="ts">
  import {
    Button,
    DarkMode,
    Dropdown,
    DropdownItem,
    Input,
    Navbar,
    P,
  } from "flowbite-svelte";
  import {
    AngleLeftOutline,
    ChevronDownOutline,
    GithubSolid,
    SearchOutline,
  } from "flowbite-svelte-icons";
  import { createEventDispatcher } from "svelte";
  export let isSidebarOpen;

  const dispatch = createEventDispatcher();
</script>

<Navbar
  fluid
  class="fixed {isSidebarOpen
    ? 'md:ml-80 md:w-[calc(100vw-320px)]'
    : 'md:ml-12 md:w-[calc(100vw-48px)]'} flex items-center h-16 bg-gray-100 dark:bg-gray-800 z-20"
>
  <!-- Sidebar -->
  <button
    class="border block md:hidden border-gray-600 dark:border-gray-200 border-opacity-50 dark:border-opacity-50 p-2 rounded-lg"
    on:click={() => dispatch("click")}><AngleLeftOutline /></button
  >

  <!-- Empty  -->
  <div class="flex-1 hidden sm:block"></div>
  <!-- Utility Buttons -->
  <div class="flex gap-8 items-center">
    <div class="hidden sm:flex gap-2 items-center">
      <DarkMode />
      <GithubSolid />
    </div>
    <div class="block sm:hidden">
      <button class="block sm:hidden"><ChevronDownOutline /></button>
      <Dropdown>
        <DropdownItem><DarkMode class="p-0" /></DropdownItem>
        <DropdownItem><GithubSolid class="inline " /></DropdownItem>
      </Dropdown>
    </div>
  </div>
</Navbar>
