<script lang="ts">
    import Fa from 'svelte-fa';
    import { faGithub  } from "@fortawesome/free-brands-svg-icons"
    
    const { projects } = $props();
    let pointDown: boolean = false;
    function movePoint(e : any): void {
        if (pointDown && e.isTrusted) {
            e.preventDefault();
            e.currentTarget.parentElement.scrollLeft -= e.movementX;
        } 
    }
</script>

<div class="projectCards w-full overflow-x-auto pb-3">
    <div class="flex justify-center min-w-full w-fit space-x-4 hover:cursor-grab active:cursor-grabbing" role="button" tabindex="0"
    onpointerdown={() => {pointDown = true}} onpointerup={() => {pointDown = false}} onpointerleave={() => {pointDown = false}} onpointermove={movePoint}
    >
        {#each projects as project}
            <div class="font-roboto flex flex-col items-center content-center min-w-[340px] max-w-[500px] w-[33vw] select-none">
                <div class="flex flex-col bg-cream text-black w-full rounded-3xl py-1 h-full">
                    <div class="border-b-2 border-black border-dashed pb-1">
                        <h1 class="text-center text-xl font-extrabold">
                            {project.name}
                        </h1>
                        {#if (project.position ?? null) != null}
                            <h1 class="text-center text-base">
                                {project.position}
                            </h1>
                        {/if}
                    </div>
                    <div class="px-5 py-1">
                        {#if (project.description ?? null) != null}
                            <p>{project.description}</p>
                        {/if}
                        <p class="text-center">--- *** ---</p>
                        {#if (project.techstacks ?? null) != null}
                            <p>{project.techstacks}</p>
                        {/if}
                        {#if (project.features ?? null) != null}
                            <p>Notable features:</p>
                            <ul class="list-disc list-inside">
                                {#each project.features as e, index}
                                    <li>{e}</li>
                                {/each}
                            </ul> 
                        {/if}
                        {#if (project.workedFeatures ?? null) != null}
                            <p>Features worked:</p>
                            <ul class="list-disc list-inside">
                                {#each project.workedFeatures as e, index}
                                    <li>{e}</li>
                                {/each}
                            </ul> 
                        {/if}
                        {#if (project.github ?? null) != null}
                            <div class="flex flex-row">
                                <a class="cursor-pointer flex flex-row gap-2 items-center" href={project.github} target="_blank">
                                    <Fa class="max-h-4" icon={faGithub}/> 
                                    <div>Github Code</div>
                                </a>
                            </div>                            
                        {/if}

                        {#if (project.githubs ?? null) != null}
                            <p>Source code(s):</p>
                            <ul class="list-disc list-inside">
                                {#each project.githubs as e}
                                    <li class="flex flex-row">
                                        <a class="cursor-pointer flex flex-row gap-2 items-center" href={e.link} target="_blank">
                                            <Fa class="max-h-4" icon={faGithub} />
                                            <div>{e.desc} Code</div>
                                        </a>
                                    </li>
                                {/each}
                            </ul> 
                        {/if}
                    </div>

                    {#if (project.link ?? null) != null}
                        <div class="flex border-t-2 border-black pt-1 px-5 w-full justify-center mt-auto">
                            <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                                onclick={() => {window.open(project.link)}}
                            >
                                Website
                            </button>
                        </div>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>