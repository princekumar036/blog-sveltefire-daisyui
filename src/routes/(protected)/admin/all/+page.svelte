<script>
    import { Collection } from "sveltefire"
    import { getPost } from "$lib/postBreakdown";
    import { doc, deleteDoc } from 'firebase/firestore';
    import { firestore } from '$lib/firebase_config';
    let modal

    async function handleDelete(id, title) {
        let res = confirm(`Delete post? \n ${title}`)
        if (res) {
            try {
                await deleteDoc(doc(firestore, 'posts', id));
                // console.log('Document successfully deleted!');
            } catch (error) {
                console.error('Error deleting document: ', error);
            }
        }
    }
</script>

<Collection ref={"posts"} let:data let:count>
    <table class="table">
        <thead>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each data as post}
                <tr>
                    <td
                        ><img
                            class="w-10"
                            src={getPost(post.content).heroImg ||
                                "https://upload.wikimedia.org/wikipedia/commons/6/62/%22No_Image%22_placeholder.png"}
                            alt=""
                        /></td
                    >
                    <td>{post.title}</td>
                    <td><a href="/admin/all/{post.id}" class="btn btn-sm btn-warning">Edit</a></td
                    >
                    <td
                        ><button
                            class="btn btn-sm btn-error"
                            on:click={() => handleDelete(post.id, post.title)}
                            >Delete</button
                        ></td
                    >
                </tr>
            {/each}
        </tbody>
    </table>

    <p slot="loading">Loading...</p>
</Collection>

<dialog id="my_modal_1" class="modal">
    <div class="modal-box">
        <h3 class="text-lg font-bold">Hello!</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
            </form>
        </div>
    </div>
</dialog>

<input type="checkbox" id="my_modal_7" bind:this={modal} class="modal-toggle" />
<div class="modal" role="dialog">
    <div class="modal-box">
        <h3 class="text-lg font-bold">Hello!</h3>
        <p class="py-4">This modal works with a hidden checkbox!</p>
    </div>
    <label class="modal-backdrop" for="my_modal_7">Close</label>
</div>
