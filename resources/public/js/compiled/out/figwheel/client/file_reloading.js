// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29102_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29102_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29103 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29104 = null;
var count__29105 = (0);
var i__29106 = (0);
while(true){
if((i__29106 < count__29105)){
var n = cljs.core._nth.call(null,chunk__29104,i__29106);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29107 = seq__29103;
var G__29108 = chunk__29104;
var G__29109 = count__29105;
var G__29110 = (i__29106 + (1));
seq__29103 = G__29107;
chunk__29104 = G__29108;
count__29105 = G__29109;
i__29106 = G__29110;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29103);
if(temp__5457__auto__){
var seq__29103__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29103__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29103__$1);
var G__29111 = cljs.core.chunk_rest.call(null,seq__29103__$1);
var G__29112 = c__4319__auto__;
var G__29113 = cljs.core.count.call(null,c__4319__auto__);
var G__29114 = (0);
seq__29103 = G__29111;
chunk__29104 = G__29112;
count__29105 = G__29113;
i__29106 = G__29114;
continue;
} else {
var n = cljs.core.first.call(null,seq__29103__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29115 = cljs.core.next.call(null,seq__29103__$1);
var G__29116 = null;
var G__29117 = (0);
var G__29118 = (0);
seq__29103 = G__29115;
chunk__29104 = G__29116;
count__29105 = G__29117;
i__29106 = G__29118;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29119){
var vec__29120 = p__29119;
var _ = cljs.core.nth.call(null,vec__29120,(0),null);
var v = cljs.core.nth.call(null,vec__29120,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29123){
var vec__29124 = p__29123;
var k = cljs.core.nth.call(null,vec__29124,(0),null);
var v = cljs.core.nth.call(null,vec__29124,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29136_29144 = cljs.core.seq.call(null,deps);
var chunk__29137_29145 = null;
var count__29138_29146 = (0);
var i__29139_29147 = (0);
while(true){
if((i__29139_29147 < count__29138_29146)){
var dep_29148 = cljs.core._nth.call(null,chunk__29137_29145,i__29139_29147);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29148;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29148));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29148,(depth + (1)),state);
} else {
}


var G__29149 = seq__29136_29144;
var G__29150 = chunk__29137_29145;
var G__29151 = count__29138_29146;
var G__29152 = (i__29139_29147 + (1));
seq__29136_29144 = G__29149;
chunk__29137_29145 = G__29150;
count__29138_29146 = G__29151;
i__29139_29147 = G__29152;
continue;
} else {
var temp__5457__auto___29153 = cljs.core.seq.call(null,seq__29136_29144);
if(temp__5457__auto___29153){
var seq__29136_29154__$1 = temp__5457__auto___29153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29136_29154__$1)){
var c__4319__auto___29155 = cljs.core.chunk_first.call(null,seq__29136_29154__$1);
var G__29156 = cljs.core.chunk_rest.call(null,seq__29136_29154__$1);
var G__29157 = c__4319__auto___29155;
var G__29158 = cljs.core.count.call(null,c__4319__auto___29155);
var G__29159 = (0);
seq__29136_29144 = G__29156;
chunk__29137_29145 = G__29157;
count__29138_29146 = G__29158;
i__29139_29147 = G__29159;
continue;
} else {
var dep_29160 = cljs.core.first.call(null,seq__29136_29154__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29160;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29160));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29160,(depth + (1)),state);
} else {
}


var G__29161 = cljs.core.next.call(null,seq__29136_29154__$1);
var G__29162 = null;
var G__29163 = (0);
var G__29164 = (0);
seq__29136_29144 = G__29161;
chunk__29137_29145 = G__29162;
count__29138_29146 = G__29163;
i__29139_29147 = G__29164;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29140){
var vec__29141 = p__29140;
var seq__29142 = cljs.core.seq.call(null,vec__29141);
var first__29143 = cljs.core.first.call(null,seq__29142);
var seq__29142__$1 = cljs.core.next.call(null,seq__29142);
var x = first__29143;
var xs = seq__29142__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29141,seq__29142,first__29143,seq__29142__$1,x,xs,get_deps__$1){
return (function (p1__29127_SHARP_){
return clojure.set.difference.call(null,p1__29127_SHARP_,x);
});})(vec__29141,seq__29142,first__29143,seq__29142__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29165 = cljs.core.seq.call(null,provides);
var chunk__29166 = null;
var count__29167 = (0);
var i__29168 = (0);
while(true){
if((i__29168 < count__29167)){
var prov = cljs.core._nth.call(null,chunk__29166,i__29168);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29169_29177 = cljs.core.seq.call(null,requires);
var chunk__29170_29178 = null;
var count__29171_29179 = (0);
var i__29172_29180 = (0);
while(true){
if((i__29172_29180 < count__29171_29179)){
var req_29181 = cljs.core._nth.call(null,chunk__29170_29178,i__29172_29180);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29181,prov);


var G__29182 = seq__29169_29177;
var G__29183 = chunk__29170_29178;
var G__29184 = count__29171_29179;
var G__29185 = (i__29172_29180 + (1));
seq__29169_29177 = G__29182;
chunk__29170_29178 = G__29183;
count__29171_29179 = G__29184;
i__29172_29180 = G__29185;
continue;
} else {
var temp__5457__auto___29186 = cljs.core.seq.call(null,seq__29169_29177);
if(temp__5457__auto___29186){
var seq__29169_29187__$1 = temp__5457__auto___29186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29169_29187__$1)){
var c__4319__auto___29188 = cljs.core.chunk_first.call(null,seq__29169_29187__$1);
var G__29189 = cljs.core.chunk_rest.call(null,seq__29169_29187__$1);
var G__29190 = c__4319__auto___29188;
var G__29191 = cljs.core.count.call(null,c__4319__auto___29188);
var G__29192 = (0);
seq__29169_29177 = G__29189;
chunk__29170_29178 = G__29190;
count__29171_29179 = G__29191;
i__29172_29180 = G__29192;
continue;
} else {
var req_29193 = cljs.core.first.call(null,seq__29169_29187__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29193,prov);


var G__29194 = cljs.core.next.call(null,seq__29169_29187__$1);
var G__29195 = null;
var G__29196 = (0);
var G__29197 = (0);
seq__29169_29177 = G__29194;
chunk__29170_29178 = G__29195;
count__29171_29179 = G__29196;
i__29172_29180 = G__29197;
continue;
}
} else {
}
}
break;
}


