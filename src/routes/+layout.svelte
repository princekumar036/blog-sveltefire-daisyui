
<script lang="ts">
    import "../app.css";
    import { FirebaseApp } from 'sveltefire';
    import { auth, firestore } from "$lib/firebase_config";
</script>

<FirebaseApp {auth} {firestore}>
    <slot />
</FirebaseApp>