// Compiled by ClojureScript 1.10.238 {}
goog.provide('thi.ng.strf.core');
goog.require('cljs.core');
goog.require('clojure.string');
thi.ng.strf.core.parse_int = (function thi$ng$strf$core$parse_int(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37126 = arguments.length;
var i__4500__auto___37127 = (0);
while(true){
if((i__4500__auto___37127 < len__4499__auto___37126)){
args__4502__auto__.push((arguments[i__4500__auto___37127]));

var G__37128 = (i__4500__auto___37127 + (1));
i__4500__auto___37127 = G__37128;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__37122){
var vec__37123 = p__37122;
var default$ = cljs.core.nth.call(null,vec__37123,(0),null);
var x_SINGLEQUOTE_ = parseInt(x,radix);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
});

thi.ng.strf.core.parse_int.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
thi.ng.strf.core.parse_int.cljs$lang$applyTo = (function (seq37119){
var G__37120 = cljs.core.first.call(null,seq37119);
var seq37119__$1 = cljs.core.next.call(null,seq37119);
var G__37121 = cljs.core.first.call(null,seq37119__$1);
var seq37119__$2 = cljs.core.next.call(null,seq37119__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37120,G__37121,seq37119__$2);
});

thi.ng.strf.core.parse_long = (function thi$ng$strf$core$parse_long(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37136 = arguments.length;
var i__4500__auto___37137 = (0);
while(true){
if((i__4500__auto___37137 < len__4499__auto___37136)){
args__4502__auto__.push((arguments[i__4500__auto___37137]));

var G__37138 = (i__4500__auto___37137 + (1));
i__4500__auto___37137 = G__37138;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__37132){
var vec__37133 = p__37132;
var default$ = cljs.core.nth.call(null,vec__37133,(0),null);
return thi.ng.strf.core.parse_int.call(null,x,radix,default$);
});

thi.ng.strf.core.parse_long.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
thi.ng.strf.core.parse_long.cljs$lang$applyTo = (function (seq37129){
var G__37130 = cljs.core.first.call(null,seq37129);
var seq37129__$1 = cljs.core.next.call(null,seq37129);
var G__37131 = cljs.core.first.call(null,seq37129__$1);
var seq37129__$2 = cljs.core.next.call(null,seq37129__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37130,G__37131,seq37129__$2);
});

thi.ng.strf.core.parse_float = (function thi$ng$strf$core$parse_float(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37145 = arguments.length;
var i__4500__auto___37146 = (0);
while(true){
if((i__4500__auto___37146 < len__4499__auto___37145)){
args__4502__auto__.push((arguments[i__4500__auto___37146]));

var G__37147 = (i__4500__auto___37146 + (1));
i__4500__auto___37146 = G__37147;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__37141){
var vec__37142 = p__37141;
var default$ = cljs.core.nth.call(null,vec__37142,(0),null);
var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
});

thi.ng.strf.core.parse_float.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.strf.core.parse_float.cljs$lang$applyTo = (function (seq37139){
var G__37140 = cljs.core.first.call(null,seq37139);
var seq37139__$1 = cljs.core.next.call(null,seq37139);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37140,seq37139__$1);
});

thi.ng.strf.core.parse_double = (function thi$ng$strf$core$parse_double(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37154 = arguments.length;
var i__4500__auto___37155 = (0);
while(true){
if((i__4500__auto___37155 < len__4499__auto___37154)){
args__4502__auto__.push((arguments[i__4500__auto___37155]));

var G__37156 = (i__4500__auto___37155 + (1));
i__4500__auto___37155 = G__37156;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__37150){
var vec__37151 = p__37150;
var default$ = cljs.core.nth.call(null,vec__37151,(0),null);
return thi.ng.strf.core.parse_float.call(null,x,default$);
});

thi.ng.strf.core.parse_double.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.strf.core.parse_double.cljs$lang$applyTo = (function (seq37148){
var G__37149 = cljs.core.first.call(null,seq37148);
var seq37148__$1 = cljs.core.next.call(null,seq37148);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37149,seq37148__$1);
});

thi.ng.strf.core.parse_boolean = (function thi$ng$strf$core$parse_boolean(x){
return cljs.core._EQ_.call(null,"true",clojure.string.lower_case.call(null,x));
});
thi.ng.strf.core.int$ = cljs.core.int$;
thi.ng.strf.core.long$ = thi.ng.strf.core.int$;
thi.ng.strf.core.float$ = cljs.core.memoize.call(null,(function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.double$ = cljs.core.memoize.call(null,(function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.pad_left = cljs.core.memoize.call(null,(function (len,fill){
var fill__$1 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,len,fill));
return ((function (fill__$1){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l < len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,fill__$1,(0),(len - l))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return x;
}
});
;})(fill__$1))
}));
thi.ng.strf.core.pad_right = cljs.core.memoize.call(null,(function (len,fill){
var fill__$1 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,len,fill));
return ((function (fill__$1){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l < len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,fill__$1,(0),(len - l)))].join('');
} else {
return x;
}
});
;})(fill__$1))
}));
thi.ng.strf.core.hex = cljs.core.memoize.call(null,(function (len){
var pad = thi.ng.strf.core.pad_left.call(null,len,"0");
return ((function (pad){
return (function (x){
return pad.call(null,(new Number(thi.ng.strf.core.int$.call(null,x))).toString((16)));
});
;})(pad))
}));
thi.ng.strf.core.trunc_left = (function thi$ng$strf$core$trunc_left(len){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.call(null,x,(0),len);
}
});
});
thi.ng.strf.core.trunc_right = (function thi$ng$strf$core$trunc_right(len){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.call(null,x,(l - len));
}
});
});
thi.ng.strf.core.format = (function thi$ng$strf$core$format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37159 = arguments.length;
var i__4500__auto___37160 = (0);
while(true){
if((i__4500__auto___37160 < len__4499__auto___37159)){
args__4502__auto__.push((arguments[i__4500__auto___37160]));

var G__37161 = (i__4500__auto___37160 + (1));
i__4500__auto___37160 = G__37161;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var s = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var fmt__$1 = fmt;
var args__$1 = args;
while(true){
var temp__5455__auto__ = cljs.core.first.call(null,fmt__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
if(typeof f === 'string'){
var G__37162 = cljs.core.conj_BANG_.call(null,s,f);
var G__37163 = cljs.core.next.call(null,fmt__$1);
var G__37164 = args__$1;
s = G__37162;
fmt__$1 = G__37163;
args__$1 = G__37164;
continue;
} else {
var G__37165 = cljs.core.conj_BANG_.call(null,s,f.call(null,cljs.core.first.call(null,args__$1)));
var G__37166 = cljs.core.next.call(null,fmt__$1);
var G__37167 = cljs.core.next.call(null,args__$1);
s = G__37165;
fmt__$1 = G__37166;
args__$1 = G__37167;
continue;
}
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.persistent_BANG_.call(null,s));
}
break;
}
});

