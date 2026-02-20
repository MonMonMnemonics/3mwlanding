<script lang="ts">
    import Fa from 'svelte-fa';
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
</script>

<div class="w-screen border-gray-200 bg-gray-900 font-inter">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="font-roboto flex items-center flex flex-row items-center gap-1">
        <div>Contact me at </div>
        <a href="mailto:mikatzukiathanas@gmail.com" class="ml-1 flex flex-row items-center gap-1">
            <Fa icon={faEnvelope} style="color: white"/>
            <div> mikatzukiathanas@gmail.com</div>
        </a>
    </div>
    </div>
</div> 
