// Compiled by ClojureScript 1.10.238 {}
goog.provide('dg.helpers');
goog.require('cljs.core');
dg.helpers.new_circle = (function dg$helpers$new_circle(var_args){
var G__21747 = arguments.length;
switch (G__21747) {
case 2:
return dg.helpers.new_circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return dg.helpers.new_circle.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dg.helpers.new_circle.cljs$core$IFn$_invoke$arity$2 = (function (app,radius){
return dg.helpers.new_circle.call(null,app,radius,(0),(0));
});

dg.helpers.new_circle.cljs$core$IFn$_invoke$arity$4 = (function (app,radius,x,y){
var circle = (new PIXI.Graphics());
circle.beginFill((16777215));

circle.drawCircle((0),(0),radius);

circle.endFill();

circle.x = x;

circle.y = y;

app.stage.addChild(circle);

return circle;
});

dg.helpers.new_circle.cljs$lang$maxFixedArity = 4;

dg.helpers.set_pos = (function dg$helpers$set_pos(obj,x,y){
obj.x = x;

return obj.y = y;
});
dg.helpers.set_radius = (function dg$helpers$set_radius(obj,r){
obj.width = r;

return obj.height = r;
});
dg.helpers.set_visibility = (function dg$helpers$set_visibility(obj,visibility){
return obj.visible = visibility;
});
dg.helpers.set_alpha = (function dg$helpers$set_alpha(obj,alpha){
return obj.alpha = alpha;
});
dg.helpers.set_color = (function dg$helpers$set_color(obj,color){
return obj.tint = color;
});

//# sourceMappingURL=helpers.js.map?rel=1535274127265
