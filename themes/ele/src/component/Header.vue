<template lang="html">
  <!-- <header class="site-header">
    <div class="wrapper">
    	<a class="header-logo" href="/">
        <svg viewBox="0 0 16 16">
          <path fill="#000000" d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"></path>
        </svg>
      </a>
    </div>
  </header> -->

  <header class="site-header" itemscope="" itemtype="http://schema.org/WPHeader">
    <div class="wrap">
      <div class="metabar-block u-flex0 u-flexCenter">
        <ul class="header-left-ul">
          <li>
            <div class="avatar">
              <img class="avatar-image" src="https://avatars2.githubusercontent.com/u/9329094?v=4&s=460">
            </div>
          </li>
          <li style="padding-top: 13px;">
            <span class="svgIcon svgIcon--bell svgIcon--25px">
              <svg class="svgIcon-use" width="25" height="25" viewBox="-293 409 25 25">
                <path fill="#888" d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 0 0-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 0 0 1 1h3.49a3.079 3.079 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 0 1-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 0 1 4.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z">
                </path>
              </svg>
            </span>
          </li>
          <li style="padding-top: 13px;">
            <span class="button-defaultState">
              <span class="svgIcon svgIcon--search svgIcon--25px">
                <svg class="svgIcon-use" width="25" height="25" viewBox="0 0 25 25">
                  <path fill="#888" d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
                </svg>
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div class="header-nav">
        <router-link  to="/">Home</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/blog/archive">Archive</router-link>
        <router-link to="/blog/category">Category</router-link>
        <router-link to="/blog/me">Me</router-link>
        <router-link to="/blog/about">About</router-link>
        <!-- <a v-link="{ path: '/blog/about', activeClass: 'current-page'}">About</a> -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'siteHeader'
}
</script>

<style lang="css">
/*.site-header {
    border-bottom: 1px solid #E5E5E5;
    position: relative;
    background-color: #F5F5F5;
    text-align: center;
}

.wrapper {
    max-width: calc(700px);
    margin-right: auto;
    margin-left: auto;
}

header-logo:visited {
    color: #3c4245;
}

header-logo {
    color: #3c4245;
    text-decoration: none;
}

svg {
  margin: 40px auto;
  width: 25px;
  height: 25px;
}*/

header.site-header {
  background-color: #F9F9F9;
}

.site-header {
    border-bottom: 1px solid #eee;
    height: 56px;
    top: 0px;
    width: 100%;
}

.site-header .wrap {
    position: relative;
}

.site-inner, .wrap {
    margin: 0 auto;
    max-width: 1200px;
}

@media only screen and (max-width: 1280px) {
  .site-inner, .wrap {
      max-width: 960px;
  }
}

.title-area .site-title {
    text-indent: -9999px;
    font-size: 48px;
    color: #201e1c;
    font-family: "merriweather", serif;
    font-weight: 700;
    line-height: 1.5;
    margin: 0 0 5%;
}

.title-area .site-title a {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 119px 10px;
    display: block;
    height: 60px;
    margin-top: 0px;
    width: 120px;
}

.header-nav {
    float: right;
    position: absolute;
    right: 0px;
    top: 0px;
}

.header-nav a {
    color: #888;
    display: inline-block;
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: bold;
    height: 55px;
    letter-spacing: 1px;
    line-height: 62px;
    margin: 0 auto;
    padding: 0 20px;
    text-decoration: none;
    text-transform: uppercase;
    z-index: 10;
}

.header-nav a:hover,
.header-nav a.active {
    border-bottom: 2px solid #201e1c;
    color: #201e1c;
}

.avatar-image {
    width: 32px;
    height: 32px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 100%;
}

.avatar {
    display: block;
    white-space: nowrap;
    overflow: visible;
    text-overflow: ellipsis;
    line-height: normal;
    position: relative;
}

.header-left-ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
    float: right;
    position: absolute;
    display: flex;
    align-items: center;
    line-height: 40px;
    height: 56px;
}

.header-left-ul li {
  float: left;
  margin-right: 20px;
}
</style>
