
<header class="navbar bg-primary text-primary-content fixed top-0 z-20">
    <div class="container max-w-screen-lg mx-auto">
        <div class="flex-1">
            <a href="/"><img class="w-10" src="/favicon.png" alt="Logo"></a>
        </div>
        <nav class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>

<main class="mt-20 container max-w-screen-lg mx-auto">
    <slot />
</main>

<footer class="bg-accent text-primary-content text-center py-3 mt-20">
    Copyright &copy; 2024
</footer>