// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27053 = arguments.length;
switch (G__27053) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27054 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27054 = (function (f,blockable,meta27055){
this.f = f;
this.blockable = blockable;
this.meta27055 = meta27055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27056,meta27055__$1){
var self__ = this;
var _27056__$1 = this;
return (new cljs.core.async.t_cljs$core$async27054(self__.f,self__.blockable,meta27055__$1));
});

cljs.core.async.t_cljs$core$async27054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27056){
var self__ = this;
var _27056__$1 = this;
return self__.meta27055;
});

cljs.core.async.t_cljs$core$async27054.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27054.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27054.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27055","meta27055",-1318941565,null)], null);
});

cljs.core.async.t_cljs$core$async27054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27054";

cljs.core.async.t_cljs$core$async27054.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27054");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27054.
 */
cljs.core.async.__GT_t_cljs$core$async27054 = (function cljs$core$async$__GT_t_cljs$core$async27054(f__$1,blockable__$1,meta27055){
return (new cljs.core.async.t_cljs$core$async27054(f__$1,blockable__$1,meta27055));
});

}

return (new cljs.core.async.t_cljs$core$async27054(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27060 = arguments.length;
switch (G__27060) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27063 = arguments.length;
switch (G__27063) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27066 = arguments.length;
switch (G__27066) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27068 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27068);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27068,ret){
return (function (){
return fn1.call(null,val_27068);
});})(val_27068,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27070 = arguments.length;
switch (G__27070) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___27072 = n;
var x_27073 = (0);
while(true){
if((x_27073 < n__4376__auto___27072)){
(a[x_27073] = (0));

var G__27074 = (x_27073 + (1));
x_27073 = G__27074;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27075 = (i + (1));
i = G__27075;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27076 = (function (flag,meta27077){
this.flag = flag;
this.meta27077 = meta27077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27078,meta27077__$1){
var self__ = this;
var _27078__$1 = this;
return (new cljs.core.async.t_cljs$core$async27076(self__.flag,meta27077__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27078){
var self__ = this;
var _27078__$1 = this;
return self__.meta27077;
});})(flag))
;

cljs.core.async.t_cljs$core$async27076.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27076.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27076.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27077","meta27077",-982273936,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27076";

cljs.core.async.t_cljs$core$async27076.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27076");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27076.
 */
cljs.core.async.__GT_t_cljs$core$async27076 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27076(flag__$1,meta27077){
return (new cljs.core.async.t_cljs$core$async27076(flag__$1,meta27077));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27076(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27079 = (function (flag,cb,meta27080){
this.flag = flag;
this.cb = cb;
this.meta27080 = meta27080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27081,meta27080__$1){
var self__ = this;
var _27081__$1 = this;
return (new cljs.core.async.t_cljs$core$async27079(self__.flag,self__.cb,meta27080__$1));
});

cljs.core.async.t_cljs$core$async27079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27081){
var self__ = this;
var _27081__$1 = this;
return self__.meta27080;
});

cljs.core.async.t_cljs$core$async27079.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27080","meta27080",205971730,null)], null);
});

cljs.core.async.t_cljs$core$async27079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27079";

cljs.core.async.t_cljs$core$async27079.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27079");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27079.
 */
cljs.core.async.__GT_t_cljs$core$async27079 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27079(flag__$1,cb__$1,meta27080){
return (new cljs.core.async.t_cljs$core$async27079(flag__$1,cb__$1,meta27080));
});

}

