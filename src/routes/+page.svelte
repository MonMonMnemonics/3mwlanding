<script lang="ts">
    import NavbarComp from "$lib/components/NavbarComp.svelte";
    import logo from '$lib/assets/logo2.png'
    import ProjectCards from "$lib/components/ProjectCards.svelte";
    import profilePict from '$lib/assets/profile.png'
    import FooterComp from "$lib/components/FooterComp.svelte";

    import { activeProjects, openProjects, closedProjects, otherProjects } from '$lib/projectList'
</script>

<main class="flex flex-col items-center px-13">
    <div class='flex h-screen flex-col items-center content-center w-full'>
        <NavbarComp/>

        <div id="Banner" class="flex flex-col items-center justify-center h-full w-full bg-radial from-gray-700 via-gray-900 to-black to-90%">
            <div class="flex flex-col items-center">
            <img src={logo} class="h-3/5" alt="Logo"/>
            <h1 class="font-kalam text-center text-2xl mt-10">
                Welcome to MonMonMnemonics Workshop NOW WITH BUN!<br/>
                This is just a centralized server for any of my hobby projects<br/>
                as well as any other things that pique my interest.
            </h1>
            </div> 
        </div>
    </div>

    <div class="w-full h-1 bg-gray-900"></div>

    <div id="About" class="font-roboto flex flex-col items-center content-center max-w-screen-xl" style="padding:17px">
        <h1 class="text-center text-4xl font-extrabold">
            About
        </h1>
        <div class="mt-3">
            <div class="float-left flex flex-col items-center justify-center h-[256px] w-[256px] bg-radial from-white to-black to-70%">
            <img src={profilePict} class="h-[200px]" alt="ProfilePict" />
            </div>
            <p class="text-justify">
            Hi, I&apos;m MonMonMnemonics, or people use to call me just MonMon.<br/>
            <br/>
            I&apos;m a Particle Physicist by trade and doing PhD in theoretical hadron physics right now.<br/>
            While on the side, I&apos;m also doing programming both as a part-time job and as a simple hobby.<br/>
            <br/>
            I&apos;ve been doing programming for a long-long time, my first paid programming job was a finance software using VB6.
            Then from there, I&apos;ve done all kinds of programming languages such as PoS with Delphi and Hotel management software using VB.net which was later rewritten in C#.<br/>
            <br/>
            As a long-time programmer, it&apos;s interesting to see how the interest shifted from desktop applications to web applications around 2015. My first dip into web application development was with Django,
            which didn&apos;t work out well with the client and got scrapped, then from there I tried my hands in all kinds of frameworks such as flask, .net, Symfony, and JS for both backend and frontend. But due to its portability, I ended up using JS the most.<br/>
            <br/>
            With that being said, just like with Physics, I love to learn new things and experiment with programming.
            As such, I often start a new project or take a programming job to learn new technologies or techniques, and after so many hobby projects, it started to get too burdensome to get a different domain each time.
            Thus this website serves as a centralized server for my ongoing passion projects as well as a repository to keep track of what I tried in which project.
            <br/>
            </p>
        </div>
    </div>

    <div class="w-full h-1 bg-gray-900"></div>
    
    <div id="Projects" class="font-roboto flex flex-col items-center content-center w-screen" style="padding:21px">
        <h1 class="text-center text-4xl font-extrabold mb-4">
            Active Projects
        </h1>
    <ProjectCards projects={activeProjects}/>
    </div>

    <div class="w-full h-1 bg-gray-900"></div>
    
    <div id="Portfolio" class="font-roboto flex flex-col items-center content-center w-screen" style="padding:21px">
    <h1 class="text-center text-4xl font-extrabold mb-4">
        Past Projects
    </h1>
    <h1 class="text-center text-2xl mb-2">
        --- Open Source ---
    </h1>
    <ProjectCards projects={openProjects}/>
    <h1 class="text-center text-2xl">
        --- Closed Source ---
    </h1>
    <h1 class="text-center text-m mb-2">
        I have all if not a bulk of the code to be functional.
    </h1>
    <ProjectCards projects={closedProjects}/>
    <h1 class="text-center text-2xl">
        --- Other projects ---
    </h1>
    <ProjectCards projects={otherProjects}/>
    </div>
    <FooterComp/>
</main>