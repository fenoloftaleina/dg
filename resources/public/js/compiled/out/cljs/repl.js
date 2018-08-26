// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30565){
var map__30566 = p__30565;
var map__30566__$1 = ((((!((map__30566 == null)))?(((((map__30566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30566):map__30566);
var m = map__30566__$1;
var n = cljs.core.get.call(null,map__30566__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30566__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30568_30590 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30569_30591 = null;
var count__30570_30592 = (0);
var i__30571_30593 = (0);
while(true){
if((i__30571_30593 < count__30570_30592)){
var f_30594 = cljs.core._nth.call(null,chunk__30569_30591,i__30571_30593);
cljs.core.println.call(null,"  ",f_30594);


var G__30595 = seq__30568_30590;
var G__30596 = chunk__30569_30591;
var G__30597 = count__30570_30592;
var G__30598 = (i__30571_30593 + (1));
seq__30568_30590 = G__30595;
chunk__30569_30591 = G__30596;
count__30570_30592 = G__30597;
i__30571_30593 = G__30598;
continue;
} else {
var temp__5457__auto___30599 = cljs.core.seq.call(null,seq__30568_30590);
if(temp__5457__auto___30599){
var seq__30568_30600__$1 = temp__5457__auto___30599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30568_30600__$1)){
var c__4319__auto___30601 = cljs.core.chunk_first.call(null,seq__30568_30600__$1);
var G__30602 = cljs.core.chunk_rest.call(null,seq__30568_30600__$1);
var G__30603 = c__4319__auto___30601;
var G__30604 = cljs.core.count.call(null,c__4319__auto___30601);
var G__30605 = (0);
seq__30568_30590 = G__30602;
chunk__30569_30591 = G__30603;
count__30570_30592 = G__30604;
i__30571_30593 = G__30605;
continue;
} else {
var f_30606 = cljs.core.first.call(null,seq__30568_30600__$1);
cljs.core.println.call(null,"  ",f_30606);


var G__30607 = cljs.core.next.call(null,seq__30568_30600__$1);
var G__30608 = null;
var G__30609 = (0);
var G__30610 = (0);
seq__30568_30590 = G__30607;
chunk__30569_30591 = G__30608;
count__30570_30592 = G__30609;
i__30571_30593 = G__30610;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30611 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30611);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30611)))?cljs.core.second.call(null,arglists_30611):arglists_30611));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30572_30612 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30573_30613 = null;
var count__30574_30614 = (0);
var i__30575_30615 = (0);
while(true){
if((i__30575_30615 < count__30574_30614)){
var vec__30576_30616 = cljs.core._nth.call(null,chunk__30573_30613,i__30575_30615);
var name_30617 = cljs.core.nth.call(null,vec__30576_30616,(0),null);
var map__30579_30618 = cljs.core.nth.call(null,vec__30576_30616,(1),null);
var map__30579_30619__$1 = ((((!((map__30579_30618 == null)))?(((((map__30579_30618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30579_30618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30579_30618):map__30579_30618);
var doc_30620 = cljs.core.get.call(null,map__30579_30619__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30621 = cljs.core.get.call(null,map__30579_30619__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30617);

cljs.core.println.call(null," ",arglists_30621);

if(cljs.core.truth_(doc_30620)){
cljs.core.println.call(null," ",doc_30620);
} else {
}


var G__30622 = seq__30572_30612;
var G__30623 = chunk__30573_30613;
var G__30624 = count__30574_30614;
var G__30625 = (i__30575_30615 + (1));
seq__30572_30612 = G__30622;
chunk__30573_30613 = G__30623;
count__30574_30614 = G__30624;
i__30575_30615 = G__30625;
continue;
} else {
var temp__5457__auto___30626 = cljs.core.seq.call(null,seq__30572_30612);
if(temp__5457__auto___30626){
var seq__30572_30627__$1 = temp__5457__auto___30626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30572_30627__$1)){
var c__4319__auto___30628 = cljs.core.chunk_first.call(null,seq__30572_30627__$1);
var G__30629 = cljs.core.chunk_rest.call(null,seq__30572_30627__$1);
var G__30630 = c__4319__auto___30628;
var G__30631 = cljs.core.count.call(null,c__4319__auto___30628);
var G__30632 = (0);
seq__30572_30612 = G__30629;
chunk__30573_30613 = G__30630;
count__30574_30614 = G__30631;
i__30575_30615 = G__30632;
continue;
} else {
var vec__30581_30633 = cljs.core.first.call(null,seq__30572_30627__$1);
var name_30634 = cljs.core.nth.call(null,vec__30581_30633,(0),null);
var map__30584_30635 = cljs.core.nth.call(null,vec__30581_30633,(1),null);
var map__30584_30636__$1 = ((((!((map__30584_30635 == null)))?(((((map__30584_30635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30584_30635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30584_30635):map__30584_30635);
var doc_30637 = cljs.core.get.call(null,map__30584_30636__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30638 = cljs.core.get.call(null,map__30584_30636__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30634);

cljs.core.println.call(null," ",arglists_30638);

if(cljs.core.truth_(doc_30637)){
cljs.core.println.call(null," ",doc_30637);
} else {
}


var G__30639 = cljs.core.next.call(null,seq__30572_30627__$1);
var G__30640 = null;
var G__30641 = (0);
var G__30642 = (0);
seq__30572_30612 = G__30639;
chunk__30573_30613 = G__30640;
count__30574_30614 = G__30641;
i__30575_30615 = G__30642;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30586 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30587 = null;
var count__30588 = (0);
var i__30589 = (0);
while(true){
if((i__30589 < count__30588)){
var role = cljs.core._nth.call(null,chunk__30587,i__30589);
var temp__5457__auto___30643__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30643__$1)){
var spec_30644 = temp__5457__auto___30643__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30644));
} else {
}


var G__30645 = seq__30586;
var G__30646 = chunk__30587;
var G__30647 = count__30588;
var G__30648 = (i__30589 + (1));
seq__30586 = G__30645;
chunk__30587 = G__30646;
count__30588 = G__30647;
i__30589 = G__30648;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30586);
if(temp__5457__auto____$1){
var seq__30586__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30586__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30586__$1);
var G__30649 = cljs.core.chunk_rest.call(null,seq__30586__$1);
var G__30650 = c__4319__auto__;
var G__30651 = cljs.core.count.call(null,c__4319__auto__);
var G__30652 = (0);
seq__30586 = G__30649;
chunk__30587 = G__30650;
count__30588 = G__30651;
i__30589 = G__30652;
continue;
} else {
var role = cljs.core.first.call(null,seq__30586__$1);
var temp__5457__auto___30653__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30653__$2)){
var spec_30654 = temp__5457__auto___30653__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30654));
} else {
}


var G__30655 = cljs.core.next.call(null,seq__30586__$1);
var G__30656 = null;
var G__30657 = (0);
var G__30658 = (0);
seq__30586 = G__30655;
chunk__30587 = G__30656;
count__30588 = G__30657;
i__30589 = G__30658;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1535274138656
