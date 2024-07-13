<script lang="ts">
    import { Doc } from 'sveltefire';
    import { page } from '$app/stores';

    const id = $page.params.id
</script>

<Doc ref='/posts/{id}' let:data>
    <div class="prose max-w-none mx-auto">
        <h1 class="text-center">{data.title}</h1>
        {@html data.content}
    </div>
    <p slot="loading">Loading...</p>
</Doc>