var G__29198 = seq__29165;
var G__29199 = chunk__29166;
var G__29200 = count__29167;
var G__29201 = (i__29168 + (1));
seq__29165 = G__29198;
chunk__29166 = G__29199;
count__29167 = G__29200;
i__29168 = G__29201;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29165);
if(temp__5457__auto__){
var seq__29165__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29165__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29165__$1);
var G__29202 = cljs.core.chunk_rest.call(null,seq__29165__$1);
var G__29203 = c__4319__auto__;
var G__29204 = cljs.core.count.call(null,c__4319__auto__);
var G__29205 = (0);
seq__29165 = G__29202;
chunk__29166 = G__29203;
count__29167 = G__29204;
i__29168 = G__29205;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29165__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29173_29206 = cljs.core.seq.call(null,requires);
var chunk__29174_29207 = null;
var count__29175_29208 = (0);
var i__29176_29209 = (0);
while(true){
if((i__29176_29209 < count__29175_29208)){
var req_29210 = cljs.core._nth.call(null,chunk__29174_29207,i__29176_29209);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29210,prov);


var G__29211 = seq__29173_29206;
var G__29212 = chunk__29174_29207;
var G__29213 = count__29175_29208;
var G__29214 = (i__29176_29209 + (1));
seq__29173_29206 = G__29211;
chunk__29174_29207 = G__29212;
count__29175_29208 = G__29213;
i__29176_29209 = G__29214;
continue;
} else {
var temp__5457__auto___29215__$1 = cljs.core.seq.call(null,seq__29173_29206);
if(temp__5457__auto___29215__$1){
var seq__29173_29216__$1 = temp__5457__auto___29215__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29173_29216__$1)){
var c__4319__auto___29217 = cljs.core.chunk_first.call(null,seq__29173_29216__$1);
var G__29218 = cljs.core.chunk_rest.call(null,seq__29173_29216__$1);
var G__29219 = c__4319__auto___29217;
var G__29220 = cljs.core.count.call(null,c__4319__auto___29217);
var G__29221 = (0);
seq__29173_29206 = G__29218;
chunk__29174_29207 = G__29219;
count__29175_29208 = G__29220;
i__29176_29209 = G__29221;
continue;
} else {
var req_29222 = cljs.core.first.call(null,seq__29173_29216__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29222,prov);


var G__29223 = cljs.core.next.call(null,seq__29173_29216__$1);
var G__29224 = null;
var G__29225 = (0);
var G__29226 = (0);
seq__29173_29206 = G__29223;
chunk__29174_29207 = G__29224;
count__29175_29208 = G__29225;
i__29176_29209 = G__29226;
continue;
}
} else {
}
}
break;
}