thi.ng.strf.core.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.strf.core.format.cljs$lang$applyTo = (function (seq37157){
var G__37158 = cljs.core.first.call(null,seq37157);
var seq37157__$1 = cljs.core.next.call(null,seq37157);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37158,seq37157__$1);
});

thi.ng.strf.core.date_fields = (function thi$ng$strf$core$date_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate()], null)], null);
});
thi.ng.strf.core.time_fields = (function thi$ng$strf$core$time_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.datetime_fields = (function thi$ng$strf$core$datetime_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.date_formatters = (function (){var d2 = cljs.core.comp.call(null,thi.ng.strf.core.pad_left.call(null,(2),"0"),cljs.core.str);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"yyyy-mm-dd","yyyy-mm-dd",1870000488),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2], null),thi.ng.strf.core.date_fields.call(null,d));
});})(d2))
,new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2," ",d2,":",d2,":",d2], null),thi.ng.strf.core.datetime_fields.call(null,d));
});})(d2))
,new cljs.core.Keyword(null,"yyyymmdd-hhmmss","yyyymmdd-hhmmss",1691759860),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,d2,d2,"-",d2,d2,d2], null),thi.ng.strf.core.datetime_fields.call(null,d));
});})(d2))
,new cljs.core.Keyword(null,"dd-mm-yyyy","dd-mm-yyyy",-705729643),((function (d2){
return (function (d){
var vec__37169 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__37169,(0),null);
var m = cljs.core.nth.call(null,vec__37169,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__37169,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),d__$1,m,y);
});})(d2))
,new cljs.core.Keyword(null,"mm-dd-yyyy","mm-dd-yyyy",-911118576),((function (d2){
return (function (d){
var vec__37172 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__37172,(0),null);
var m = cljs.core.nth.call(null,vec__37172,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__37172,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),m,d__$1,y);
});})(d2))
,new cljs.core.Keyword(null,"dd-mm-yy","dd-mm-yy",-664945286),((function (d2){
return (function (d){
var vec__37175 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__37175,(0),null);
var m = cljs.core.nth.call(null,vec__37175,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__37175,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.comp.call(null,d2,((function (vec__37175,y,m,d__$1,d2){
return (function (p1__37168_SHARP_){
return cljs.core.mod.call(null,p1__37168_SHARP_,(100));
});})(vec__37175,y,m,d__$1,d2))
)], null),d__$1,m,y);
});})(d2))
,new cljs.core.Keyword(null,"hh-mm-ss","hh-mm-ss",1000840174),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,":",d2,":",d2], null),thi.ng.strf.core.time_fields.call(null,d));
});})(d2))
], null);
})();
thi.ng.strf.core.format_date = (function thi$ng$strf$core$format_date(var_args){
var G__37179 = arguments.length;
switch (G__37179) {
case 1:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1 = (function (d){
return thi.ng.strf.core.date_formatters.call(null,new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629)).call(null,d);
});

thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,d){
if(cljs.core.fn_QMARK_.call(null,fmt)){
return fmt.call(null,d);
} else {
return thi.ng.strf.core.date_formatters.call(null,fmt).call(null,d);
}
});

