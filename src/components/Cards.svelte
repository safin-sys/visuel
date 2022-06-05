<script>
    import { onMount } from "svelte";
    /**
     * @type {any[]}
     */
    let cards = [];
    onMount(async () => {
        const res = await fetch("/cards.json");
        const data = await res.json();
        cards = data;
    });
</script>

<section class="grid md:grid-cols-4 gap-4">
    {#each cards as { name, bigO, img, url }}
        <a href={url} class="rounded-md overflow-hidden group">
            <header class="h-40 overflow-hidden">
                <img
                    class="h-full w-full object-cover group-hover:scale-150 transition-transform ease-out duration-1000"
                    src={img}
                    alt={name}
                />
            </header>
            <main class="bg-gray-100 dark:bg-gray-800 p-4">
                <h1 class="font-bold">{name}</h1>
                <p>{bigO}</p>
            </main>
        </a>
    {/each}
</section>