return (new cljs.core.async.t_cljs$core$async27079(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27082_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27082_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27083_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27083_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27084 = (i + (1));
i = G__27084;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27090 = arguments.length;
var i__4500__auto___27091 = (0);
while(true){
if((i__4500__auto___27091 < len__4499__auto___27090)){
args__4502__auto__.push((arguments[i__4500__auto___27091]));

var G__27092 = (i__4500__auto___27091 + (1));
i__4500__auto___27091 = G__27092;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27087){
var map__27088 = p__27087;
var map__27088__$1 = ((((!((map__27088 == null)))?(((((map__27088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27088):map__27088);
var opts = map__27088__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27085){
var G__27086 = cljs.core.first.call(null,seq27085);
var seq27085__$1 = cljs.core.next.call(null,seq27085);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27086,seq27085__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27094 = arguments.length;
switch (G__27094) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26993__auto___27140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___27140){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___27140){
return (function (state_27118){
var state_val_27119 = (state_27118[(1)]);
if((state_val_27119 === (7))){
var inst_27114 = (state_27118[(2)]);
var state_27118__$1 = state_27118;
var statearr_27120_27141 = state_27118__$1;
(statearr_27120_27141[(2)] = inst_27114);

(statearr_27120_27141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (1))){
var state_27118__$1 = state_27118;
var statearr_27121_27142 = state_27118__$1;
(statearr_27121_27142[(2)] = null);

(statearr_27121_27142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (4))){
var inst_27097 = (state_27118[(7)]);
var inst_27097__$1 = (state_27118[(2)]);
var inst_27098 = (inst_27097__$1 == null);
var state_27118__$1 = (function (){var statearr_27122 = state_27118;
(statearr_27122[(7)] = inst_27097__$1);

return statearr_27122;
})();
if(cljs.core.truth_(inst_27098)){
var statearr_27123_27143 = state_27118__$1;
(statearr_27123_27143[(1)] = (5));

} else {
var statearr_27124_27144 = state_27118__$1;
(statearr_27124_27144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (13))){
var state_27118__$1 = state_27118;
var statearr_27125_27145 = state_27118__$1;
(statearr_27125_27145[(2)] = null);

(statearr_27125_27145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (6))){
var inst_27097 = (state_27118[(7)]);
var state_27118__$1 = state_27118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27118__$1,(11),to,inst_27097);
} else {
if((state_val_27119 === (3))){
var inst_27116 = (state_27118[(2)]);
var state_27118__$1 = state_27118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27118__$1,inst_27116);
} else {
if((state_val_27119 === (12))){
var state_27118__$1 = state_27118;
var statearr_27126_27146 = state_27118__$1;
(statearr_27126_27146[(2)] = null);

(statearr_27126_27146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (2))){
var state_27118__$1 = state_27118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27118__$1,(4),from);
} else {
if((state_val_27119 === (11))){
var inst_27107 = (state_27118[(2)]);
var state_27118__$1 = state_27118;
if(cljs.core.truth_(inst_27107)){
var statearr_27127_27147 = state_27118__$1;
(statearr_27127_27147[(1)] = (12));

} else {
var statearr_27128_27148 = state_27118__$1;
(statearr_27128_27148[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (9))){
var state_27118__$1 = state_27118;
var statearr_27129_27149 = state_27118__$1;
(statearr_27129_27149[(2)] = null);

(statearr_27129_27149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (5))){
var state_27118__$1 = state_27118;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27130_27150 = state_27118__$1;
(statearr_27130_27150[(1)] = (8));

} else {
var statearr_27131_27151 = state_27118__$1;
(statearr_27131_27151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (14))){
var inst_27112 = (state_27118[(2)]);
var state_27118__$1 = state_27118;
var statearr_27132_27152 = state_27118__$1;
(statearr_27132_27152[(2)] = inst_27112);

(statearr_27132_27152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (10))){
var inst_27104 = (state_27118[(2)]);
var state_27118__$1 = state_27118;
var statearr_27133_27153 = state_27118__$1;
(statearr_27133_27153[(2)] = inst_27104);

(statearr_27133_27153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (8))){
var inst_27101 = cljs.core.async.close_BANG_.call(null,to);
var state_27118__$1 = state_27118;
var statearr_27134_27154 = state_27118__$1;
(statearr_27134_27154[(2)] = inst_27101);

(statearr_27134_27154[(1)] = (10));


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
});})(c__26993__auto___27140))
;
return ((function (switch__26903__auto__,c__26993__auto___27140){
return (function() {
var cljs$core$async$state_machine__26904__auto__ = null;
var cljs$core$async$state_machine__26904__auto____0 = (function (){
var statearr_27135 = [null,null,null,null,null,null,null,null];
(statearr_27135[(0)] = cljs$core$async$state_machine__26904__auto__);

(statearr_27135[(1)] = (1));

return statearr_27135;
});
var cljs$core$async$state_machine__26904__auto____1 = (function (state_27118){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_27118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e27136){if((e27136 instanceof Object)){
var ex__26907__auto__ = e27136;
var statearr_27137_27155 = state_27118;
(statearr_27137_27155[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27156 = state_27118;
state_27118 = G__27156;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$state_machine__26904__auto__ = function(state_27118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26904__auto____1.call(this,state_27118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26904__auto____0;
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26904__auto____1;
return cljs$core$async$state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___27140))
})();
var state__26995__auto__ = (function (){var statearr_27138 = f__26994__auto__.call(null);
(statearr_27138[(6)] = c__26993__auto___27140);

return statearr_27138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___27140))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27157){
var vec__27158 = p__27157;
var v = cljs.core.nth.call(null,vec__27158,(0),null);
var p = cljs.core.nth.call(null,vec__27158,(1),null);
var job = vec__27158;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26993__auto___27329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___27329,res,vec__27158,v,p,job,jobs,results){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___27329,res,vec__27158,v,p,job,jobs,results){
return (function (state_27165){
var state_val_27166 = (state_27165[(1)]);
if((state_val_27166 === (1))){
var state_27165__$1 = state_27165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27165__$1,(2),res,v);
} else {
if((state_val_27166 === (2))){
var inst_27162 = (state_27165[(2)]);
var inst_27163 = cljs.core.async.close_BANG_.call(null,res);
var state_27165__$1 = (function (){var statearr_27167 = state_27165;
(statearr_27167[(7)] = inst_27162);

return statearr_27167;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27165__$1,inst_27163);
} else {
return null;
}
}
});})(c__26993__auto___27329,res,vec__27158,v,p,job,jobs,results))
;
return ((function (switch__26903__auto__,c__26993__auto___27329,res,vec__27158,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0 = (function (){
var statearr_27168 = [null,null,null,null,null,null,null,null];
(statearr_27168[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__);

(statearr_27168[(1)] = (1));

return statearr_27168;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1 = (function (state_27165){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_27165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e27169){if((e27169 instanceof Object)){
var ex__26907__auto__ = e27169;
var statearr_27170_27330 = state_27165;
(statearr_27170_27330[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27331 = state_27165;
state_27165 = G__27331;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__ = function(state_27165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1.call(this,state_27165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___27329,res,vec__27158,v,p,job,jobs,results))
})();
var state__26995__auto__ = (function (){var statearr_27171 = f__26994__auto__.call(null);
(statearr_27171[(6)] = c__26993__auto___27329);

return statearr_27171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___27329,res,vec__27158,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27172){
var vec__27173 = p__27172;
var v = cljs.core.nth.call(null,vec__27173,(0),null);
var p = cljs.core.nth.call(null,vec__27173,(1),null);
var job = vec__27173;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___27332 = n;
var __27333 = (0);
while(true){
if((__27333 < n__4376__auto___27332)){
var G__27176_27334 = type;
var G__27176_27335__$1 = (((G__27176_27334 instanceof cljs.core.Keyword))?G__27176_27334.fqn:null);
switch (G__27176_27335__$1) {
case "compute":
var c__26993__auto___27337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27333,c__26993__auto___27337,G__27176_27334,G__27176_27335__$1,n__4376__auto___27332,jobs,results,process,async){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (__27333,c__26993__auto___27337,G__27176_27334,G__27176_27335__$1,n__4376__auto___27332,jobs,results,process,async){
return (function (state_27189){
var state_val_27190 = (state_27189[(1)]);
if((state_val_27190 === (1))){
var state_27189__$1 = state_27189;
var statearr_27191_27338 = state_27189__$1;
(statearr_27191_27338[(2)] = null);

(statearr_27191_27338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (2))){
var state_27189__$1 = state_27189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27189__$1,(4),jobs);
} else {
if((state_val_27190 === (3))){
var inst_27187 = (state_27189[(2)]);
var state_27189__$1 = state_27189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27189__$1,inst_27187);
} else {
if((state_val_27190 === (4))){
var inst_27179 = (state_27189[(2)]);
var inst_27180 = process.call(null,inst_27179);
var state_27189__$1 = state_27189;
if(cljs.core.truth_(inst_27180)){
var statearr_27192_27339 = state_27189__$1;
(statearr_27192_27339[(1)] = (5));

} else {
var statearr_27193_27340 = state_27189__$1;
(statearr_27193_27340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (5))){
var state_27189__$1 = state_27189;
var statearr_27194_27341 = state_27189__$1;
(statearr_27194_27341[(2)] = null);

(statearr_27194_27341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (6))){
var state_27189__$1 = state_27189;
var statearr_27195_27342 = state_27189__$1;
(statearr_27195_27342[(2)] = null);

(statearr_27195_27342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (7))){
var inst_27185 = (state_27189[(2)]);
var state_27189__$1 = state_27189;
var statearr_27196_27343 = state_27189__$1;
(statearr_27196_27343[(2)] = inst_27185);

(statearr_27196_27343[(1)] = (3));


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
});})(__27333,c__26993__auto___27337,G__27176_27334,G__27176_27335__$1,n__4376__auto___27332,jobs,results,process,async))
;
return ((function (__27333,switch__26903__auto__,c__26993__auto___27337,G__27176_27334,G__27176_27335__$1,n__4376__auto___27332,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0 = (function (){
var statearr_27197 = [null,null,null,null,null,null,null];
(statearr_27197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__);

(statearr_27197[(1)] = (1));

return statearr_27197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1 = (function (state_27189){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_27189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e27198){if((e27198 instanceof Object)){
var ex__26907__auto__ = e27198;
var statearr_27199_27344 = state_27189;
(statearr_27199_27344[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27345 = state_27189;
state_27189 = G__27345;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__ = function(state_27189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1.call(this,state_27189);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__;
})()
;})(__27333,switch__26903__auto__,c__26993__auto___27337,G__27176_27334,G__27176_27335__$1,n__4376__auto___27332,jobs,results,process,async))
})();
var state__26995__auto__ = (function (){var statearr_27200 = f__26994__auto__.call(null);
(statearr_27200[(6)] = c__26993__auto___27337);

return statearr_27200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(__27333,c__26993__auto___27337,G__27176_27334,G__27176_27335__$1,n__4376__auto___27332,jobs,results,process,async))
);


break;
case "async":
var c__26993__auto___27346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27333,c__26993__auto___27346,G__27176_27334,G__27176_27335__$1,n__4376__auto___27332,jobs,results,process,async){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (__27333,c__26993__auto___27346,G__27176_27334,G__27176_27335__$1,n__4376__auto___27332,jobs,results,process,async){
return (function (state_27213){
var state_val_27214 = (state_27213[(1)]);
if((state_val_27214 === (1))){
var state_27213__$1 = state_27213;
var statearr_27215_27347 = state_27213__$1;
(statearr_27215_27347[(2)] = null);

(statearr_27215_27347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (2))){
var state_27213__$1 = state_27213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27213__$1,(4),jobs);
} else {
if((state_val_27214 === (3))){
var inst_27211 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27213__$1,inst_27211);
} else {
if((state_val_27214 === (4))){
var inst_27203 = (state_27213[(2)]);
var inst_27204 = async.call(null,inst_27203);
var state_27213__$1 = state_27213;
if(cljs.core.truth_(inst_27204)){
var statearr_27216_27348 = state_27213__$1;
(statearr_27216_27348[(1)] = (5));

} else {
var statearr_27217_27349 = state_27213__$1;
(statearr_27217_27349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (5))){
var state_27213__$1 = state_27213;
var statearr_27218_27350 = state_27213__$1;
(statearr_27218_27350[(2)] = null);

(statearr_27218_27350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (6))){
var state_27213__$1 = state_27213;
var statearr_27219_27351 = state_27213__$1;
(statearr_27219_27351[(2)] = null);

(statearr_27219_27351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (7))){
var inst_27209 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27220_27352 = state_27213__$1;
(statearr_27220_27352[(2)] = inst_27209);

(statearr_27220_27352[(1)] = (3));


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
});})(__27333,c__26993__auto___27346,G__27176_27334,G__27176_27335__$1,n__4376__auto___27332,jobs,results,process,async))
;
return ((function (__27333,switch__26903__auto__,c__26993__auto___27346,G__27176_27334,G__27176_27335__$1,n__4376__auto___27332,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0 = (function (){
var statearr_27221 = [null,null,null,null,null,null,null];
(statearr_27221[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__);

(statearr_27221[(1)] = (1));

return statearr_27221;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1 = (function (state_27213){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_27213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e27222){if((e27222 instanceof Object)){
var ex__26907__auto__ = e27222;
var statearr_27223_27353 = state_27213;
(statearr_27223_27353[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27354 = state_27213;
state_27213 = G__27354;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__ = function(state_27213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1.call(this,state_27213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__;
})()
;})(__27333,switch__26903__auto__,c__26993__auto___27346,G__27176_27334,G__27176_27335__$1,n__4376__auto___27332,jobs,results,process,async))
})();
var state__26995__auto__ = (function (){var statearr_27224 = f__26994__auto__.call(null);
(statearr_27224[(6)] = c__26993__auto___27346);

return statearr_27224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(__27333,c__26993__auto___27346,G__27176_27334,G__27176_27335__$1,n__4376__auto___27332,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27176_27335__$1)].join('')));

}

var G__27355 = (__27333 + (1));
__27333 = G__27355;
continue;
} else {
}
break;
}

var c__26993__auto___27356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___27356,jobs,results,process,async){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___27356,jobs,results,process,async){
return (function (state_27246){
var state_val_27247 = (state_27246[(1)]);
if((state_val_27247 === (1))){
var state_27246__$1 = state_27246;
var statearr_27248_27357 = state_27246__$1;
(statearr_27248_27357[(2)] = null);

(statearr_27248_27357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27247 === (2))){
var state_27246__$1 = state_27246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27246__$1,(4),from);
} else {
if((state_val_27247 === (3))){
var inst_27244 = (state_27246[(2)]);
var state_27246__$1 = state_27246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27246__$1,inst_27244);
} else {
if((state_val_27247 === (4))){
var inst_27227 = (state_27246[(7)]);
var inst_27227__$1 = (state_27246[(2)]);
var inst_27228 = (inst_27227__$1 == null);
var state_27246__$1 = (function (){var statearr_27249 = state_27246;
(statearr_27249[(7)] = inst_27227__$1);

return statearr_27249;
})();
if(cljs.core.truth_(inst_27228)){
var statearr_27250_27358 = state_27246__$1;
(statearr_27250_27358[(1)] = (5));

} else {
var statearr_27251_27359 = state_27246__$1;
(statearr_27251_27359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27247 === (5))){
var inst_27230 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27246__$1 = state_27246;
var statearr_27252_27360 = state_27246__$1;
(statearr_27252_27360[(2)] = inst_27230);

(statearr_27252_27360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27247 === (6))){
var inst_27227 = (state_27246[(7)]);
var inst_27232 = (state_27246[(8)]);
var inst_27232__$1 = cljs.core.async.chan.call(null,(1));
var inst_27233 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27234 = [inst_27227,inst_27232__$1];
var inst_27235 = (new cljs.core.PersistentVector(null,2,(5),inst_27233,inst_27234,null));
var state_27246__$1 = (function (){var statearr_27253 = state_27246;
(statearr_27253[(8)] = inst_27232__$1);

return statearr_27253;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27246__$1,(8),jobs,inst_27235);
} else {
if((state_val_27247 === (7))){
var inst_27242 = (state_27246[(2)]);
var state_27246__$1 = state_27246;
var statearr_27254_27361 = state_27246__$1;
(statearr_27254_27361[(2)] = inst_27242);

(statearr_27254_27361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27247 === (8))){
var inst_27232 = (state_27246[(8)]);
var inst_27237 = (state_27246[(2)]);
var state_27246__$1 = (function (){var statearr_27255 = state_27246;
(statearr_27255[(9)] = inst_27237);

return statearr_27255;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27246__$1,(9),results,inst_27232);
} else {
if((state_val_27247 === (9))){
var inst_27239 = (state_27246[(2)]);
var state_27246__$1 = (function (){var statearr_27256 = state_27246;
(statearr_27256[(10)] = inst_27239);

return statearr_27256;
})();
var statearr_27257_27362 = state_27246__$1;
(statearr_27257_27362[(2)] = null);

(statearr_27257_27362[(1)] = (2));


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
});})(c__26993__auto___27356,jobs,results,process,async))
;
return ((function (switch__26903__auto__,c__26993__auto___27356,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0 = (function (){
var statearr_27258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__);

(statearr_27258[(1)] = (1));

return statearr_27258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1 = (function (state_27246){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_27246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e27259){if((e27259 instanceof Object)){
var ex__26907__auto__ = e27259;
var statearr_27260_27363 = state_27246;
(statearr_27260_27363[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27364 = state_27246;
state_27246 = G__27364;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__ = function(state_27246){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1.call(this,state_27246);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___27356,jobs,results,process,async))
})();
var state__26995__auto__ = (function (){var statearr_27261 = f__26994__auto__.call(null);
(statearr_27261[(6)] = c__26993__auto___27356);

return statearr_27261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___27356,jobs,results,process,async))
);


var c__26993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto__,jobs,results,process,async){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto__,jobs,results,process,async){
return (function (state_27299){
var state_val_27300 = (state_27299[(1)]);
if((state_val_27300 === (7))){
var inst_27295 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27301_27365 = state_27299__$1;
(statearr_27301_27365[(2)] = inst_27295);

(statearr_27301_27365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (20))){
var state_27299__$1 = state_27299;
var statearr_27302_27366 = state_27299__$1;
(statearr_27302_27366[(2)] = null);

(statearr_27302_27366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (1))){
var state_27299__$1 = state_27299;
var statearr_27303_27367 = state_27299__$1;
(statearr_27303_27367[(2)] = null);

(statearr_27303_27367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (4))){
var inst_27264 = (state_27299[(7)]);
var inst_27264__$1 = (state_27299[(2)]);
var inst_27265 = (inst_27264__$1 == null);
var state_27299__$1 = (function (){var statearr_27304 = state_27299;
(statearr_27304[(7)] = inst_27264__$1);

return statearr_27304;
})();
if(cljs.core.truth_(inst_27265)){
var statearr_27305_27368 = state_27299__$1;
(statearr_27305_27368[(1)] = (5));

} else {
var statearr_27306_27369 = state_27299__$1;
(statearr_27306_27369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (15))){
var inst_27277 = (state_27299[(8)]);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27299__$1,(18),to,inst_27277);
} else {
if((state_val_27300 === (21))){
var inst_27290 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27307_27370 = state_27299__$1;
(statearr_27307_27370[(2)] = inst_27290);

(statearr_27307_27370[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (13))){
var inst_27292 = (state_27299[(2)]);
var state_27299__$1 = (function (){var statearr_27308 = state_27299;
(statearr_27308[(9)] = inst_27292);

return statearr_27308;
})();
var statearr_27309_27371 = state_27299__$1;
(statearr_27309_27371[(2)] = null);

(statearr_27309_27371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (6))){
var inst_27264 = (state_27299[(7)]);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27299__$1,(11),inst_27264);
} else {
if((state_val_27300 === (17))){
var inst_27285 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
if(cljs.core.truth_(inst_27285)){
var statearr_27310_27372 = state_27299__$1;
(statearr_27310_27372[(1)] = (19));

} else {
var statearr_27311_27373 = state_27299__$1;
(statearr_27311_27373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (3))){
var inst_27297 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27299__$1,inst_27297);
} else {
if((state_val_27300 === (12))){
var inst_27274 = (state_27299[(10)]);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27299__$1,(14),inst_27274);
} else {
if((state_val_27300 === (2))){
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27299__$1,(4),results);
} else {
if((state_val_27300 === (19))){
var state_27299__$1 = state_27299;
var statearr_27312_27374 = state_27299__$1;
(statearr_27312_27374[(2)] = null);

(statearr_27312_27374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (11))){
var inst_27274 = (state_27299[(2)]);
var state_27299__$1 = (function (){var statearr_27313 = state_27299;
(statearr_27313[(10)] = inst_27274);

return statearr_27313;
})();
var statearr_27314_27375 = state_27299__$1;
(statearr_27314_27375[(2)] = null);

(statearr_27314_27375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (9))){
var state_27299__$1 = state_27299;
var statearr_27315_27376 = state_27299__$1;
(statearr_27315_27376[(2)] = null);

(statearr_27315_27376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (5))){
var state_27299__$1 = state_27299;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27316_27377 = state_27299__$1;
(statearr_27316_27377[(1)] = (8));

} else {
var statearr_27317_27378 = state_27299__$1;
(statearr_27317_27378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (14))){
var inst_27277 = (state_27299[(8)]);
var inst_27279 = (state_27299[(11)]);
var inst_27277__$1 = (state_27299[(2)]);
var inst_27278 = (inst_27277__$1 == null);
var inst_27279__$1 = cljs.core.not.call(null,inst_27278);
var state_27299__$1 = (function (){var statearr_27318 = state_27299;
(statearr_27318[(8)] = inst_27277__$1);

(statearr_27318[(11)] = inst_27279__$1);

return statearr_27318;
})();
if(inst_27279__$1){
var statearr_27319_27379 = state_27299__$1;
(statearr_27319_27379[(1)] = (15));

} else {
var statearr_27320_27380 = state_27299__$1;
(statearr_27320_27380[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (16))){
var inst_27279 = (state_27299[(11)]);
var state_27299__$1 = state_27299;
var statearr_27321_27381 = state_27299__$1;
(statearr_27321_27381[(2)] = inst_27279);

(statearr_27321_27381[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (10))){
var inst_27271 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27322_27382 = state_27299__$1;
(statearr_27322_27382[(2)] = inst_27271);

(statearr_27322_27382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (18))){
var inst_27282 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27323_27383 = state_27299__$1;
(statearr_27323_27383[(2)] = inst_27282);

(statearr_27323_27383[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (8))){
var inst_27268 = cljs.core.async.close_BANG_.call(null,to);
var state_27299__$1 = state_27299;
var statearr_27324_27384 = state_27299__$1;
(statearr_27324_27384[(2)] = inst_27268);

(statearr_27324_27384[(1)] = (10));


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
});})(c__26993__auto__,jobs,results,process,async))
;
return ((function (switch__26903__auto__,c__26993__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0 = (function (){
var statearr_27325 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27325[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__);

(statearr_27325[(1)] = (1));

return statearr_27325;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1 = (function (state_27299){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_27299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e27326){if((e27326 instanceof Object)){
var ex__26907__auto__ = e27326;
var statearr_27327_27385 = state_27299;
(statearr_27327_27385[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27386 = state_27299;
state_27299 = G__27386;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__ = function(state_27299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1.call(this,state_27299);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto__,jobs,results,process,async))
})();
var state__26995__auto__ = (function (){var statearr_27328 = f__26994__auto__.call(null);
(statearr_27328[(6)] = c__26993__auto__);

return statearr_27328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto__,jobs,results,process,async))
);

return c__26993__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27388 = arguments.length;
switch (G__27388) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27391 = arguments.length;
switch (G__27391) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27394 = arguments.length;
switch (G__27394) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26993__auto___27443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___27443,tc,fc){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___27443,tc,fc){
return (function (state_27420){
var state_val_27421 = (state_27420[(1)]);
if((state_val_27421 === (7))){
var inst_27416 = (state_27420[(2)]);
var state_27420__$1 = state_27420;
var statearr_27422_27444 = state_27420__$1;
(statearr_27422_27444[(2)] = inst_27416);

(statearr_27422_27444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (1))){
var state_27420__$1 = state_27420;
var statearr_27423_27445 = state_27420__$1;
(statearr_27423_27445[(2)] = null);

(statearr_27423_27445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (4))){
var inst_27397 = (state_27420[(7)]);
var inst_27397__$1 = (state_27420[(2)]);
var inst_27398 = (inst_27397__$1 == null);
var state_27420__$1 = (function (){var statearr_27424 = state_27420;
(statearr_27424[(7)] = inst_27397__$1);

return statearr_27424;
})();
if(cljs.core.truth_(inst_27398)){
var statearr_27425_27446 = state_27420__$1;
(statearr_27425_27446[(1)] = (5));

} else {
var statearr_27426_27447 = state_27420__$1;
(statearr_27426_27447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (13))){
var state_27420__$1 = state_27420;
var statearr_27427_27448 = state_27420__$1;
(statearr_27427_27448[(2)] = null);

(statearr_27427_27448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (6))){
var inst_27397 = (state_27420[(7)]);
var inst_27403 = p.call(null,inst_27397);
var state_27420__$1 = state_27420;
if(cljs.core.truth_(inst_27403)){
var statearr_27428_27449 = state_27420__$1;
(statearr_27428_27449[(1)] = (9));

} else {
var statearr_27429_27450 = state_27420__$1;
(statearr_27429_27450[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (3))){
var inst_27418 = (state_27420[(2)]);
var state_27420__$1 = state_27420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27420__$1,inst_27418);
} else {
if((state_val_27421 === (12))){
var state_27420__$1 = state_27420;
var statearr_27430_27451 = state_27420__$1;
(statearr_27430_27451[(2)] = null);

(statearr_27430_27451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (2))){
var state_27420__$1 = state_27420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27420__$1,(4),ch);
} else {
if((state_val_27421 === (11))){
var inst_27397 = (state_27420[(7)]);
var inst_27407 = (state_27420[(2)]);
var state_27420__$1 = state_27420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27420__$1,(8),inst_27407,inst_27397);
} else {
if((state_val_27421 === (9))){
var state_27420__$1 = state_27420;
var statearr_27431_27452 = state_27420__$1;
(statearr_27431_27452[(2)] = tc);

(statearr_27431_27452[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (5))){
var inst_27400 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27401 = cljs.core.async.close_BANG_.call(null,fc);
var state_27420__$1 = (function (){var statearr_27432 = state_27420;
(statearr_27432[(8)] = inst_27400);

return statearr_27432;
})();
var statearr_27433_27453 = state_27420__$1;
(statearr_27433_27453[(2)] = inst_27401);

(statearr_27433_27453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (14))){
var inst_27414 = (state_27420[(2)]);
var state_27420__$1 = state_27420;
var statearr_27434_27454 = state_27420__$1;
(statearr_27434_27454[(2)] = inst_27414);

(statearr_27434_27454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (10))){
var state_27420__$1 = state_27420;
var statearr_27435_27455 = state_27420__$1;
(statearr_27435_27455[(2)] = fc);

(statearr_27435_27455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (8))){
var inst_27409 = (state_27420[(2)]);
var state_27420__$1 = state_27420;
if(cljs.core.truth_(inst_27409)){
var statearr_27436_27456 = state_27420__$1;
(statearr_27436_27456[(1)] = (12));

} else {
var statearr_27437_27457 = state_27420__$1;
(statearr_27437_27457[(1)] = (13));

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
});})(c__26993__auto___27443,tc,fc))
;
return ((function (switch__26903__auto__,c__26993__auto___27443,tc,fc){
return (function() {
var cljs$core$async$state_machine__26904__auto__ = null;
var cljs$core$async$state_machine__26904__auto____0 = (function (){
var statearr_27438 = [null,null,null,null,null,null,null,null,null];
(statearr_27438[(0)] = cljs$core$async$state_machine__26904__auto__);

(statearr_27438[(1)] = (1));

return statearr_27438;
});
var cljs$core$async$state_machine__26904__auto____1 = (function (state_27420){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_27420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e27439){if((e27439 instanceof Object)){
var ex__26907__auto__ = e27439;
var statearr_27440_27458 = state_27420;
(statearr_27440_27458[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27459 = state_27420;
state_27420 = G__27459;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$state_machine__26904__auto__ = function(state_27420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26904__auto____1.call(this,state_27420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26904__auto____0;
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26904__auto____1;
return cljs$core$async$state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___27443,tc,fc))
})();
var state__26995__auto__ = (function (){var statearr_27441 = f__26994__auto__.call(null);
(statearr_27441[(6)] = c__26993__auto___27443);

return statearr_27441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___27443,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto__){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto__){
return (function (state_27480){
var state_val_27481 = (state_27480[(1)]);
if((state_val_27481 === (7))){
var inst_27476 = (state_27480[(2)]);
var state_27480__$1 = state_27480;
var statearr_27482_27500 = state_27480__$1;
(statearr_27482_27500[(2)] = inst_27476);

(statearr_27482_27500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (1))){
var inst_27460 = init;
var state_27480__$1 = (function (){var statearr_27483 = state_27480;
(statearr_27483[(7)] = inst_27460);

return statearr_27483;
})();
var statearr_27484_27501 = state_27480__$1;
(statearr_27484_27501[(2)] = null);

(statearr_27484_27501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (4))){
var inst_27463 = (state_27480[(8)]);
var inst_27463__$1 = (state_27480[(2)]);
var inst_27464 = (inst_27463__$1 == null);
var state_27480__$1 = (function (){var statearr_27485 = state_27480;
(statearr_27485[(8)] = inst_27463__$1);

return statearr_27485;
})();
if(cljs.core.truth_(inst_27464)){
var statearr_27486_27502 = state_27480__$1;
(statearr_27486_27502[(1)] = (5));

} else {
var statearr_27487_27503 = state_27480__$1;
(statearr_27487_27503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (6))){
var inst_27467 = (state_27480[(9)]);
var inst_27463 = (state_27480[(8)]);
var inst_27460 = (state_27480[(7)]);
var inst_27467__$1 = f.call(null,inst_27460,inst_27463);
var inst_27468 = cljs.core.reduced_QMARK_.call(null,inst_27467__$1);
var state_27480__$1 = (function (){var statearr_27488 = state_27480;
(statearr_27488[(9)] = inst_27467__$1);

return statearr_27488;
})();
if(inst_27468){
var statearr_27489_27504 = state_27480__$1;
(statearr_27489_27504[(1)] = (8));

} else {
var statearr_27490_27505 = state_27480__$1;
(statearr_27490_27505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (3))){
var inst_27478 = (state_27480[(2)]);
var state_27480__$1 = state_27480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27480__$1,inst_27478);
} else {
if((state_val_27481 === (2))){
var state_27480__$1 = state_27480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27480__$1,(4),ch);
} else {
if((state_val_27481 === (9))){
var inst_27467 = (state_27480[(9)]);
var inst_27460 = inst_27467;
var state_27480__$1 = (function (){var statearr_27491 = state_27480;
(statearr_27491[(7)] = inst_27460);

return statearr_27491;
})();
var statearr_27492_27506 = state_27480__$1;
(statearr_27492_27506[(2)] = null);

(statearr_27492_27506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (5))){
var inst_27460 = (state_27480[(7)]);
var state_27480__$1 = state_27480;
var statearr_27493_27507 = state_27480__$1;
(statearr_27493_27507[(2)] = inst_27460);

(statearr_27493_27507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (10))){
var inst_27474 = (state_27480[(2)]);
var state_27480__$1 = state_27480;
var statearr_27494_27508 = state_27480__$1;
(statearr_27494_27508[(2)] = inst_27474);

(statearr_27494_27508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (8))){
var inst_27467 = (state_27480[(9)]);
var inst_27470 = cljs.core.deref.call(null,inst_27467);
var state_27480__$1 = state_27480;
var statearr_27495_27509 = state_27480__$1;
(statearr_27495_27509[(2)] = inst_27470);

(statearr_27495_27509[(1)] = (10));


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
});})(c__26993__auto__))
;
return ((function (switch__26903__auto__,c__26993__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26904__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26904__auto____0 = (function (){
var statearr_27496 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27496[(0)] = cljs$core$async$reduce_$_state_machine__26904__auto__);

(statearr_27496[(1)] = (1));

return statearr_27496;
});
var cljs$core$async$reduce_$_state_machine__26904__auto____1 = (function (state_27480){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_27480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e27497){if((e27497 instanceof Object)){
var ex__26907__auto__ = e27497;
var statearr_27498_27510 = state_27480;
(statearr_27498_27510[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27511 = state_27480;
state_27480 = G__27511;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26904__auto__ = function(state_27480){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26904__auto____1.call(this,state_27480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26904__auto____0;
cljs$core$async$reduce_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26904__auto____1;
return cljs$core$async$reduce_$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto__))
})();
var state__26995__auto__ = (function (){var statearr_27499 = f__26994__auto__.call(null);
(statearr_27499[(6)] = c__26993__auto__);

return statearr_27499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto__))
);

return c__26993__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto__,f__$1){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto__,f__$1){
return (function (state_27517){
var state_val_27518 = (state_27517[(1)]);
if((state_val_27518 === (1))){
var inst_27512 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27517__$1 = state_27517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27517__$1,(2),inst_27512);
} else {
if((state_val_27518 === (2))){
var inst_27514 = (state_27517[(2)]);
var inst_27515 = f__$1.call(null,inst_27514);
var state_27517__$1 = state_27517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27517__$1,inst_27515);
} else {
return null;
}
}
});})(c__26993__auto__,f__$1))
;
return ((function (switch__26903__auto__,c__26993__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26904__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26904__auto____0 = (function (){
var statearr_27519 = [null,null,null,null,null,null,null];
(statearr_27519[(0)] = cljs$core$async$transduce_$_state_machine__26904__auto__);

(statearr_27519[(1)] = (1));

return statearr_27519;
});
var cljs$core$async$transduce_$_state_machine__26904__auto____1 = (function (state_27517){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_27517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e27520){if((e27520 instanceof Object)){
var ex__26907__auto__ = e27520;
var statearr_27521_27523 = state_27517;
(statearr_27521_27523[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27524 = state_27517;
state_27517 = G__27524;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26904__auto__ = function(state_27517){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26904__auto____1.call(this,state_27517);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26904__auto____0;
cljs$core$async$transduce_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26904__auto____1;
return cljs$core$async$transduce_$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto__,f__$1))
})();
var state__26995__auto__ = (function (){var statearr_27522 = f__26994__auto__.call(null);
(statearr_27522[(6)] = c__26993__auto__);

return statearr_27522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto__,f__$1))
);

return c__26993__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27526 = arguments.length;
switch (G__27526) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto__){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto__){
return (function (state_27551){
var state_val_27552 = (state_27551[(1)]);
if((state_val_27552 === (7))){
var inst_27533 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27553_27574 = state_27551__$1;
(statearr_27553_27574[(2)] = inst_27533);

(statearr_27553_27574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (1))){
var inst_27527 = cljs.core.seq.call(null,coll);
var inst_27528 = inst_27527;
var state_27551__$1 = (function (){var statearr_27554 = state_27551;
(statearr_27554[(7)] = inst_27528);

return statearr_27554;
})();
var statearr_27555_27575 = state_27551__$1;
(statearr_27555_27575[(2)] = null);

(statearr_27555_27575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (4))){
var inst_27528 = (state_27551[(7)]);
var inst_27531 = cljs.core.first.call(null,inst_27528);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27551__$1,(7),ch,inst_27531);
} else {
if((state_val_27552 === (13))){
var inst_27545 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27556_27576 = state_27551__$1;
(statearr_27556_27576[(2)] = inst_27545);

(statearr_27556_27576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (6))){
var inst_27536 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
if(cljs.core.truth_(inst_27536)){
var statearr_27557_27577 = state_27551__$1;
(statearr_27557_27577[(1)] = (8));

} else {
var statearr_27558_27578 = state_27551__$1;
(statearr_27558_27578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (3))){
var inst_27549 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27551__$1,inst_27549);
} else {
if((state_val_27552 === (12))){
var state_27551__$1 = state_27551;
var statearr_27559_27579 = state_27551__$1;
(statearr_27559_27579[(2)] = null);

(statearr_27559_27579[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (2))){
var inst_27528 = (state_27551[(7)]);
var state_27551__$1 = state_27551;
if(cljs.core.truth_(inst_27528)){
var statearr_27560_27580 = state_27551__$1;
(statearr_27560_27580[(1)] = (4));

} else {
var statearr_27561_27581 = state_27551__$1;
(statearr_27561_27581[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (11))){
var inst_27542 = cljs.core.async.close_BANG_.call(null,ch);
var state_27551__$1 = state_27551;
var statearr_27562_27582 = state_27551__$1;
(statearr_27562_27582[(2)] = inst_27542);

(statearr_27562_27582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (9))){
var state_27551__$1 = state_27551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27563_27583 = state_27551__$1;
(statearr_27563_27583[(1)] = (11));

} else {
var statearr_27564_27584 = state_27551__$1;
(statearr_27564_27584[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (5))){
var inst_27528 = (state_27551[(7)]);
var state_27551__$1 = state_27551;
var statearr_27565_27585 = state_27551__$1;
(statearr_27565_27585[(2)] = inst_27528);

(statearr_27565_27585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (10))){
var inst_27547 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27566_27586 = state_27551__$1;
(statearr_27566_27586[(2)] = inst_27547);

(statearr_27566_27586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (8))){
var inst_27528 = (state_27551[(7)]);
var inst_27538 = cljs.core.next.call(null,inst_27528);
var inst_27528__$1 = inst_27538;
var state_27551__$1 = (function (){var statearr_27567 = state_27551;
(statearr_27567[(7)] = inst_27528__$1);

return statearr_27567;
})();
var statearr_27568_27587 = state_27551__$1;
(statearr_27568_27587[(2)] = null);

(statearr_27568_27587[(1)] = (2));


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
});})(c__26993__auto__))
;
return ((function (switch__26903__auto__,c__26993__auto__){
return (function() {
var cljs$core$async$state_machine__26904__auto__ = null;
var cljs$core$async$state_machine__26904__auto____0 = (function (){
var statearr_27569 = [null,null,null,null,null,null,null,null];
(statearr_27569[(0)] = cljs$core$async$state_machine__26904__auto__);

(statearr_27569[(1)] = (1));

return statearr_27569;
});
var cljs$core$async$state_machine__26904__auto____1 = (function (state_27551){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_27551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e27570){if((e27570 instanceof Object)){
var ex__26907__auto__ = e27570;
var statearr_27571_27588 = state_27551;
(statearr_27571_27588[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27589 = state_27551;
state_27551 = G__27589;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$state_machine__26904__auto__ = function(state_27551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26904__auto____1.call(this,state_27551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26904__auto____0;
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26904__auto____1;
return cljs$core$async$state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto__))
})();
var state__26995__auto__ = (function (){var statearr_27572 = f__26994__auto__.call(null);
(statearr_27572[(6)] = c__26993__auto__);

return statearr_27572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto__))
);

return c__26993__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27590 = (function (ch,cs,meta27591){
this.ch = ch;
this.cs = cs;
this.meta27591 = meta27591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27592,meta27591__$1){
var self__ = this;
var _27592__$1 = this;
return (new cljs.core.async.t_cljs$core$async27590(self__.ch,self__.cs,meta27591__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27592){
var self__ = this;
var _27592__$1 = this;
return self__.meta27591;
});})(cs))
;

cljs.core.async.t_cljs$core$async27590.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27590.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27590.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27590.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27590.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27590.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27590.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27591","meta27591",-1265543453,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27590.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27590";

cljs.core.async.t_cljs$core$async27590.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27590");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27590.
 */
cljs.core.async.__GT_t_cljs$core$async27590 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27590(ch__$1,cs__$1,meta27591){
return (new cljs.core.async.t_cljs$core$async27590(ch__$1,cs__$1,meta27591));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27590(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26993__auto___27812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___27812,cs,m,dchan,dctr,done){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___27812,cs,m,dchan,dctr,done){
return (function (state_27727){
var state_val_27728 = (state_27727[(1)]);
if((state_val_27728 === (7))){
var inst_27723 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27729_27813 = state_27727__$1;
(statearr_27729_27813[(2)] = inst_27723);

(statearr_27729_27813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (20))){
var inst_27626 = (state_27727[(7)]);
var inst_27638 = cljs.core.first.call(null,inst_27626);
var inst_27639 = cljs.core.nth.call(null,inst_27638,(0),null);
var inst_27640 = cljs.core.nth.call(null,inst_27638,(1),null);
var state_27727__$1 = (function (){var statearr_27730 = state_27727;
(statearr_27730[(8)] = inst_27639);

return statearr_27730;
})();
if(cljs.core.truth_(inst_27640)){
var statearr_27731_27814 = state_27727__$1;
(statearr_27731_27814[(1)] = (22));

} else {
var statearr_27732_27815 = state_27727__$1;
(statearr_27732_27815[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (27))){
var inst_27670 = (state_27727[(9)]);
var inst_27675 = (state_27727[(10)]);
var inst_27668 = (state_27727[(11)]);
var inst_27595 = (state_27727[(12)]);
var inst_27675__$1 = cljs.core._nth.call(null,inst_27668,inst_27670);
var inst_27676 = cljs.core.async.put_BANG_.call(null,inst_27675__$1,inst_27595,done);
var state_27727__$1 = (function (){var statearr_27733 = state_27727;
(statearr_27733[(10)] = inst_27675__$1);

return statearr_27733;
})();
if(cljs.core.truth_(inst_27676)){
var statearr_27734_27816 = state_27727__$1;
(statearr_27734_27816[(1)] = (30));

} else {
var statearr_27735_27817 = state_27727__$1;
(statearr_27735_27817[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (1))){
var state_27727__$1 = state_27727;
var statearr_27736_27818 = state_27727__$1;
(statearr_27736_27818[(2)] = null);

(statearr_27736_27818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (24))){
var inst_27626 = (state_27727[(7)]);
var inst_27645 = (state_27727[(2)]);
var inst_27646 = cljs.core.next.call(null,inst_27626);
var inst_27604 = inst_27646;
var inst_27605 = null;
var inst_27606 = (0);
var inst_27607 = (0);
var state_27727__$1 = (function (){var statearr_27737 = state_27727;
(statearr_27737[(13)] = inst_27607);

(statearr_27737[(14)] = inst_27605);

(statearr_27737[(15)] = inst_27604);

(statearr_27737[(16)] = inst_27606);

(statearr_27737[(17)] = inst_27645);

return statearr_27737;
})();
var statearr_27738_27819 = state_27727__$1;
(statearr_27738_27819[(2)] = null);

(statearr_27738_27819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (39))){
var state_27727__$1 = state_27727;
var statearr_27742_27820 = state_27727__$1;
(statearr_27742_27820[(2)] = null);

(statearr_27742_27820[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (4))){
var inst_27595 = (state_27727[(12)]);
var inst_27595__$1 = (state_27727[(2)]);
var inst_27596 = (inst_27595__$1 == null);
var state_27727__$1 = (function (){var statearr_27743 = state_27727;
(statearr_27743[(12)] = inst_27595__$1);

return statearr_27743;
})();
if(cljs.core.truth_(inst_27596)){
var statearr_27744_27821 = state_27727__$1;
(statearr_27744_27821[(1)] = (5));

} else {
var statearr_27745_27822 = state_27727__$1;
(statearr_27745_27822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (15))){
var inst_27607 = (state_27727[(13)]);
var inst_27605 = (state_27727[(14)]);
var inst_27604 = (state_27727[(15)]);
var inst_27606 = (state_27727[(16)]);
var inst_27622 = (state_27727[(2)]);
var inst_27623 = (inst_27607 + (1));
var tmp27739 = inst_27605;
var tmp27740 = inst_27604;
var tmp27741 = inst_27606;
var inst_27604__$1 = tmp27740;
var inst_27605__$1 = tmp27739;
var inst_27606__$1 = tmp27741;
var inst_27607__$1 = inst_27623;
var state_27727__$1 = (function (){var statearr_27746 = state_27727;
(statearr_27746[(13)] = inst_27607__$1);

(statearr_27746[(18)] = inst_27622);

(statearr_27746[(14)] = inst_27605__$1);

(statearr_27746[(15)] = inst_27604__$1);

(statearr_27746[(16)] = inst_27606__$1);

return statearr_27746;
})();
var statearr_27747_27823 = state_27727__$1;
(statearr_27747_27823[(2)] = null);

(statearr_27747_27823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (21))){
var inst_27649 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27751_27824 = state_27727__$1;
(statearr_27751_27824[(2)] = inst_27649);

(statearr_27751_27824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (31))){
var inst_27675 = (state_27727[(10)]);
var inst_27679 = done.call(null,null);
var inst_27680 = cljs.core.async.untap_STAR_.call(null,m,inst_27675);
var state_27727__$1 = (function (){var statearr_27752 = state_27727;
(statearr_27752[(19)] = inst_27679);

return statearr_27752;
})();
var statearr_27753_27825 = state_27727__$1;
(statearr_27753_27825[(2)] = inst_27680);

(statearr_27753_27825[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (32))){
var inst_27670 = (state_27727[(9)]);
var inst_27667 = (state_27727[(20)]);
var inst_27669 = (state_27727[(21)]);
var inst_27668 = (state_27727[(11)]);
var inst_27682 = (state_27727[(2)]);
var inst_27683 = (inst_27670 + (1));
var tmp27748 = inst_27667;
var tmp27749 = inst_27669;
var tmp27750 = inst_27668;
var inst_27667__$1 = tmp27748;
var inst_27668__$1 = tmp27750;
var inst_27669__$1 = tmp27749;
var inst_27670__$1 = inst_27683;
var state_27727__$1 = (function (){var statearr_27754 = state_27727;
(statearr_27754[(9)] = inst_27670__$1);

(statearr_27754[(20)] = inst_27667__$1);

(statearr_27754[(22)] = inst_27682);

(statearr_27754[(21)] = inst_27669__$1);

(statearr_27754[(11)] = inst_27668__$1);

return statearr_27754;
})();
var statearr_27755_27826 = state_27727__$1;
(statearr_27755_27826[(2)] = null);

(statearr_27755_27826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (40))){
var inst_27695 = (state_27727[(23)]);
var inst_27699 = done.call(null,null);
var inst_27700 = cljs.core.async.untap_STAR_.call(null,m,inst_27695);
var state_27727__$1 = (function (){var statearr_27756 = state_27727;
(statearr_27756[(24)] = inst_27699);

return statearr_27756;
})();
var statearr_27757_27827 = state_27727__$1;
(statearr_27757_27827[(2)] = inst_27700);

(statearr_27757_27827[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (33))){
var inst_27686 = (state_27727[(25)]);
var inst_27688 = cljs.core.chunked_seq_QMARK_.call(null,inst_27686);
var state_27727__$1 = state_27727;
if(inst_27688){
var statearr_27758_27828 = state_27727__$1;
(statearr_27758_27828[(1)] = (36));

} else {
var statearr_27759_27829 = state_27727__$1;
(statearr_27759_27829[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (13))){
var inst_27616 = (state_27727[(26)]);
var inst_27619 = cljs.core.async.close_BANG_.call(null,inst_27616);
var state_27727__$1 = state_27727;
var statearr_27760_27830 = state_27727__$1;
(statearr_27760_27830[(2)] = inst_27619);

(statearr_27760_27830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (22))){
var inst_27639 = (state_27727[(8)]);
var inst_27642 = cljs.core.async.close_BANG_.call(null,inst_27639);
var state_27727__$1 = state_27727;
var statearr_27761_27831 = state_27727__$1;
(statearr_27761_27831[(2)] = inst_27642);

(statearr_27761_27831[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (36))){
var inst_27686 = (state_27727[(25)]);
var inst_27690 = cljs.core.chunk_first.call(null,inst_27686);
var inst_27691 = cljs.core.chunk_rest.call(null,inst_27686);
var inst_27692 = cljs.core.count.call(null,inst_27690);
var inst_27667 = inst_27691;
var inst_27668 = inst_27690;
var inst_27669 = inst_27692;
var inst_27670 = (0);
var state_27727__$1 = (function (){var statearr_27762 = state_27727;
(statearr_27762[(9)] = inst_27670);

(statearr_27762[(20)] = inst_27667);

(statearr_27762[(21)] = inst_27669);

(statearr_27762[(11)] = inst_27668);

return statearr_27762;
})();
var statearr_27763_27832 = state_27727__$1;
(statearr_27763_27832[(2)] = null);

(statearr_27763_27832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (41))){
var inst_27686 = (state_27727[(25)]);
var inst_27702 = (state_27727[(2)]);
var inst_27703 = cljs.core.next.call(null,inst_27686);
var inst_27667 = inst_27703;
var inst_27668 = null;
var inst_27669 = (0);
var inst_27670 = (0);
var state_27727__$1 = (function (){var statearr_27764 = state_27727;
(statearr_27764[(27)] = inst_27702);

(statearr_27764[(9)] = inst_27670);

(statearr_27764[(20)] = inst_27667);

(statearr_27764[(21)] = inst_27669);

(statearr_27764[(11)] = inst_27668);

return statearr_27764;
})();
var statearr_27765_27833 = state_27727__$1;
(statearr_27765_27833[(2)] = null);

(statearr_27765_27833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (43))){
var state_27727__$1 = state_27727;
var statearr_27766_27834 = state_27727__$1;
(statearr_27766_27834[(2)] = null);

(statearr_27766_27834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (29))){
var inst_27711 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27767_27835 = state_27727__$1;
(statearr_27767_27835[(2)] = inst_27711);

(statearr_27767_27835[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (44))){
var inst_27720 = (state_27727[(2)]);
var state_27727__$1 = (function (){var statearr_27768 = state_27727;
(statearr_27768[(28)] = inst_27720);

return statearr_27768;
})();
var statearr_27769_27836 = state_27727__$1;
(statearr_27769_27836[(2)] = null);

(statearr_27769_27836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (6))){
var inst_27659 = (state_27727[(29)]);
var inst_27658 = cljs.core.deref.call(null,cs);
var inst_27659__$1 = cljs.core.keys.call(null,inst_27658);
var inst_27660 = cljs.core.count.call(null,inst_27659__$1);
var inst_27661 = cljs.core.reset_BANG_.call(null,dctr,inst_27660);
var inst_27666 = cljs.core.seq.call(null,inst_27659__$1);
var inst_27667 = inst_27666;
var inst_27668 = null;
var inst_27669 = (0);
var inst_27670 = (0);
var state_27727__$1 = (function (){var statearr_27770 = state_27727;
(statearr_27770[(9)] = inst_27670);

(statearr_27770[(20)] = inst_27667);

(statearr_27770[(21)] = inst_27669);

(statearr_27770[(29)] = inst_27659__$1);

(statearr_27770[(11)] = inst_27668);

(statearr_27770[(30)] = inst_27661);

return statearr_27770;
})();
var statearr_27771_27837 = state_27727__$1;
(statearr_27771_27837[(2)] = null);

(statearr_27771_27837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (28))){
var inst_27667 = (state_27727[(20)]);
var inst_27686 = (state_27727[(25)]);
var inst_27686__$1 = cljs.core.seq.call(null,inst_27667);
var state_27727__$1 = (function (){var statearr_27772 = state_27727;
(statearr_27772[(25)] = inst_27686__$1);

return statearr_27772;
})();
if(inst_27686__$1){
var statearr_27773_27838 = state_27727__$1;
(statearr_27773_27838[(1)] = (33));

} else {
var statearr_27774_27839 = state_27727__$1;
(statearr_27774_27839[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (25))){
var inst_27670 = (state_27727[(9)]);
var inst_27669 = (state_27727[(21)]);
var inst_27672 = (inst_27670 < inst_27669);
var inst_27673 = inst_27672;
var state_27727__$1 = state_27727;
if(cljs.core.truth_(inst_27673)){
var statearr_27775_27840 = state_27727__$1;
(statearr_27775_27840[(1)] = (27));

} else {
var statearr_27776_27841 = state_27727__$1;
(statearr_27776_27841[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (34))){
var state_27727__$1 = state_27727;
var statearr_27777_27842 = state_27727__$1;
(statearr_27777_27842[(2)] = null);

(statearr_27777_27842[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (17))){
var state_27727__$1 = state_27727;
var statearr_27778_27843 = state_27727__$1;
(statearr_27778_27843[(2)] = null);

(statearr_27778_27843[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (3))){
var inst_27725 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27727__$1,inst_27725);
} else {
if((state_val_27728 === (12))){
var inst_27654 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27779_27844 = state_27727__$1;
(statearr_27779_27844[(2)] = inst_27654);

(statearr_27779_27844[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (2))){
var state_27727__$1 = state_27727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27727__$1,(4),ch);
} else {
if((state_val_27728 === (23))){
var state_27727__$1 = state_27727;
var statearr_27780_27845 = state_27727__$1;
(statearr_27780_27845[(2)] = null);

(statearr_27780_27845[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (35))){
var inst_27709 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27781_27846 = state_27727__$1;
(statearr_27781_27846[(2)] = inst_27709);

(statearr_27781_27846[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (19))){
var inst_27626 = (state_27727[(7)]);
var inst_27630 = cljs.core.chunk_first.call(null,inst_27626);
var inst_27631 = cljs.core.chunk_rest.call(null,inst_27626);
var inst_27632 = cljs.core.count.call(null,inst_27630);
var inst_27604 = inst_27631;
var inst_27605 = inst_27630;
var inst_27606 = inst_27632;
var inst_27607 = (0);
var state_27727__$1 = (function (){var statearr_27782 = state_27727;
(statearr_27782[(13)] = inst_27607);

(statearr_27782[(14)] = inst_27605);

(statearr_27782[(15)] = inst_27604);

(statearr_27782[(16)] = inst_27606);

return statearr_27782;
})();
var statearr_27783_27847 = state_27727__$1;
(statearr_27783_27847[(2)] = null);

(statearr_27783_27847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (11))){
var inst_27604 = (state_27727[(15)]);
var inst_27626 = (state_27727[(7)]);
var inst_27626__$1 = cljs.core.seq.call(null,inst_27604);
var state_27727__$1 = (function (){var statearr_27784 = state_27727;
(statearr_27784[(7)] = inst_27626__$1);

return statearr_27784;
})();
if(inst_27626__$1){
var statearr_27785_27848 = state_27727__$1;
(statearr_27785_27848[(1)] = (16));

} else {
var statearr_27786_27849 = state_27727__$1;
(statearr_27786_27849[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (9))){
var inst_27656 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27787_27850 = state_27727__$1;
(statearr_27787_27850[(2)] = inst_27656);

(statearr_27787_27850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (5))){
var inst_27602 = cljs.core.deref.call(null,cs);
var inst_27603 = cljs.core.seq.call(null,inst_27602);
var inst_27604 = inst_27603;
var inst_27605 = null;
var inst_27606 = (0);
var inst_27607 = (0);
var state_27727__$1 = (function (){var statearr_27788 = state_27727;
(statearr_27788[(13)] = inst_27607);

(statearr_27788[(14)] = inst_27605);

(statearr_27788[(15)] = inst_27604);

(statearr_27788[(16)] = inst_27606);

return statearr_27788;
})();
var statearr_27789_27851 = state_27727__$1;
(statearr_27789_27851[(2)] = null);

(statearr_27789_27851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (14))){
var state_27727__$1 = state_27727;
var statearr_27790_27852 = state_27727__$1;
(statearr_27790_27852[(2)] = null);

(statearr_27790_27852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (45))){
var inst_27717 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27791_27853 = state_27727__$1;
(statearr_27791_27853[(2)] = inst_27717);

(statearr_27791_27853[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (26))){
var inst_27659 = (state_27727[(29)]);
var inst_27713 = (state_27727[(2)]);
var inst_27714 = cljs.core.seq.call(null,inst_27659);
var state_27727__$1 = (function (){var statearr_27792 = state_27727;
(statearr_27792[(31)] = inst_27713);

return statearr_27792;
})();
if(inst_27714){
var statearr_27793_27854 = state_27727__$1;
(statearr_27793_27854[(1)] = (42));

} else {
var statearr_27794_27855 = state_27727__$1;
(statearr_27794_27855[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (16))){
var inst_27626 = (state_27727[(7)]);
var inst_27628 = cljs.core.chunked_seq_QMARK_.call(null,inst_27626);
var state_27727__$1 = state_27727;
if(inst_27628){
var statearr_27795_27856 = state_27727__$1;
(statearr_27795_27856[(1)] = (19));

} else {
var statearr_27796_27857 = state_27727__$1;
(statearr_27796_27857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (38))){
var inst_27706 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27797_27858 = state_27727__$1;
(statearr_27797_27858[(2)] = inst_27706);

(statearr_27797_27858[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (30))){
var state_27727__$1 = state_27727;
var statearr_27798_27859 = state_27727__$1;
(statearr_27798_27859[(2)] = null);

(statearr_27798_27859[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (10))){
var inst_27607 = (state_27727[(13)]);
var inst_27605 = (state_27727[(14)]);
var inst_27615 = cljs.core._nth.call(null,inst_27605,inst_27607);
var inst_27616 = cljs.core.nth.call(null,inst_27615,(0),null);
var inst_27617 = cljs.core.nth.call(null,inst_27615,(1),null);
var state_27727__$1 = (function (){var statearr_27799 = state_27727;
(statearr_27799[(26)] = inst_27616);

return statearr_27799;
})();
if(cljs.core.truth_(inst_27617)){
var statearr_27800_27860 = state_27727__$1;
(statearr_27800_27860[(1)] = (13));

} else {
var statearr_27801_27861 = state_27727__$1;
(statearr_27801_27861[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (18))){
var inst_27652 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27802_27862 = state_27727__$1;
(statearr_27802_27862[(2)] = inst_27652);

(statearr_27802_27862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (42))){
var state_27727__$1 = state_27727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27727__$1,(45),dchan);
} else {
if((state_val_27728 === (37))){
var inst_27686 = (state_27727[(25)]);
var inst_27595 = (state_27727[(12)]);
var inst_27695 = (state_27727[(23)]);
var inst_27695__$1 = cljs.core.first.call(null,inst_27686);
var inst_27696 = cljs.core.async.put_BANG_.call(null,inst_27695__$1,inst_27595,done);
var state_27727__$1 = (function (){var statearr_27803 = state_27727;
(statearr_27803[(23)] = inst_27695__$1);

return statearr_27803;
})();
if(cljs.core.truth_(inst_27696)){
var statearr_27804_27863 = state_27727__$1;
(statearr_27804_27863[(1)] = (39));

} else {
var statearr_27805_27864 = state_27727__$1;
(statearr_27805_27864[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (8))){
var inst_27607 = (state_27727[(13)]);
var inst_27606 = (state_27727[(16)]);
var inst_27609 = (inst_27607 < inst_27606);
var inst_27610 = inst_27609;
var state_27727__$1 = state_27727;
if(cljs.core.truth_(inst_27610)){
var statearr_27806_27865 = state_27727__$1;
(statearr_27806_27865[(1)] = (10));

} else {
var statearr_27807_27866 = state_27727__$1;
(statearr_27807_27866[(1)] = (11));

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
});})(c__26993__auto___27812,cs,m,dchan,dctr,done))
;
return ((function (switch__26903__auto__,c__26993__auto___27812,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26904__auto__ = null;
var cljs$core$async$mult_$_state_machine__26904__auto____0 = (function (){
var statearr_27808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27808[(0)] = cljs$core$async$mult_$_state_machine__26904__auto__);

(statearr_27808[(1)] = (1));

return statearr_27808;
});
var cljs$core$async$mult_$_state_machine__26904__auto____1 = (function (state_27727){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_27727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e27809){if((e27809 instanceof Object)){
var ex__26907__auto__ = e27809;
var statearr_27810_27867 = state_27727;
(statearr_27810_27867[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27868 = state_27727;
state_27727 = G__27868;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26904__auto__ = function(state_27727){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26904__auto____1.call(this,state_27727);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26904__auto____0;
cljs$core$async$mult_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26904__auto____1;
return cljs$core$async$mult_$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___27812,cs,m,dchan,dctr,done))
})();
var state__26995__auto__ = (function (){var statearr_27811 = f__26994__auto__.call(null);
(statearr_27811[(6)] = c__26993__auto___27812);

return statearr_27811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___27812,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27870 = arguments.length;
switch (G__27870) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27882 = arguments.length;
var i__4500__auto___27883 = (0);
while(true){
if((i__4500__auto___27883 < len__4499__auto___27882)){
args__4502__auto__.push((arguments[i__4500__auto___27883]));

var G__27884 = (i__4500__auto___27883 + (1));
i__4500__auto___27883 = G__27884;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27876){
var map__27877 = p__27876;
var map__27877__$1 = ((((!((map__27877 == null)))?(((((map__27877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27877):map__27877);
var opts = map__27877__$1;
var statearr_27879_27885 = state;
(statearr_27879_27885[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27877,map__27877__$1,opts){
return (function (val){
var statearr_27880_27886 = state;
(statearr_27880_27886[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27877,map__27877__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27881_27887 = state;
(statearr_27881_27887[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27872){
var G__27873 = cljs.core.first.call(null,seq27872);
var seq27872__$1 = cljs.core.next.call(null,seq27872);
var G__27874 = cljs.core.first.call(null,seq27872__$1);
var seq27872__$2 = cljs.core.next.call(null,seq27872__$1);
var G__27875 = cljs.core.first.call(null,seq27872__$2);
var seq27872__$3 = cljs.core.next.call(null,seq27872__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27873,G__27874,G__27875,seq27872__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27888 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27889){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27889 = meta27889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27890,meta27889__$1){
var self__ = this;
var _27890__$1 = this;
return (new cljs.core.async.t_cljs$core$async27888(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27889__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27890){
var self__ = this;
var _27890__$1 = this;
return self__.meta27889;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27888.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27888.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27888.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27888.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27888.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27888.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27888.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27888.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27888.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27889","meta27889",1703370949,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27888";

cljs.core.async.t_cljs$core$async27888.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27888");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27888.
 */
cljs.core.async.__GT_t_cljs$core$async27888 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27888(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27889){
return (new cljs.core.async.t_cljs$core$async27888(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27889));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27888(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26993__auto___28052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___28052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___28052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27992){
var state_val_27993 = (state_27992[(1)]);
if((state_val_27993 === (7))){
var inst_27907 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
var statearr_27994_28053 = state_27992__$1;
(statearr_27994_28053[(2)] = inst_27907);

(statearr_27994_28053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (20))){
var inst_27919 = (state_27992[(7)]);
var state_27992__$1 = state_27992;
var statearr_27995_28054 = state_27992__$1;
(statearr_27995_28054[(2)] = inst_27919);

(statearr_27995_28054[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (27))){
var state_27992__$1 = state_27992;
var statearr_27996_28055 = state_27992__$1;
(statearr_27996_28055[(2)] = null);

(statearr_27996_28055[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (1))){
var inst_27894 = (state_27992[(8)]);
var inst_27894__$1 = calc_state.call(null);
var inst_27896 = (inst_27894__$1 == null);
var inst_27897 = cljs.core.not.call(null,inst_27896);
var state_27992__$1 = (function (){var statearr_27997 = state_27992;
(statearr_27997[(8)] = inst_27894__$1);

return statearr_27997;
})();
if(inst_27897){
var statearr_27998_28056 = state_27992__$1;
(statearr_27998_28056[(1)] = (2));

} else {
var statearr_27999_28057 = state_27992__$1;
(statearr_27999_28057[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (24))){
var inst_27943 = (state_27992[(9)]);
var inst_27952 = (state_27992[(10)]);
var inst_27966 = (state_27992[(11)]);
var inst_27966__$1 = inst_27943.call(null,inst_27952);
var state_27992__$1 = (function (){var statearr_28000 = state_27992;
(statearr_28000[(11)] = inst_27966__$1);

return statearr_28000;
})();
if(cljs.core.truth_(inst_27966__$1)){
var statearr_28001_28058 = state_27992__$1;
(statearr_28001_28058[(1)] = (29));

} else {
var statearr_28002_28059 = state_27992__$1;
(statearr_28002_28059[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (4))){
var inst_27910 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
if(cljs.core.truth_(inst_27910)){
var statearr_28003_28060 = state_27992__$1;
(statearr_28003_28060[(1)] = (8));

} else {
var statearr_28004_28061 = state_27992__$1;
(statearr_28004_28061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (15))){
var inst_27937 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
if(cljs.core.truth_(inst_27937)){
var statearr_28005_28062 = state_27992__$1;
(statearr_28005_28062[(1)] = (19));

} else {
var statearr_28006_28063 = state_27992__$1;
(statearr_28006_28063[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (21))){
var inst_27942 = (state_27992[(12)]);
var inst_27942__$1 = (state_27992[(2)]);
var inst_27943 = cljs.core.get.call(null,inst_27942__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27944 = cljs.core.get.call(null,inst_27942__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27945 = cljs.core.get.call(null,inst_27942__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27992__$1 = (function (){var statearr_28007 = state_27992;
(statearr_28007[(9)] = inst_27943);

(statearr_28007[(13)] = inst_27944);

(statearr_28007[(12)] = inst_27942__$1);

return statearr_28007;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27992__$1,(22),inst_27945);
} else {
if((state_val_27993 === (31))){
var inst_27974 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
if(cljs.core.truth_(inst_27974)){
var statearr_28008_28064 = state_27992__$1;
(statearr_28008_28064[(1)] = (32));

} else {
var statearr_28009_28065 = state_27992__$1;
(statearr_28009_28065[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (32))){
var inst_27951 = (state_27992[(14)]);
var state_27992__$1 = state_27992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27992__$1,(35),out,inst_27951);
} else {
if((state_val_27993 === (33))){
var inst_27942 = (state_27992[(12)]);
var inst_27919 = inst_27942;
var state_27992__$1 = (function (){var statearr_28010 = state_27992;
(statearr_28010[(7)] = inst_27919);

return statearr_28010;
})();
var statearr_28011_28066 = state_27992__$1;
(statearr_28011_28066[(2)] = null);

(statearr_28011_28066[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (13))){
var inst_27919 = (state_27992[(7)]);
var inst_27926 = inst_27919.cljs$lang$protocol_mask$partition0$;
var inst_27927 = (inst_27926 & (64));
var inst_27928 = inst_27919.cljs$core$ISeq$;
var inst_27929 = (cljs.core.PROTOCOL_SENTINEL === inst_27928);
var inst_27930 = ((inst_27927) || (inst_27929));
var state_27992__$1 = state_27992;
if(cljs.core.truth_(inst_27930)){
var statearr_28012_28067 = state_27992__$1;
(statearr_28012_28067[(1)] = (16));

} else {
var statearr_28013_28068 = state_27992__$1;
(statearr_28013_28068[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (22))){
var inst_27952 = (state_27992[(10)]);
var inst_27951 = (state_27992[(14)]);
var inst_27950 = (state_27992[(2)]);
var inst_27951__$1 = cljs.core.nth.call(null,inst_27950,(0),null);
var inst_27952__$1 = cljs.core.nth.call(null,inst_27950,(1),null);
var inst_27953 = (inst_27951__$1 == null);
var inst_27954 = cljs.core._EQ_.call(null,inst_27952__$1,change);
var inst_27955 = ((inst_27953) || (inst_27954));
var state_27992__$1 = (function (){var statearr_28014 = state_27992;
(statearr_28014[(10)] = inst_27952__$1);

(statearr_28014[(14)] = inst_27951__$1);

return statearr_28014;
})();
if(cljs.core.truth_(inst_27955)){
var statearr_28015_28069 = state_27992__$1;
(statearr_28015_28069[(1)] = (23));

} else {
var statearr_28016_28070 = state_27992__$1;
(statearr_28016_28070[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (36))){
var inst_27942 = (state_27992[(12)]);
var inst_27919 = inst_27942;
var state_27992__$1 = (function (){var statearr_28017 = state_27992;
(statearr_28017[(7)] = inst_27919);

return statearr_28017;
})();
var statearr_28018_28071 = state_27992__$1;
(statearr_28018_28071[(2)] = null);

(statearr_28018_28071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (29))){
var inst_27966 = (state_27992[(11)]);
var state_27992__$1 = state_27992;
var statearr_28019_28072 = state_27992__$1;
(statearr_28019_28072[(2)] = inst_27966);

(statearr_28019_28072[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (6))){
var state_27992__$1 = state_27992;
var statearr_28020_28073 = state_27992__$1;
(statearr_28020_28073[(2)] = false);

(statearr_28020_28073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (28))){
var inst_27962 = (state_27992[(2)]);
var inst_27963 = calc_state.call(null);
var inst_27919 = inst_27963;
var state_27992__$1 = (function (){var statearr_28021 = state_27992;
(statearr_28021[(7)] = inst_27919);

(statearr_28021[(15)] = inst_27962);

return statearr_28021;
})();
var statearr_28022_28074 = state_27992__$1;
(statearr_28022_28074[(2)] = null);

(statearr_28022_28074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (25))){
var inst_27988 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
var statearr_28023_28075 = state_27992__$1;
(statearr_28023_28075[(2)] = inst_27988);

(statearr_28023_28075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (34))){
var inst_27986 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
var statearr_28024_28076 = state_27992__$1;
(statearr_28024_28076[(2)] = inst_27986);

(statearr_28024_28076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (17))){
var state_27992__$1 = state_27992;
var statearr_28025_28077 = state_27992__$1;
(statearr_28025_28077[(2)] = false);

(statearr_28025_28077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (3))){
var state_27992__$1 = state_27992;
var statearr_28026_28078 = state_27992__$1;
(statearr_28026_28078[(2)] = false);

(statearr_28026_28078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (12))){
var inst_27990 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27992__$1,inst_27990);
} else {
if((state_val_27993 === (2))){
var inst_27894 = (state_27992[(8)]);
var inst_27899 = inst_27894.cljs$lang$protocol_mask$partition0$;
var inst_27900 = (inst_27899 & (64));
var inst_27901 = inst_27894.cljs$core$ISeq$;
var inst_27902 = (cljs.core.PROTOCOL_SENTINEL === inst_27901);
var inst_27903 = ((inst_27900) || (inst_27902));
var state_27992__$1 = state_27992;
if(cljs.core.truth_(inst_27903)){
var statearr_28027_28079 = state_27992__$1;
(statearr_28027_28079[(1)] = (5));

} else {
var statearr_28028_28080 = state_27992__$1;
(statearr_28028_28080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (23))){
var inst_27951 = (state_27992[(14)]);
var inst_27957 = (inst_27951 == null);
var state_27992__$1 = state_27992;
if(cljs.core.truth_(inst_27957)){
var statearr_28029_28081 = state_27992__$1;
(statearr_28029_28081[(1)] = (26));

} else {
var statearr_28030_28082 = state_27992__$1;
(statearr_28030_28082[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (35))){
var inst_27977 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
if(cljs.core.truth_(inst_27977)){
var statearr_28031_28083 = state_27992__$1;
(statearr_28031_28083[(1)] = (36));

} else {
var statearr_28032_28084 = state_27992__$1;
(statearr_28032_28084[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (19))){
var inst_27919 = (state_27992[(7)]);
var inst_27939 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27919);
var state_27992__$1 = state_27992;
var statearr_28033_28085 = state_27992__$1;
(statearr_28033_28085[(2)] = inst_27939);

(statearr_28033_28085[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (11))){
var inst_27919 = (state_27992[(7)]);
var inst_27923 = (inst_27919 == null);
var inst_27924 = cljs.core.not.call(null,inst_27923);
var state_27992__$1 = state_27992;
if(inst_27924){
var statearr_28034_28086 = state_27992__$1;
(statearr_28034_28086[(1)] = (13));

} else {
var statearr_28035_28087 = state_27992__$1;
(statearr_28035_28087[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (9))){
var inst_27894 = (state_27992[(8)]);
var state_27992__$1 = state_27992;
var statearr_28036_28088 = state_27992__$1;
(statearr_28036_28088[(2)] = inst_27894);

(statearr_28036_28088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (5))){
var state_27992__$1 = state_27992;
var statearr_28037_28089 = state_27992__$1;
(statearr_28037_28089[(2)] = true);

(statearr_28037_28089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (14))){
var state_27992__$1 = state_27992;
var statearr_28038_28090 = state_27992__$1;
(statearr_28038_28090[(2)] = false);

(statearr_28038_28090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (26))){
var inst_27952 = (state_27992[(10)]);
var inst_27959 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27952);
var state_27992__$1 = state_27992;
var statearr_28039_28091 = state_27992__$1;
(statearr_28039_28091[(2)] = inst_27959);

(statearr_28039_28091[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (16))){
var state_27992__$1 = state_27992;
var statearr_28040_28092 = state_27992__$1;
(statearr_28040_28092[(2)] = true);

(statearr_28040_28092[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (38))){
var inst_27982 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
var statearr_28041_28093 = state_27992__$1;
(statearr_28041_28093[(2)] = inst_27982);

(statearr_28041_28093[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (30))){
var inst_27943 = (state_27992[(9)]);
var inst_27952 = (state_27992[(10)]);
var inst_27944 = (state_27992[(13)]);
var inst_27969 = cljs.core.empty_QMARK_.call(null,inst_27943);
var inst_27970 = inst_27944.call(null,inst_27952);
var inst_27971 = cljs.core.not.call(null,inst_27970);
var inst_27972 = ((inst_27969) && (inst_27971));
var state_27992__$1 = state_27992;
var statearr_28042_28094 = state_27992__$1;
(statearr_28042_28094[(2)] = inst_27972);

(statearr_28042_28094[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (10))){
var inst_27894 = (state_27992[(8)]);
var inst_27915 = (state_27992[(2)]);
var inst_27916 = cljs.core.get.call(null,inst_27915,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27917 = cljs.core.get.call(null,inst_27915,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27918 = cljs.core.get.call(null,inst_27915,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27919 = inst_27894;
var state_27992__$1 = (function (){var statearr_28043 = state_27992;
(statearr_28043[(16)] = inst_27917);

(statearr_28043[(17)] = inst_27916);

(statearr_28043[(7)] = inst_27919);

(statearr_28043[(18)] = inst_27918);

return statearr_28043;
})();
var statearr_28044_28095 = state_27992__$1;
(statearr_28044_28095[(2)] = null);

(statearr_28044_28095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (18))){
var inst_27934 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
var statearr_28045_28096 = state_27992__$1;
(statearr_28045_28096[(2)] = inst_27934);

(statearr_28045_28096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (37))){
var state_27992__$1 = state_27992;
var statearr_28046_28097 = state_27992__$1;
(statearr_28046_28097[(2)] = null);

(statearr_28046_28097[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (8))){
var inst_27894 = (state_27992[(8)]);
var inst_27912 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27894);
var state_27992__$1 = state_27992;
var statearr_28047_28098 = state_27992__$1;
(statearr_28047_28098[(2)] = inst_27912);

(statearr_28047_28098[(1)] = (10));


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
});})(c__26993__auto___28052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26903__auto__,c__26993__auto___28052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26904__auto__ = null;
var cljs$core$async$mix_$_state_machine__26904__auto____0 = (function (){
var statearr_28048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28048[(0)] = cljs$core$async$mix_$_state_machine__26904__auto__);

(statearr_28048[(1)] = (1));

return statearr_28048;
});
var cljs$core$async$mix_$_state_machine__26904__auto____1 = (function (state_27992){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_27992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e28049){if((e28049 instanceof Object)){
var ex__26907__auto__ = e28049;
var statearr_28050_28099 = state_27992;
(statearr_28050_28099[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28100 = state_27992;
state_27992 = G__28100;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26904__auto__ = function(state_27992){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26904__auto____1.call(this,state_27992);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26904__auto____0;
cljs$core$async$mix_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26904__auto____1;
return cljs$core$async$mix_$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___28052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26995__auto__ = (function (){var statearr_28051 = f__26994__auto__.call(null);
(statearr_28051[(6)] = c__26993__auto___28052);

return statearr_28051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___28052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28102 = arguments.length;
switch (G__28102) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28106 = arguments.length;
switch (G__28106) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__28104_SHARP_){
if(cljs.core.truth_(p1__28104_SHARP_.call(null,topic))){
return p1__28104_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28104_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28107 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28108){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28108 = meta28108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28109,meta28108__$1){
var self__ = this;
var _28109__$1 = this;
return (new cljs.core.async.t_cljs$core$async28107(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28108__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28109){
var self__ = this;
var _28109__$1 = this;
return self__.meta28108;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28107.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28108","meta28108",-1211297665,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28107";

cljs.core.async.t_cljs$core$async28107.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28107");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28107.
 */
cljs.core.async.__GT_t_cljs$core$async28107 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28107(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28108){
return (new cljs.core.async.t_cljs$core$async28107(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28108));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28107(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26993__auto___28227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___28227,mults,ensure_mult,p){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___28227,mults,ensure_mult,p){
return (function (state_28181){
var state_val_28182 = (state_28181[(1)]);
if((state_val_28182 === (7))){
var inst_28177 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
var statearr_28183_28228 = state_28181__$1;
(statearr_28183_28228[(2)] = inst_28177);

(statearr_28183_28228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (20))){
var state_28181__$1 = state_28181;
var statearr_28184_28229 = state_28181__$1;
(statearr_28184_28229[(2)] = null);

(statearr_28184_28229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (1))){
var state_28181__$1 = state_28181;
var statearr_28185_28230 = state_28181__$1;
(statearr_28185_28230[(2)] = null);

(statearr_28185_28230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (24))){
var inst_28160 = (state_28181[(7)]);
var inst_28169 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28160);
var state_28181__$1 = state_28181;
var statearr_28186_28231 = state_28181__$1;
(statearr_28186_28231[(2)] = inst_28169);

(statearr_28186_28231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (4))){
var inst_28112 = (state_28181[(8)]);
var inst_28112__$1 = (state_28181[(2)]);
var inst_28113 = (inst_28112__$1 == null);
var state_28181__$1 = (function (){var statearr_28187 = state_28181;
(statearr_28187[(8)] = inst_28112__$1);

return statearr_28187;
})();
if(cljs.core.truth_(inst_28113)){
var statearr_28188_28232 = state_28181__$1;
(statearr_28188_28232[(1)] = (5));

} else {
var statearr_28189_28233 = state_28181__$1;
(statearr_28189_28233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (15))){
var inst_28154 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
var statearr_28190_28234 = state_28181__$1;
(statearr_28190_28234[(2)] = inst_28154);

(statearr_28190_28234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (21))){
var inst_28174 = (state_28181[(2)]);
var state_28181__$1 = (function (){var statearr_28191 = state_28181;
(statearr_28191[(9)] = inst_28174);

return statearr_28191;
})();
var statearr_28192_28235 = state_28181__$1;
(statearr_28192_28235[(2)] = null);

(statearr_28192_28235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (13))){
var inst_28136 = (state_28181[(10)]);
var inst_28138 = cljs.core.chunked_seq_QMARK_.call(null,inst_28136);
var state_28181__$1 = state_28181;
if(inst_28138){
var statearr_28193_28236 = state_28181__$1;
(statearr_28193_28236[(1)] = (16));

} else {
var statearr_28194_28237 = state_28181__$1;
(statearr_28194_28237[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (22))){
var inst_28166 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
if(cljs.core.truth_(inst_28166)){
var statearr_28195_28238 = state_28181__$1;
(statearr_28195_28238[(1)] = (23));

} else {
var statearr_28196_28239 = state_28181__$1;
(statearr_28196_28239[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (6))){
var inst_28112 = (state_28181[(8)]);
var inst_28162 = (state_28181[(11)]);
var inst_28160 = (state_28181[(7)]);
var inst_28160__$1 = topic_fn.call(null,inst_28112);
var inst_28161 = cljs.core.deref.call(null,mults);
var inst_28162__$1 = cljs.core.get.call(null,inst_28161,inst_28160__$1);
var state_28181__$1 = (function (){var statearr_28197 = state_28181;
(statearr_28197[(11)] = inst_28162__$1);

(statearr_28197[(7)] = inst_28160__$1);

return statearr_28197;
})();
if(cljs.core.truth_(inst_28162__$1)){
var statearr_28198_28240 = state_28181__$1;
(statearr_28198_28240[(1)] = (19));

} else {
var statearr_28199_28241 = state_28181__$1;
(statearr_28199_28241[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (25))){
var inst_28171 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
var statearr_28200_28242 = state_28181__$1;
(statearr_28200_28242[(2)] = inst_28171);

(statearr_28200_28242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (17))){
var inst_28136 = (state_28181[(10)]);
var inst_28145 = cljs.core.first.call(null,inst_28136);
var inst_28146 = cljs.core.async.muxch_STAR_.call(null,inst_28145);
var inst_28147 = cljs.core.async.close_BANG_.call(null,inst_28146);
var inst_28148 = cljs.core.next.call(null,inst_28136);
var inst_28122 = inst_28148;
var inst_28123 = null;
var inst_28124 = (0);
var inst_28125 = (0);
var state_28181__$1 = (function (){var statearr_28201 = state_28181;
(statearr_28201[(12)] = inst_28147);

(statearr_28201[(13)] = inst_28123);

(statearr_28201[(14)] = inst_28124);

(statearr_28201[(15)] = inst_28125);

(statearr_28201[(16)] = inst_28122);

return statearr_28201;
})();
var statearr_28202_28243 = state_28181__$1;
(statearr_28202_28243[(2)] = null);

(statearr_28202_28243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (3))){
var inst_28179 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28181__$1,inst_28179);
} else {
if((state_val_28182 === (12))){
var inst_28156 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
var statearr_28203_28244 = state_28181__$1;
(statearr_28203_28244[(2)] = inst_28156);

(statearr_28203_28244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (2))){
var state_28181__$1 = state_28181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28181__$1,(4),ch);
} else {
if((state_val_28182 === (23))){
var state_28181__$1 = state_28181;
var statearr_28204_28245 = state_28181__$1;
(statearr_28204_28245[(2)] = null);

(statearr_28204_28245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (19))){
var inst_28112 = (state_28181[(8)]);
var inst_28162 = (state_28181[(11)]);
var inst_28164 = cljs.core.async.muxch_STAR_.call(null,inst_28162);
var state_28181__$1 = state_28181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28181__$1,(22),inst_28164,inst_28112);
} else {
if((state_val_28182 === (11))){
var inst_28136 = (state_28181[(10)]);
var inst_28122 = (state_28181[(16)]);
var inst_28136__$1 = cljs.core.seq.call(null,inst_28122);
var state_28181__$1 = (function (){var statearr_28205 = state_28181;
(statearr_28205[(10)] = inst_28136__$1);

return statearr_28205;
})();
if(inst_28136__$1){
var statearr_28206_28246 = state_28181__$1;
(statearr_28206_28246[(1)] = (13));

} else {
var statearr_28207_28247 = state_28181__$1;
(statearr_28207_28247[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (9))){
var inst_28158 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
var statearr_28208_28248 = state_28181__$1;
(statearr_28208_28248[(2)] = inst_28158);

(statearr_28208_28248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (5))){
var inst_28119 = cljs.core.deref.call(null,mults);
var inst_28120 = cljs.core.vals.call(null,inst_28119);
var inst_28121 = cljs.core.seq.call(null,inst_28120);
var inst_28122 = inst_28121;
var inst_28123 = null;
var inst_28124 = (0);
var inst_28125 = (0);
var state_28181__$1 = (function (){var statearr_28209 = state_28181;
(statearr_28209[(13)] = inst_28123);

(statearr_28209[(14)] = inst_28124);

(statearr_28209[(15)] = inst_28125);

(statearr_28209[(16)] = inst_28122);

return statearr_28209;
})();
var statearr_28210_28249 = state_28181__$1;
(statearr_28210_28249[(2)] = null);

(statearr_28210_28249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (14))){
var state_28181__$1 = state_28181;
var statearr_28214_28250 = state_28181__$1;
(statearr_28214_28250[(2)] = null);

(statearr_28214_28250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (16))){
var inst_28136 = (state_28181[(10)]);
var inst_28140 = cljs.core.chunk_first.call(null,inst_28136);
var inst_28141 = cljs.core.chunk_rest.call(null,inst_28136);
var inst_28142 = cljs.core.count.call(null,inst_28140);
var inst_28122 = inst_28141;
var inst_28123 = inst_28140;
var inst_28124 = inst_28142;
var inst_28125 = (0);
var state_28181__$1 = (function (){var statearr_28215 = state_28181;
(statearr_28215[(13)] = inst_28123);

(statearr_28215[(14)] = inst_28124);

(statearr_28215[(15)] = inst_28125);

(statearr_28215[(16)] = inst_28122);

return statearr_28215;
})();
var statearr_28216_28251 = state_28181__$1;
(statearr_28216_28251[(2)] = null);

(statearr_28216_28251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (10))){
var inst_28123 = (state_28181[(13)]);
var inst_28124 = (state_28181[(14)]);
var inst_28125 = (state_28181[(15)]);
var inst_28122 = (state_28181[(16)]);
var inst_28130 = cljs.core._nth.call(null,inst_28123,inst_28125);
var inst_28131 = cljs.core.async.muxch_STAR_.call(null,inst_28130);
var inst_28132 = cljs.core.async.close_BANG_.call(null,inst_28131);
var inst_28133 = (inst_28125 + (1));
var tmp28211 = inst_28123;
var tmp28212 = inst_28124;
var tmp28213 = inst_28122;
var inst_28122__$1 = tmp28213;
var inst_28123__$1 = tmp28211;
var inst_28124__$1 = tmp28212;
var inst_28125__$1 = inst_28133;
var state_28181__$1 = (function (){var statearr_28217 = state_28181;
(statearr_28217[(13)] = inst_28123__$1);

(statearr_28217[(17)] = inst_28132);

(statearr_28217[(14)] = inst_28124__$1);

(statearr_28217[(15)] = inst_28125__$1);

(statearr_28217[(16)] = inst_28122__$1);

return statearr_28217;
})();
var statearr_28218_28252 = state_28181__$1;
(statearr_28218_28252[(2)] = null);

(statearr_28218_28252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (18))){
var inst_28151 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
var statearr_28219_28253 = state_28181__$1;
(statearr_28219_28253[(2)] = inst_28151);

(statearr_28219_28253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (8))){
var inst_28124 = (state_28181[(14)]);
var inst_28125 = (state_28181[(15)]);
var inst_28127 = (inst_28125 < inst_28124);
var inst_28128 = inst_28127;
var state_28181__$1 = state_28181;
if(cljs.core.truth_(inst_28128)){
var statearr_28220_28254 = state_28181__$1;
(statearr_28220_28254[(1)] = (10));

} else {
var statearr_28221_28255 = state_28181__$1;
(statearr_28221_28255[(1)] = (11));

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
});})(c__26993__auto___28227,mults,ensure_mult,p))
;
return ((function (switch__26903__auto__,c__26993__auto___28227,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26904__auto__ = null;
var cljs$core$async$state_machine__26904__auto____0 = (function (){
var statearr_28222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28222[(0)] = cljs$core$async$state_machine__26904__auto__);

(statearr_28222[(1)] = (1));

return statearr_28222;
});
var cljs$core$async$state_machine__26904__auto____1 = (function (state_28181){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_28181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e28223){if((e28223 instanceof Object)){
var ex__26907__auto__ = e28223;
var statearr_28224_28256 = state_28181;
(statearr_28224_28256[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28257 = state_28181;
state_28181 = G__28257;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$state_machine__26904__auto__ = function(state_28181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26904__auto____1.call(this,state_28181);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26904__auto____0;
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26904__auto____1;
return cljs$core$async$state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___28227,mults,ensure_mult,p))
})();
var state__26995__auto__ = (function (){var statearr_28225 = f__26994__auto__.call(null);
(statearr_28225[(6)] = c__26993__auto___28227);

return statearr_28225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___28227,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28259 = arguments.length;
switch (G__28259) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28262 = arguments.length;
switch (G__28262) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28265 = arguments.length;
switch (G__28265) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26993__auto___28332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___28332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___28332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28304){
var state_val_28305 = (state_28304[(1)]);
if((state_val_28305 === (7))){
var state_28304__$1 = state_28304;
var statearr_28306_28333 = state_28304__$1;
(statearr_28306_28333[(2)] = null);

(statearr_28306_28333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (1))){
var state_28304__$1 = state_28304;
var statearr_28307_28334 = state_28304__$1;
(statearr_28307_28334[(2)] = null);

(statearr_28307_28334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (4))){
var inst_28268 = (state_28304[(7)]);
var inst_28270 = (inst_28268 < cnt);
var state_28304__$1 = state_28304;
if(cljs.core.truth_(inst_28270)){
var statearr_28308_28335 = state_28304__$1;
(statearr_28308_28335[(1)] = (6));

} else {
var statearr_28309_28336 = state_28304__$1;
(statearr_28309_28336[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (15))){
var inst_28300 = (state_28304[(2)]);
var state_28304__$1 = state_28304;
var statearr_28310_28337 = state_28304__$1;
(statearr_28310_28337[(2)] = inst_28300);

(statearr_28310_28337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (13))){
var inst_28293 = cljs.core.async.close_BANG_.call(null,out);
var state_28304__$1 = state_28304;
var statearr_28311_28338 = state_28304__$1;
(statearr_28311_28338[(2)] = inst_28293);

(statearr_28311_28338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (6))){
var state_28304__$1 = state_28304;
var statearr_28312_28339 = state_28304__$1;
(statearr_28312_28339[(2)] = null);

(statearr_28312_28339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (3))){
var inst_28302 = (state_28304[(2)]);
var state_28304__$1 = state_28304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28304__$1,inst_28302);
} else {
if((state_val_28305 === (12))){
var inst_28290 = (state_28304[(8)]);
var inst_28290__$1 = (state_28304[(2)]);
var inst_28291 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28290__$1);
var state_28304__$1 = (function (){var statearr_28313 = state_28304;
(statearr_28313[(8)] = inst_28290__$1);

return statearr_28313;
})();
if(cljs.core.truth_(inst_28291)){
var statearr_28314_28340 = state_28304__$1;
(statearr_28314_28340[(1)] = (13));

} else {
var statearr_28315_28341 = state_28304__$1;
(statearr_28315_28341[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (2))){
var inst_28267 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28268 = (0);
var state_28304__$1 = (function (){var statearr_28316 = state_28304;
(statearr_28316[(7)] = inst_28268);

(statearr_28316[(9)] = inst_28267);

return statearr_28316;
})();
var statearr_28317_28342 = state_28304__$1;
(statearr_28317_28342[(2)] = null);

(statearr_28317_28342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (11))){
var inst_28268 = (state_28304[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28304,(10),Object,null,(9));
var inst_28277 = chs__$1.call(null,inst_28268);
var inst_28278 = done.call(null,inst_28268);
var inst_28279 = cljs.core.async.take_BANG_.call(null,inst_28277,inst_28278);
var state_28304__$1 = state_28304;
var statearr_28318_28343 = state_28304__$1;
(statearr_28318_28343[(2)] = inst_28279);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28304__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (9))){
var inst_28268 = (state_28304[(7)]);
var inst_28281 = (state_28304[(2)]);
var inst_28282 = (inst_28268 + (1));
var inst_28268__$1 = inst_28282;
var state_28304__$1 = (function (){var statearr_28319 = state_28304;
(statearr_28319[(7)] = inst_28268__$1);

(statearr_28319[(10)] = inst_28281);

return statearr_28319;
})();
var statearr_28320_28344 = state_28304__$1;
(statearr_28320_28344[(2)] = null);

(statearr_28320_28344[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (5))){
var inst_28288 = (state_28304[(2)]);
var state_28304__$1 = (function (){var statearr_28321 = state_28304;
(statearr_28321[(11)] = inst_28288);

return statearr_28321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28304__$1,(12),dchan);
} else {
if((state_val_28305 === (14))){
var inst_28290 = (state_28304[(8)]);
var inst_28295 = cljs.core.apply.call(null,f,inst_28290);
var state_28304__$1 = state_28304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28304__$1,(16),out,inst_28295);
} else {
if((state_val_28305 === (16))){
var inst_28297 = (state_28304[(2)]);
var state_28304__$1 = (function (){var statearr_28322 = state_28304;
(statearr_28322[(12)] = inst_28297);

return statearr_28322;
})();
var statearr_28323_28345 = state_28304__$1;
(statearr_28323_28345[(2)] = null);

(statearr_28323_28345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (10))){
var inst_28272 = (state_28304[(2)]);
var inst_28273 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28304__$1 = (function (){var statearr_28324 = state_28304;
(statearr_28324[(13)] = inst_28272);

return statearr_28324;
})();
var statearr_28325_28346 = state_28304__$1;
(statearr_28325_28346[(2)] = inst_28273);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28304__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (8))){
var inst_28286 = (state_28304[(2)]);
var state_28304__$1 = state_28304;
var statearr_28326_28347 = state_28304__$1;
(statearr_28326_28347[(2)] = inst_28286);

(statearr_28326_28347[(1)] = (5));


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
});})(c__26993__auto___28332,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26903__auto__,c__26993__auto___28332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26904__auto__ = null;
var cljs$core$async$state_machine__26904__auto____0 = (function (){
var statearr_28327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28327[(0)] = cljs$core$async$state_machine__26904__auto__);

(statearr_28327[(1)] = (1));

return statearr_28327;
});
var cljs$core$async$state_machine__26904__auto____1 = (function (state_28304){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_28304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e28328){if((e28328 instanceof Object)){
var ex__26907__auto__ = e28328;
var statearr_28329_28348 = state_28304;
(statearr_28329_28348[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28349 = state_28304;
state_28304 = G__28349;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$state_machine__26904__auto__ = function(state_28304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26904__auto____1.call(this,state_28304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26904__auto____0;
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26904__auto____1;
return cljs$core$async$state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___28332,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26995__auto__ = (function (){var statearr_28330 = f__26994__auto__.call(null);
(statearr_28330[(6)] = c__26993__auto___28332);

return statearr_28330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___28332,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28352 = arguments.length;
switch (G__28352) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26993__auto___28406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___28406,out){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___28406,out){
return (function (state_28384){
var state_val_28385 = (state_28384[(1)]);
if((state_val_28385 === (7))){
var inst_28363 = (state_28384[(7)]);
var inst_28364 = (state_28384[(8)]);
var inst_28363__$1 = (state_28384[(2)]);
var inst_28364__$1 = cljs.core.nth.call(null,inst_28363__$1,(0),null);
var inst_28365 = cljs.core.nth.call(null,inst_28363__$1,(1),null);
var inst_28366 = (inst_28364__$1 == null);
var state_28384__$1 = (function (){var statearr_28386 = state_28384;
(statearr_28386[(7)] = inst_28363__$1);

(statearr_28386[(9)] = inst_28365);

(statearr_28386[(8)] = inst_28364__$1);

return statearr_28386;
})();
if(cljs.core.truth_(inst_28366)){
var statearr_28387_28407 = state_28384__$1;
(statearr_28387_28407[(1)] = (8));

} else {
var statearr_28388_28408 = state_28384__$1;
(statearr_28388_28408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (1))){
var inst_28353 = cljs.core.vec.call(null,chs);
var inst_28354 = inst_28353;
var state_28384__$1 = (function (){var statearr_28389 = state_28384;
(statearr_28389[(10)] = inst_28354);

return statearr_28389;
})();
var statearr_28390_28409 = state_28384__$1;
(statearr_28390_28409[(2)] = null);

(statearr_28390_28409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (4))){
var inst_28354 = (state_28384[(10)]);
var state_28384__$1 = state_28384;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28384__$1,(7),inst_28354);
} else {
if((state_val_28385 === (6))){
var inst_28380 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28391_28410 = state_28384__$1;
(statearr_28391_28410[(2)] = inst_28380);

(statearr_28391_28410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (3))){
var inst_28382 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28384__$1,inst_28382);
} else {
if((state_val_28385 === (2))){
var inst_28354 = (state_28384[(10)]);
var inst_28356 = cljs.core.count.call(null,inst_28354);
var inst_28357 = (inst_28356 > (0));
var state_28384__$1 = state_28384;
if(cljs.core.truth_(inst_28357)){
var statearr_28393_28411 = state_28384__$1;
(statearr_28393_28411[(1)] = (4));

} else {
var statearr_28394_28412 = state_28384__$1;
(statearr_28394_28412[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (11))){
var inst_28354 = (state_28384[(10)]);
var inst_28373 = (state_28384[(2)]);
var tmp28392 = inst_28354;
var inst_28354__$1 = tmp28392;
var state_28384__$1 = (function (){var statearr_28395 = state_28384;
(statearr_28395[(11)] = inst_28373);

(statearr_28395[(10)] = inst_28354__$1);

return statearr_28395;
})();
var statearr_28396_28413 = state_28384__$1;
(statearr_28396_28413[(2)] = null);

(statearr_28396_28413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (9))){
var inst_28364 = (state_28384[(8)]);
var state_28384__$1 = state_28384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28384__$1,(11),out,inst_28364);
} else {
if((state_val_28385 === (5))){
var inst_28378 = cljs.core.async.close_BANG_.call(null,out);
var state_28384__$1 = state_28384;
var statearr_28397_28414 = state_28384__$1;
(statearr_28397_28414[(2)] = inst_28378);

(statearr_28397_28414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (10))){
var inst_28376 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28398_28415 = state_28384__$1;
(statearr_28398_28415[(2)] = inst_28376);

(statearr_28398_28415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (8))){
var inst_28363 = (state_28384[(7)]);
var inst_28365 = (state_28384[(9)]);
var inst_28354 = (state_28384[(10)]);
var inst_28364 = (state_28384[(8)]);
var inst_28368 = (function (){var cs = inst_28354;
var vec__28359 = inst_28363;
var v = inst_28364;
var c = inst_28365;
return ((function (cs,vec__28359,v,c,inst_28363,inst_28365,inst_28354,inst_28364,state_val_28385,c__26993__auto___28406,out){
return (function (p1__28350_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28350_SHARP_);
});
;})(cs,vec__28359,v,c,inst_28363,inst_28365,inst_28354,inst_28364,state_val_28385,c__26993__auto___28406,out))
})();
var inst_28369 = cljs.core.filterv.call(null,inst_28368,inst_28354);
var inst_28354__$1 = inst_28369;
var state_28384__$1 = (function (){var statearr_28399 = state_28384;
(statearr_28399[(10)] = inst_28354__$1);

return statearr_28399;
})();
var statearr_28400_28416 = state_28384__$1;
(statearr_28400_28416[(2)] = null);

(statearr_28400_28416[(1)] = (2));


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
});})(c__26993__auto___28406,out))
;
return ((function (switch__26903__auto__,c__26993__auto___28406,out){
return (function() {
var cljs$core$async$state_machine__26904__auto__ = null;
var cljs$core$async$state_machine__26904__auto____0 = (function (){
var statearr_28401 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28401[(0)] = cljs$core$async$state_machine__26904__auto__);

(statearr_28401[(1)] = (1));

return statearr_28401;
});
var cljs$core$async$state_machine__26904__auto____1 = (function (state_28384){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_28384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e28402){if((e28402 instanceof Object)){
var ex__26907__auto__ = e28402;
var statearr_28403_28417 = state_28384;
(statearr_28403_28417[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28418 = state_28384;
state_28384 = G__28418;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$state_machine__26904__auto__ = function(state_28384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26904__auto____1.call(this,state_28384);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26904__auto____0;
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26904__auto____1;
return cljs$core$async$state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___28406,out))
})();
var state__26995__auto__ = (function (){var statearr_28404 = f__26994__auto__.call(null);
(statearr_28404[(6)] = c__26993__auto___28406);

return statearr_28404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___28406,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28420 = arguments.length;
switch (G__28420) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26993__auto___28465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___28465,out){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___28465,out){
return (function (state_28444){
var state_val_28445 = (state_28444[(1)]);
if((state_val_28445 === (7))){
var inst_28426 = (state_28444[(7)]);
var inst_28426__$1 = (state_28444[(2)]);
var inst_28427 = (inst_28426__$1 == null);
var inst_28428 = cljs.core.not.call(null,inst_28427);
var state_28444__$1 = (function (){var statearr_28446 = state_28444;
(statearr_28446[(7)] = inst_28426__$1);

return statearr_28446;
})();
if(inst_28428){
var statearr_28447_28466 = state_28444__$1;
(statearr_28447_28466[(1)] = (8));

} else {
var statearr_28448_28467 = state_28444__$1;
(statearr_28448_28467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28445 === (1))){
var inst_28421 = (0);
var state_28444__$1 = (function (){var statearr_28449 = state_28444;
(statearr_28449[(8)] = inst_28421);

return statearr_28449;
})();
var statearr_28450_28468 = state_28444__$1;
(statearr_28450_28468[(2)] = null);

(statearr_28450_28468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28445 === (4))){
var state_28444__$1 = state_28444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28444__$1,(7),ch);
} else {
if((state_val_28445 === (6))){
var inst_28439 = (state_28444[(2)]);
var state_28444__$1 = state_28444;
var statearr_28451_28469 = state_28444__$1;
(statearr_28451_28469[(2)] = inst_28439);

(statearr_28451_28469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28445 === (3))){
var inst_28441 = (state_28444[(2)]);
var inst_28442 = cljs.core.async.close_BANG_.call(null,out);
var state_28444__$1 = (function (){var statearr_28452 = state_28444;
(statearr_28452[(9)] = inst_28441);

return statearr_28452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28444__$1,inst_28442);
} else {
if((state_val_28445 === (2))){
var inst_28421 = (state_28444[(8)]);
var inst_28423 = (inst_28421 < n);
var state_28444__$1 = state_28444;
if(cljs.core.truth_(inst_28423)){
var statearr_28453_28470 = state_28444__$1;
(statearr_28453_28470[(1)] = (4));

} else {
var statearr_28454_28471 = state_28444__$1;
(statearr_28454_28471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28445 === (11))){
var inst_28421 = (state_28444[(8)]);
var inst_28431 = (state_28444[(2)]);
var inst_28432 = (inst_28421 + (1));
var inst_28421__$1 = inst_28432;
var state_28444__$1 = (function (){var statearr_28455 = state_28444;
(statearr_28455[(10)] = inst_28431);

(statearr_28455[(8)] = inst_28421__$1);

return statearr_28455;
})();
var statearr_28456_28472 = state_28444__$1;
(statearr_28456_28472[(2)] = null);

(statearr_28456_28472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28445 === (9))){
var state_28444__$1 = state_28444;
var statearr_28457_28473 = state_28444__$1;
(statearr_28457_28473[(2)] = null);

(statearr_28457_28473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28445 === (5))){
var state_28444__$1 = state_28444;
var statearr_28458_28474 = state_28444__$1;
(statearr_28458_28474[(2)] = null);

(statearr_28458_28474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28445 === (10))){
var inst_28436 = (state_28444[(2)]);
var state_28444__$1 = state_28444;
var statearr_28459_28475 = state_28444__$1;
(statearr_28459_28475[(2)] = inst_28436);

(statearr_28459_28475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28445 === (8))){
var inst_28426 = (state_28444[(7)]);
var state_28444__$1 = state_28444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28444__$1,(11),out,inst_28426);
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
});})(c__26993__auto___28465,out))
;
return ((function (switch__26903__auto__,c__26993__auto___28465,out){
return (function() {
var cljs$core$async$state_machine__26904__auto__ = null;
var cljs$core$async$state_machine__26904__auto____0 = (function (){
var statearr_28460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28460[(0)] = cljs$core$async$state_machine__26904__auto__);

(statearr_28460[(1)] = (1));

return statearr_28460;
});
var cljs$core$async$state_machine__26904__auto____1 = (function (state_28444){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_28444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e28461){if((e28461 instanceof Object)){
var ex__26907__auto__ = e28461;
var statearr_28462_28476 = state_28444;
(statearr_28462_28476[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28477 = state_28444;
state_28444 = G__28477;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$state_machine__26904__auto__ = function(state_28444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26904__auto____1.call(this,state_28444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26904__auto____0;
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26904__auto____1;
return cljs$core$async$state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___28465,out))
})();
var state__26995__auto__ = (function (){var statearr_28463 = f__26994__auto__.call(null);
(statearr_28463[(6)] = c__26993__auto___28465);

return statearr_28463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___28465,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28479 = (function (f,ch,meta28480){
this.f = f;
this.ch = ch;
this.meta28480 = meta28480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28481,meta28480__$1){
var self__ = this;
var _28481__$1 = this;
return (new cljs.core.async.t_cljs$core$async28479(self__.f,self__.ch,meta28480__$1));
});

cljs.core.async.t_cljs$core$async28479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28481){
var self__ = this;
var _28481__$1 = this;
return self__.meta28480;
});

cljs.core.async.t_cljs$core$async28479.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28479.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28479.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28479.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28479.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28482 = (function (f,ch,meta28480,_,fn1,meta28483){
this.f = f;
this.ch = ch;
this.meta28480 = meta28480;
this._ = _;
this.fn1 = fn1;
this.meta28483 = meta28483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28484,meta28483__$1){
var self__ = this;
var _28484__$1 = this;
return (new cljs.core.async.t_cljs$core$async28482(self__.f,self__.ch,self__.meta28480,self__._,self__.fn1,meta28483__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28484){
var self__ = this;
var _28484__$1 = this;
return self__.meta28483;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28482.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28482.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28478_SHARP_){
return f1.call(null,(((p1__28478_SHARP_ == null))?null:self__.f.call(null,p1__28478_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28482.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28480","meta28480",-483998124,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28479","cljs.core.async/t_cljs$core$async28479",-1125746360,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28483","meta28483",1844379163,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28482";

cljs.core.async.t_cljs$core$async28482.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28482");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28482.
 */
cljs.core.async.__GT_t_cljs$core$async28482 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28482(f__$1,ch__$1,meta28480__$1,___$2,fn1__$1,meta28483){
return (new cljs.core.async.t_cljs$core$async28482(f__$1,ch__$1,meta28480__$1,___$2,fn1__$1,meta28483));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28482(self__.f,self__.ch,self__.meta28480,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28479.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28479.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28480","meta28480",-483998124,null)], null);
});

cljs.core.async.t_cljs$core$async28479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28479";

cljs.core.async.t_cljs$core$async28479.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28479");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28479.
 */
cljs.core.async.__GT_t_cljs$core$async28479 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28479(f__$1,ch__$1,meta28480){
return (new cljs.core.async.t_cljs$core$async28479(f__$1,ch__$1,meta28480));
});

}

return (new cljs.core.async.t_cljs$core$async28479(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28485 = (function (f,ch,meta28486){
this.f = f;
this.ch = ch;
this.meta28486 = meta28486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28487,meta28486__$1){
var self__ = this;
var _28487__$1 = this;
return (new cljs.core.async.t_cljs$core$async28485(self__.f,self__.ch,meta28486__$1));
});

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28487){
var self__ = this;
var _28487__$1 = this;
return self__.meta28486;
});

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28486","meta28486",-913051404,null)], null);
});

cljs.core.async.t_cljs$core$async28485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28485";

cljs.core.async.t_cljs$core$async28485.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28485");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28485.
 */
cljs.core.async.__GT_t_cljs$core$async28485 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28485(f__$1,ch__$1,meta28486){
return (new cljs.core.async.t_cljs$core$async28485(f__$1,ch__$1,meta28486));
});

}

return (new cljs.core.async.t_cljs$core$async28485(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28488 = (function (p,ch,meta28489){
this.p = p;
this.ch = ch;
this.meta28489 = meta28489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28490,meta28489__$1){
var self__ = this;
var _28490__$1 = this;
return (new cljs.core.async.t_cljs$core$async28488(self__.p,self__.ch,meta28489__$1));
});

cljs.core.async.t_cljs$core$async28488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28490){
var self__ = this;
var _28490__$1 = this;
return self__.meta28489;
});

cljs.core.async.t_cljs$core$async28488.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28488.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28488.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28488.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28489","meta28489",-1210331152,null)], null);
});

cljs.core.async.t_cljs$core$async28488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28488";

cljs.core.async.t_cljs$core$async28488.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28488");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28488.
 */
cljs.core.async.__GT_t_cljs$core$async28488 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28488(p__$1,ch__$1,meta28489){
return (new cljs.core.async.t_cljs$core$async28488(p__$1,ch__$1,meta28489));
});

}

return (new cljs.core.async.t_cljs$core$async28488(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28492 = arguments.length;
switch (G__28492) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26993__auto___28532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___28532,out){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___28532,out){
return (function (state_28513){
var state_val_28514 = (state_28513[(1)]);
if((state_val_28514 === (7))){
var inst_28509 = (state_28513[(2)]);
var state_28513__$1 = state_28513;
var statearr_28515_28533 = state_28513__$1;
(statearr_28515_28533[(2)] = inst_28509);

(statearr_28515_28533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28514 === (1))){
var state_28513__$1 = state_28513;
var statearr_28516_28534 = state_28513__$1;
(statearr_28516_28534[(2)] = null);

(statearr_28516_28534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28514 === (4))){
var inst_28495 = (state_28513[(7)]);
var inst_28495__$1 = (state_28513[(2)]);
var inst_28496 = (inst_28495__$1 == null);
var state_28513__$1 = (function (){var statearr_28517 = state_28513;
(statearr_28517[(7)] = inst_28495__$1);

return statearr_28517;
})();
if(cljs.core.truth_(inst_28496)){
var statearr_28518_28535 = state_28513__$1;
(statearr_28518_28535[(1)] = (5));

} else {
var statearr_28519_28536 = state_28513__$1;
(statearr_28519_28536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28514 === (6))){
var inst_28495 = (state_28513[(7)]);
var inst_28500 = p.call(null,inst_28495);
var state_28513__$1 = state_28513;
if(cljs.core.truth_(inst_28500)){
var statearr_28520_28537 = state_28513__$1;
(statearr_28520_28537[(1)] = (8));

} else {
var statearr_28521_28538 = state_28513__$1;
(statearr_28521_28538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28514 === (3))){
var inst_28511 = (state_28513[(2)]);
var state_28513__$1 = state_28513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28513__$1,inst_28511);
} else {
if((state_val_28514 === (2))){
var state_28513__$1 = state_28513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28513__$1,(4),ch);
} else {
if((state_val_28514 === (11))){
var inst_28503 = (state_28513[(2)]);
var state_28513__$1 = state_28513;
var statearr_28522_28539 = state_28513__$1;
(statearr_28522_28539[(2)] = inst_28503);

(statearr_28522_28539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28514 === (9))){
var state_28513__$1 = state_28513;
var statearr_28523_28540 = state_28513__$1;
(statearr_28523_28540[(2)] = null);

(statearr_28523_28540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28514 === (5))){
var inst_28498 = cljs.core.async.close_BANG_.call(null,out);
var state_28513__$1 = state_28513;
var statearr_28524_28541 = state_28513__$1;
(statearr_28524_28541[(2)] = inst_28498);

(statearr_28524_28541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28514 === (10))){
var inst_28506 = (state_28513[(2)]);
var state_28513__$1 = (function (){var statearr_28525 = state_28513;
(statearr_28525[(8)] = inst_28506);

return statearr_28525;
})();
var statearr_28526_28542 = state_28513__$1;
(statearr_28526_28542[(2)] = null);

(statearr_28526_28542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28514 === (8))){
var inst_28495 = (state_28513[(7)]);
var state_28513__$1 = state_28513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28513__$1,(11),out,inst_28495);
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
});})(c__26993__auto___28532,out))
;
return ((function (switch__26903__auto__,c__26993__auto___28532,out){
return (function() {
var cljs$core$async$state_machine__26904__auto__ = null;
var cljs$core$async$state_machine__26904__auto____0 = (function (){
var statearr_28527 = [null,null,null,null,null,null,null,null,null];
(statearr_28527[(0)] = cljs$core$async$state_machine__26904__auto__);

(statearr_28527[(1)] = (1));

return statearr_28527;
});
var cljs$core$async$state_machine__26904__auto____1 = (function (state_28513){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_28513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e28528){if((e28528 instanceof Object)){
var ex__26907__auto__ = e28528;
var statearr_28529_28543 = state_28513;
(statearr_28529_28543[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28544 = state_28513;
state_28513 = G__28544;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$state_machine__26904__auto__ = function(state_28513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26904__auto____1.call(this,state_28513);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26904__auto____0;
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26904__auto____1;
return cljs$core$async$state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___28532,out))
})();
var state__26995__auto__ = (function (){var statearr_28530 = f__26994__auto__.call(null);
(statearr_28530[(6)] = c__26993__auto___28532);

return statearr_28530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___28532,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28546 = arguments.length;
switch (G__28546) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto__){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto__){
return (function (state_28609){
var state_val_28610 = (state_28609[(1)]);
if((state_val_28610 === (7))){
var inst_28605 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
var statearr_28611_28649 = state_28609__$1;
(statearr_28611_28649[(2)] = inst_28605);

(statearr_28611_28649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (20))){
var inst_28575 = (state_28609[(7)]);
var inst_28586 = (state_28609[(2)]);
var inst_28587 = cljs.core.next.call(null,inst_28575);
var inst_28561 = inst_28587;
var inst_28562 = null;
var inst_28563 = (0);
var inst_28564 = (0);
var state_28609__$1 = (function (){var statearr_28612 = state_28609;
(statearr_28612[(8)] = inst_28586);

(statearr_28612[(9)] = inst_28563);

(statearr_28612[(10)] = inst_28564);

(statearr_28612[(11)] = inst_28561);

(statearr_28612[(12)] = inst_28562);

return statearr_28612;
})();
var statearr_28613_28650 = state_28609__$1;
(statearr_28613_28650[(2)] = null);

(statearr_28613_28650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (1))){
var state_28609__$1 = state_28609;
var statearr_28614_28651 = state_28609__$1;
(statearr_28614_28651[(2)] = null);

(statearr_28614_28651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (4))){
var inst_28550 = (state_28609[(13)]);
var inst_28550__$1 = (state_28609[(2)]);
var inst_28551 = (inst_28550__$1 == null);
var state_28609__$1 = (function (){var statearr_28615 = state_28609;
(statearr_28615[(13)] = inst_28550__$1);

return statearr_28615;
})();
if(cljs.core.truth_(inst_28551)){
var statearr_28616_28652 = state_28609__$1;
(statearr_28616_28652[(1)] = (5));

} else {
var statearr_28617_28653 = state_28609__$1;
(statearr_28617_28653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (15))){
var state_28609__$1 = state_28609;
var statearr_28621_28654 = state_28609__$1;
(statearr_28621_28654[(2)] = null);

(statearr_28621_28654[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (21))){
var state_28609__$1 = state_28609;
var statearr_28622_28655 = state_28609__$1;
(statearr_28622_28655[(2)] = null);

(statearr_28622_28655[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (13))){
var inst_28563 = (state_28609[(9)]);
var inst_28564 = (state_28609[(10)]);
var inst_28561 = (state_28609[(11)]);
var inst_28562 = (state_28609[(12)]);
var inst_28571 = (state_28609[(2)]);
var inst_28572 = (inst_28564 + (1));
var tmp28618 = inst_28563;
var tmp28619 = inst_28561;
var tmp28620 = inst_28562;
var inst_28561__$1 = tmp28619;
var inst_28562__$1 = tmp28620;
var inst_28563__$1 = tmp28618;
var inst_28564__$1 = inst_28572;
var state_28609__$1 = (function (){var statearr_28623 = state_28609;
(statearr_28623[(9)] = inst_28563__$1);

(statearr_28623[(10)] = inst_28564__$1);

(statearr_28623[(14)] = inst_28571);

(statearr_28623[(11)] = inst_28561__$1);

(statearr_28623[(12)] = inst_28562__$1);

return statearr_28623;
})();
var statearr_28624_28656 = state_28609__$1;
(statearr_28624_28656[(2)] = null);

(statearr_28624_28656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (22))){
var state_28609__$1 = state_28609;
var statearr_28625_28657 = state_28609__$1;
(statearr_28625_28657[(2)] = null);

(statearr_28625_28657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (6))){
var inst_28550 = (state_28609[(13)]);
var inst_28559 = f.call(null,inst_28550);
var inst_28560 = cljs.core.seq.call(null,inst_28559);
var inst_28561 = inst_28560;
var inst_28562 = null;
var inst_28563 = (0);
var inst_28564 = (0);
var state_28609__$1 = (function (){var statearr_28626 = state_28609;
(statearr_28626[(9)] = inst_28563);

(statearr_28626[(10)] = inst_28564);

(statearr_28626[(11)] = inst_28561);

(statearr_28626[(12)] = inst_28562);

return statearr_28626;
})();
var statearr_28627_28658 = state_28609__$1;
(statearr_28627_28658[(2)] = null);

(statearr_28627_28658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (17))){
var inst_28575 = (state_28609[(7)]);
var inst_28579 = cljs.core.chunk_first.call(null,inst_28575);
var inst_28580 = cljs.core.chunk_rest.call(null,inst_28575);
var inst_28581 = cljs.core.count.call(null,inst_28579);
var inst_28561 = inst_28580;
var inst_28562 = inst_28579;
var inst_28563 = inst_28581;
var inst_28564 = (0);
var state_28609__$1 = (function (){var statearr_28628 = state_28609;
(statearr_28628[(9)] = inst_28563);

(statearr_28628[(10)] = inst_28564);

(statearr_28628[(11)] = inst_28561);

(statearr_28628[(12)] = inst_28562);

return statearr_28628;
})();
var statearr_28629_28659 = state_28609__$1;
(statearr_28629_28659[(2)] = null);

(statearr_28629_28659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (3))){
var inst_28607 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28609__$1,inst_28607);
} else {
if((state_val_28610 === (12))){
var inst_28595 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
var statearr_28630_28660 = state_28609__$1;
(statearr_28630_28660[(2)] = inst_28595);

(statearr_28630_28660[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (2))){
var state_28609__$1 = state_28609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28609__$1,(4),in$);
} else {
if((state_val_28610 === (23))){
var inst_28603 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
var statearr_28631_28661 = state_28609__$1;
(statearr_28631_28661[(2)] = inst_28603);

(statearr_28631_28661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (19))){
var inst_28590 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
var statearr_28632_28662 = state_28609__$1;
(statearr_28632_28662[(2)] = inst_28590);

(statearr_28632_28662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (11))){
var inst_28575 = (state_28609[(7)]);
var inst_28561 = (state_28609[(11)]);
var inst_28575__$1 = cljs.core.seq.call(null,inst_28561);
var state_28609__$1 = (function (){var statearr_28633 = state_28609;
(statearr_28633[(7)] = inst_28575__$1);

return statearr_28633;
})();
if(inst_28575__$1){
var statearr_28634_28663 = state_28609__$1;
(statearr_28634_28663[(1)] = (14));

} else {
var statearr_28635_28664 = state_28609__$1;
(statearr_28635_28664[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (9))){
var inst_28597 = (state_28609[(2)]);
var inst_28598 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28609__$1 = (function (){var statearr_28636 = state_28609;
(statearr_28636[(15)] = inst_28597);

return statearr_28636;
})();
if(cljs.core.truth_(inst_28598)){
var statearr_28637_28665 = state_28609__$1;
(statearr_28637_28665[(1)] = (21));

} else {
var statearr_28638_28666 = state_28609__$1;
(statearr_28638_28666[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (5))){
var inst_28553 = cljs.core.async.close_BANG_.call(null,out);
var state_28609__$1 = state_28609;
var statearr_28639_28667 = state_28609__$1;
(statearr_28639_28667[(2)] = inst_28553);

(statearr_28639_28667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (14))){
var inst_28575 = (state_28609[(7)]);
var inst_28577 = cljs.core.chunked_seq_QMARK_.call(null,inst_28575);
var state_28609__$1 = state_28609;
if(inst_28577){
var statearr_28640_28668 = state_28609__$1;
(statearr_28640_28668[(1)] = (17));

} else {
var statearr_28641_28669 = state_28609__$1;
(statearr_28641_28669[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (16))){
var inst_28593 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
var statearr_28642_28670 = state_28609__$1;
(statearr_28642_28670[(2)] = inst_28593);

(statearr_28642_28670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (10))){
var inst_28564 = (state_28609[(10)]);
var inst_28562 = (state_28609[(12)]);
var inst_28569 = cljs.core._nth.call(null,inst_28562,inst_28564);
var state_28609__$1 = state_28609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28609__$1,(13),out,inst_28569);
} else {
if((state_val_28610 === (18))){
var inst_28575 = (state_28609[(7)]);
var inst_28584 = cljs.core.first.call(null,inst_28575);
var state_28609__$1 = state_28609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28609__$1,(20),out,inst_28584);
} else {
if((state_val_28610 === (8))){
var inst_28563 = (state_28609[(9)]);
var inst_28564 = (state_28609[(10)]);
var inst_28566 = (inst_28564 < inst_28563);
var inst_28567 = inst_28566;
var state_28609__$1 = state_28609;
if(cljs.core.truth_(inst_28567)){
var statearr_28643_28671 = state_28609__$1;
(statearr_28643_28671[(1)] = (10));

} else {
var statearr_28644_28672 = state_28609__$1;
(statearr_28644_28672[(1)] = (11));

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
});})(c__26993__auto__))
;
return ((function (switch__26903__auto__,c__26993__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26904__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26904__auto____0 = (function (){
var statearr_28645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28645[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26904__auto__);

(statearr_28645[(1)] = (1));

return statearr_28645;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26904__auto____1 = (function (state_28609){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_28609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e28646){if((e28646 instanceof Object)){
var ex__26907__auto__ = e28646;
var statearr_28647_28673 = state_28609;
(statearr_28647_28673[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28674 = state_28609;
state_28609 = G__28674;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26904__auto__ = function(state_28609){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26904__auto____1.call(this,state_28609);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26904__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26904__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto__))
})();
var state__26995__auto__ = (function (){var statearr_28648 = f__26994__auto__.call(null);
(statearr_28648[(6)] = c__26993__auto__);

return statearr_28648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto__))
);

return c__26993__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28676 = arguments.length;
switch (G__28676) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28679 = arguments.length;
switch (G__28679) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28682 = arguments.length;
switch (G__28682) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26993__auto___28729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___28729,out){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___28729,out){
return (function (state_28706){
var state_val_28707 = (state_28706[(1)]);
if((state_val_28707 === (7))){
var inst_28701 = (state_28706[(2)]);
var state_28706__$1 = state_28706;
var statearr_28708_28730 = state_28706__$1;
(statearr_28708_28730[(2)] = inst_28701);

(statearr_28708_28730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (1))){
var inst_28683 = null;
var state_28706__$1 = (function (){var statearr_28709 = state_28706;
(statearr_28709[(7)] = inst_28683);

return statearr_28709;
})();
var statearr_28710_28731 = state_28706__$1;
(statearr_28710_28731[(2)] = null);

(statearr_28710_28731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (4))){
var inst_28686 = (state_28706[(8)]);
var inst_28686__$1 = (state_28706[(2)]);
var inst_28687 = (inst_28686__$1 == null);
var inst_28688 = cljs.core.not.call(null,inst_28687);
var state_28706__$1 = (function (){var statearr_28711 = state_28706;
(statearr_28711[(8)] = inst_28686__$1);

return statearr_28711;
})();
if(inst_28688){
var statearr_28712_28732 = state_28706__$1;
(statearr_28712_28732[(1)] = (5));

} else {
var statearr_28713_28733 = state_28706__$1;
(statearr_28713_28733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (6))){
var state_28706__$1 = state_28706;
var statearr_28714_28734 = state_28706__$1;
(statearr_28714_28734[(2)] = null);

(statearr_28714_28734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (3))){
var inst_28703 = (state_28706[(2)]);
var inst_28704 = cljs.core.async.close_BANG_.call(null,out);
var state_28706__$1 = (function (){var statearr_28715 = state_28706;
(statearr_28715[(9)] = inst_28703);

return statearr_28715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28706__$1,inst_28704);
} else {
if((state_val_28707 === (2))){
var state_28706__$1 = state_28706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28706__$1,(4),ch);
} else {
if((state_val_28707 === (11))){
var inst_28686 = (state_28706[(8)]);
var inst_28695 = (state_28706[(2)]);
var inst_28683 = inst_28686;
var state_28706__$1 = (function (){var statearr_28716 = state_28706;
(statearr_28716[(10)] = inst_28695);

(statearr_28716[(7)] = inst_28683);

return statearr_28716;
})();
var statearr_28717_28735 = state_28706__$1;
(statearr_28717_28735[(2)] = null);

(statearr_28717_28735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (9))){
var inst_28686 = (state_28706[(8)]);
var state_28706__$1 = state_28706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28706__$1,(11),out,inst_28686);
} else {
if((state_val_28707 === (5))){
var inst_28686 = (state_28706[(8)]);
var inst_28683 = (state_28706[(7)]);
var inst_28690 = cljs.core._EQ_.call(null,inst_28686,inst_28683);
var state_28706__$1 = state_28706;
if(inst_28690){
var statearr_28719_28736 = state_28706__$1;
(statearr_28719_28736[(1)] = (8));

} else {
var statearr_28720_28737 = state_28706__$1;
(statearr_28720_28737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (10))){
var inst_28698 = (state_28706[(2)]);
var state_28706__$1 = state_28706;
var statearr_28721_28738 = state_28706__$1;
(statearr_28721_28738[(2)] = inst_28698);

(statearr_28721_28738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (8))){
var inst_28683 = (state_28706[(7)]);
var tmp28718 = inst_28683;
var inst_28683__$1 = tmp28718;
var state_28706__$1 = (function (){var statearr_28722 = state_28706;
(statearr_28722[(7)] = inst_28683__$1);

return statearr_28722;
})();
var statearr_28723_28739 = state_28706__$1;
(statearr_28723_28739[(2)] = null);

(statearr_28723_28739[(1)] = (2));


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
});})(c__26993__auto___28729,out))
;
return ((function (switch__26903__auto__,c__26993__auto___28729,out){
return (function() {
var cljs$core$async$state_machine__26904__auto__ = null;
var cljs$core$async$state_machine__26904__auto____0 = (function (){
var statearr_28724 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28724[(0)] = cljs$core$async$state_machine__26904__auto__);

(statearr_28724[(1)] = (1));

return statearr_28724;
});
var cljs$core$async$state_machine__26904__auto____1 = (function (state_28706){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_28706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e28725){if((e28725 instanceof Object)){
var ex__26907__auto__ = e28725;
var statearr_28726_28740 = state_28706;
(statearr_28726_28740[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28741 = state_28706;
state_28706 = G__28741;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$state_machine__26904__auto__ = function(state_28706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26904__auto____1.call(this,state_28706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26904__auto____0;
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26904__auto____1;
return cljs$core$async$state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___28729,out))
})();
var state__26995__auto__ = (function (){var statearr_28727 = f__26994__auto__.call(null);
(statearr_28727[(6)] = c__26993__auto___28729);

return statearr_28727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___28729,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28743 = arguments.length;
switch (G__28743) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26993__auto___28809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___28809,out){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___28809,out){
return (function (state_28781){
var state_val_28782 = (state_28781[(1)]);
if((state_val_28782 === (7))){
var inst_28777 = (state_28781[(2)]);
var state_28781__$1 = state_28781;
var statearr_28783_28810 = state_28781__$1;
(statearr_28783_28810[(2)] = inst_28777);

(statearr_28783_28810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (1))){
var inst_28744 = (new Array(n));
var inst_28745 = inst_28744;
var inst_28746 = (0);
var state_28781__$1 = (function (){var statearr_28784 = state_28781;
(statearr_28784[(7)] = inst_28746);

(statearr_28784[(8)] = inst_28745);

return statearr_28784;
})();
var statearr_28785_28811 = state_28781__$1;
(statearr_28785_28811[(2)] = null);

(statearr_28785_28811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (4))){
var inst_28749 = (state_28781[(9)]);
var inst_28749__$1 = (state_28781[(2)]);
var inst_28750 = (inst_28749__$1 == null);
var inst_28751 = cljs.core.not.call(null,inst_28750);
var state_28781__$1 = (function (){var statearr_28786 = state_28781;
(statearr_28786[(9)] = inst_28749__$1);

return statearr_28786;
})();
if(inst_28751){
var statearr_28787_28812 = state_28781__$1;
(statearr_28787_28812[(1)] = (5));

} else {
var statearr_28788_28813 = state_28781__$1;
(statearr_28788_28813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (15))){
var inst_28771 = (state_28781[(2)]);
var state_28781__$1 = state_28781;
var statearr_28789_28814 = state_28781__$1;
(statearr_28789_28814[(2)] = inst_28771);

(statearr_28789_28814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (13))){
var state_28781__$1 = state_28781;
var statearr_28790_28815 = state_28781__$1;
(statearr_28790_28815[(2)] = null);

(statearr_28790_28815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (6))){
var inst_28746 = (state_28781[(7)]);
var inst_28767 = (inst_28746 > (0));
var state_28781__$1 = state_28781;
if(cljs.core.truth_(inst_28767)){
var statearr_28791_28816 = state_28781__$1;
(statearr_28791_28816[(1)] = (12));

} else {
var statearr_28792_28817 = state_28781__$1;
(statearr_28792_28817[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (3))){
var inst_28779 = (state_28781[(2)]);
var state_28781__$1 = state_28781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28781__$1,inst_28779);
} else {
if((state_val_28782 === (12))){
var inst_28745 = (state_28781[(8)]);
var inst_28769 = cljs.core.vec.call(null,inst_28745);
var state_28781__$1 = state_28781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28781__$1,(15),out,inst_28769);
} else {
if((state_val_28782 === (2))){
var state_28781__$1 = state_28781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28781__$1,(4),ch);
} else {
if((state_val_28782 === (11))){
var inst_28761 = (state_28781[(2)]);
var inst_28762 = (new Array(n));
var inst_28745 = inst_28762;
var inst_28746 = (0);
var state_28781__$1 = (function (){var statearr_28793 = state_28781;
(statearr_28793[(7)] = inst_28746);

(statearr_28793[(10)] = inst_28761);

(statearr_28793[(8)] = inst_28745);

return statearr_28793;
})();
var statearr_28794_28818 = state_28781__$1;
(statearr_28794_28818[(2)] = null);

(statearr_28794_28818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (9))){
var inst_28745 = (state_28781[(8)]);
var inst_28759 = cljs.core.vec.call(null,inst_28745);
var state_28781__$1 = state_28781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28781__$1,(11),out,inst_28759);
} else {
if((state_val_28782 === (5))){
var inst_28754 = (state_28781[(11)]);
var inst_28749 = (state_28781[(9)]);
var inst_28746 = (state_28781[(7)]);
var inst_28745 = (state_28781[(8)]);
var inst_28753 = (inst_28745[inst_28746] = inst_28749);
var inst_28754__$1 = (inst_28746 + (1));
var inst_28755 = (inst_28754__$1 < n);
var state_28781__$1 = (function (){var statearr_28795 = state_28781;
(statearr_28795[(11)] = inst_28754__$1);

(statearr_28795[(12)] = inst_28753);

return statearr_28795;
})();
if(cljs.core.truth_(inst_28755)){
var statearr_28796_28819 = state_28781__$1;
(statearr_28796_28819[(1)] = (8));

} else {
var statearr_28797_28820 = state_28781__$1;
(statearr_28797_28820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (14))){
var inst_28774 = (state_28781[(2)]);
var inst_28775 = cljs.core.async.close_BANG_.call(null,out);
var state_28781__$1 = (function (){var statearr_28799 = state_28781;
(statearr_28799[(13)] = inst_28774);

return statearr_28799;
})();
var statearr_28800_28821 = state_28781__$1;
(statearr_28800_28821[(2)] = inst_28775);

(statearr_28800_28821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (10))){
var inst_28765 = (state_28781[(2)]);
var state_28781__$1 = state_28781;
var statearr_28801_28822 = state_28781__$1;
(statearr_28801_28822[(2)] = inst_28765);

(statearr_28801_28822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (8))){
var inst_28754 = (state_28781[(11)]);
var inst_28745 = (state_28781[(8)]);
var tmp28798 = inst_28745;
var inst_28745__$1 = tmp28798;
var inst_28746 = inst_28754;
var state_28781__$1 = (function (){var statearr_28802 = state_28781;
(statearr_28802[(7)] = inst_28746);

(statearr_28802[(8)] = inst_28745__$1);

return statearr_28802;
})();
var statearr_28803_28823 = state_28781__$1;
(statearr_28803_28823[(2)] = null);

(statearr_28803_28823[(1)] = (2));


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
});})(c__26993__auto___28809,out))
;
return ((function (switch__26903__auto__,c__26993__auto___28809,out){
return (function() {
var cljs$core$async$state_machine__26904__auto__ = null;
var cljs$core$async$state_machine__26904__auto____0 = (function (){
var statearr_28804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28804[(0)] = cljs$core$async$state_machine__26904__auto__);

(statearr_28804[(1)] = (1));

return statearr_28804;
});
var cljs$core$async$state_machine__26904__auto____1 = (function (state_28781){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_28781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e28805){if((e28805 instanceof Object)){
var ex__26907__auto__ = e28805;
var statearr_28806_28824 = state_28781;
(statearr_28806_28824[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28825 = state_28781;
state_28781 = G__28825;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$state_machine__26904__auto__ = function(state_28781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26904__auto____1.call(this,state_28781);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26904__auto____0;
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26904__auto____1;
return cljs$core$async$state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___28809,out))
})();
var state__26995__auto__ = (function (){var statearr_28807 = f__26994__auto__.call(null);
(statearr_28807[(6)] = c__26993__auto___28809);

return statearr_28807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___28809,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28827 = arguments.length;
switch (G__28827) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26993__auto___28897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___28897,out){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___28897,out){
return (function (state_28869){
var state_val_28870 = (state_28869[(1)]);
if((state_val_28870 === (7))){
var inst_28865 = (state_28869[(2)]);
var state_28869__$1 = state_28869;
var statearr_28871_28898 = state_28869__$1;
(statearr_28871_28898[(2)] = inst_28865);

(statearr_28871_28898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (1))){
var inst_28828 = [];
var inst_28829 = inst_28828;
var inst_28830 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28869__$1 = (function (){var statearr_28872 = state_28869;
(statearr_28872[(7)] = inst_28829);

(statearr_28872[(8)] = inst_28830);

return statearr_28872;
})();
var statearr_28873_28899 = state_28869__$1;
(statearr_28873_28899[(2)] = null);

(statearr_28873_28899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (4))){
var inst_28833 = (state_28869[(9)]);
var inst_28833__$1 = (state_28869[(2)]);
var inst_28834 = (inst_28833__$1 == null);
var inst_28835 = cljs.core.not.call(null,inst_28834);
var state_28869__$1 = (function (){var statearr_28874 = state_28869;
(statearr_28874[(9)] = inst_28833__$1);

return statearr_28874;
})();
if(inst_28835){
var statearr_28875_28900 = state_28869__$1;
(statearr_28875_28900[(1)] = (5));

} else {
var statearr_28876_28901 = state_28869__$1;
(statearr_28876_28901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (15))){
var inst_28859 = (state_28869[(2)]);
var state_28869__$1 = state_28869;
var statearr_28877_28902 = state_28869__$1;
(statearr_28877_28902[(2)] = inst_28859);

(statearr_28877_28902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (13))){
var state_28869__$1 = state_28869;
var statearr_28878_28903 = state_28869__$1;
(statearr_28878_28903[(2)] = null);

(statearr_28878_28903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (6))){
var inst_28829 = (state_28869[(7)]);
var inst_28854 = inst_28829.length;
var inst_28855 = (inst_28854 > (0));
var state_28869__$1 = state_28869;
if(cljs.core.truth_(inst_28855)){
var statearr_28879_28904 = state_28869__$1;
(statearr_28879_28904[(1)] = (12));

} else {
var statearr_28880_28905 = state_28869__$1;
(statearr_28880_28905[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (3))){
var inst_28867 = (state_28869[(2)]);
var state_28869__$1 = state_28869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28869__$1,inst_28867);
} else {
if((state_val_28870 === (12))){
var inst_28829 = (state_28869[(7)]);
var inst_28857 = cljs.core.vec.call(null,inst_28829);
var state_28869__$1 = state_28869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28869__$1,(15),out,inst_28857);
} else {
if((state_val_28870 === (2))){
var state_28869__$1 = state_28869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28869__$1,(4),ch);
} else {
if((state_val_28870 === (11))){
var inst_28837 = (state_28869[(10)]);
var inst_28833 = (state_28869[(9)]);
var inst_28847 = (state_28869[(2)]);
var inst_28848 = [];
var inst_28849 = inst_28848.push(inst_28833);
var inst_28829 = inst_28848;
var inst_28830 = inst_28837;
var state_28869__$1 = (function (){var statearr_28881 = state_28869;
(statearr_28881[(11)] = inst_28849);

(statearr_28881[(7)] = inst_28829);

(statearr_28881[(12)] = inst_28847);

(statearr_28881[(8)] = inst_28830);

return statearr_28881;
})();
var statearr_28882_28906 = state_28869__$1;
(statearr_28882_28906[(2)] = null);

(statearr_28882_28906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (9))){
var inst_28829 = (state_28869[(7)]);
var inst_28845 = cljs.core.vec.call(null,inst_28829);
var state_28869__$1 = state_28869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28869__$1,(11),out,inst_28845);
} else {
if((state_val_28870 === (5))){
var inst_28837 = (state_28869[(10)]);
var inst_28833 = (state_28869[(9)]);
var inst_28830 = (state_28869[(8)]);
var inst_28837__$1 = f.call(null,inst_28833);
var inst_28838 = cljs.core._EQ_.call(null,inst_28837__$1,inst_28830);
var inst_28839 = cljs.core.keyword_identical_QMARK_.call(null,inst_28830,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28840 = ((inst_28838) || (inst_28839));
var state_28869__$1 = (function (){var statearr_28883 = state_28869;
(statearr_28883[(10)] = inst_28837__$1);

return statearr_28883;
})();
if(cljs.core.truth_(inst_28840)){
var statearr_28884_28907 = state_28869__$1;
(statearr_28884_28907[(1)] = (8));

} else {
var statearr_28885_28908 = state_28869__$1;
(statearr_28885_28908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (14))){
var inst_28862 = (state_28869[(2)]);
var inst_28863 = cljs.core.async.close_BANG_.call(null,out);
var state_28869__$1 = (function (){var statearr_28887 = state_28869;
(statearr_28887[(13)] = inst_28862);

return statearr_28887;
})();
var statearr_28888_28909 = state_28869__$1;
(statearr_28888_28909[(2)] = inst_28863);

(statearr_28888_28909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (10))){
var inst_28852 = (state_28869[(2)]);
var state_28869__$1 = state_28869;
var statearr_28889_28910 = state_28869__$1;
(statearr_28889_28910[(2)] = inst_28852);

(statearr_28889_28910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (8))){
var inst_28837 = (state_28869[(10)]);
var inst_28829 = (state_28869[(7)]);
var inst_28833 = (state_28869[(9)]);
var inst_28842 = inst_28829.push(inst_28833);
var tmp28886 = inst_28829;
var inst_28829__$1 = tmp28886;
var inst_28830 = inst_28837;
var state_28869__$1 = (function (){var statearr_28890 = state_28869;
(statearr_28890[(14)] = inst_28842);

(statearr_28890[(7)] = inst_28829__$1);

(statearr_28890[(8)] = inst_28830);

return statearr_28890;
})();
var statearr_28891_28911 = state_28869__$1;
(statearr_28891_28911[(2)] = null);

(statearr_28891_28911[(1)] = (2));


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
});})(c__26993__auto___28897,out))
;
return ((function (switch__26903__auto__,c__26993__auto___28897,out){
return (function() {
var cljs$core$async$state_machine__26904__auto__ = null;
var cljs$core$async$state_machine__26904__auto____0 = (function (){
var statearr_28892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28892[(0)] = cljs$core$async$state_machine__26904__auto__);

(statearr_28892[(1)] = (1));

return statearr_28892;
});
var cljs$core$async$state_machine__26904__auto____1 = (function (state_28869){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_28869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e28893){if((e28893 instanceof Object)){
var ex__26907__auto__ = e28893;
var statearr_28894_28912 = state_28869;
(statearr_28894_28912[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28913 = state_28869;
state_28869 = G__28913;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
cljs$core$async$state_machine__26904__auto__ = function(state_28869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26904__auto____1.call(this,state_28869);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26904__auto____0;
cljs$core$async$state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26904__auto____1;
return cljs$core$async$state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___28897,out))
})();
var state__26995__auto__ = (function (){var statearr_28895 = f__26994__auto__.call(null);
(statearr_28895[(6)] = c__26993__auto___28897);

return statearr_28895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___28897,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1535274136240
