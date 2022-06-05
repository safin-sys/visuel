<script>
    import unsortedArray from "../../utlis/unsortedArray";

    const arr = unsortedArray(20, 200);
</script>

<svelte:head>
    <title>Bubble Sort | visuel</title>
</svelte:head>

<div class="min-h-[calc(100vh-4rem)]">
    <div class="flex items-end gap-2 min-h-[calc(100vh-12rem)]">
        {#each arr as item}
            <div
                style={`height: ${item}px`}
                class="bg-gray-300 dark:bg-gray-600 w-full rounded-md"
            />
        {/each}
    </div>
    <div class="h-16 flex items-end justify-end mt-8 gap-4">
        <div class="flex flex-col w-full ">
            <label for="speed">Number of Pillars</label>
            <input
                type="number"
                value="20"
                min="10"
                max="100"
                class="dark:bg-gray-700 bg-gray-300 px-4 py-1 rounded-md"
            />
        </div>
        <div class="flex flex-col w-full ">
            <label for="speed">Pillar Height</label>
            <input
                type="number"
                value="20"
                min="10"
                max="100"
                class="dark:bg-gray-700 bg-gray-300 px-4 py-1 rounded-md"
            />
        </div>
        <div class="flex flex-col w-full">
            <label for="speed">Speed</label>
            <select
                name="speed"
                id="speed"
                value="1"
                class="dark:bg-gray-700 bg-gray-300 px-4 py-1 rounded-md"
            >
                <option value="0.25">0.25x</option>
                <option value="0.5">0.5x</option>
                <option value="1">1x</option>
                <option value="2">2x</option>
                <option value="5">5x</option>
            </select>
        </div>
        <button
            class="bg-sky-200 dark:bg-sky-600 rounded-md p-2 w-fit hover:bg-sky-300 dark:hover:bg-sky-700"
            >Sort!</button
        >
    </div>
</div>
