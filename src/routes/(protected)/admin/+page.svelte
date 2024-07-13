<script>
    import { Collection } from 'sveltefire';
</script>

<h1>Welcome to Admin Area</h1>
<Collection ref={'posts'} let:data let:count>

    <p>You have created {count} posts</p>

    <p slot="loading">Loading...</p>
</Collection>