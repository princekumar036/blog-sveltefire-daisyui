<script lang="ts">
    import { Doc } from 'sveltefire';
    import { page } from '$app/stores';
    import QuillJs from '$lib/QuillJS.svelte';

    import { doc, setDoc, collection } from "firebase/firestore";
    import { firestore } from "$lib/firebase_config";

    let docId = $page.params.id

    let title
    let content
    let timeout
    function onContentChange(newContent) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = newContent;
        const firstH1 = tempDiv.querySelector("h1");

        if (firstH1) {
            title = firstH1.textContent;
            firstH1.remove();
        }
        content = tempDiv.innerHTML;

        clearTimeout(timeout);
        timeout = setTimeout(async () => {            
            try {
                if (!docId) {
                    const newDocRef = doc(collection(firestore, "posts"));
                    docId = newDocRef.id
                }
                await setDoc(doc(firestore, "posts", docId), { title, content })
            } catch (error) {
                console.error("Error writing document: ", error);
            }
        }, 2000);
    }
</script>

<Doc ref='/posts/{docId}' let:data>
    <QuillJs preLoadContent='{data.title}{data.content}' {onContentChange} className=""  />

    <p slot="loading">Loading...</p>
</Doc>