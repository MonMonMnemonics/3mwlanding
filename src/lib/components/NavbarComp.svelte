<script lang="ts">
    import logo from '$lib/assets/3mwlogo.png'
</script>

<nav class="fixed w-screen border-gray-200 bg-gray-900 font-inter">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a class="flex items-center cursor-pointer" href="#Banner">
        <img src={logo} class="h-8 mr-3" alt="Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">3MWorkshop</span>
        </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col px-4 py-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
            <a class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" href="#About">
            About
            </a>
        </li>
        <li>
            <a class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" href="#Projects">
            Active Projects
            </a>
        </li>
        <li>
            <a class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" href="#Portfolio">
            Portfolio
            </a>
        </li>
        </ul>
    </div>
    </div>
</nav>