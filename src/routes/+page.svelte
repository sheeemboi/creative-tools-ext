<script lang="ts">
  import { Badge, Button, Heading, Li, List, P } from "flowbite-svelte";
  import { ToolsOutline } from "flowbite-svelte-icons";

  const tools = [
    "Ratio Calculator",
    "Palette Generator",
    "Font Pairing Generator",
    "Lorem Ipsum Generator",
    "Color Converter",
  ];
</script>

<div class="max-w-2xl mx-auto flex flex-col justify-center">
  <Heading
    >Welcome to desyn <ToolsOutline color="primary" class="inline w-12 h-12" />.
  </Heading>

  <div class="flex flex-col gap-4 mt-4">
    <P class="pl-4">
      a small collection of handy tools used for graphic layout, digital
      posters, and UI design.
    </P>
    <P class="pl-4">
      <Badge>desyn</Badge> is a simple side project designed to help solve my past
      struggles of using various 3rd party websites and applications to use creative
      tools that are not found in my creative toolkit like Photoshop and Inkscape.
    </P>
    <P class="pl-4"
      >this website will be an ongoing project for the coming months. the
      features will be incrementally added with a list of primary tools already
      prepared in hand.</P
    >

    <P class="pl-4"
      >this project is heavily inspired by <Badge>tinywow.com</Badge> and <Badge
        >it-tools.tech</Badge
      >.</P
    >
  </div>
  <div class="flex flex-col gap-4 mt-16">
    <Heading tag="h3">Tools</Heading>
    <div class="flex gap-2 flex-wrap">
      {#each tools as tool, i}
        <Badge large color="green" class="w-fit text-nowrap">{tool}</Badge>
      {/each}
    </div>
  </div>
</div>
