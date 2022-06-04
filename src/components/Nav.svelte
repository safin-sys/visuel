<script>
    import handleThemeToggle from "../utlis/handleThemeToggle";
    import { onMount } from "svelte";
    let isDrawerOpen = false;

    onMount(() => {
        const theme = localStorage.getItem("theme");
        if (theme) {
            document.documentElement.classList.add(theme);
        }
    });

    const handleDrawer = () => {
        isDrawerOpen = !isDrawerOpen;
    };
</script>

<nav class="flex justify-between h-16 items-center overflow-hidden relative">
    <a href="/">
        <h1 class="font-bold text-3xl">visuel.</h1>
    </a>
    <section class="gap-8 font-bold items-center hidden md:flex">
        <button
            on:click={handleThemeToggle}
            class="bg-gray-200 dark:bg-gray-600 rounded-md p-2"
        >
            <div class="bg-gray-900 dark:bg-gray-100" id="icon" />
        </button>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </section>
    <button
        class="bg-gray-200 dark:bg-gray-600 rounded-md p-2 md:hidden"
        on:click={handleDrawer}
    >
        <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1.5rem"
            width="1.5rem"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
            /></svg
        >
    </button>
    <div
        class={`fixed w-[80%] h-full bg-gray-50 dark:bg-gray-800 top-0 px-8 py-3 flex flex-col transition-transform ease-in-out right-0 duration-500 ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
        <button
            class="bg-gray-200 dark:bg-gray-600 rounded-md p-2 md:hidden w-fit self-end"
            on:click={handleDrawer}
        >
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1.5rem"
                width="1.5rem"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                    d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                /></svg
            >
        </button>
        <div class="flex flex-col font-bold text-4xl gap-4 mt-16">
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
        <button
            on:click={handleThemeToggle}
            class="bg-gray-200 dark:bg-gray-600 rounded-md p-2 mt-auto w-fit self-end"
        >
            <div class="bg-gray-900 dark:bg-gray-100" id="icon" />
        </button>
    </div>
</nav>

<style scoped>
    #icon {
        width: 1.5rem;
        height: 1.5rem;
        mask: url("/icons/moon.svg") no-repeat center;
    }
</style>
