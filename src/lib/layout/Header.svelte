<script lang="ts">
  import {
    Button,
    DarkMode,
    Dropdown,
    DropdownItem,
    Input,
    Navbar,
    NavBrand,
    NavHamburger,
    P,
    SidebarCta,
  } from "flowbite-svelte";
  import {
    AngleLeftOutline,
    ChevronDownOutline,
    GithubSolid,
    SearchOutline,
  } from "flowbite-svelte-icons";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<Navbar
  fluid
  class="fixed h-16 w-full border-b border-b-gray-300 dark:border-b-gray-700 bg-gray-200 dark:bg-gray-800 z-30"
>
  <div class="flex w-[1152px] mx-auto">
    <button
      class="border border-gray-600 dark:border-gray-200 border-opacity-50 dark:border-opacity-50 p-2 rounded-lg"
      on:click={() => dispatch("click")}><AngleLeftOutline /></button
    >
    <div class="flex gap-2 items-center mx-4">
      <div class="h-8 aspect-square bg-red-600 rounded-full"></div>
      <P class="hidden sm:block" >GWD Tools</P>
    </div>
    <div class="flex-1"></div>
    <div class="flex gap-8 items-center">
      <Input
        type="search"
        class="sm:w-80 h-full rounded-full"
        placeholder="Search"
      >
        <svelte:fragment slot="left">
          <SearchOutline />
        </svelte:fragment>
      </Input>
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
  </div>
</Navbar>
