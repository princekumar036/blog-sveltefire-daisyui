<script>
    import { Collection } from "sveltefire";
    import { parseHTML } from "$lib/parseHTML"
    import { slugify } from "$lib/slugify"
</script>

<Collection ref={"posts"} let:data let:count>
    <h1 class="page-title py-10">Blog ({count})</h1>

    <div class="flex justify-center gap-10 flex-wrap">
        {#each data as post}
        <div class="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={parseHTML(post.content).heroImg || "/placeholder.png"} alt="" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{post.title}</h2>
                <br>
                <div class="card-actions justify-end">
                    <a href="/blog/{post.id}" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    {/each}
    </div>

    <p slot="loading">Loading...</p>
</Collection>
