// Compiled by ClojureScript 1.10.238 {}
goog.provide('dg.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dg.guts');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof dg.core.state !== 'undefined'){
} else {
dg.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"touch-events","touch-events",-1672683563),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"new-touch-events-list","new-touch-events-list",-738547654),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"finished-touch-events-list","finished-touch-events-list",1856334027),cljs.core.PersistentVector.EMPTY], null));
}
dg.core.map_touches = (function dg$core$map_touches(e,fun){
var touches = e.changedTouches;
var n__4376__auto__ = touches.length;
var i = (0);
while(true){
if((i < n__4376__auto__)){
var touch_40230 = (touches[i]);
fun.call(null,touch_40230);

var G__40231 = (i + (1));
i = G__40231;
continue;
} else {
return null;
}
break;
}
});
dg.core.set_touch = (function dg$core$set_touch(touch){
return cljs.core.swap_BANG_.call(null,dg.core.state,cljs.core.update,new cljs.core.Keyword(null,"touch-events","touch-events",-1672683563),(function (p1__40232_SHARP_){
return cljs.core.assoc.call(null,p1__40232_SHARP_,touch.identifier,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),touch.pageX,new cljs.core.Keyword(null,"y","y",-1757859776),touch.pageY], null));
}));
});
dg.core.add_new_touch = (function dg$core$add_new_touch(touch){
return cljs.core.swap_BANG_.call(null,dg.core.state,cljs.core.update,new cljs.core.Keyword(null,"new-touch-events-list","new-touch-events-list",-738547654),(function (p1__40233_SHARP_){
return cljs.core.conj.call(null,p1__40233_SHARP_,touch.identifier);
}));
});
dg.core.remove_touch = (function dg$core$remove_touch(touch){
return cljs.core.swap_BANG_.call(null,dg.core.state,cljs.core.update,new cljs.core.Keyword(null,"touch-events","touch-events",-1672683563),(function (p1__40234_SHARP_){
return cljs.core.dissoc.call(null,p1__40234_SHARP_,touch.identifier);
}));
});
dg.core.add_finished_touch = (function dg$core$add_finished_touch(touch){
return cljs.core.swap_BANG_.call(null,dg.core.state,cljs.core.update,new cljs.core.Keyword(null,"finished-touch-events-list","finished-touch-events-list",1856334027),(function (p1__40235_SHARP_){
return cljs.core.conj.call(null,p1__40235_SHARP_,touch.identifier);
}));
});
dg.core.touch_start = (function dg$core$touch_start(e){
e.preventDefault();

return dg.core.map_touches.call(null,e,(function (p1__40236_SHARP_){
dg.core.set_touch.call(null,p1__40236_SHARP_);

return dg.core.add_new_touch.call(null,p1__40236_SHARP_);
}));
});
dg.core.touch_move = (function dg$core$touch_move(e){
e.preventDefault();

return dg.core.map_touches.call(null,e,dg.core.set_touch);
});
dg.core.touch_end = (function dg$core$touch_end(e){
e.preventDefault();

return dg.core.map_touches.call(null,e,(function (p1__40237_SHARP_){
dg.core.remove_touch.call(null,p1__40237_SHARP_);

return dg.core.add_finished_touch.call(null,p1__40237_SHARP_);
}));
});
dg.core.hello_world = (function dg$core$hello_world(){
return null;
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dg.core.hello_world], null),document.getElementById("app"));
if(typeof dg.core.pixi !== 'undefined'){
} else {
dg.core.pixi = (function (){var app = (new PIXI.Application(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true,new cljs.core.Keyword(null,"width","width",-384071477),window.innerWidth,new cljs.core.Keyword(null,"height","height",1025178622),window.innerHeight], null))));
app.renderer.backgroundColor = (11513775);

document.body.appendChild(app.view);

cljs.core.swap_BANG_.call(null,dg.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"app","app",-560961707),app);

cljs.core.swap_BANG_.call(null,dg.core.state,dg.guts.init);

app.ticker.add(((function (app){
return (function (delta){
return cljs.core.swap_BANG_.call(null,dg.core.state,((function (app){
return (function (p1__40238_SHARP_){
return cljs.core.assoc.call(null,dg.guts.update_frame.call(null,cljs.core.update.call(null,cljs.core.update.call(null,p1__40238_SHARP_,new cljs.core.Keyword(null,"new-touch-events-list","new-touch-events-list",-738547654),cljs.core.distinct),new cljs.core.Keyword(null,"finished-touch-events-list","finished-touch-events-list",1856334027),cljs.core.distinct),delta),new cljs.core.Keyword(null,"new-touch-events-list","new-touch-events-list",-738547654),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"finished-touch-events-list","finished-touch-events-list",1856334027),cljs.core.PersistentVector.EMPTY);
});})(app))
);
});})(app))
);

window.addEventListener("touchstart",dg.core.touch_start,false);

window.addEventListener("touchend",dg.core.touch_end,false);

window.addEventListener("touchcancel",dg.core.touch_end,false);

window.addEventListener("touchmove",dg.core.touch_move,false);

return app;
})();
}
dg.core.on_js_reload = (function dg$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1535276835317
