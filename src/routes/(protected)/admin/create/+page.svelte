<script lang="ts">
    import QuillJs from "$lib/QuillJS.svelte";
    import { doc, setDoc, collection } from "firebase/firestore";
    import { firestore } from "$lib/firebase_config";

    let docId:string
    let title: string;
    let content: string;
    let timeout:number

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

<h1 class="text-center text-xl font-bold my-10">Create Blog</h1>
<QuillJs {onContentChange} className="prose max-w-none" />
