(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0efc70"],{"9a0b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("home-plans"),n("meal-recipes")],1)},a=[],i=n("8df8"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.recipes,function(t,r){return n("v-flex",{key:r,attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[n("v-card",[n("v-responsive",[n("v-img",{attrs:{src:t.recipe.image}})],1),n("v-card-text",[n("div",{staticClass:"title my-3"},[e._v(e._s(t.recipe.label))]),n("div",{staticClass:"subheading"},[e._v("Ingredients")]),n("ul",e._l(t.recipe.ingredientLines,function(t,r){return n("li",{key:r},[e._v(e._s(t))])}),0)]),n("v-card-actions",[n("v-btn",{attrs:{color:"green",dark:""},on:{click:function(n){return e.orderRecipe(t)}}},[e._v("Order")])],1)],1)],1)}),1)],1)},c=[],o={name:"MealRecipes",computed:{recipes:function(){return this.$store.state.recipes},isAuthenticated:function(){return this.$store.getters.isAuthenticated}},methods:{orderRecipe:function(e){this.isAuthenticated?this.$store.dispatch("addRecipe",e):this.$router.push("/sign-in")}}},d=o,l=n("2877"),u=n("6544"),p=n.n(u),v=n("8336"),f=n("b0af"),h=n("99d9"),m=n("a523"),b=n("0e8f"),g=n("adda"),_=n("a722"),V=n("6b53"),w=Object(l["a"])(d,s,c,!1,null,"3565f2a2",null),k=w.exports;p()(w,{VBtn:v["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["b"],VContainer:m["a"],VFlex:b["a"],VImg:g["a"],VLayout:_["a"],VResponsive:V["a"]});var x={name:"Menu",components:{HomePlans:i["a"],MealRecipes:k}},C=x,R=Object(l["a"])(C,r,a,!1,null,"84b9b1dc",null);t["default"]=R.exports}}]);
//# sourceMappingURL=chunk-2d0efc70.cb20abaf.js.map