var G__29227 = cljs.core.next.call(null,seq__29165__$1);
var G__29228 = null;
var G__29229 = (0);
var G__29230 = (0);
seq__29165 = G__29227;
chunk__29166 = G__29228;
count__29167 = G__29229;
i__29168 = G__29230;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29231_29235 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29232_29236 = null;
var count__29233_29237 = (0);
var i__29234_29238 = (0);
while(true){
if((i__29234_29238 < count__29233_29237)){
var ns_29239 = cljs.core._nth.call(null,chunk__29232_29236,i__29234_29238);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29239);


var G__29240 = seq__29231_29235;
var G__29241 = chunk__29232_29236;
var G__29242 = count__29233_29237;
var G__29243 = (i__29234_29238 + (1));
seq__29231_29235 = G__29240;
chunk__29232_29236 = G__29241;
count__29233_29237 = G__29242;
i__29234_29238 = G__29243;
continue;
} else {
var temp__5457__auto___29244 = cljs.core.seq.call(null,seq__29231_29235);
if(temp__5457__auto___29244){
var seq__29231_29245__$1 = temp__5457__auto___29244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29231_29245__$1)){
var c__4319__auto___29246 = cljs.core.chunk_first.call(null,seq__29231_29245__$1);
var G__29247 = cljs.core.chunk_rest.call(null,seq__29231_29245__$1);
var G__29248 = c__4319__auto___29246;
var G__29249 = cljs.core.count.call(null,c__4319__auto___29246);
var G__29250 = (0);
seq__29231_29235 = G__29247;
chunk__29232_29236 = G__29248;
count__29233_29237 = G__29249;
i__29234_29238 = G__29250;
continue;
} else {
var ns_29251 = cljs.core.first.call(null,seq__29231_29245__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29251);


var G__29252 = cljs.core.next.call(null,seq__29231_29245__$1);
var G__29253 = null;
var G__29254 = (0);
var G__29255 = (0);
seq__29231_29235 = G__29252;
chunk__29232_29236 = G__29253;
count__29233_29237 = G__29254;
i__29234_29238 = G__29255;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29256__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29257__i = 0, G__29257__a = new Array(arguments.length -  0);
while (G__29257__i < G__29257__a.length) {G__29257__a[G__29257__i] = arguments[G__29257__i + 0]; ++G__29257__i;}
  args = new cljs.core.IndexedSeq(G__29257__a,0,null);
} 
return G__29256__delegate.call(this,args);};
G__29256.cljs$lang$maxFixedArity = 0;
G__29256.cljs$lang$applyTo = (function (arglist__29258){
var args = cljs.core.seq(arglist__29258);
return G__29256__delegate(args);
});
G__29256.cljs$core$IFn$_invoke$arity$variadic = G__29256__delegate;
return G__29256;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29259_SHARP_,p2__29260_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29259_SHARP_)].join('')),p2__29260_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29261_SHARP_,p2__29262_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29261_SHARP_)].join(''),p2__29262_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29263 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29263.addCallback(((function (G__29263){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29263))
);

G__29263.addErrback(((function (G__29263){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29263))
);

return G__29263;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29264){if((e29264 instanceof Error)){
var e = e29264;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29264;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29265){if((e29265 instanceof Error)){
var e = e29265;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29265;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29266 = cljs.core._EQ_;
var expr__29267 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29266.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29267))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29266.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29267))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29266.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29267))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29266,expr__29267){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29266,expr__29267))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29269,callback){
var map__29270 = p__29269;
var map__29270__$1 = ((((!((map__29270 == null)))?(((((map__29270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29270):map__29270);
var file_msg = map__29270__$1;
var request_url = cljs.core.get.call(null,map__29270__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29270,map__29270__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29270,map__29270__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto__){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto__){
return (function (state_29308){
var state_val_29309 = (state_29308[(1)]);
if((state_val_29309 === (7))){
var inst_29304 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
var statearr_29310_29336 = state_29308__$1;
(statearr_29310_29336[(2)] = inst_29304);

(statearr_29310_29336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (1))){
var state_29308__$1 = state_29308;
var statearr_29311_29337 = state_29308__$1;
(statearr_29311_29337[(2)] = null);

(statearr_29311_29337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (4))){
var inst_29274 = (state_29308[(7)]);
var inst_29274__$1 = (state_29308[(2)]);
var state_29308__$1 = (function (){var statearr_29312 = state_29308;
(statearr_29312[(7)] = inst_29274__$1);

return statearr_29312;
})();
if(cljs.core.truth_(inst_29274__$1)){
var statearr_29313_29338 = state_29308__$1;
(statearr_29313_29338[(1)] = (5));

} else {
var statearr_29314_29339 = state_29308__$1;
(statearr_29314_29339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (15))){
var inst_29287 = (state_29308[(8)]);
var inst_29289 = (state_29308[(9)]);
var inst_29291 = inst_29289.call(null,inst_29287);
var state_29308__$1 = state_29308;
var statearr_29315_29340 = state_29308__$1;
(statearr_29315_29340[(2)] = inst_29291);

(statearr_29315_29340[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (13))){
var inst_29298 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
var statearr_29316_29341 = state_29308__$1;
(statearr_29316_29341[(2)] = inst_29298);

(statearr_29316_29341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (6))){
var state_29308__$1 = state_29308;
var statearr_29317_29342 = state_29308__$1;
(statearr_29317_29342[(2)] = null);

(statearr_29317_29342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (17))){
var inst_29295 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
var statearr_29318_29343 = state_29308__$1;
(statearr_29318_29343[(2)] = inst_29295);

(statearr_29318_29343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (3))){
var inst_29306 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29308__$1,inst_29306);
} else {
if((state_val_29309 === (12))){
var state_29308__$1 = state_29308;
var statearr_29319_29344 = state_29308__$1;
(statearr_29319_29344[(2)] = null);

(statearr_29319_29344[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (2))){
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29308__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29309 === (11))){
var inst_29279 = (state_29308[(10)]);
var inst_29285 = figwheel.client.file_reloading.blocking_load.call(null,inst_29279);
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29308__$1,(14),inst_29285);
} else {
if((state_val_29309 === (9))){
var inst_29279 = (state_29308[(10)]);
var state_29308__$1 = state_29308;
if(cljs.core.truth_(inst_29279)){
var statearr_29320_29345 = state_29308__$1;
(statearr_29320_29345[(1)] = (11));

} else {
var statearr_29321_29346 = state_29308__$1;
(statearr_29321_29346[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (5))){
var inst_29274 = (state_29308[(7)]);
var inst_29280 = (state_29308[(11)]);
var inst_29279 = cljs.core.nth.call(null,inst_29274,(0),null);
var inst_29280__$1 = cljs.core.nth.call(null,inst_29274,(1),null);
var state_29308__$1 = (function (){var statearr_29322 = state_29308;
(statearr_29322[(10)] = inst_29279);

(statearr_29322[(11)] = inst_29280__$1);

return statearr_29322;
})();
if(cljs.core.truth_(inst_29280__$1)){
var statearr_29323_29347 = state_29308__$1;
(statearr_29323_29347[(1)] = (8));

} else {
var statearr_29324_29348 = state_29308__$1;
(statearr_29324_29348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (14))){
var inst_29279 = (state_29308[(10)]);
var inst_29289 = (state_29308[(9)]);
var inst_29287 = (state_29308[(2)]);
var inst_29288 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29289__$1 = cljs.core.get.call(null,inst_29288,inst_29279);
var state_29308__$1 = (function (){var statearr_29325 = state_29308;
(statearr_29325[(8)] = inst_29287);

(statearr_29325[(9)] = inst_29289__$1);

return statearr_29325;
})();
if(cljs.core.truth_(inst_29289__$1)){
var statearr_29326_29349 = state_29308__$1;
(statearr_29326_29349[(1)] = (15));

} else {
var statearr_29327_29350 = state_29308__$1;
(statearr_29327_29350[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (16))){
var inst_29287 = (state_29308[(8)]);
var inst_29293 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29287);
var state_29308__$1 = state_29308;
var statearr_29328_29351 = state_29308__$1;
(statearr_29328_29351[(2)] = inst_29293);

(statearr_29328_29351[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (10))){
var inst_29300 = (state_29308[(2)]);
var state_29308__$1 = (function (){var statearr_29329 = state_29308;
(statearr_29329[(12)] = inst_29300);

return statearr_29329;
})();
var statearr_29330_29352 = state_29308__$1;
(statearr_29330_29352[(2)] = null);

(statearr_29330_29352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (8))){
var inst_29280 = (state_29308[(11)]);
var inst_29282 = eval(inst_29280);
var state_29308__$1 = state_29308;
var statearr_29331_29353 = state_29308__$1;
(statearr_29331_29353[(2)] = inst_29282);

(statearr_29331_29353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26993__auto__))
;
return ((function (switch__26903__auto__,c__26993__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26904__auto__ = null;
var figwheel$client$file_reloading$state_machine__26904__auto____0 = (function (){
var statearr_29332 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29332[(0)] = figwheel$client$file_reloading$state_machine__26904__auto__);

(statearr_29332[(1)] = (1));

return statearr_29332;
});
var figwheel$client$file_reloading$state_machine__26904__auto____1 = (function (state_29308){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_29308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e29333){if((e29333 instanceof Object)){
var ex__26907__auto__ = e29333;
var statearr_29334_29354 = state_29308;
(statearr_29334_29354[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29355 = state_29308;
state_29308 = G__29355;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26904__auto__ = function(state_29308){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26904__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26904__auto____1.call(this,state_29308);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26904__auto____0;
figwheel$client$file_reloading$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26904__auto____1;
return figwheel$client$file_reloading$state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto__))
})();
var state__26995__auto__ = (function (){var statearr_29335 = f__26994__auto__.call(null);
(statearr_29335[(6)] = c__26993__auto__);

return statearr_29335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto__))
);

return c__26993__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29357 = arguments.length;
switch (G__29357) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29359,callback){
var map__29360 = p__29359;
var map__29360__$1 = ((((!((map__29360 == null)))?(((((map__29360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29360):map__29360);
var file_msg = map__29360__$1;
var namespace = cljs.core.get.call(null,map__29360__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29360,map__29360__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29360,map__29360__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29362){
var map__29363 = p__29362;
var map__29363__$1 = ((((!((map__29363 == null)))?(((((map__29363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29363):map__29363);
var file_msg = map__29363__$1;
var namespace = cljs.core.get.call(null,map__29363__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29365){
var map__29366 = p__29365;
var map__29366__$1 = ((((!((map__29366 == null)))?(((((map__29366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29366):map__29366);
var file_msg = map__29366__$1;
var namespace = cljs.core.get.call(null,map__29366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29368,callback){
var map__29369 = p__29368;
var map__29369__$1 = ((((!((map__29369 == null)))?(((((map__29369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29369):map__29369);
var file_msg = map__29369__$1;
var request_url = cljs.core.get.call(null,map__29369__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29369__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26993__auto___29419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___29419,out){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___29419,out){
return (function (state_29404){
var state_val_29405 = (state_29404[(1)]);
if((state_val_29405 === (1))){
var inst_29378 = cljs.core.seq.call(null,files);
var inst_29379 = cljs.core.first.call(null,inst_29378);
var inst_29380 = cljs.core.next.call(null,inst_29378);
var inst_29381 = files;
var state_29404__$1 = (function (){var statearr_29406 = state_29404;
(statearr_29406[(7)] = inst_29379);

(statearr_29406[(8)] = inst_29381);

(statearr_29406[(9)] = inst_29380);

return statearr_29406;
})();
var statearr_29407_29420 = state_29404__$1;
(statearr_29407_29420[(2)] = null);

(statearr_29407_29420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (2))){
var inst_29387 = (state_29404[(10)]);
var inst_29381 = (state_29404[(8)]);
var inst_29386 = cljs.core.seq.call(null,inst_29381);
var inst_29387__$1 = cljs.core.first.call(null,inst_29386);
var inst_29388 = cljs.core.next.call(null,inst_29386);
var inst_29389 = (inst_29387__$1 == null);
var inst_29390 = cljs.core.not.call(null,inst_29389);
var state_29404__$1 = (function (){var statearr_29408 = state_29404;
(statearr_29408[(10)] = inst_29387__$1);

(statearr_29408[(11)] = inst_29388);

return statearr_29408;
})();
if(inst_29390){
var statearr_29409_29421 = state_29404__$1;
(statearr_29409_29421[(1)] = (4));

} else {
var statearr_29410_29422 = state_29404__$1;
(statearr_29410_29422[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (3))){
var inst_29402 = (state_29404[(2)]);
var state_29404__$1 = state_29404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29404__$1,inst_29402);
} else {
if((state_val_29405 === (4))){
var inst_29387 = (state_29404[(10)]);
var inst_29392 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29387);
var state_29404__$1 = state_29404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29404__$1,(7),inst_29392);
} else {
if((state_val_29405 === (5))){
var inst_29398 = cljs.core.async.close_BANG_.call(null,out);
var state_29404__$1 = state_29404;
var statearr_29411_29423 = state_29404__$1;
(statearr_29411_29423[(2)] = inst_29398);

(statearr_29411_29423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (6))){
var inst_29400 = (state_29404[(2)]);
var state_29404__$1 = state_29404;
var statearr_29412_29424 = state_29404__$1;
(statearr_29412_29424[(2)] = inst_29400);

(statearr_29412_29424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (7))){
var inst_29388 = (state_29404[(11)]);
var inst_29394 = (state_29404[(2)]);
var inst_29395 = cljs.core.async.put_BANG_.call(null,out,inst_29394);
var inst_29381 = inst_29388;
var state_29404__$1 = (function (){var statearr_29413 = state_29404;
(statearr_29413[(12)] = inst_29395);

(statearr_29413[(8)] = inst_29381);

return statearr_29413;
})();
var statearr_29414_29425 = state_29404__$1;
(statearr_29414_29425[(2)] = null);

(statearr_29414_29425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__26993__auto___29419,out))
;
return ((function (switch__26903__auto__,c__26993__auto___29419,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26904__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26904__auto____0 = (function (){
var statearr_29415 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29415[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26904__auto__);

(statearr_29415[(1)] = (1));

return statearr_29415;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26904__auto____1 = (function (state_29404){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_29404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e29416){if((e29416 instanceof Object)){
var ex__26907__auto__ = e29416;
var statearr_29417_29426 = state_29404;
(statearr_29417_29426[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29427 = state_29404;
state_29404 = G__29427;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26904__auto__ = function(state_29404){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26904__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26904__auto____1.call(this,state_29404);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26904__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26904__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___29419,out))
})();
var state__26995__auto__ = (function (){var statearr_29418 = f__26994__auto__.call(null);
(statearr_29418[(6)] = c__26993__auto___29419);

return statearr_29418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___29419,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29428,opts){
var map__29429 = p__29428;
var map__29429__$1 = ((((!((map__29429 == null)))?(((((map__29429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29429):map__29429);
var eval_body = cljs.core.get.call(null,map__29429__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29429__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29431){var e = e29431;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29432_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29432_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29433){
var vec__29434 = p__29433;
var k = cljs.core.nth.call(null,vec__29434,(0),null);
var v = cljs.core.nth.call(null,vec__29434,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29437){
var vec__29438 = p__29437;
var k = cljs.core.nth.call(null,vec__29438,(0),null);
var v = cljs.core.nth.call(null,vec__29438,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29444,p__29445){
var map__29446 = p__29444;
var map__29446__$1 = ((((!((map__29446 == null)))?(((((map__29446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29446):map__29446);
var opts = map__29446__$1;
var before_jsload = cljs.core.get.call(null,map__29446__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29446__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29446__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29447 = p__29445;
var map__29447__$1 = ((((!((map__29447 == null)))?(((((map__29447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29447):map__29447);
var msg = map__29447__$1;
var files = cljs.core.get.call(null,map__29447__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29447__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29447__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29601){
var state_val_29602 = (state_29601[(1)]);
if((state_val_29602 === (7))){
var inst_29461 = (state_29601[(7)]);
var inst_29462 = (state_29601[(8)]);
var inst_29463 = (state_29601[(9)]);
var inst_29464 = (state_29601[(10)]);
var inst_29469 = cljs.core._nth.call(null,inst_29462,inst_29464);
var inst_29470 = figwheel.client.file_reloading.eval_body.call(null,inst_29469,opts);
var inst_29471 = (inst_29464 + (1));
var tmp29603 = inst_29461;
var tmp29604 = inst_29462;
var tmp29605 = inst_29463;
var inst_29461__$1 = tmp29603;
var inst_29462__$1 = tmp29604;
var inst_29463__$1 = tmp29605;
var inst_29464__$1 = inst_29471;
var state_29601__$1 = (function (){var statearr_29606 = state_29601;
(statearr_29606[(7)] = inst_29461__$1);

(statearr_29606[(8)] = inst_29462__$1);

(statearr_29606[(11)] = inst_29470);

(statearr_29606[(9)] = inst_29463__$1);

(statearr_29606[(10)] = inst_29464__$1);

return statearr_29606;
})();
var statearr_29607_29690 = state_29601__$1;
(statearr_29607_29690[(2)] = null);

(statearr_29607_29690[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (20))){
var inst_29504 = (state_29601[(12)]);
var inst_29512 = figwheel.client.file_reloading.sort_files.call(null,inst_29504);
var state_29601__$1 = state_29601;
var statearr_29608_29691 = state_29601__$1;
(statearr_29608_29691[(2)] = inst_29512);

(statearr_29608_29691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (27))){
var state_29601__$1 = state_29601;
var statearr_29609_29692 = state_29601__$1;
(statearr_29609_29692[(2)] = null);

(statearr_29609_29692[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (1))){
var inst_29453 = (state_29601[(13)]);
var inst_29450 = before_jsload.call(null,files);
var inst_29451 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29452 = (function (){return ((function (inst_29453,inst_29450,inst_29451,state_val_29602,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29441_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29441_SHARP_);
});
;})(inst_29453,inst_29450,inst_29451,state_val_29602,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29453__$1 = cljs.core.filter.call(null,inst_29452,files);
var inst_29454 = cljs.core.not_empty.call(null,inst_29453__$1);
var state_29601__$1 = (function (){var statearr_29610 = state_29601;
(statearr_29610[(13)] = inst_29453__$1);

(statearr_29610[(14)] = inst_29450);

(statearr_29610[(15)] = inst_29451);

return statearr_29610;
})();
if(cljs.core.truth_(inst_29454)){
var statearr_29611_29693 = state_29601__$1;
(statearr_29611_29693[(1)] = (2));

} else {
var statearr_29612_29694 = state_29601__$1;
(statearr_29612_29694[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (24))){
var state_29601__$1 = state_29601;
var statearr_29613_29695 = state_29601__$1;
(statearr_29613_29695[(2)] = null);

(statearr_29613_29695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (39))){
var inst_29554 = (state_29601[(16)]);
var state_29601__$1 = state_29601;
var statearr_29614_29696 = state_29601__$1;
(statearr_29614_29696[(2)] = inst_29554);

(statearr_29614_29696[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (46))){
var inst_29596 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
var statearr_29615_29697 = state_29601__$1;
(statearr_29615_29697[(2)] = inst_29596);

(statearr_29615_29697[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (4))){
var inst_29498 = (state_29601[(2)]);
var inst_29499 = cljs.core.List.EMPTY;
var inst_29500 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29499);
var inst_29501 = (function (){return ((function (inst_29498,inst_29499,inst_29500,state_val_29602,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29442_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29442_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29442_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29442_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29498,inst_29499,inst_29500,state_val_29602,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29502 = cljs.core.filter.call(null,inst_29501,files);
var inst_29503 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29504 = cljs.core.concat.call(null,inst_29502,inst_29503);
var state_29601__$1 = (function (){var statearr_29616 = state_29601;
(statearr_29616[(17)] = inst_29500);

(statearr_29616[(12)] = inst_29504);

(statearr_29616[(18)] = inst_29498);

return statearr_29616;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29617_29698 = state_29601__$1;
(statearr_29617_29698[(1)] = (16));

} else {
var statearr_29618_29699 = state_29601__$1;
(statearr_29618_29699[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (15))){
var inst_29488 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
var statearr_29619_29700 = state_29601__$1;
(statearr_29619_29700[(2)] = inst_29488);

(statearr_29619_29700[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (21))){
var inst_29514 = (state_29601[(19)]);
var inst_29514__$1 = (state_29601[(2)]);
var inst_29515 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29514__$1);
var state_29601__$1 = (function (){var statearr_29620 = state_29601;
(statearr_29620[(19)] = inst_29514__$1);

return statearr_29620;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29601__$1,(22),inst_29515);
} else {
if((state_val_29602 === (31))){
var inst_29599 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29601__$1,inst_29599);
} else {
if((state_val_29602 === (32))){
var inst_29554 = (state_29601[(16)]);
var inst_29559 = inst_29554.cljs$lang$protocol_mask$partition0$;
var inst_29560 = (inst_29559 & (64));
var inst_29561 = inst_29554.cljs$core$ISeq$;
var inst_29562 = (cljs.core.PROTOCOL_SENTINEL === inst_29561);
var inst_29563 = ((inst_29560) || (inst_29562));
var state_29601__$1 = state_29601;
if(cljs.core.truth_(inst_29563)){
var statearr_29621_29701 = state_29601__$1;
(statearr_29621_29701[(1)] = (35));

} else {
var statearr_29622_29702 = state_29601__$1;
(statearr_29622_29702[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (40))){
var inst_29576 = (state_29601[(20)]);
var inst_29575 = (state_29601[(2)]);
var inst_29576__$1 = cljs.core.get.call(null,inst_29575,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29577 = cljs.core.get.call(null,inst_29575,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29578 = cljs.core.not_empty.call(null,inst_29576__$1);
var state_29601__$1 = (function (){var statearr_29623 = state_29601;
(statearr_29623[(21)] = inst_29577);

(statearr_29623[(20)] = inst_29576__$1);

return statearr_29623;
})();
if(cljs.core.truth_(inst_29578)){
var statearr_29624_29703 = state_29601__$1;
(statearr_29624_29703[(1)] = (41));

} else {
var statearr_29625_29704 = state_29601__$1;
(statearr_29625_29704[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (33))){
var state_29601__$1 = state_29601;
var statearr_29626_29705 = state_29601__$1;
(statearr_29626_29705[(2)] = false);

(statearr_29626_29705[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (13))){
var inst_29474 = (state_29601[(22)]);
var inst_29478 = cljs.core.chunk_first.call(null,inst_29474);
var inst_29479 = cljs.core.chunk_rest.call(null,inst_29474);
var inst_29480 = cljs.core.count.call(null,inst_29478);
var inst_29461 = inst_29479;
var inst_29462 = inst_29478;
var inst_29463 = inst_29480;
var inst_29464 = (0);
var state_29601__$1 = (function (){var statearr_29627 = state_29601;
(statearr_29627[(7)] = inst_29461);

(statearr_29627[(8)] = inst_29462);

(statearr_29627[(9)] = inst_29463);

(statearr_29627[(10)] = inst_29464);

return statearr_29627;
})();
var statearr_29628_29706 = state_29601__$1;
(statearr_29628_29706[(2)] = null);

(statearr_29628_29706[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (22))){
var inst_29518 = (state_29601[(23)]);
var inst_29522 = (state_29601[(24)]);
var inst_29517 = (state_29601[(25)]);
var inst_29514 = (state_29601[(19)]);
var inst_29517__$1 = (state_29601[(2)]);
var inst_29518__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29517__$1);
var inst_29519 = (function (){var all_files = inst_29514;
var res_SINGLEQUOTE_ = inst_29517__$1;
var res = inst_29518__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29518,inst_29522,inst_29517,inst_29514,inst_29517__$1,inst_29518__$1,state_val_29602,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29443_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29443_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29518,inst_29522,inst_29517,inst_29514,inst_29517__$1,inst_29518__$1,state_val_29602,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29520 = cljs.core.filter.call(null,inst_29519,inst_29517__$1);
var inst_29521 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29522__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29521);
var inst_29523 = cljs.core.not_empty.call(null,inst_29522__$1);
var state_29601__$1 = (function (){var statearr_29629 = state_29601;
(statearr_29629[(23)] = inst_29518__$1);

(statearr_29629[(24)] = inst_29522__$1);

(statearr_29629[(25)] = inst_29517__$1);

(statearr_29629[(26)] = inst_29520);

return statearr_29629;
})();
if(cljs.core.truth_(inst_29523)){
var statearr_29630_29707 = state_29601__$1;
(statearr_29630_29707[(1)] = (23));

} else {
var statearr_29631_29708 = state_29601__$1;
(statearr_29631_29708[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (36))){
var state_29601__$1 = state_29601;
var statearr_29632_29709 = state_29601__$1;
(statearr_29632_29709[(2)] = false);

(statearr_29632_29709[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (41))){
var inst_29576 = (state_29601[(20)]);
var inst_29580 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29581 = cljs.core.map.call(null,inst_29580,inst_29576);
var inst_29582 = cljs.core.pr_str.call(null,inst_29581);
var inst_29583 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29582)].join('');
var inst_29584 = figwheel.client.utils.log.call(null,inst_29583);
var state_29601__$1 = state_29601;
var statearr_29633_29710 = state_29601__$1;
(statearr_29633_29710[(2)] = inst_29584);

(statearr_29633_29710[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (43))){
var inst_29577 = (state_29601[(21)]);
var inst_29587 = (state_29601[(2)]);
var inst_29588 = cljs.core.not_empty.call(null,inst_29577);
var state_29601__$1 = (function (){var statearr_29634 = state_29601;
(statearr_29634[(27)] = inst_29587);

return statearr_29634;
})();
if(cljs.core.truth_(inst_29588)){
var statearr_29635_29711 = state_29601__$1;
(statearr_29635_29711[(1)] = (44));

} else {
var statearr_29636_29712 = state_29601__$1;
(statearr_29636_29712[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (29))){
var inst_29518 = (state_29601[(23)]);
var inst_29554 = (state_29601[(16)]);
var inst_29522 = (state_29601[(24)]);
var inst_29517 = (state_29601[(25)]);
var inst_29520 = (state_29601[(26)]);
var inst_29514 = (state_29601[(19)]);
var inst_29550 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29553 = (function (){var all_files = inst_29514;
var res_SINGLEQUOTE_ = inst_29517;
var res = inst_29518;
var files_not_loaded = inst_29520;
var dependencies_that_loaded = inst_29522;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29518,inst_29554,inst_29522,inst_29517,inst_29520,inst_29514,inst_29550,state_val_29602,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29552){
var map__29637 = p__29552;
var map__29637__$1 = ((((!((map__29637 == null)))?(((((map__29637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29637):map__29637);
var namespace = cljs.core.get.call(null,map__29637__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29518,inst_29554,inst_29522,inst_29517,inst_29520,inst_29514,inst_29550,state_val_29602,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29554__$1 = cljs.core.group_by.call(null,inst_29553,inst_29520);
var inst_29556 = (inst_29554__$1 == null);
var inst_29557 = cljs.core.not.call(null,inst_29556);
var state_29601__$1 = (function (){var statearr_29639 = state_29601;
(statearr_29639[(28)] = inst_29550);

(statearr_29639[(16)] = inst_29554__$1);

return statearr_29639;
})();
if(inst_29557){
var statearr_29640_29713 = state_29601__$1;
(statearr_29640_29713[(1)] = (32));

} else {
var statearr_29641_29714 = state_29601__$1;
(statearr_29641_29714[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (44))){
var inst_29577 = (state_29601[(21)]);
var inst_29590 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29577);
var inst_29591 = cljs.core.pr_str.call(null,inst_29590);
var inst_29592 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29591)].join('');
var inst_29593 = figwheel.client.utils.log.call(null,inst_29592);
var state_29601__$1 = state_29601;
var statearr_29642_29715 = state_29601__$1;
(statearr_29642_29715[(2)] = inst_29593);

(statearr_29642_29715[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (6))){
var inst_29495 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
var statearr_29643_29716 = state_29601__$1;
(statearr_29643_29716[(2)] = inst_29495);

(statearr_29643_29716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (28))){
var inst_29520 = (state_29601[(26)]);
var inst_29547 = (state_29601[(2)]);
var inst_29548 = cljs.core.not_empty.call(null,inst_29520);
var state_29601__$1 = (function (){var statearr_29644 = state_29601;
(statearr_29644[(29)] = inst_29547);

return statearr_29644;
})();
if(cljs.core.truth_(inst_29548)){
var statearr_29645_29717 = state_29601__$1;
(statearr_29645_29717[(1)] = (29));

} else {
var statearr_29646_29718 = state_29601__$1;
(statearr_29646_29718[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (25))){
var inst_29518 = (state_29601[(23)]);
var inst_29534 = (state_29601[(2)]);
var inst_29535 = cljs.core.not_empty.call(null,inst_29518);
var state_29601__$1 = (function (){var statearr_29647 = state_29601;
(statearr_29647[(30)] = inst_29534);

return statearr_29647;
})();
if(cljs.core.truth_(inst_29535)){
var statearr_29648_29719 = state_29601__$1;
(statearr_29648_29719[(1)] = (26));

} else {
var statearr_29649_29720 = state_29601__$1;
(statearr_29649_29720[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (34))){
var inst_29570 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
if(cljs.core.truth_(inst_29570)){
var statearr_29650_29721 = state_29601__$1;
(statearr_29650_29721[(1)] = (38));

} else {
var statearr_29651_29722 = state_29601__$1;
(statearr_29651_29722[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (17))){
var state_29601__$1 = state_29601;
var statearr_29652_29723 = state_29601__$1;
(statearr_29652_29723[(2)] = recompile_dependents);

(statearr_29652_29723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (3))){
var state_29601__$1 = state_29601;
var statearr_29653_29724 = state_29601__$1;
(statearr_29653_29724[(2)] = null);

(statearr_29653_29724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (12))){
var inst_29491 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
var statearr_29654_29725 = state_29601__$1;
(statearr_29654_29725[(2)] = inst_29491);

(statearr_29654_29725[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (2))){
var inst_29453 = (state_29601[(13)]);
var inst_29460 = cljs.core.seq.call(null,inst_29453);
var inst_29461 = inst_29460;
var inst_29462 = null;
var inst_29463 = (0);
var inst_29464 = (0);
var state_29601__$1 = (function (){var statearr_29655 = state_29601;
(statearr_29655[(7)] = inst_29461);

(statearr_29655[(8)] = inst_29462);

(statearr_29655[(9)] = inst_29463);

(statearr_29655[(10)] = inst_29464);

return statearr_29655;
})();
var statearr_29656_29726 = state_29601__$1;
(statearr_29656_29726[(2)] = null);

(statearr_29656_29726[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (23))){
var inst_29518 = (state_29601[(23)]);
var inst_29522 = (state_29601[(24)]);
var inst_29517 = (state_29601[(25)]);
var inst_29520 = (state_29601[(26)]);
var inst_29514 = (state_29601[(19)]);
var inst_29525 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29527 = (function (){var all_files = inst_29514;
var res_SINGLEQUOTE_ = inst_29517;
var res = inst_29518;
var files_not_loaded = inst_29520;
var dependencies_that_loaded = inst_29522;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29518,inst_29522,inst_29517,inst_29520,inst_29514,inst_29525,state_val_29602,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29526){
var map__29657 = p__29526;
var map__29657__$1 = ((((!((map__29657 == null)))?(((((map__29657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29657):map__29657);
var request_url = cljs.core.get.call(null,map__29657__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29518,inst_29522,inst_29517,inst_29520,inst_29514,inst_29525,state_val_29602,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29528 = cljs.core.reverse.call(null,inst_29522);
var inst_29529 = cljs.core.map.call(null,inst_29527,inst_29528);
var inst_29530 = cljs.core.pr_str.call(null,inst_29529);
var inst_29531 = figwheel.client.utils.log.call(null,inst_29530);
var state_29601__$1 = (function (){var statearr_29659 = state_29601;
(statearr_29659[(31)] = inst_29525);

return statearr_29659;
})();
var statearr_29660_29727 = state_29601__$1;
(statearr_29660_29727[(2)] = inst_29531);

(statearr_29660_29727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (35))){
var state_29601__$1 = state_29601;
var statearr_29661_29728 = state_29601__$1;
(statearr_29661_29728[(2)] = true);

(statearr_29661_29728[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (19))){
var inst_29504 = (state_29601[(12)]);
var inst_29510 = figwheel.client.file_reloading.expand_files.call(null,inst_29504);
var state_29601__$1 = state_29601;
var statearr_29662_29729 = state_29601__$1;
(statearr_29662_29729[(2)] = inst_29510);

(statearr_29662_29729[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (11))){
var state_29601__$1 = state_29601;
var statearr_29663_29730 = state_29601__$1;
(statearr_29663_29730[(2)] = null);

(statearr_29663_29730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (9))){
var inst_29493 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
var statearr_29664_29731 = state_29601__$1;
(statearr_29664_29731[(2)] = inst_29493);

(statearr_29664_29731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (5))){
var inst_29463 = (state_29601[(9)]);
var inst_29464 = (state_29601[(10)]);
var inst_29466 = (inst_29464 < inst_29463);
var inst_29467 = inst_29466;
var state_29601__$1 = state_29601;
if(cljs.core.truth_(inst_29467)){
var statearr_29665_29732 = state_29601__$1;
(statearr_29665_29732[(1)] = (7));

} else {
var statearr_29666_29733 = state_29601__$1;
(statearr_29666_29733[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (14))){
var inst_29474 = (state_29601[(22)]);
var inst_29483 = cljs.core.first.call(null,inst_29474);
var inst_29484 = figwheel.client.file_reloading.eval_body.call(null,inst_29483,opts);
var inst_29485 = cljs.core.next.call(null,inst_29474);
var inst_29461 = inst_29485;
var inst_29462 = null;
var inst_29463 = (0);
var inst_29464 = (0);
var state_29601__$1 = (function (){var statearr_29667 = state_29601;
(statearr_29667[(32)] = inst_29484);

(statearr_29667[(7)] = inst_29461);

(statearr_29667[(8)] = inst_29462);

(statearr_29667[(9)] = inst_29463);

(statearr_29667[(10)] = inst_29464);

return statearr_29667;
})();
var statearr_29668_29734 = state_29601__$1;
(statearr_29668_29734[(2)] = null);

(statearr_29668_29734[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (45))){
var state_29601__$1 = state_29601;
var statearr_29669_29735 = state_29601__$1;
(statearr_29669_29735[(2)] = null);

(statearr_29669_29735[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (26))){
var inst_29518 = (state_29601[(23)]);
var inst_29522 = (state_29601[(24)]);
var inst_29517 = (state_29601[(25)]);
var inst_29520 = (state_29601[(26)]);
var inst_29514 = (state_29601[(19)]);
var inst_29537 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29539 = (function (){var all_files = inst_29514;
var res_SINGLEQUOTE_ = inst_29517;
var res = inst_29518;
var files_not_loaded = inst_29520;
var dependencies_that_loaded = inst_29522;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29518,inst_29522,inst_29517,inst_29520,inst_29514,inst_29537,state_val_29602,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29538){
var map__29670 = p__29538;
var map__29670__$1 = ((((!((map__29670 == null)))?(((((map__29670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29670):map__29670);
var namespace = cljs.core.get.call(null,map__29670__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29670__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29518,inst_29522,inst_29517,inst_29520,inst_29514,inst_29537,state_val_29602,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29540 = cljs.core.map.call(null,inst_29539,inst_29518);
var inst_29541 = cljs.core.pr_str.call(null,inst_29540);
var inst_29542 = figwheel.client.utils.log.call(null,inst_29541);
var inst_29543 = (function (){var all_files = inst_29514;
var res_SINGLEQUOTE_ = inst_29517;
var res = inst_29518;
var files_not_loaded = inst_29520;
var dependencies_that_loaded = inst_29522;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29518,inst_29522,inst_29517,inst_29520,inst_29514,inst_29537,inst_29539,inst_29540,inst_29541,inst_29542,state_val_29602,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29518,inst_29522,inst_29517,inst_29520,inst_29514,inst_29537,inst_29539,inst_29540,inst_29541,inst_29542,state_val_29602,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29544 = setTimeout(inst_29543,(10));
var state_29601__$1 = (function (){var statearr_29672 = state_29601;
(statearr_29672[(33)] = inst_29542);

(statearr_29672[(34)] = inst_29537);

return statearr_29672;
})();
var statearr_29673_29736 = state_29601__$1;
(statearr_29673_29736[(2)] = inst_29544);

(statearr_29673_29736[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (16))){
var state_29601__$1 = state_29601;
var statearr_29674_29737 = state_29601__$1;
(statearr_29674_29737[(2)] = reload_dependents);

(statearr_29674_29737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (38))){
var inst_29554 = (state_29601[(16)]);
var inst_29572 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29554);
var state_29601__$1 = state_29601;
var statearr_29675_29738 = state_29601__$1;
(statearr_29675_29738[(2)] = inst_29572);

(statearr_29675_29738[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (30))){
var state_29601__$1 = state_29601;
var statearr_29676_29739 = state_29601__$1;
(statearr_29676_29739[(2)] = null);

(statearr_29676_29739[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (10))){
var inst_29474 = (state_29601[(22)]);
var inst_29476 = cljs.core.chunked_seq_QMARK_.call(null,inst_29474);
var state_29601__$1 = state_29601;
if(inst_29476){
var statearr_29677_29740 = state_29601__$1;
(statearr_29677_29740[(1)] = (13));

} else {
var statearr_29678_29741 = state_29601__$1;
(statearr_29678_29741[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (18))){
var inst_29508 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
if(cljs.core.truth_(inst_29508)){
var statearr_29679_29742 = state_29601__$1;
(statearr_29679_29742[(1)] = (19));

} else {
var statearr_29680_29743 = state_29601__$1;
(statearr_29680_29743[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (42))){
var state_29601__$1 = state_29601;
var statearr_29681_29744 = state_29601__$1;
(statearr_29681_29744[(2)] = null);

(statearr_29681_29744[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (37))){
var inst_29567 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
var statearr_29682_29745 = state_29601__$1;
(statearr_29682_29745[(2)] = inst_29567);

(statearr_29682_29745[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (8))){
var inst_29461 = (state_29601[(7)]);
var inst_29474 = (state_29601[(22)]);
var inst_29474__$1 = cljs.core.seq.call(null,inst_29461);
var state_29601__$1 = (function (){var statearr_29683 = state_29601;
(statearr_29683[(22)] = inst_29474__$1);

return statearr_29683;
})();
if(inst_29474__$1){
var statearr_29684_29746 = state_29601__$1;
(statearr_29684_29746[(1)] = (10));

} else {
var statearr_29685_29747 = state_29601__$1;
(statearr_29685_29747[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26903__auto__,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26904__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26904__auto____0 = (function (){
var statearr_29686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29686[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26904__auto__);

(statearr_29686[(1)] = (1));

return statearr_29686;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26904__auto____1 = (function (state_29601){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_29601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e29687){if((e29687 instanceof Object)){
var ex__26907__auto__ = e29687;
var statearr_29688_29748 = state_29601;
(statearr_29688_29748[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29749 = state_29601;
state_29601 = G__29749;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26904__auto__ = function(state_29601){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26904__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26904__auto____1.call(this,state_29601);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26904__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26904__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26995__auto__ = (function (){var statearr_29689 = f__26994__auto__.call(null);
(statearr_29689[(6)] = c__26993__auto__);

return statearr_29689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto__,map__29446,map__29446__$1,opts,before_jsload,on_jsload,reload_dependents,map__29447,map__29447__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26993__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29752,link){
var map__29753 = p__29752;
var map__29753__$1 = ((((!((map__29753 == null)))?(((((map__29753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29753):map__29753);
var file = cljs.core.get.call(null,map__29753__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29753,map__29753__$1,file){
return (function (p1__29750_SHARP_,p2__29751_SHARP_){
if(cljs.core._EQ_.call(null,p1__29750_SHARP_,p2__29751_SHARP_)){
return p1__29750_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29753,map__29753__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29756){
var map__29757 = p__29756;
var map__29757__$1 = ((((!((map__29757 == null)))?(((((map__29757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29757):map__29757);
var match_length = cljs.core.get.call(null,map__29757__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29757__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29755_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29755_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29759_SHARP_,p2__29760_SHARP_){
return cljs.core.assoc.call(null,p1__29759_SHARP_,cljs.core.get.call(null,p2__29760_SHARP_,key),p2__29760_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29761 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29761);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29761);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29762,p__29763){
var map__29764 = p__29762;
var map__29764__$1 = ((((!((map__29764 == null)))?(((((map__29764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29764):map__29764);
var on_cssload = cljs.core.get.call(null,map__29764__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29765 = p__29763;
var map__29765__$1 = ((((!((map__29765 == null)))?(((((map__29765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29765):map__29765);
var files_msg = map__29765__$1;
var files = cljs.core.get.call(null,map__29765__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1535274137008
