"use strict";(self.webpackChunkapi_movies=self.webpackChunkapi_movies||[]).push([[810],{810:(I,d,s)=>{s.r(d),s.d(d,{MoviesModule:()=>S});var m=s(228),c=s(8754),p=s(8400),e=s(4946),u=s(9045),g=s(6814);function x(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",6)(1,"a",7),e.NdJ("click",function(){const l=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.viewDetail(l.id))}),e._UZ(2,"img",8),e.qZA(),e.TgZ(3,"div",9)(4,"a",7),e.NdJ("click",function(){const l=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.viewDetail(l.id))}),e.TgZ(5,"h5",10),e._uU(6),e.qZA()(),e.TgZ(7,"p",11),e._uU(8),e.qZA(),e.TgZ(9,"a",12),e.NdJ("click",function(){const l=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.viewDetail(l.id))}),e._uU(10," Read more "),e.O4$(),e.TgZ(11,"svg",13),e._UZ(12,"path",14),e.qZA()()()()}if(2&o){const t=i.$implicit,n=e.oxw(2);e.xp6(2),e.Q6J("src",n.movieIMG+t.poster_path,e.LSH),e.xp6(4),e.Oqu(t.title),e.xp6(2),e.Oqu(t.overview)}}function _(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"div",2)(2,"h2",3),e._uU(3,"Popular Movies"),e.qZA(),e.TgZ(4,"div",4),e.YNc(5,x,13,3,"div",5),e.qZA()(),e.BQk()),2&o){const t=e.oxw();e.xp6(5),e.Q6J("ngForOf",t.populars.results)}}function f(o,i){1&o&&(e.TgZ(0,"div",15)(1,"div",16),e.O4$(),e.TgZ(2,"svg",17),e._UZ(3,"path",18)(4,"path",19),e.qZA(),e.kcU(),e.TgZ(5,"span",20),e._uU(6,"Loading..."),e.qZA()()())}let h=(()=>{class o extends p.H{set setResponseService(t){this.populars=t}constructor(t,n){super(t),this.apiService=t,this.router=n,this.populars={page:1,results:[],total_pages:0,total_results:0},this.movieIMG=c.o.pathIMG}ngOnInit(){this.paramsConfig.url=c.o.moviesPopular,this.paramsConfig.params=c.o.tokenMe,this.getRequest()}viewDetail(t){this.router.navigate([`/populars/details/${t}`])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.s),e.Y36(m.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-movies"]],features:[e.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"max-w-7xl","mx-auto","mb-16"],[1,"text-center","my-8","font-bold","text-3xl"],[1,"grid","sm:grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-4"],["class","max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto",4,"ngFor","ngForOf"],[1,"max-w-sm","bg-white","border","border-gray-200","rounded-lg","shadow","mx-auto"],[1,"cursor-pointer",3,"click"],["alt","",1,"rounded-t-lg",3,"src"],[1,"p-5"],[1,"mb-2","text-2xl","font-bold","tracking-tight","text-gray-900"],[1,"mb-3","font-normal","text-gray-700"],[1,"cursor-pointer","inline-flex","items-center","px-3","py-2","text-sm","font-medium","text-center","text-white","bg-blue-700","rounded-lg","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","dark:bg-blue-600","dark:hover:bg-blue-700","dark:focus:ring-blue-800",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 14 10",1,"w-3.5","h-3.5","ml-2"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M1 5h12m0 0L9 1m4 4L9 9"],[1,"text-center","d","flex","items-center","justify-center",2,"height","68.2vh"],["role","status"],["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"inline","w-20","h-20","mr-2","text-gray-200","animate-spin","dark:text-gray-600","fill-blue-600"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"],[1,"sr-only"]],template:function(t,n){if(1&t&&(e.YNc(0,_,6,1,"ng-container",0),e.YNc(1,f,7,0,"ng-template",null,1,e.W1O)),2&t){const r=e.MAs(2);e.Q6J("ngIf",!n.loading&&n.populars.results)("ngIfElse",r)}},dependencies:[g.sg,g.O5]}),o})();var v=s(8510);function C(o,i){if(1&o&&(e.TgZ(0,"span",36),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.Oqu(t.name)}}function w(o,i){if(1&o&&(e.TgZ(0,"a",38),e._UZ(1,"img",39),e.qZA()),2&o){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("src",n.movieIMG+t.logo_path,e.LSH)}}function Z(o,i){if(1&o&&(e.ynx(0),e.YNc(1,w,2,1,"a",37),e.BQk()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",t.logo_path)}}function b(o,i){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"section")(2,"section",2)(3,"section",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"nav",7)(8,"ol",8)(9,"li",9)(10,"a",10),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.returnHome())}),e.O4$(),e.TgZ(11,"svg",11),e._UZ(12,"path",12),e.qZA(),e._uU(13," Home "),e.qZA()(),e.kcU(),e.TgZ(14,"li",13)(15,"div",14),e.O4$(),e.TgZ(16,"svg",15),e._UZ(17,"path",16),e.qZA(),e.kcU(),e.TgZ(18,"span",17),e._uU(19),e.qZA()()()()(),e.TgZ(20,"h1",18),e._uU(21),e.qZA(),e.TgZ(22,"div",19)(23,"a",20),e._uU(24,"Overview"),e.qZA()(),e.TgZ(25,"p",21),e._uU(26),e.qZA(),e.TgZ(27,"div",22)(28,"span",23),e._uU(29,"Language"),e.qZA(),e.TgZ(30,"span",24),e._uU(31),e.qZA()(),e.TgZ(32,"div",22)(33,"span",23),e._uU(34,"Release date"),e.qZA(),e.TgZ(35,"span",24),e._uU(36),e.qZA()(),e.TgZ(37,"div",22)(38,"span",23),e._uU(39,"Country"),e.qZA(),e.TgZ(40,"span",24),e._uU(41),e.qZA()(),e.TgZ(42,"div",22)(43,"span",23),e._uU(44,"Vote average"),e.qZA(),e.TgZ(45,"span",24),e._uU(46),e.qZA()(),e.TgZ(47,"div",25)(48,"span",23),e._uU(49,"Tagline"),e.qZA(),e.TgZ(50,"span",24),e._uU(51),e.qZA()(),e.TgZ(52,"div",26),e.YNc(53,C,2,1,"span",27),e.TgZ(54,"button",28),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.onAddFavorite(r.movie))}),e.O4$(),e.TgZ(55,"svg",29),e._UZ(56,"path",30),e.qZA()()()(),e.kcU(),e._UZ(57,"img",31),e.qZA()()()(),e.TgZ(58,"section",32)(59,"h3",33),e._uU(60,"Production companies"),e.qZA(),e.TgZ(61,"section",34),e.YNc(62,Z,2,1,"ng-container",35),e.qZA()()(),e.BQk()}if(2&o){const t=e.oxw();e.xp6(2),e.Udp("background-image","linear-gradient(to right, rgba(31.5, 31.5, 52.5, .85) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 52.5, 0.74) 50%, rgba(31.5, 31.5, 52.5, 0.64) 100%),url("+t.movieIMG+t.movie.backdrop_path+")"),e.xp6(17),e.Oqu(t.movie.title),e.xp6(2),e.Oqu(t.movie.title),e.xp6(5),e.Oqu(t.movie.overview),e.xp6(5),e.Oqu(t.movie.original_language),e.xp6(5),e.Oqu(t.movie.release_date),e.xp6(5),e.Oqu(t.movie.production_countries[0].name),e.xp6(5),e.Oqu(t.movie.vote_average),e.xp6(5),e.Oqu(t.movie.tagline),e.xp6(2),e.Q6J("ngForOf",t.movie.genres),e.xp6(1),e.Q6J("disabled",t.isDisabledFavorite||t.favoritesStyles)("className",1==t.favoritesStyles||1==t.isDisabledFavorite?"rounded-full w-10 h-10  p-0 border-0 inline-flex items-center justify-center  ml-4 bg-gray-100 text-red-600 ":"rounded-full w-10 h-10 bg-gray-100 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"),e.xp6(3),e.Q6J("src",t.movieIMG+t.movie.poster_path,e.LSH),e.xp6(5),e.Q6J("ngForOf",t.movie.production_companies)}}function y(o,i){1&o&&(e.TgZ(0,"div",40)(1,"div",41),e.O4$(),e.TgZ(2,"svg",42),e._UZ(3,"path",43)(4,"path",44),e.qZA(),e.kcU(),e.TgZ(5,"span",45),e._uU(6,"Loading..."),e.qZA()()())}let M=(()=>{class o extends p.H{set setResponseService(t){this.movie=t}constructor(t,n,r,l){super(t),this.apiService=t,this.activatedRoute=n,this.listService=r,this.router=l,this.movie={adult:!0,backdrop_path:"",belongs_to_collection:null,budget:1,genres:[],homepage:"",id:1,imdb_id:"",original_language:"",original_title:"",overview:"",popularity:1,poster_path:"",production_companies:[],production_countries:[{iso_3166_1:"",name:""}],release_date:"",revenue:1,runtime:1,spoken_languages:[],status:"",tagline:"",title:"",video:!0,vote_average:1,vote_count:1},this.movieIMG=c.o.pathIMG,this.idMovie=1,this.arrayFromLocalStorage=[],this.favoritesStyles=!1,this.isDisabledFavorite=!1,this.activatedRoute.params.subscribe(a=>{this.getMovieDetail(a.id),this.idMovie=a.id}),this.favoritesStyles=this.listService.getFavoriteStyle(this.idMovie)}ngOnInit(){}getMovieDetail(t){this.paramsConfig.url=c.o.movieDetail+"/"+t,this.paramsConfig.params=c.o.tokenMe,this.getRequest()}returnPopulars(){this.router.navigate(["/populars"])}returnHome(){this.router.navigate(["/"])}onAddFavorite(t){this.listService.addFavorite(t),this.isDisabledFavorite=!0}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.s),e.Y36(m.gz),e.Y36(v.X),e.Y36(m.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-movie-detail"]],features:[e.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"w-full","h-full","bg-cover","bg-center"],[1,"text-white","body-font","overflow-hidden"],[1,"container","px-5","py-10","md:py-24","mx-auto"],[1,"lg:w-4/5","mx-auto","flex","flex-wrap"],[1,"lg:w-3/5","w-full","lg:pr-10","lg:py-6","mb-6","lg:mb-0"],["aria-label","Breadcrumb",1,"flex","mb-1"],[1,"inline-flex","items-center","space-x-1","md:space-x-3"],[1,"inline-flex","items-center","cursor-pointer"],[1,"inline-flex","items-center","text-sm","font-medium","text-gray-500","hover:text-blue-600","dark:text-gray-400","dark:hover:text-white",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"w-3","h-3","mr-2.5"],["d","m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"],["aria-current","page"],[1,"flex","items-center"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 6 10",1,"w-3","h-3","text-gray-400","mx-1"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 9 4-4-4-4"],[1,"ml-1","text-sm","font-medium","text-gray-500","md:ml-2","dark:text-gray-400"],[1,"text-white","text-6xl","title-font","font-medium","mb-4"],[1,"flex","mb-4"],[1,"flex-grow","text-indigo-500","border-b-2","border-indigo-500","py-2","text-lg","px-1"],[1,"leading-relaxed","mb-4"],[1,"flex","border-t","border-gray-200","py-2"],[1,"text-white"],[1,"ml-auto","text-white"],[1,"flex","border-t","border-b","mb-6","border-gray-200","py-2"],[1,"flex"],["class","bg-blue-100 flex items-center  text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",4,"ngFor","ngForOf"],[3,"disabled","className","click"],["fill","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","viewBox","0 0 24 24",1,"w-5","h-5"],["d","M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"],["alt","ecommerce",1,"lg:w-2/5","w-full","lg:h-full","h-full","rounded",3,"src"],[1,"max-w-7xl","px-5","my-10","mx-auto"],[1,"md:text-2xl","text-xl","font-bold","mb-8"],[1,"grid","lg:grid-cols-5","md:grid-cols-4","gap-5","sm:grid-cols-3","min-[400px]:grid-cols-2"],[4,"ngFor","ngForOf"],[1,"bg-blue-100","flex","items-center","text-blue-800","text-xs","font-medium","mr-2","px-2.5","py-0.5","rounded","dark:bg-blue-900","dark:text-blue-300"],["class","flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 space-y-0",4,"ngIf"],[1,"flex","flex-col","items-center","bg-white","border","border-gray-200","rounded-lg","shadow","md:flex-row","md:max-w-xl","hover:bg-gray-100","space-y-0"],["alt","",1,"object-contain","w-3/4","p-2","rounded-t-lg","h-full","md:h-auto","md:w-full","md:rounded-none","md:rounded-l-lg",3,"src"],[1,"text-center","d","flex","items-center","justify-center",2,"height","68.2vh"],["role","status"],["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"inline","w-20","h-20","mr-2","text-gray-200","animate-spin","dark:text-gray-600","fill-blue-600"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"],[1,"sr-only"]],template:function(t,n){if(1&t&&(e.YNc(0,b,63,15,"ng-container",0),e.YNc(1,y,7,0,"ng-template",null,1,e.W1O)),2&t){const r=e.MAs(2);e.Q6J("ngIf",!n.loading&&n.movie)("ngIfElse",r)}},dependencies:[g.sg,g.O5]}),o})();function T(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"div",8)(2,"img",9),e.NdJ("click",function(){const l=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.viewDetails(l.id))}),e.qZA(),e.TgZ(3,"div",10),e.NdJ("click",function(){const l=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.removeLike(l.id))}),e.TgZ(4,"div",11)(5,"div",12),e.O4$(),e.TgZ(6,"svg",13),e._UZ(7,"path",14),e.qZA()()()()()()}if(2&o){const t=i.$implicit,n=e.oxw(2);e.xp6(2),e.Q6J("src",n.movieIMG+t.poster_path,e.LSH)}}function k(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"section",2)(2,"h2",3),e._uU(3,"Favorites"),e.qZA(),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6),e.YNc(7,T,8,1,"div",7),e.qZA()()()(),e.BQk()),2&o){const t=e.oxw();e.xp6(7),e.Q6J("ngForOf",t.arrayFromLocalStorage)}}function F(o,i){1&o&&(e.ynx(0),e.TgZ(1,"section",2)(2,"h2",3),e._uU(3,"Favorites"),e.qZA(),e.TgZ(4,"div",4)(5,"div",5)(6,"h5",16),e._uU(7,"Empty favorites list"),e.qZA()()()(),e.BQk())}function A(o,i){1&o&&(e.TgZ(0,"div",17)(1,"div",18),e.O4$(),e.TgZ(2,"svg",19),e._UZ(3,"path",20)(4,"path",21),e.qZA(),e.kcU(),e.TgZ(5,"span",22),e._uU(6,"Loading..."),e.qZA()()())}function q(o,i){if(1&o&&(e.YNc(0,F,8,0,"ng-container",0),e.YNc(1,A,7,0,"ng-template",null,15,e.W1O)),2&o){const t=e.MAs(2),n=e.oxw();e.Q6J("ngIf",0==n.arrayFromLocalStorage.length)("ngIfElse",t)}}const U=[{path:"",component:h},{path:"favorites",component:(()=>{class o{constructor(t,n){this.router=t,this.listService=n,this.arrayFromLocalStorage=[],this.movieIMG=c.o.pathIMG,this.loading=!0}viewDetails(t){this.router.navigate([`/movies/details/${t}`])}ngOnInit(){const t=localStorage.getItem("favorites");t&&(this.arrayFromLocalStorage=JSON.parse(t),this.loading=!1)}removeLike(t){this.listService.removeFavoriteMovie(t)}ngDoCheck(){const t=JSON.parse(localStorage.getItem("favorites")||"[]");JSON.stringify(t)!==JSON.stringify(this.arrayFromLocalStorage)&&(this.arrayFromLocalStorage=t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.F0),e.Y36(v.X))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-favorites"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"max-w-7xl","mx-auto","mb-20","px-2","s:px-6","lg:px-8","h-screen"],[1,"text-3xl","my-3","font-semibold"],[1,"flex","gap-3","flex-col","md:flex-row"],[1,"flex","flex-col","w-full"],[1,"grid","grid-cols-4","md:grid-cols-6","gap-4"],[4,"ngFor","ngForOf"],[1,"h-auto","max-w-full","relative","group/item"],["alt","",1,"rounded-lg","cursor-pointer","hover:bg-sky-700","border-4","hover:border-green-400","transition-all",3,"src","click"],[1,"absolute","bottom-5","left-0","right-0","flex","justify-center","group/edit","invisible","group-hover/item:visible",3,"click"],[1,"bg-gray-800","flex","rounded-md"],[1,"p-2","cursor-pointer"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","2","stroke","white",1,"w-6","h-6","hover:stroke-green-400","transition-all"],["stroke-linecap","round","stroke-linejoin","round","d","M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"],["elseTemplate2",""],[1,"text-xl"],[1,"text-center","d","flex","items-center","justify-center",2,"height","68.2vh"],["role","status"],["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"inline","w-20","h-20","mr-2","text-gray-200","animate-spin","dark:text-gray-600","fill-blue-600"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"],[1,"sr-only"]],template:function(t,n){if(1&t&&(e.YNc(0,k,8,1,"ng-container",0),e.YNc(1,q,3,2,"ng-template",null,1,e.W1O)),2&t){const r=e.MAs(2);e.Q6J("ngIf",!n.loading&&n.arrayFromLocalStorage.length>0)("ngIfElse",r)}},dependencies:[g.sg,g.O5]}),o})()},{path:"details/:id",component:M},{path:"**",pathMatch:"full",redirectTo:""}];let O=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.Bz.forChild(U),m.Bz]}),o})(),S=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez,O]}),o})()}}]);