thi.ng.strf.core.format_date.cljs$lang$maxFixedArity = 2;

thi.ng.strf.core.now = (function thi$ng$strf$core$now(){
return (new Date());
});
thi.ng.strf.core.timestamp = (function thi$ng$strf$core$timestamp(){
return (new Date()).getTime();
});
thi.ng.strf.core.format_16bit_hex = thi.ng.strf.core.pad_left.call(null,(4),"0");
thi.ng.strf.core.rand_bits = (function thi$ng$strf$core$rand_bits(bits){
return thi.ng.strf.core.int$.call(null,(cljs.core.rand.call(null) * ((1) << bits)));
});
thi.ng.strf.core.rand_bits_hex = (function thi$ng$strf$core$rand_bits_hex(bits){
return thi.ng.strf.core.pad_left.call(null,Math.ceil((bits / (4))),"0").call(null,thi.ng.strf.core.rand_bits.call(null,bits).toString((16)));
});
thi.ng.strf.core.rand_16bits_hex = (function thi$ng$strf$core$rand_16bits_hex(){
return thi.ng.strf.core.format_16bit_hex.call(null,cljs.core.rand_int.call(null,(65536)).toString((16)));
});
thi.ng.strf.core.new_uuid = (function thi$ng$strf$core$new_uuid(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.format_16bit_hex.call(null,((thi.ng.strf.core.rand_bits.call(null,(16)) & (4095)) | (16384)).toString((16)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.format_16bit_hex.call(null,((thi.ng.strf.core.rand_bits.call(null,(16)) & (16383)) | (32768)).toString((16)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex.call(null))].join('');
});
thi.ng.strf.core.html_entities = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
thi.ng.strf.core.as_str = (function thi$ng$strf$core$as_str(x){
if((((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))){
return cljs.core.name.call(null,x);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}
});
thi.ng.strf.core.escape_html = (function thi$ng$strf$core$escape_html(x){
return clojure.string.escape.call(null,thi.ng.strf.core.as_str.call(null,x),thi.ng.strf.core.html_entities);
});

//# sourceMappingURL=core.js.map?rel=1535274424318
