<script>
    import "../app.css";
    import Menu from '../lib/components/Menu.svelte'
    import MenuMobile from '../lib/components/MenuMobile.svelte'

    const menu = {
        main: [
            {titre: 'Accueil', url: '/'},
            {titre: 'Blog', url: '/blog'},
            {titre: 'Portfolio', url: '/portfolio'},
            {titre: 'À propos', url: '/about'}
        ],
        reseaux: [
            {titre: 'Linkedin', url: '/', icone: 'fa-brands fa-linkedin-in'},
            {titre: 'Twitter', url: '/', icone: 'fa-brands fa-twitter'}
        ]
    }
</script>

<Menu data={menu}/>
<!--<MenuMobile data={menu}/>-->
<div class="min-h-screen w-full pl-16 md:pl-24">
    <slot />
</div>