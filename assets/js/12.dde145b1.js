(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{733:function(t,e,a){"use strict";a.r(e);var o=a(700),r=a(697),n=a(698),s=a(692),i=a(676),u={name:"Layout",components:{Home:o.a,Page:n.a,Sidebar:s.a,Navbar:r.a},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.i)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"no-sidebar":!this.shouldShowSidebar},t]}}},h=a(102),l=Object(h.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses},[t.shouldShowNavbar?a("Navbar"):t._e(),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$themeConfig.backToTop?a("a-back-top"):t._e()],1)}),[],!1,null,null,null);e.default=l.exports}}]);