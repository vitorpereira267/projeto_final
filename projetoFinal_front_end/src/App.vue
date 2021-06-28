<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"
        ><img
          src="../img/logo.png"
          alt=""
      /></router-link>
      <form
          id="ig-search-form"
          class="ig-search-form"
          action="https://www.instant-gaming.com/en/search/"
          method="get"
          role="search"
        >
          <meta
            itemprop="target"
            content="https://www.instant-gaming.com/en/search/?q={q}"
          />
          <div id="ig-search">
            <input
              id="ig-header-search-box-input"
              accesskey="s"
              type="text"
              name="q"
              autocomplete="off"
              spellcheck="false"
              autocapitalize="off"
              itemprop="query-input"
              placeholder="Minecraft, rpg, multiplayer..."
            /><input
              id="ig-header-search-box-submit"
              type="submit"
              value=""
              title="Advanced search"
            />
          </div>
        </form>
      <div>
        
        <!-- <i class="far fa-heart"></i>  -->
        <router-link to="/">Home</router-link> |
        <router-link to="/games">Games</router-link> |
        <router-link to="/favoritos">Wishlist</router-link> |
        <router-link to="/contacts">Contacts</router-link> |
        <router-link to="/login">Login</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>

<style>
/*@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
 .far{
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
} */
/*#app {
  /* font-family: cursive;
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-image:  url("https://i.pinimg.com/originals/f6/20/a1/f620a179ca1acfd15a0754701677fb58.jpg"); 
}*/
body {
  margin: 0;
  /* background-image: url('https://i.pinimg.com/originals/f6/20/a1/f620a179ca1acfd15a0754701677fb58.jpg'); */
  height: 100vh;

  font-family: proximanova, arial, sans-serif;

  font-weight: 100;
  font-size: 13px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px 410px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:black;
  text-align: center;
  color: black;
  /* background-image:  url("https://i.pinimg.com/originals/f6/20/a1/f620a179ca1acfd15a0754701677fb58.jpg"); */
}

#nav a {
  font-weight: bold;
  color: #00bfff;
  text-decoration: none;
}

#nav img {
  width: 80px;
}

#nav a.router-link-exact-active {
  color: aqua;
}

#ig-header-search-box-input {
  height: 44px;
  background: 0 0;
  color: #ff5400;
  border: none;
  transition: 0.1s;
  font-size: 17px;
  border-radius: 0;
  position: relative;
  width: 400px;
  padding-left: 20px;
  outline: transparent;
}
#ig-header-search-box-submit {
  width: 36px;
  height: 36px;
  background: #ff8733
    url('https://www.instant-gaming.com/themes/igv1/modules/searchBox/images/ig-google-search-hover.png') 9px
    8px no-repeat;
  background-size: 19px;
  border: none;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  border-radius: 100px;
  text-shadow: 1px 1px #bd3e00;
  font-size: 10px;
  vertical-align: bottom;
  transition: 0.2s;
  margin: 4px;
  flex-shrink: 0;
}
#ig-search{
  background:antiquewhite;
  border-radius: 50px;

}
</style>
