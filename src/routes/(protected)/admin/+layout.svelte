<script lang="ts">    
    import { SignedIn, SignedOut } from "sveltefire";
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import { userStore } from 'sveltefire';
    const auth = getAuth();

    let email:string
    let password:string

    function signIn() {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
        });
    }
</script>

<SignedIn let:signOut>
    <header class="navbar bg-primary text-primary-content fixed top-0">
        <div class="container max-w-screen-lg mx-auto">
            <div class="flex-1">
                <a class="flex items-center gap-1 font-bold hover:underline" href="/admin">
                    <img class="w-10" src="/favicon.png" alt="Logo">
                    <span>Admin</span>
                </a>
            </div>
            <nav class="flex-none">
                <ul class="menu menu-horizontal px-1 flex items-center">
                    <li><a href="/admin">Admin Home</a></li>
                    <li><a href="/admin/all">All Blogs</a></li>
                    <li><a href="/admin/create">Create Blog</a></li>
                    <li><button class="btn btn-outline btn-md btn-secondary" on:click={signOut}>Logout</button></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="mt-20 container max-w-screen-lg mx-auto">
        <slot />
    </main>

    <footer>
        Copyright &copy; 2024
    </footer>
</SignedIn>

<SignedOut>
    <main class="h-screen flex justify-center items-center">
        <form class="border rounded-md p-20 flex flex-col gap-10" on:submit|preventDefault={signIn}>

            <div class="text-center">
                <h1 class="text-lg font-bold">Admin Panel</h1>
                <p class="text-sm">(Please login to continue)</p>
            </div>
        
            <!-- EMAIL -->
            <label class="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="h-4 w-4 opacity-70">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" class="grow" placeholder="Email" bind:value={email} />
              </label>
        
              <!-- PASSWORD -->
              <label class="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="h-4 w-4 opacity-70">
                  <path
                    fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd" />
                </svg>
                <input type="password" class="grow" placeholder="Password" bind:value={password} />
              </label>
        
              <!-- SUBMIT -->
              <input type="submit" class="btn btn-primary" value="Login" />
                       
        </form>
    </main>
</SignedOut>