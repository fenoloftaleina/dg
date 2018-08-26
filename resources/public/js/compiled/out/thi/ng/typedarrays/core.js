// Compiled by ClojureScript 1.10.238 {}
goog.provide('thi.ng.typedarrays.core');
goog.require('cljs.core');
/**
 * Returns true if JS runtime supports typed arrays
 */
thi.ng.typedarrays.core.typed_arrays_supported_QMARK_ = (function thi$ng$typedarrays$core$typed_arrays_supported_QMARK_(){
return !(((window["ArrayBuffer"]) == null));
});
thi.ng.typedarrays.core.array_types = cljs.core.PersistentHashMap.fromArrays(["Float64Array","Uint8Array","Int8Array","Uint8ClampedArray","Uint16Array","Int16Array","Uint32Array","Float32Array","Int32Array"],[new cljs.core.Keyword(null,"float64","float64",1881838306),new cljs.core.Keyword(null,"uint8","uint8",956521151),new cljs.core.Keyword(null,"int8","int8",-1834023920),new cljs.core.Keyword(null,"uint8-clamped","uint8-clamped",1439331936),new cljs.core.Keyword(null,"uint16","uint16",-588869202),new cljs.core.Keyword(null,"int16","int16",-188764863),new cljs.core.Keyword(null,"uint32","uint32",-418789486),new cljs.core.Keyword(null,"float32","float32",-2119815775),new cljs.core.Keyword(null,"int32","int32",1718804896)]);
/**
 * Returns truthy value if the given arg is a typed array instance
 */
thi.ng.typedarrays.core.typed_array_QMARK_ = (function thi$ng$typedarrays$core$typed_array_QMARK_(x){
if(cljs.core._EQ_.call(null,"object",goog.typeOf(x))){
if(typeof x.BYTES_PER_ELEMENT === 'number'){
return x.buffer;
} else {
return null;
}
} else {
return null;
}
});
thi.ng.typedarrays.core.array_type = (function thi$ng$typedarrays$core$array_type(x){
if(cljs.core.array_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"array","array",-2080713842);
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,x))){
return cljs.core.get.call(null,thi.ng.typedarrays.core.array_types,cljs.core.first.call(null,cljs.core.re_find.call(null,/((Uint|Int|Float)\d+(Clamped)?Array)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.constructor)].join(''))));
} else {
return null;
}
}
});
/**
 * Creates a native Int8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int8 = (function thi$ng$typedarrays$core$int8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int8Array(len));
var i_37081 = (0);
var coll_37082 = size_or_coll;
while(true){
if((i_37081 < len)){
(buf[i_37081] = cljs.core.first.call(null,coll_37082));

var G__37083 = (i_37081 + (1));
var G__37084 = cljs.core.next.call(null,coll_37082);
i_37081 = G__37083;
coll_37082 = G__37084;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8 = (function thi$ng$typedarrays$core$uint8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8Array(len));
var i_37085 = (0);
var coll_37086 = size_or_coll;
while(true){
if((i_37085 < len)){
(buf[i_37085] = cljs.core.first.call(null,coll_37086));

var G__37087 = (i_37085 + (1));
var G__37088 = cljs.core.next.call(null,coll_37086);
i_37085 = G__37087;
coll_37086 = G__37088;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint8ClampedArray of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8_clamped = (function thi$ng$typedarrays$core$uint8_clamped(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8ClampedArray(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8ClampedArray(len));
var i_37089 = (0);
var coll_37090 = size_or_coll;
while(true){
if((i_37089 < len)){
(buf[i_37089] = cljs.core.first.call(null,coll_37090));

var G__37091 = (i_37089 + (1));
var G__37092 = cljs.core.next.call(null,coll_37090);
i_37089 = G__37091;
coll_37090 = G__37092;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Int16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int16 = (function thi$ng$typedarrays$core$int16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int16Array(len));
var i_37093 = (0);
var coll_37094 = size_or_coll;
while(true){
if((i_37093 < len)){
(buf[i_37093] = cljs.core.first.call(null,coll_37094));

var G__37095 = (i_37093 + (1));
var G__37096 = cljs.core.next.call(null,coll_37094);
i_37093 = G__37095;
coll_37094 = G__37096;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint16 = (function thi$ng$typedarrays$core$uint16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint16Array(len));
var i_37097 = (0);
var coll_37098 = size_or_coll;
while(true){
if((i_37097 < len)){
(buf[i_37097] = cljs.core.first.call(null,coll_37098));

var G__37099 = (i_37097 + (1));
var G__37100 = cljs.core.next.call(null,coll_37098);
i_37097 = G__37099;
coll_37098 = G__37100;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Int32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int32 = (function thi$ng$typedarrays$core$int32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int32Array(len));
var i_37101 = (0);
var coll_37102 = size_or_coll;
while(true){
if((i_37101 < len)){
(buf[i_37101] = cljs.core.first.call(null,coll_37102));

var G__37103 = (i_37101 + (1));
var G__37104 = cljs.core.next.call(null,coll_37102);
i_37101 = G__37103;
coll_37102 = G__37104;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint32 = (function thi$ng$typedarrays$core$uint32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint32Array(len));
var i_37105 = (0);
var coll_37106 = size_or_coll;
while(true){
if((i_37105 < len)){
(buf[i_37105] = cljs.core.first.call(null,coll_37106));

var G__37107 = (i_37105 + (1));
var G__37108 = cljs.core.next.call(null,coll_37106);
i_37105 = G__37107;
coll_37106 = G__37108;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Float32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float32 = (function thi$ng$typedarrays$core$float32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float32Array(len));
var i_37109 = (0);
var coll_37110 = size_or_coll;
while(true){
if((i_37109 < len)){
(buf[i_37109] = cljs.core.first.call(null,coll_37110));

var G__37111 = (i_37109 + (1));
var G__37112 = cljs.core.next.call(null,coll_37110);
i_37109 = G__37111;
coll_37110 = G__37112;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Float64Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float64 = (function thi$ng$typedarrays$core$float64(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float64Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float64Array(len));
var i_37113 = (0);
var coll_37114 = size_or_coll;
while(true){
if((i_37113 < len)){
(buf[i_37113] = cljs.core.first.call(null,coll_37114));

var G__37115 = (i_37113 + (1));
var G__37116 = cljs.core.next.call(null,coll_37114);
i_37113 = G__37115;
coll_37114 = G__37116;
continue;
} else {
}
break;
}

return buf;

}
}
});

//# sourceMappingURL=core.js.map?rel=1535274424218
