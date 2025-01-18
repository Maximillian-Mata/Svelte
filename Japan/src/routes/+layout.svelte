<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
>
<script lang="ts">

</script>

<nav>
<a href="/">Home</a>
<a href="/currencyconvert">Currency</a>
<a href="/locations">Locations</a>
<a href="/foods">Food</a>
</nav>

<div class="bannerpicture"><h1 class="banner">Japan 2025</h1></div>


<slot></slot>

<style>
    .bannerpicture{
        background-image: url("Photos/IMG_0450.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position:top;
    }
    .banner{
        text-align: center;
        max-width: 100vw;
        height: 15vh;
        margin-top: 0;
        padding-top: 2%;
        padding: 5%;
        font-size: 400%;
        color: black;
        backdrop-filter: blur(2px) saturate(100%);
        margin: 0;
        margin-bottom: 10px;
    }
    a, a:visited{
        color: inherit;
        text-decoration: none;
        padding: 2%;
        box-sizing: border-box;
        font-size: x-large;
        
    }
    
</style>