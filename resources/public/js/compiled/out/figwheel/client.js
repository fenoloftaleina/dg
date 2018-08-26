// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e30853){if((e30853 instanceof Error)){
var e = e30853;
return "Error: Unable to stringify";
} else {
throw e30853;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30856 = arguments.length;
switch (G__30856) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30854_SHARP_){
if(typeof p1__30854_SHARP_ === 'string'){
return p1__30854_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30854_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30859 = arguments.length;
var i__4500__auto___30860 = (0);
while(true){
if((i__4500__auto___30860 < len__4499__auto___30859)){
args__4502__auto__.push((arguments[i__4500__auto___30860]));

var G__30861 = (i__4500__auto___30860 + (1));
i__4500__auto___30860 = G__30861;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30858){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30858));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30863 = arguments.length;
var i__4500__auto___30864 = (0);
while(true){
if((i__4500__auto___30864 < len__4499__auto___30863)){
args__4502__auto__.push((arguments[i__4500__auto___30864]));

var G__30865 = (i__4500__auto___30864 + (1));
i__4500__auto___30864 = G__30865;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30862){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30862));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30866){
var map__30867 = p__30866;
var map__30867__$1 = ((((!((map__30867 == null)))?(((((map__30867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30867):map__30867);
var message = cljs.core.get.call(null,map__30867__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30867__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26993__auto___30946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___30946,ch){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___30946,ch){
return (function (state_30918){
var state_val_30919 = (state_30918[(1)]);
if((state_val_30919 === (7))){
var inst_30914 = (state_30918[(2)]);
var state_30918__$1 = state_30918;
var statearr_30920_30947 = state_30918__$1;
(statearr_30920_30947[(2)] = inst_30914);

(statearr_30920_30947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (1))){
var state_30918__$1 = state_30918;
var statearr_30921_30948 = state_30918__$1;
(statearr_30921_30948[(2)] = null);

(statearr_30921_30948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (4))){
var inst_30871 = (state_30918[(7)]);
var inst_30871__$1 = (state_30918[(2)]);
var state_30918__$1 = (function (){var statearr_30922 = state_30918;
(statearr_30922[(7)] = inst_30871__$1);

return statearr_30922;
})();
if(cljs.core.truth_(inst_30871__$1)){
var statearr_30923_30949 = state_30918__$1;
(statearr_30923_30949[(1)] = (5));

} else {
var statearr_30924_30950 = state_30918__$1;
(statearr_30924_30950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (15))){
var inst_30878 = (state_30918[(8)]);
var inst_30893 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30878);
var inst_30894 = cljs.core.first.call(null,inst_30893);
var inst_30895 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30894);
var inst_30896 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30895)].join('');
var inst_30897 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30896);
var state_30918__$1 = state_30918;
var statearr_30925_30951 = state_30918__$1;
(statearr_30925_30951[(2)] = inst_30897);

(statearr_30925_30951[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (13))){
var inst_30902 = (state_30918[(2)]);
var state_30918__$1 = state_30918;
var statearr_30926_30952 = state_30918__$1;
(statearr_30926_30952[(2)] = inst_30902);

(statearr_30926_30952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (6))){
var state_30918__$1 = state_30918;
var statearr_30927_30953 = state_30918__$1;
(statearr_30927_30953[(2)] = null);

(statearr_30927_30953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (17))){
var inst_30900 = (state_30918[(2)]);
var state_30918__$1 = state_30918;
var statearr_30928_30954 = state_30918__$1;
(statearr_30928_30954[(2)] = inst_30900);

(statearr_30928_30954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (3))){
var inst_30916 = (state_30918[(2)]);
var state_30918__$1 = state_30918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30918__$1,inst_30916);
} else {
if((state_val_30919 === (12))){
var inst_30877 = (state_30918[(9)]);
var inst_30891 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30877,opts);
var state_30918__$1 = state_30918;
if(cljs.core.truth_(inst_30891)){
var statearr_30929_30955 = state_30918__$1;
(statearr_30929_30955[(1)] = (15));

} else {
var statearr_30930_30956 = state_30918__$1;
(statearr_30930_30956[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (2))){
var state_30918__$1 = state_30918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30918__$1,(4),ch);
} else {
if((state_val_30919 === (11))){
var inst_30878 = (state_30918[(8)]);
var inst_30883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30884 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30878);
var inst_30885 = cljs.core.async.timeout.call(null,(1000));
var inst_30886 = [inst_30884,inst_30885];
var inst_30887 = (new cljs.core.PersistentVector(null,2,(5),inst_30883,inst_30886,null));
var state_30918__$1 = state_30918;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30918__$1,(14),inst_30887);
} else {
if((state_val_30919 === (9))){
var inst_30878 = (state_30918[(8)]);
var inst_30904 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30905 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30878);
var inst_30906 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30905);
var inst_30907 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30906)].join('');
var inst_30908 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30907);
var state_30918__$1 = (function (){var statearr_30931 = state_30918;
(statearr_30931[(10)] = inst_30904);

return statearr_30931;
})();
var statearr_30932_30957 = state_30918__$1;
(statearr_30932_30957[(2)] = inst_30908);

(statearr_30932_30957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (5))){
var inst_30871 = (state_30918[(7)]);
var inst_30873 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30874 = (new cljs.core.PersistentArrayMap(null,2,inst_30873,null));
var inst_30875 = (new cljs.core.PersistentHashSet(null,inst_30874,null));
var inst_30876 = figwheel.client.focus_msgs.call(null,inst_30875,inst_30871);
var inst_30877 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30876);
var inst_30878 = cljs.core.first.call(null,inst_30876);
var inst_30879 = figwheel.client.autoload_QMARK_.call(null);
var state_30918__$1 = (function (){var statearr_30933 = state_30918;
(statearr_30933[(8)] = inst_30878);

(statearr_30933[(9)] = inst_30877);

return statearr_30933;
})();
if(cljs.core.truth_(inst_30879)){
var statearr_30934_30958 = state_30918__$1;
(statearr_30934_30958[(1)] = (8));

} else {
var statearr_30935_30959 = state_30918__$1;
(statearr_30935_30959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (14))){
var inst_30889 = (state_30918[(2)]);
var state_30918__$1 = state_30918;
var statearr_30936_30960 = state_30918__$1;
(statearr_30936_30960[(2)] = inst_30889);

(statearr_30936_30960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (16))){
var state_30918__$1 = state_30918;
var statearr_30937_30961 = state_30918__$1;
(statearr_30937_30961[(2)] = null);

(statearr_30937_30961[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (10))){
var inst_30910 = (state_30918[(2)]);
var state_30918__$1 = (function (){var statearr_30938 = state_30918;
(statearr_30938[(11)] = inst_30910);

return statearr_30938;
})();
var statearr_30939_30962 = state_30918__$1;
(statearr_30939_30962[(2)] = null);

(statearr_30939_30962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (8))){
var inst_30877 = (state_30918[(9)]);
var inst_30881 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30877,opts);
var state_30918__$1 = state_30918;
if(cljs.core.truth_(inst_30881)){
var statearr_30940_30963 = state_30918__$1;
(statearr_30940_30963[(1)] = (11));

} else {
var statearr_30941_30964 = state_30918__$1;
(statearr_30941_30964[(1)] = (12));

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
});})(c__26993__auto___30946,ch))
;
return ((function (switch__26903__auto__,c__26993__auto___30946,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26904__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26904__auto____0 = (function (){
var statearr_30942 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30942[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26904__auto__);

(statearr_30942[(1)] = (1));

return statearr_30942;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26904__auto____1 = (function (state_30918){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_30918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e30943){if((e30943 instanceof Object)){
var ex__26907__auto__ = e30943;
var statearr_30944_30965 = state_30918;
(statearr_30944_30965[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30966 = state_30918;
state_30918 = G__30966;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26904__auto__ = function(state_30918){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26904__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26904__auto____1.call(this,state_30918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26904__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26904__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___30946,ch))
})();
var state__26995__auto__ = (function (){var statearr_30945 = f__26994__auto__.call(null);
(statearr_30945[(6)] = c__26993__auto___30946);

return statearr_30945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___30946,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30967_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30967_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30971 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30971){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30969 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30970 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30969,_STAR_print_fn_STAR_30970,sb,base_path_30971){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30969,_STAR_print_fn_STAR_30970,sb,base_path_30971))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30970;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30969;
}}catch (e30968){if((e30968 instanceof Error)){
var e = e30968;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30971], null));
} else {
var e = e30968;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30971))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30972){
var map__30973 = p__30972;
var map__30973__$1 = ((((!((map__30973 == null)))?(((((map__30973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30973):map__30973);
var opts = map__30973__$1;
var build_id = cljs.core.get.call(null,map__30973__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30973,map__30973__$1,opts,build_id){
return (function (p__30975){
var vec__30976 = p__30975;
var seq__30977 = cljs.core.seq.call(null,vec__30976);
var first__30978 = cljs.core.first.call(null,seq__30977);
var seq__30977__$1 = cljs.core.next.call(null,seq__30977);
var map__30979 = first__30978;
var map__30979__$1 = ((((!((map__30979 == null)))?(((((map__30979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30979):map__30979);
var msg = map__30979__$1;
var msg_name = cljs.core.get.call(null,map__30979__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30977__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30976,seq__30977,first__30978,seq__30977__$1,map__30979,map__30979__$1,msg,msg_name,_,map__30973,map__30973__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30976,seq__30977,first__30978,seq__30977__$1,map__30979,map__30979__$1,msg,msg_name,_,map__30973,map__30973__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30973,map__30973__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30981){
var vec__30982 = p__30981;
var seq__30983 = cljs.core.seq.call(null,vec__30982);
var first__30984 = cljs.core.first.call(null,seq__30983);
var seq__30983__$1 = cljs.core.next.call(null,seq__30983);
var map__30985 = first__30984;
var map__30985__$1 = ((((!((map__30985 == null)))?(((((map__30985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30985):map__30985);
var msg = map__30985__$1;
var msg_name = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30983__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30987){
var map__30988 = p__30987;
var map__30988__$1 = ((((!((map__30988 == null)))?(((((map__30988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30988):map__30988);
var on_compile_warning = cljs.core.get.call(null,map__30988__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30988__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30988,map__30988__$1,on_compile_warning,on_compile_fail){
return (function (p__30990){
var vec__30991 = p__30990;
var seq__30992 = cljs.core.seq.call(null,vec__30991);
var first__30993 = cljs.core.first.call(null,seq__30992);
var seq__30992__$1 = cljs.core.next.call(null,seq__30992);
var map__30994 = first__30993;
var map__30994__$1 = ((((!((map__30994 == null)))?(((((map__30994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30994):map__30994);
var msg = map__30994__$1;
var msg_name = cljs.core.get.call(null,map__30994__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30992__$1;
var pred__30996 = cljs.core._EQ_;
var expr__30997 = msg_name;
if(cljs.core.truth_(pred__30996.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30997))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30996.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30997))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30988,map__30988__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto__,msg_hist,msg_names,msg){
return (function (state_31086){
var state_val_31087 = (state_31086[(1)]);
if((state_val_31087 === (7))){
var inst_31006 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
if(cljs.core.truth_(inst_31006)){
var statearr_31088_31135 = state_31086__$1;
(statearr_31088_31135[(1)] = (8));

} else {
var statearr_31089_31136 = state_31086__$1;
(statearr_31089_31136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (20))){
var inst_31080 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31090_31137 = state_31086__$1;
(statearr_31090_31137[(2)] = inst_31080);

(statearr_31090_31137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (27))){
var inst_31076 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31091_31138 = state_31086__$1;
(statearr_31091_31138[(2)] = inst_31076);

(statearr_31091_31138[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (1))){
var inst_30999 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31086__$1 = state_31086;
if(cljs.core.truth_(inst_30999)){
var statearr_31092_31139 = state_31086__$1;
(statearr_31092_31139[(1)] = (2));

} else {
var statearr_31093_31140 = state_31086__$1;
(statearr_31093_31140[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (24))){
var inst_31078 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31094_31141 = state_31086__$1;
(statearr_31094_31141[(2)] = inst_31078);

(statearr_31094_31141[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (4))){
var inst_31084 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31086__$1,inst_31084);
} else {
if((state_val_31087 === (15))){
var inst_31082 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31095_31142 = state_31086__$1;
(statearr_31095_31142[(2)] = inst_31082);

(statearr_31095_31142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (21))){
var inst_31035 = (state_31086[(2)]);
var inst_31036 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31037 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31036);
var state_31086__$1 = (function (){var statearr_31096 = state_31086;
(statearr_31096[(7)] = inst_31035);

return statearr_31096;
})();
var statearr_31097_31143 = state_31086__$1;
(statearr_31097_31143[(2)] = inst_31037);

(statearr_31097_31143[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (31))){
var inst_31065 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31086__$1 = state_31086;
if(cljs.core.truth_(inst_31065)){
var statearr_31098_31144 = state_31086__$1;
(statearr_31098_31144[(1)] = (34));

} else {
var statearr_31099_31145 = state_31086__$1;
(statearr_31099_31145[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (32))){
var inst_31074 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31100_31146 = state_31086__$1;
(statearr_31100_31146[(2)] = inst_31074);

(statearr_31100_31146[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (33))){
var inst_31061 = (state_31086[(2)]);
var inst_31062 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31063 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31062);
var state_31086__$1 = (function (){var statearr_31101 = state_31086;
(statearr_31101[(8)] = inst_31061);

return statearr_31101;
})();
var statearr_31102_31147 = state_31086__$1;
(statearr_31102_31147[(2)] = inst_31063);

(statearr_31102_31147[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (13))){
var inst_31020 = figwheel.client.heads_up.clear.call(null);
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31086__$1,(16),inst_31020);
} else {
if((state_val_31087 === (22))){
var inst_31041 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31042 = figwheel.client.heads_up.append_warning_message.call(null,inst_31041);
var state_31086__$1 = state_31086;
var statearr_31103_31148 = state_31086__$1;
(statearr_31103_31148[(2)] = inst_31042);

(statearr_31103_31148[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (36))){
var inst_31072 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31104_31149 = state_31086__$1;
(statearr_31104_31149[(2)] = inst_31072);

(statearr_31104_31149[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (29))){
var inst_31052 = (state_31086[(2)]);
var inst_31053 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31054 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31053);
var state_31086__$1 = (function (){var statearr_31105 = state_31086;
(statearr_31105[(9)] = inst_31052);

return statearr_31105;
})();
var statearr_31106_31150 = state_31086__$1;
(statearr_31106_31150[(2)] = inst_31054);

(statearr_31106_31150[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (6))){
var inst_31001 = (state_31086[(10)]);
var state_31086__$1 = state_31086;
var statearr_31107_31151 = state_31086__$1;
(statearr_31107_31151[(2)] = inst_31001);

(statearr_31107_31151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (28))){
var inst_31048 = (state_31086[(2)]);
var inst_31049 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31050 = figwheel.client.heads_up.display_warning.call(null,inst_31049);
var state_31086__$1 = (function (){var statearr_31108 = state_31086;
(statearr_31108[(11)] = inst_31048);

return statearr_31108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31086__$1,(29),inst_31050);
} else {
if((state_val_31087 === (25))){
var inst_31046 = figwheel.client.heads_up.clear.call(null);
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31086__$1,(28),inst_31046);
} else {
if((state_val_31087 === (34))){
var inst_31067 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31086__$1,(37),inst_31067);
} else {
if((state_val_31087 === (17))){
var inst_31026 = (state_31086[(2)]);
var inst_31027 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31028 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31027);
var state_31086__$1 = (function (){var statearr_31109 = state_31086;
(statearr_31109[(12)] = inst_31026);

return statearr_31109;
})();
var statearr_31110_31152 = state_31086__$1;
(statearr_31110_31152[(2)] = inst_31028);

(statearr_31110_31152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (3))){
var inst_31018 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31086__$1 = state_31086;
if(cljs.core.truth_(inst_31018)){
var statearr_31111_31153 = state_31086__$1;
(statearr_31111_31153[(1)] = (13));

} else {
var statearr_31112_31154 = state_31086__$1;
(statearr_31112_31154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (12))){
var inst_31014 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31113_31155 = state_31086__$1;
(statearr_31113_31155[(2)] = inst_31014);

(statearr_31113_31155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (2))){
var inst_31001 = (state_31086[(10)]);
var inst_31001__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31086__$1 = (function (){var statearr_31114 = state_31086;
(statearr_31114[(10)] = inst_31001__$1);

return statearr_31114;
})();
if(cljs.core.truth_(inst_31001__$1)){
var statearr_31115_31156 = state_31086__$1;
(statearr_31115_31156[(1)] = (5));

} else {
var statearr_31116_31157 = state_31086__$1;
(statearr_31116_31157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (23))){
var inst_31044 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31086__$1 = state_31086;
if(cljs.core.truth_(inst_31044)){
var statearr_31117_31158 = state_31086__$1;
(statearr_31117_31158[(1)] = (25));

} else {
var statearr_31118_31159 = state_31086__$1;
(statearr_31118_31159[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (35))){
var state_31086__$1 = state_31086;
var statearr_31119_31160 = state_31086__$1;
(statearr_31119_31160[(2)] = null);

(statearr_31119_31160[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (19))){
var inst_31039 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31086__$1 = state_31086;
if(cljs.core.truth_(inst_31039)){
var statearr_31120_31161 = state_31086__$1;
(statearr_31120_31161[(1)] = (22));

} else {
var statearr_31121_31162 = state_31086__$1;
(statearr_31121_31162[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (11))){
var inst_31010 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31122_31163 = state_31086__$1;
(statearr_31122_31163[(2)] = inst_31010);

(statearr_31122_31163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (9))){
var inst_31012 = figwheel.client.heads_up.clear.call(null);
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31086__$1,(12),inst_31012);
} else {
if((state_val_31087 === (5))){
var inst_31003 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31086__$1 = state_31086;
var statearr_31123_31164 = state_31086__$1;
(statearr_31123_31164[(2)] = inst_31003);

(statearr_31123_31164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (14))){
var inst_31030 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31086__$1 = state_31086;
if(cljs.core.truth_(inst_31030)){
var statearr_31124_31165 = state_31086__$1;
(statearr_31124_31165[(1)] = (18));

} else {
var statearr_31125_31166 = state_31086__$1;
(statearr_31125_31166[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (26))){
var inst_31056 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31086__$1 = state_31086;
if(cljs.core.truth_(inst_31056)){
var statearr_31126_31167 = state_31086__$1;
(statearr_31126_31167[(1)] = (30));

} else {
var statearr_31127_31168 = state_31086__$1;
(statearr_31127_31168[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (16))){
var inst_31022 = (state_31086[(2)]);
var inst_31023 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31024 = figwheel.client.heads_up.display_exception.call(null,inst_31023);
var state_31086__$1 = (function (){var statearr_31128 = state_31086;
(statearr_31128[(13)] = inst_31022);

return statearr_31128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31086__$1,(17),inst_31024);
} else {
if((state_val_31087 === (30))){
var inst_31058 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31059 = figwheel.client.heads_up.display_warning.call(null,inst_31058);
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31086__$1,(33),inst_31059);
} else {
if((state_val_31087 === (10))){
var inst_31016 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31129_31169 = state_31086__$1;
(statearr_31129_31169[(2)] = inst_31016);

(statearr_31129_31169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (18))){
var inst_31032 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31033 = figwheel.client.heads_up.display_exception.call(null,inst_31032);
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31086__$1,(21),inst_31033);
} else {
if((state_val_31087 === (37))){
var inst_31069 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31130_31170 = state_31086__$1;
(statearr_31130_31170[(2)] = inst_31069);

(statearr_31130_31170[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (8))){
var inst_31008 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31086__$1,(11),inst_31008);
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
});})(c__26993__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26903__auto__,c__26993__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26904__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26904__auto____0 = (function (){
var statearr_31131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31131[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26904__auto__);

(statearr_31131[(1)] = (1));

return statearr_31131;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26904__auto____1 = (function (state_31086){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_31086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e31132){if((e31132 instanceof Object)){
var ex__26907__auto__ = e31132;
var statearr_31133_31171 = state_31086;
(statearr_31133_31171[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31172 = state_31086;
state_31086 = G__31172;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26904__auto__ = function(state_31086){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26904__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26904__auto____1.call(this,state_31086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26904__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26904__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto__,msg_hist,msg_names,msg))
})();
var state__26995__auto__ = (function (){var statearr_31134 = f__26994__auto__.call(null);
(statearr_31134[(6)] = c__26993__auto__);

return statearr_31134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto__,msg_hist,msg_names,msg))
);

return c__26993__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26993__auto___31201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto___31201,ch){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto___31201,ch){
return (function (state_31187){
var state_val_31188 = (state_31187[(1)]);
if((state_val_31188 === (1))){
var state_31187__$1 = state_31187;
var statearr_31189_31202 = state_31187__$1;
(statearr_31189_31202[(2)] = null);

(statearr_31189_31202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (2))){
var state_31187__$1 = state_31187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31187__$1,(4),ch);
} else {
if((state_val_31188 === (3))){
var inst_31185 = (state_31187[(2)]);
var state_31187__$1 = state_31187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31187__$1,inst_31185);
} else {
if((state_val_31188 === (4))){
var inst_31175 = (state_31187[(7)]);
var inst_31175__$1 = (state_31187[(2)]);
var state_31187__$1 = (function (){var statearr_31190 = state_31187;
(statearr_31190[(7)] = inst_31175__$1);

return statearr_31190;
})();
if(cljs.core.truth_(inst_31175__$1)){
var statearr_31191_31203 = state_31187__$1;
(statearr_31191_31203[(1)] = (5));

} else {
var statearr_31192_31204 = state_31187__$1;
(statearr_31192_31204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (5))){
var inst_31175 = (state_31187[(7)]);
var inst_31177 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31175);
var state_31187__$1 = state_31187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31187__$1,(8),inst_31177);
} else {
if((state_val_31188 === (6))){
var state_31187__$1 = state_31187;
var statearr_31193_31205 = state_31187__$1;
(statearr_31193_31205[(2)] = null);

(statearr_31193_31205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (7))){
var inst_31183 = (state_31187[(2)]);
var state_31187__$1 = state_31187;
var statearr_31194_31206 = state_31187__$1;
(statearr_31194_31206[(2)] = inst_31183);

(statearr_31194_31206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (8))){
var inst_31179 = (state_31187[(2)]);
var state_31187__$1 = (function (){var statearr_31195 = state_31187;
(statearr_31195[(8)] = inst_31179);

return statearr_31195;
})();
var statearr_31196_31207 = state_31187__$1;
(statearr_31196_31207[(2)] = null);

(statearr_31196_31207[(1)] = (2));


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
});})(c__26993__auto___31201,ch))
;
return ((function (switch__26903__auto__,c__26993__auto___31201,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26904__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26904__auto____0 = (function (){
var statearr_31197 = [null,null,null,null,null,null,null,null,null];
(statearr_31197[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26904__auto__);

(statearr_31197[(1)] = (1));

return statearr_31197;
});
var figwheel$client$heads_up_plugin_$_state_machine__26904__auto____1 = (function (state_31187){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_31187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e31198){if((e31198 instanceof Object)){
var ex__26907__auto__ = e31198;
var statearr_31199_31208 = state_31187;
(statearr_31199_31208[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31209 = state_31187;
state_31187 = G__31209;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26904__auto__ = function(state_31187){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26904__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26904__auto____1.call(this,state_31187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26904__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26904__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto___31201,ch))
})();
var state__26995__auto__ = (function (){var statearr_31200 = f__26994__auto__.call(null);
(statearr_31200[(6)] = c__26993__auto___31201);

return statearr_31200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto___31201,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto__){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto__){
return (function (state_31215){
var state_val_31216 = (state_31215[(1)]);
if((state_val_31216 === (1))){
var inst_31210 = cljs.core.async.timeout.call(null,(3000));
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31215__$1,(2),inst_31210);
} else {
if((state_val_31216 === (2))){
var inst_31212 = (state_31215[(2)]);
var inst_31213 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31215__$1 = (function (){var statearr_31217 = state_31215;
(statearr_31217[(7)] = inst_31212);

return statearr_31217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31215__$1,inst_31213);
} else {
return null;
}
}
});})(c__26993__auto__))
;
return ((function (switch__26903__auto__,c__26993__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26904__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26904__auto____0 = (function (){
var statearr_31218 = [null,null,null,null,null,null,null,null];
(statearr_31218[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26904__auto__);

(statearr_31218[(1)] = (1));

return statearr_31218;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26904__auto____1 = (function (state_31215){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_31215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e31219){if((e31219 instanceof Object)){
var ex__26907__auto__ = e31219;
var statearr_31220_31222 = state_31215;
(statearr_31220_31222[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31223 = state_31215;
state_31215 = G__31223;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26904__auto__ = function(state_31215){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26904__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26904__auto____1.call(this,state_31215);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26904__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26904__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto__))
})();
var state__26995__auto__ = (function (){var statearr_31221 = f__26994__auto__.call(null);
(statearr_31221[(6)] = c__26993__auto__);

return statearr_31221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto__))
);

return c__26993__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26993__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26994__auto__ = (function (){var switch__26903__auto__ = ((function (c__26993__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31230){
var state_val_31231 = (state_31230[(1)]);
if((state_val_31231 === (1))){
var inst_31224 = cljs.core.async.timeout.call(null,(2000));
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31230__$1,(2),inst_31224);
} else {
if((state_val_31231 === (2))){
var inst_31226 = (state_31230[(2)]);
var inst_31227 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31228 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31227);
var state_31230__$1 = (function (){var statearr_31232 = state_31230;
(statearr_31232[(7)] = inst_31226);

return statearr_31232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31230__$1,inst_31228);
} else {
return null;
}
}
});})(c__26993__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26903__auto__,c__26993__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26904__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26904__auto____0 = (function (){
var statearr_31233 = [null,null,null,null,null,null,null,null];
(statearr_31233[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26904__auto__);

(statearr_31233[(1)] = (1));

return statearr_31233;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26904__auto____1 = (function (state_31230){
while(true){
var ret_value__26905__auto__ = (function (){try{while(true){
var result__26906__auto__ = switch__26903__auto__.call(null,state_31230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26906__auto__;
}
break;
}
}catch (e31234){if((e31234 instanceof Object)){
var ex__26907__auto__ = e31234;
var statearr_31235_31237 = state_31230;
(statearr_31235_31237[(5)] = ex__26907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31238 = state_31230;
state_31230 = G__31238;
continue;
} else {
return ret_value__26905__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26904__auto__ = function(state_31230){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26904__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26904__auto____1.call(this,state_31230);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26904__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26904__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26904__auto__;
})()
;})(switch__26903__auto__,c__26993__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26995__auto__ = (function (){var statearr_31236 = f__26994__auto__.call(null);
(statearr_31236[(6)] = c__26993__auto__);

return statearr_31236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26995__auto__);
});})(c__26993__auto__,figwheel_version,temp__5457__auto__))
);

return c__26993__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31239){
var map__31240 = p__31239;
var map__31240__$1 = ((((!((map__31240 == null)))?(((((map__31240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31240):map__31240);
var file = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31242 = "";
var G__31242__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31242),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31242);
var G__31242__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31242__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31242__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31242__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31242__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31243){
var map__31244 = p__31243;
var map__31244__$1 = ((((!((map__31244 == null)))?(((((map__31244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31244):map__31244);
var ed = map__31244__$1;
var formatted_exception = cljs.core.get.call(null,map__31244__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31244__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31244__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31246_31250 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31247_31251 = null;
var count__31248_31252 = (0);
var i__31249_31253 = (0);
while(true){
if((i__31249_31253 < count__31248_31252)){
var msg_31254 = cljs.core._nth.call(null,chunk__31247_31251,i__31249_31253);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31254);


var G__31255 = seq__31246_31250;
var G__31256 = chunk__31247_31251;
var G__31257 = count__31248_31252;
var G__31258 = (i__31249_31253 + (1));
seq__31246_31250 = G__31255;
chunk__31247_31251 = G__31256;
count__31248_31252 = G__31257;
i__31249_31253 = G__31258;
continue;
} else {
var temp__5457__auto___31259 = cljs.core.seq.call(null,seq__31246_31250);
if(temp__5457__auto___31259){
var seq__31246_31260__$1 = temp__5457__auto___31259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31246_31260__$1)){
var c__4319__auto___31261 = cljs.core.chunk_first.call(null,seq__31246_31260__$1);
var G__31262 = cljs.core.chunk_rest.call(null,seq__31246_31260__$1);
var G__31263 = c__4319__auto___31261;
var G__31264 = cljs.core.count.call(null,c__4319__auto___31261);
var G__31265 = (0);
seq__31246_31250 = G__31262;
chunk__31247_31251 = G__31263;
count__31248_31252 = G__31264;
i__31249_31253 = G__31265;
continue;
} else {
var msg_31266 = cljs.core.first.call(null,seq__31246_31260__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31266);


var G__31267 = cljs.core.next.call(null,seq__31246_31260__$1);
var G__31268 = null;
var G__31269 = (0);
var G__31270 = (0);
seq__31246_31250 = G__31267;
chunk__31247_31251 = G__31268;
count__31248_31252 = G__31269;
i__31249_31253 = G__31270;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31271){
var map__31272 = p__31271;
var map__31272__$1 = ((((!((map__31272 == null)))?(((((map__31272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31272):map__31272);
var w = map__31272__$1;
var message = cljs.core.get.call(null,map__31272__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31274 = cljs.core.seq.call(null,plugins);
var chunk__31275 = null;
var count__31276 = (0);
var i__31277 = (0);
while(true){
if((i__31277 < count__31276)){
var vec__31278 = cljs.core._nth.call(null,chunk__31275,i__31277);
var k = cljs.core.nth.call(null,vec__31278,(0),null);
var plugin = cljs.core.nth.call(null,vec__31278,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31284 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31274,chunk__31275,count__31276,i__31277,pl_31284,vec__31278,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31284.call(null,msg_hist);
});})(seq__31274,chunk__31275,count__31276,i__31277,pl_31284,vec__31278,k,plugin))
);
} else {
}


var G__31285 = seq__31274;
var G__31286 = chunk__31275;
var G__31287 = count__31276;
var G__31288 = (i__31277 + (1));
seq__31274 = G__31285;
chunk__31275 = G__31286;
count__31276 = G__31287;
i__31277 = G__31288;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31274);
if(temp__5457__auto__){
var seq__31274__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31274__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31274__$1);
var G__31289 = cljs.core.chunk_rest.call(null,seq__31274__$1);
var G__31290 = c__4319__auto__;
var G__31291 = cljs.core.count.call(null,c__4319__auto__);
var G__31292 = (0);
seq__31274 = G__31289;
chunk__31275 = G__31290;
count__31276 = G__31291;
i__31277 = G__31292;
continue;
} else {
var vec__31281 = cljs.core.first.call(null,seq__31274__$1);
var k = cljs.core.nth.call(null,vec__31281,(0),null);
var plugin = cljs.core.nth.call(null,vec__31281,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31293 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31274,chunk__31275,count__31276,i__31277,pl_31293,vec__31281,k,plugin,seq__31274__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31293.call(null,msg_hist);
});})(seq__31274,chunk__31275,count__31276,i__31277,pl_31293,vec__31281,k,plugin,seq__31274__$1,temp__5457__auto__))
);
} else {
}


var G__31294 = cljs.core.next.call(null,seq__31274__$1);
var G__31295 = null;
var G__31296 = (0);
var G__31297 = (0);
seq__31274 = G__31294;
chunk__31275 = G__31295;
count__31276 = G__31296;
i__31277 = G__31297;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31299 = arguments.length;
switch (G__31299) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31300_31305 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31301_31306 = null;
var count__31302_31307 = (0);
var i__31303_31308 = (0);
while(true){
if((i__31303_31308 < count__31302_31307)){
var msg_31309 = cljs.core._nth.call(null,chunk__31301_31306,i__31303_31308);
figwheel.client.socket.handle_incoming_message.call(null,msg_31309);


var G__31310 = seq__31300_31305;
var G__31311 = chunk__31301_31306;
var G__31312 = count__31302_31307;
var G__31313 = (i__31303_31308 + (1));
seq__31300_31305 = G__31310;
chunk__31301_31306 = G__31311;
count__31302_31307 = G__31312;
i__31303_31308 = G__31313;
continue;
} else {
var temp__5457__auto___31314 = cljs.core.seq.call(null,seq__31300_31305);
if(temp__5457__auto___31314){
var seq__31300_31315__$1 = temp__5457__auto___31314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31300_31315__$1)){
var c__4319__auto___31316 = cljs.core.chunk_first.call(null,seq__31300_31315__$1);
var G__31317 = cljs.core.chunk_rest.call(null,seq__31300_31315__$1);
var G__31318 = c__4319__auto___31316;
var G__31319 = cljs.core.count.call(null,c__4319__auto___31316);
var G__31320 = (0);
seq__31300_31305 = G__31317;
chunk__31301_31306 = G__31318;
count__31302_31307 = G__31319;
i__31303_31308 = G__31320;
continue;
} else {
var msg_31321 = cljs.core.first.call(null,seq__31300_31315__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31321);


var G__31322 = cljs.core.next.call(null,seq__31300_31315__$1);
var G__31323 = null;
var G__31324 = (0);
var G__31325 = (0);
seq__31300_31305 = G__31322;
chunk__31301_31306 = G__31323;
count__31302_31307 = G__31324;
i__31303_31308 = G__31325;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31330 = arguments.length;
var i__4500__auto___31331 = (0);
while(true){
if((i__4500__auto___31331 < len__4499__auto___31330)){
args__4502__auto__.push((arguments[i__4500__auto___31331]));

var G__31332 = (i__4500__auto___31331 + (1));
i__4500__auto___31331 = G__31332;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31327){
var map__31328 = p__31327;
var map__31328__$1 = ((((!((map__31328 == null)))?(((((map__31328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31328):map__31328);
var opts = map__31328__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31326){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31326));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31333){if((e31333 instanceof Error)){
var e = e31333;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31333;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31334){
var map__31335 = p__31334;
var map__31335__$1 = ((((!((map__31335 == null)))?(((((map__31335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31335):map__31335);
var msg_name = cljs.core.get.call(null,map__31335__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1535274139411
