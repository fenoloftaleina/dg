// Compiled by ClojureScript 1.10.238 {}
goog.provide('dg.guts');
goog.require('cljs.core');
goog.require('dg.helpers');
goog.require('thi.ng.color.core');
dg.guts.init = (function dg$guts$init(state){
return state;
});
dg.guts.bounce_dot = (function dg$guts$bounce_dot(d,p__40193){
var map__40194 = p__40193;
var map__40194__$1 = ((((!((map__40194 == null)))?(((((map__40194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40194):map__40194);
var dot = map__40194__$1;
var obj = cljs.core.get.call(null,map__40194__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var radius = cljs.core.get.call(null,map__40194__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var duration_left = cljs.core.get.call(null,map__40194__$1,new cljs.core.Keyword(null,"duration-left","duration-left",-588900037));
var full_dur = (20);
var dur_left = ((function (){var or__3922__auto__ = duration_left;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return full_dur;
}
})() - d);
var elapsed = (full_dur - dur_left);
var finished_factor = (elapsed / full_dur);
var new_radius = ((Math.sin((elapsed * 0.1)) * Math.exp((-1))) * 440.0);
if((dur_left < 0.0)){
return cljs.core.assoc.call(null,dot,new cljs.core.Keyword(null,"animation","animation",-1248293244),null,new cljs.core.Keyword(null,"duration-left","duration-left",-588900037),null);
} else {
dg.helpers.set_radius.call(null,obj,new_radius);

return cljs.core.assoc.call(null,dot,new cljs.core.Keyword(null,"obj","obj",981763962),obj,new cljs.core.Keyword(null,"duration-left","duration-left",-588900037),dur_left,new cljs.core.Keyword(null,"radius","radius",-2073122258),new_radius);
}
});
dg.guts.start_dot = (function dg$guts$start_dot(p__40196,touch_id){
var map__40197 = p__40196;
var map__40197__$1 = ((((!((map__40197 == null)))?(((((map__40197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40197):map__40197);
var state = map__40197__$1;
var app = cljs.core.get.call(null,map__40197__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var dots = cljs.core.get.call(null,map__40197__$1,new cljs.core.Keyword(null,"dots","dots",714343900));
var existing = cljs.core.get.call(null,dots,touch_id);
var map__40199 = cljs.core.assoc.call(null,(function (){var or__3922__auto__ = cljs.core.get.call(null,dots,touch_id);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"obj","obj",981763962),dg.helpers.new_circle.call(null,app,(30),(0),(0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(30),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
}
})(),new cljs.core.Keyword(null,"animation","animation",-1248293244),dg.guts.bounce_dot,new cljs.core.Keyword(null,"duration-left","duration-left",-588900037),null);
var map__40199__$1 = ((((!((map__40199 == null)))?(((((map__40199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40199):map__40199);
var dot = map__40199__$1;
var obj = cljs.core.get.call(null,map__40199__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
dg.helpers.set_visibility.call(null,obj,true);

dg.helpers.set_alpha.call(null,obj,0.7);

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),touch_id], null),dot);
});
dg.guts.hide_dot = (function dg$guts$hide_dot(d,p__40201){
var map__40202 = p__40201;
var map__40202__$1 = ((((!((map__40202 == null)))?(((((map__40202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40202):map__40202);
var dot = map__40202__$1;
var obj = cljs.core.get.call(null,map__40202__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var radius = cljs.core.get.call(null,map__40202__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var duration_left = cljs.core.get.call(null,map__40202__$1,new cljs.core.Keyword(null,"duration-left","duration-left",-588900037));
var full_dur = (100);
var dur_left = ((function (){var or__3922__auto__ = duration_left;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return full_dur;
}
})() - d);
var elapsed = (full_dur - dur_left);
var finished_factor = (elapsed / full_dur);
cljs.core.prn.call(null,new cljs.core.Keyword(null,"hide","hide",-596913169),dur_left);

if((dur_left < 0.0)){
dg.helpers.set_visibility.call(null,obj,false);

return cljs.core.assoc.call(null,dot,new cljs.core.Keyword(null,"animation","animation",-1248293244),null,new cljs.core.Keyword(null,"duration-left","duration-left",-588900037),null);
} else {
dg.helpers.set_alpha.call(null,obj,(0.8 - finished_factor));

return cljs.core.assoc.call(null,dot,new cljs.core.Keyword(null,"obj","obj",981763962),obj,new cljs.core.Keyword(null,"duration-left","duration-left",-588900037),dur_left);
}
});
dg.guts.finish_dot = (function dg$guts$finish_dot(state,touch_id){
var dot = cljs.core.assoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),touch_id], null)),new cljs.core.Keyword(null,"animation","animation",-1248293244),dg.guts.hide_dot,new cljs.core.Keyword(null,"duration-left","duration-left",-588900037),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),touch_id], null),dot);
});
dg.guts.updated_dot = (function dg$guts$updated_dot(state,d,p__40204){
var map__40205 = p__40204;
var map__40205__$1 = ((((!((map__40205 == null)))?(((((map__40205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40205):map__40205);
var dot = map__40205__$1;
var animation = cljs.core.get.call(null,map__40205__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var map__40207 = (cljs.core.truth_(animation)?animation.call(null,d,dot):dot);
var map__40207__$1 = ((((!((map__40207 == null)))?(((((map__40207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40207):map__40207);
var next_dot = map__40207__$1;
var obj = cljs.core.get.call(null,map__40207__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var radius = cljs.core.get.call(null,map__40207__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var x = cljs.core.get.call(null,map__40207__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__40207__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
dg.helpers.set_pos.call(null,obj,x,y);

var hr_40209 = ((y / window.innerHeight) + 0.7);
var color_40210 = cljs.core.deref.call(null,thi.ng.color.core.as_int24.call(null,thi.ng.color.core.hsva.call(null,hr_40209,(1),(1))));
dg.helpers.set_color.call(null,obj,color_40210);

return next_dot;
});
dg.guts.start_new_animations = (function dg$guts$start_new_animations(state,identifier,fun){
return cljs.core.reduce.call(null,(function (acc_state,touch_id){
return fun.call(null,acc_state,touch_id);
}),state,identifier.call(null,state));
});
dg.guts.set_touches_positions = (function dg$guts$set_touches_positions(p__40212){
var map__40213 = p__40212;
var map__40213__$1 = ((((!((map__40213 == null)))?(((((map__40213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40213):map__40213);
var state = map__40213__$1;
var touch_events = cljs.core.get.call(null,map__40213__$1,new cljs.core.Keyword(null,"touch-events","touch-events",-1672683563));
return cljs.core.reduce.call(null,((function (map__40213,map__40213__$1,state,touch_events){
return (function (acc_state,p__40215){
var vec__40216 = p__40215;
var touch_id = cljs.core.nth.call(null,vec__40216,(0),null);
var map__40219 = cljs.core.nth.call(null,vec__40216,(1),null);
var map__40219__$1 = ((((!((map__40219 == null)))?(((((map__40219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40219):map__40219);
var x = cljs.core.get.call(null,map__40219__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__40219__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.update_in.call(null,acc_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),touch_id], null),((function (vec__40216,touch_id,map__40219,map__40219__$1,x,y,map__40213,map__40213__$1,state,touch_events){
return (function (p1__40211_SHARP_){
return cljs.core.assoc.call(null,p1__40211_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
});})(vec__40216,touch_id,map__40219,map__40219__$1,x,y,map__40213,map__40213__$1,state,touch_events))
);
});})(map__40213,map__40213__$1,state,touch_events))
,state,touch_events);
});
dg.guts.update_animations = (function dg$guts$update_animations(p__40221,d){
var map__40222 = p__40221;
var map__40222__$1 = ((((!((map__40222 == null)))?(((((map__40222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40222):map__40222);
var state = map__40222__$1;
var dots = cljs.core.get.call(null,map__40222__$1,new cljs.core.Keyword(null,"dots","dots",714343900));
return cljs.core.reduce.call(null,((function (map__40222,map__40222__$1,state,dots){
return (function (acc_state,p__40224){
var vec__40225 = p__40224;
var touch_id = cljs.core.nth.call(null,vec__40225,(0),null);
var dot = cljs.core.nth.call(null,vec__40225,(1),null);
return cljs.core.assoc_in.call(null,acc_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),touch_id], null),dg.guts.updated_dot.call(null,acc_state,d,dot));
});})(map__40222,map__40222__$1,state,dots))
,state,dots);
});
dg.guts.update_frame = (function dg$guts$update_frame(state,d){
return dg.guts.update_animations.call(null,dg.guts.set_touches_positions.call(null,dg.guts.start_new_animations.call(null,dg.guts.start_new_animations.call(null,state,new cljs.core.Keyword(null,"new-touch-events-list","new-touch-events-list",-738547654),dg.guts.start_dot),new cljs.core.Keyword(null,"finished-touch-events-list","finished-touch-events-list",1856334027),dg.guts.finish_dot)),d);
});

//# sourceMappingURL=guts.js.map?rel=1535276835258
