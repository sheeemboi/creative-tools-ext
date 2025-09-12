<script lang="ts">
  import { P, Sidebar, SidebarGroup, SidebarItem } from "flowbite-svelte";
  const activeClass =
    "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
  const nonActiveClass =
    "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
</script>

<Sidebar asideClass="top-[60px] absolute w-64 min-h-screen bg-gray-200">
  <SidebarGroup>
    <SidebarItem {activeClass}><P>Test</P></SidebarItem>
    <SidebarItem {nonActiveClass}><P>Test</P></SidebarItem>
  </SidebarGroup>
  <SidebarGroup>
    <SidebarItem><P>Test</P></SidebarItem>
    <SidebarItem><P>Test</P></SidebarItem>
  </SidebarGroup>
</Sidebar>
