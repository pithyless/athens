goog.provide('tick.interval');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('tick.core');
goog.require('cljc.java_time.duration');
goog.require('java.time');
goog.require('java.time.temporal');
goog.require('cljs.java_time.extend_eq_and_compare');
tick.interval.make_interval = (function tick$interval$make_interval(beginning,end){
if(cljs.core.truth_(tick.core._LT_(beginning,end))){
} else {
throw (new Error("Assert failed: (t/< beginning end)"));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),beginning,new cljs.core.Keyword("tick","end","tick/end",-269896517),end], null);
});
tick.interval.temporal_QMARK_ = (function tick$interval$temporal_QMARK_(o){
return java.time.temporal.Temporal.isPrototypeOf(cljs.core.type(o));
});
tick.interval.temporal_amount_QMARK_ = (function tick$interval$temporal_amount_QMARK_(o){
return java.time.temporal.TemporalAmount.isPrototypeOf(cljs.core.type(o));
});

/**
 * @interface
 */
tick.interval.ITimeSpanable = function(){};

/**
 * Return a value of a type that satisfies t/ITimeSpan
 */
tick.interval.temporal_value = (function tick$interval$temporal_value(_){
if((((!((_ == null)))) && ((!((_.tick$interval$ITimeSpanable$temporal_value$arity$1 == null)))))){
return _.tick$interval$ITimeSpanable$temporal_value$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.interval.temporal_value[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.interval.temporal_value["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeSpanable.temporal-value",_);
}
}
}
});

(java.time.YearMonth.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (ym){
var ym__$1 = this;
return ym__$1;
}));

(java.time.Year.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (y){
var y__$1 = this;
return y__$1;
}));

(java.time.ZonedDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (zdt){
var zdt__$1 = this;
return zdt__$1;
}));

(java.time.Instant.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(Date.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (d){
var d__$1 = this;
return tick.core.instant(d__$1);
}));

(java.time.LocalDate.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (d){
var d__$1 = this;
return d__$1;
}));

goog.object.set(tick.interval.ITimeSpanable,"string",true);

var G__59078_59440 = tick.interval.temporal_value;
var G__59079_59441 = "string";
var G__59080_59442 = (function (s){
return tick.interval.temporal_value(tick.core.parse(s));
});
goog.object.set(G__59078_59440,G__59079_59441,G__59080_59442);

goog.object.set(tick.interval.ITimeSpanable,"function",true);

var G__59081_59444 = tick.interval.temporal_value;
var G__59082_59445 = "function";
var G__59083_59446 = (function (f){
return tick.interval.temporal_value((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__59081_59444,G__59082_59445,G__59083_59446);

(java.time.LocalTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (t){
var t__$1 = this;
return t__$1;
}));

(java.time.OffsetDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (odt){
var odt__$1 = this;
return odt__$1;
}));

(java.time.LocalDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (ldt){
var ldt__$1 = this;
return ldt__$1;
}));
tick.interval.new_interval = (function tick$interval$new_interval(v1,v2){
var t1 = tick.core.beginning(tick.interval.temporal_value(v1));
var t2 = tick.core.end(tick.interval.temporal_value(v2));
if(cljs.core.truth_(tick.core._LT_(t1,t2))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),t1,new cljs.core.Keyword("tick","end","tick/end",-269896517),t2], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Interval must span between two times, the first must be before the second",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),v1,new cljs.core.Keyword("tick","end","tick/end",-269896517),v2], null));
}
});
tick.interval.extend = (function tick$interval$extend(ival,dur){
return tick.interval.make_interval(tick.core.beginning(ival),tick.core.forward_duration(tick.core.end(ival),dur));
});
tick.interval.scale = (function tick$interval$scale(ival,factor){
return tick.interval.make_interval(tick.core.beginning(ival),tick.core.forward_duration(tick.core.beginning(ival),cljc.java_time.duration.multiplied_by(tick.core.duration(ival),factor)));
});
(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (ival,d){
var ival__$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ival__$1,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),(function (p1__59084_SHARP_){
return tick.core.forward_duration(p1__59084_SHARP_,d);
})),new cljs.core.Keyword("tick","end","tick/end",-269896517),(function (p1__59085_SHARP_){
return tick.core.forward_duration(p1__59085_SHARP_,d);
}));
}));

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (ival,d){
var ival__$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ival__$1,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),(function (p1__59086_SHARP_){
return tick.core.backward_duration(p1__59086_SHARP_,d);
})),new cljs.core.Keyword("tick","end","tick/end",-269896517),(function (p1__59087_SHARP_){
return tick.core.backward_duration(p1__59087_SHARP_,d);
}));
}));
(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeReify$on$arity$2 = (function (i,date){
var i__$1 = this;
return tick.interval.new_interval(tick.core.on(tick.core.beginning(i__$1),date),tick.core.on(tick.core.end(i__$1),date));
}));

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeReify$in$arity$2 = (function (i,zone){
var i__$1 = this;
return tick.interval.new_interval(tick.core.in$(tick.core.beginning(i__$1),zone),tick.core.in$(tick.core.end(i__$1),zone));
}));
tick.interval.bounds = (function tick$interval$bounds(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59453 = arguments.length;
var i__4790__auto___59454 = (0);
while(true){
if((i__4790__auto___59454 < len__4789__auto___59453)){
args__4795__auto__.push((arguments[i__4790__auto___59454]));

var G__59455 = (i__4790__auto___59454 + (1));
i__4790__auto___59454 = G__59455;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return tick.interval.bounds.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(tick.interval.bounds.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return tick.interval.make_interval(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.core.beginning,args)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.core.end,args)));
}));

(tick.interval.bounds.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.interval.bounds.cljs$lang$applyTo = (function (seq59091){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59091));
}));

tick.interval.am = (function tick$interval$am(date){
return tick.interval.new_interval(tick.core.beginning(date),tick.core.noon.cljs$core$IFn$_invoke$arity$1(date));
});
tick.interval.pm = (function tick$interval$pm(date){
return tick.interval.new_interval(tick.core.noon.cljs$core$IFn$_invoke$arity$1(date),tick.core.end(date));
});
tick.interval.precedes_QMARK_ = (function tick$interval$precedes_QMARK_(x,y){
return tick.core._LT_(tick.core.end(x),tick.core.beginning(y));
});
tick.interval.equals_QMARK_ = (function tick$interval$equals_QMARK_(x,y){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.beginning(x),tick.core.beginning(y))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.end(x),tick.core.end(y))));
});
tick.interval.meets_QMARK_ = (function tick$interval$meets_QMARK_(x,y){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.end(x),tick.core.beginning(y));
});
tick.interval.overlaps_QMARK_ = (function tick$interval$overlaps_QMARK_(x,y){
var and__4174__auto__ = tick.core._LT_(tick.core.beginning(x),tick.core.beginning(y));
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = tick.core._GT_(tick.core.end(x),tick.core.beginning(y));
if(cljs.core.truth_(and__4174__auto____$1)){
return tick.core._LT_(tick.core.end(x),tick.core.end(y));
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
});
tick.interval.during_QMARK_ = (function tick$interval$during_QMARK_(x,y){
var and__4174__auto__ = tick.core._GT_(tick.core.beginning(x),tick.core.beginning(y));
if(cljs.core.truth_(and__4174__auto__)){
return tick.core._LT_(tick.core.end(x),tick.core.end(y));
} else {
return and__4174__auto__;
}
});
tick.interval.starts_QMARK_ = (function tick$interval$starts_QMARK_(x,y){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.beginning(x),tick.core.beginning(y))){
return tick.core._LT_(tick.core.end(x),tick.core.end(y));
} else {
return false;
}
});
tick.interval.finishes_QMARK_ = (function tick$interval$finishes_QMARK_(x,y){
var and__4174__auto__ = tick.core._GT_(tick.core.beginning(x),tick.core.beginning(y));
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.end(x),tick.core.end(y));
} else {
return and__4174__auto__;
}
});
/**
 * The converse of a basic relation.
 */
tick.interval.conv = (function tick$interval$conv(f){
return (function (x,y){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(y,x) : f.call(null,y,x));
});
});
tick.interval.preceded_by_QMARK_ = (function tick$interval$preceded_by_QMARK_(x,y){
var fexpr__59092 = tick.interval.conv(tick.interval.precedes_QMARK_);
return (fexpr__59092.cljs$core$IFn$_invoke$arity$2 ? fexpr__59092.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__59092.call(null,x,y));
});
tick.interval.met_by_QMARK_ = (function tick$interval$met_by_QMARK_(x,y){
var fexpr__59093 = tick.interval.conv(tick.interval.meets_QMARK_);
return (fexpr__59093.cljs$core$IFn$_invoke$arity$2 ? fexpr__59093.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__59093.call(null,x,y));
});
tick.interval.overlapped_by_QMARK_ = (function tick$interval$overlapped_by_QMARK_(x,y){
var fexpr__59094 = tick.interval.conv(tick.interval.overlaps_QMARK_);
return (fexpr__59094.cljs$core$IFn$_invoke$arity$2 ? fexpr__59094.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__59094.call(null,x,y));
});
tick.interval.finished_by_QMARK_ = (function tick$interval$finished_by_QMARK_(x,y){
var fexpr__59095 = tick.interval.conv(tick.interval.finishes_QMARK_);
return (fexpr__59095.cljs$core$IFn$_invoke$arity$2 ? fexpr__59095.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__59095.call(null,x,y));
});
tick.interval.contains_QMARK_ = (function tick$interval$contains_QMARK_(x,y){
var fexpr__59096 = tick.interval.conv(tick.interval.during_QMARK_);
return (fexpr__59096.cljs$core$IFn$_invoke$arity$2 ? fexpr__59096.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__59096.call(null,x,y));
});
tick.interval.started_by_QMARK_ = (function tick$interval$started_by_QMARK_(x,y){
var fexpr__59097 = tick.interval.conv(tick.interval.starts_QMARK_);
return (fexpr__59097.cljs$core$IFn$_invoke$arity$2 ? fexpr__59097.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__59097.call(null,x,y));
});
tick.interval.relation__GT_kw = cljs.core.PersistentHashMap.fromArrays([tick.interval.contains_QMARK_,tick.interval.starts_QMARK_,tick.interval.started_by_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.equals_QMARK_,tick.interval.meets_QMARK_,tick.interval.met_by_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.precedes_QMARK_,tick.interval.during_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.finishes_QMARK_],[new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"starts","starts",-1501572425),new cljs.core.Keyword(null,"started-by","started-by",1211835163),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580),new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"meets","meets",-1936224493),new cljs.core.Keyword(null,"met-by","met-by",-2020460159),new cljs.core.Keyword(null,"finished-by","finished-by",-1361081637),new cljs.core.Keyword(null,"preceded-by","preceded-by",1381560976),new cljs.core.Keyword(null,"precedes","precedes",-1540274203),new cljs.core.Keyword(null,"during","during",351301349),new cljs.core.Keyword(null,"overlapped-by","overlapped-by",1890442040),new cljs.core.Keyword(null,"finishes","finishes",-431359586)]);
tick.interval.basic_relations = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.contains_QMARK_,tick.interval.starts_QMARK_,tick.interval.equals_QMARK_,tick.interval.started_by_QMARK_,tick.interval.during_QMARK_,tick.interval.finishes_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tick.interval.GeneralRelation = (function (relations,__meta,__extmap,__hash){
this.relations = relations;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(tick.interval.GeneralRelation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k59099,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__59104 = k59099;
var G__59104__$1 = (((G__59104 instanceof cljs.core.Keyword))?G__59104.fqn:null);
switch (G__59104__$1) {
case "relations":
return self__.relations;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59099,else__4442__auto__);

}
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__59105){
var vec__59106 = p__59105;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59106,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59106,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#tick.interval.GeneralRelation{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations],null))], null),self__.__extmap));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59098){
var self__ = this;
var G__59098__$1 = this;
return (new cljs.core.RecordIter((0),G__59098__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relations","relations",-427124442)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(tick.interval.GeneralRelation.prototype.call = (function (unused__10555__auto__){
var self__ = this;
var self__ = this;
var G__59109 = (arguments.length - (1));
switch (G__59109) {
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(tick.interval.GeneralRelation.prototype.apply = (function (self__,args59103){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args59103)));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var self__ = this;
var _ = this;
return cljs.core.some((function (f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y)))){
return f;
} else {
return null;
}
}),self__.relations);
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,self__.__extmap,self__.__hash));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__59110 = (function (coll__4436__auto__){
return (-248703908 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__59110(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59100,other59101){
var self__ = this;
var this59100__$1 = this;
return (((!((other59101 == null)))) && ((this59100__$1.constructor === other59101.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59100__$1.relations,other59101.relations)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59100__$1.__extmap,other59101.__extmap)));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"relations","relations",-427124442),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__59098){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__59111 = cljs.core.keyword_identical_QMARK_;
var expr__59112 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__59114 = new cljs.core.Keyword(null,"relations","relations",-427124442);
var G__59115 = expr__59112;
return (pred__59111.cljs$core$IFn$_invoke$arity$2 ? pred__59111.cljs$core$IFn$_invoke$arity$2(G__59114,G__59115) : pred__59111.call(null,G__59114,G__59115));
})())){
return (new tick.interval.GeneralRelation(G__59098,self__.__meta,self__.__extmap,null));
} else {
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__59098),null));
}
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations,null))], null),self__.__extmap));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__59098){
var self__ = this;
var this__4438__auto____$1 = this;
return (new tick.interval.GeneralRelation(self__.relations,G__59098,self__.__extmap,self__.__hash));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(tick.interval.GeneralRelation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"relations","relations",1213407085,null)], null);
}));

(tick.interval.GeneralRelation.cljs$lang$type = true);

(tick.interval.GeneralRelation.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"tick.interval/GeneralRelation",null,(1),null));
}));

(tick.interval.GeneralRelation.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"tick.interval/GeneralRelation");
}));

/**
 * Positional factory function for tick.interval/GeneralRelation.
 */
tick.interval.__GT_GeneralRelation = (function tick$interval$__GT_GeneralRelation(relations){
return (new tick.interval.GeneralRelation(relations,null,null,null));
});

/**
 * Factory function for tick.interval/GeneralRelation, taking a map of keywords to field values.
 */
tick.interval.map__GT_GeneralRelation = (function tick$interval$map__GT_GeneralRelation(G__59102){
var extmap__4478__auto__ = (function (){var G__59116 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59102,new cljs.core.Keyword(null,"relations","relations",-427124442));
if(cljs.core.record_QMARK_(G__59102)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59116);
} else {
return G__59116;
}
})();
return (new tick.interval.GeneralRelation(new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(G__59102),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

tick.interval.new_relation = (function tick$interval$new_relation(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59465 = arguments.length;
var i__4790__auto___59466 = (0);
while(true){
if((i__4790__auto___59466 < len__4789__auto___59465)){
args__4795__auto__.push((arguments[i__4790__auto___59466]));

var G__59467 = (i__4790__auto___59466 + (1));
i__4790__auto___59466 = G__59467;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic = (function (basic_relations){
return tick.interval.__GT_GeneralRelation(basic_relations);
}));

(tick.interval.new_relation.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.interval.new_relation.cljs$lang$applyTo = (function (seq59117){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59117));
}));

/**
 * A function to determine the (basic) relation between two intervals.
 */
tick.interval.basic_relation = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.interval.new_relation,tick.interval.basic_relations);
tick.interval.relation = (function tick$interval$relation(x,y){
var G__59120 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x,y) : tick.interval.basic_relation.call(null,x,y));
return (tick.interval.relation__GT_kw.cljs$core$IFn$_invoke$arity$1 ? tick.interval.relation__GT_kw.cljs$core$IFn$_invoke$arity$1(G__59120) : tick.interval.relation__GT_kw.call(null,G__59120));
});
/**
 * Return the complement of the general relation. The complement ~r of
 *   a relation r is the relation consisting of all basic relations not
 *   in r.
 */
tick.interval.complement_r = (function tick$interval$complement_r(r){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"relations","relations",-427124442),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r)),tick.interval.basic_relations));
});
tick.interval.not_yet_implemented = (function tick$interval$not_yet_implemented(){
return (new Error("Not yet implemented"));
});
/**
 * Return the composition of r and s
 */
tick.interval.compose_r = (function tick$interval$compose_r(r,s){
throw tick.interval.not_yet_implemented();
});
/**
 * Return the converse of the given general relation. The converse !r
 *   of a relation r is the relation consisting of the converses of all
 *   basic relations in r.
 */
tick.interval.converse_r = (function tick$interval$converse_r(r){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"relations","relations",-427124442),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.interval.conv,new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r)));
});
/**
 * Return the intersection of the r with s
 */
tick.interval.intersection_r = (function tick$interval$intersection_r(r,s){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1477,1479,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(r,(function (p1__59133_SHARP_){
return (p1__59133_SHARP_ instanceof tick.interval.GeneralRelation);
}));
} else {
}
} else {
}

tick.interval.__GT_GeneralRelation(clojure.set.intersection.cljs$core$IFn$_invoke$arity$1(cljs.core.set(new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r))));

throw tick.interval.not_yet_implemented();
});
tick.interval.disjoint_QMARK_ = tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.interval.precedes_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.meets_QMARK_,tick.interval.met_by_QMARK_], 0));
tick.interval.concur_QMARK_ = tick.interval.complement_r(tick.interval.disjoint_QMARK_);
tick.interval.precedes_or_meets_QMARK_ = tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_], 0));

/**
 * @interface
 */
tick.interval.IIntervalOps = function(){};

/**
 * Fit the interval between beginning and end, slicing off one or both ends as necessary
 */
tick.interval.slice = (function tick$interval$slice(this$,beginning,end){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$slice$arity$3 == null)))))){
return this$.tick$interval$IIntervalOps$slice$arity$3(this$,beginning,end);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (tick.interval.slice[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,beginning,end) : m__4488__auto__.call(null,this$,beginning,end));
} else {
var m__4485__auto__ = (tick.interval.slice["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,beginning,end) : m__4485__auto__.call(null,this$,beginning,end));
} else {
throw cljs.core.missing_protocol("IIntervalOps.slice",this$);
}
}
}
});

/**
 * Splice another interval on to this one
 */
tick.interval.splice = (function tick$interval$splice(this$,ival){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$splice$arity$2 == null)))))){
return this$.tick$interval$IIntervalOps$splice$arity$2(this$,ival);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (tick.interval.splice[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,ival) : m__4488__auto__.call(null,this$,ival));
} else {
var m__4485__auto__ = (tick.interval.splice["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,ival) : m__4485__auto__.call(null,this$,ival));
} else {
throw cljs.core.missing_protocol("IIntervalOps.splice",this$);
}
}
}
});

/**
 * Split ival into 2 intervals at t, returned as a 2-element vector
 */
tick.interval.split = (function tick$interval$split(this$,t){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$split$arity$2 == null)))))){
return this$.tick$interval$IIntervalOps$split$arity$2(this$,t);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (tick.interval.split[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,t) : m__4488__auto__.call(null,this$,t));
} else {
var m__4485__auto__ = (tick.interval.split["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,t) : m__4485__auto__.call(null,this$,t));
} else {
throw cljs.core.missing_protocol("IIntervalOps.split",this$);
}
}
}
});

tick.interval.split_with_assert = (function tick$interval$split_with_assert(ival,t){
if(cljs.core.truth_((function (){var and__4174__auto__ = tick.core._LT_(tick.core.beginning(ival),t);
if(cljs.core.truth_(and__4174__auto__)){
return tick.core._LT_(t,tick.core.end(ival));
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (t/< (t/beginning ival) t) (t/< t (t/end ival)))"));
}

return tick.interval.split(ival,t);
});
tick.interval.slice_interval = (function tick$interval$slice_interval(ival,beginning,end){
var beginning__$1 = tick.core.max.cljs$core$IFn$_invoke$arity$variadic(tick.core.beginning(ival),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([beginning], 0));
var end__$1 = tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.core.end(ival),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([end], 0));
if(cljs.core.truth_(tick.core._LT_(beginning__$1,end__$1))){
if(cljs.core.associative_QMARK_(ival)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ival,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),beginning__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tick","end","tick/end",-269896517),end__$1], 0));
} else {
return tick.interval.make_interval(beginning__$1,end__$1);
}
} else {
return null;
}
});
tick.interval.split_interval = (function tick$interval$split_interval(ival,t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.slice_interval(ival,tick.core.beginning(ival),t),tick.interval.slice_interval(ival,t,tick.core.end(ival))], null);
});
tick.interval.flatten = (function tick$interval$flatten(s){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
var temp__5733__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5733__auto__)){
var ivals = temp__5733__auto__;
return ivals;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
});
(cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
var temp__5733__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var intervals = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__59149_SHARP_){
return tick.interval.slice(p1__59149_SHARP_,beginning,end);
}),intervals)));
} else {
return tick.interval.slice_interval(this$__$1,beginning,end);
}
}));

(cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,other){
var this$__$1 = this;
var this_intervals = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
var other_intervals = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(other);
if(cljs.core.truth_((function (){var and__4174__auto__ = this_intervals;
if(cljs.core.truth_(and__4174__auto__)){
return other_intervals;
} else {
return and__4174__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.concat,other_intervals);
} else {
if(cljs.core.truth_(this_intervals)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.conj,other);
} else {
if(cljs.core.truth_(other_intervals)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(other,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.conj,this$__$1);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1,other], null)], null);

}
}
}
}));

(cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
var temp__5733__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var intervals = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__59153_SHARP_){
return tick.interval.slice(p1__59153_SHARP_,tick.core.beginning(this$__$1),t);
}),intervals))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__59154_SHARP_){
return tick.interval.slice(p1__59154_SHARP_,t,tick.core.end(this$__$1));
}),intervals)))], null);
} else {
return tick.interval.split_interval(this$__$1,t);
}
}));

(java.time.LocalDate.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval(this$__$1,beginning,end);
}));

(java.time.LocalDate.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
}));

(java.time.LocalDate.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval(this$__$1,t);
}));

(java.time.YearMonth.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval(this$__$1,beginning,end);
}));

(java.time.YearMonth.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
}));

(java.time.YearMonth.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval(this$__$1,t);
}));

(java.time.Year.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval(this$__$1,beginning,end);
}));

(java.time.Year.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
}));

(java.time.Year.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval(this$__$1,t);
}));
/**
 * Return the interval representing the interval, if there is one,
 *   representing the interval of time the given intervals are
 *   concurrent.
 */
tick.interval.concur = (function tick$interval$concur(x,y){
var G__59197 = tick.interval.relation(x,y);
var G__59197__$1 = (((G__59197 instanceof cljs.core.Keyword))?G__59197.fqn:null);
switch (G__59197__$1) {
case "overlaps":
return tick.interval.slice(x,tick.core.beginning(y),tick.core.end(x));

break;
case "overlapped-by":
return tick.interval.slice(x,tick.core.beginning(x),tick.core.end(y));

break;
case "starts":
case "finishes":
case "during":
case "equals":
return x;

break;
case "started-by":
case "finished-by":
case "contains":
return tick.interval.slice(x,tick.core.beginning(y),tick.core.end(y));

break;
default:
return null;

}
});
/**
 * Return a sequence of occurances where intervals coincide (having
 *   non-nil concur intervals).
 */
tick.interval.concurrencies = (function tick$interval$concurrencies(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59475 = arguments.length;
var i__4790__auto___59476 = (0);
while(true){
if((i__4790__auto___59476 < len__4789__auto___59475)){
args__4795__auto__.push((arguments[i__4790__auto___59476]));

var G__59477 = (i__4790__auto___59476 + (1));
i__4790__auto___59476 = G__59477;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return tick.interval.concurrencies.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(tick.interval.concurrencies.cljs$core$IFn$_invoke$arity$variadic = (function (intervals){
var intervals__$1 = cljs.core.vec(intervals);
var iter__4582__auto__ = (function tick$interval$iter__59220(s__59221){
return (new cljs.core.LazySeq(null,(function (){
var s__59221__$1 = s__59221;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59221__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var xi = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__59221__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1){
return (function tick$interval$iter__59220_$_iter__59222(s__59223){
return (new cljs.core.LazySeq(null,((function (s__59221__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1){
return (function (){
var s__59223__$1 = s__59223;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59223__$1);
if(temp__5735__auto____$1){
var s__59223__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59223__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59223__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59225 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59224 = (0);
while(true){
if((i__59224 < size__4581__auto__)){
var yi = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59224);
if((xi < yi)){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,xi);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,yi);
var conc = tick.interval.concur(x,y);
if(cljs.core.truth_(conc)){
cljs.core.chunk_append(b__59225,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.interval.relation(x,y),new cljs.core.Keyword(null,"concur","concur",4812827),conc], null));

var G__59481 = (i__59224 + (1));
i__59224 = G__59481;
continue;
} else {
var G__59482 = (i__59224 + (1));
i__59224 = G__59482;
continue;
}
} else {
var G__59483 = (i__59224 + (1));
i__59224 = G__59483;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59225),tick$interval$iter__59220_$_iter__59222(cljs.core.chunk_rest(s__59223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59225),null);
}
} else {
var yi = cljs.core.first(s__59223__$2);
if((xi < yi)){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,xi);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,yi);
var conc = tick.interval.concur(x,y);
if(cljs.core.truth_(conc)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.interval.relation(x,y),new cljs.core.Keyword(null,"concur","concur",4812827),conc], null),tick$interval$iter__59220_$_iter__59222(cljs.core.rest(s__59223__$2)));
} else {
var G__59487 = cljs.core.rest(s__59223__$2);
s__59223__$1 = G__59487;
continue;
}
} else {
var G__59488 = cljs.core.rest(s__59223__$2);
s__59223__$1 = G__59488;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__59221__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1))
,null,null));
});})(s__59221__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(intervals__$1))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,tick$interval$iter__59220(cljs.core.rest(s__59221__$1)));
} else {
var G__59492 = cljs.core.rest(s__59221__$1);
s__59221__$1 = G__59492;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(intervals__$1)));
}));

(tick.interval.concurrencies.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.interval.concurrencies.cljs$lang$applyTo = (function (seq59207){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59207));
}));

tick.interval.interval = (function tick$interval$interval(t){
return tick.interval.new_interval(tick.core.beginning(t),tick.core.end(t));
});
(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
var G__59269 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__59268 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.meets_QMARK_,tick.interval.precedes_QMARK_]);
return (fexpr__59268.cljs$core$IFn$_invoke$arity$1 ? fexpr__59268.cljs$core$IFn$_invoke$arity$1(G__59269) : fexpr__59268.call(null,G__59269));
}));

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
var G__59271 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__59270 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.starts_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.equals_QMARK_,tick.interval.meets_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.precedes_QMARK_]);
return (fexpr__59270.cljs$core$IFn$_invoke$arity$1 ? fexpr__59270.cljs$core$IFn$_invoke$arity$1(G__59271) : fexpr__59270.call(null,G__59271));
}));

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
var G__59273 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__59272 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_]);
return (fexpr__59272.cljs$core$IFn$_invoke$arity$1 ? fexpr__59272.cljs$core$IFn$_invoke$arity$1(G__59273) : fexpr__59272.call(null,G__59273));
}));

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
var G__59275 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__59274 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.started_by_QMARK_,tick.interval.equals_QMARK_,tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.finishes_QMARK_]);
return (fexpr__59274.cljs$core$IFn$_invoke$arity$1 ? fexpr__59274.cljs$core$IFn$_invoke$arity$1(G__59275) : fexpr__59274.call(null,G__59275));
}));
/**
 * Are all the intervals in the given set time-ordered and
 *   disjoint? This is a useful property of a collection of
 *   intervals. The given collection must contain proper intervals (that
 *   is, intervals that have finite greater-than-zero durations).
 */
tick.interval.ordered_disjoint_intervals_QMARK_ = (function tick$interval$ordered_disjoint_intervals_QMARK_(s){
var rel = tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_], 0));
return (!(((function (){var G__59279 = s;
var vec__59280 = G__59279;
var seq__59281 = cljs.core.seq(vec__59280);
var first__59282 = cljs.core.first(seq__59281);
var seq__59281__$1 = cljs.core.next(seq__59281);
var x = first__59282;
var xs = seq__59281__$1;
var G__59279__$1 = G__59279;
while(true){
var vec__59283 = G__59279__$1;
var seq__59284 = cljs.core.seq(vec__59283);
var first__59285 = cljs.core.first(seq__59284);
var seq__59284__$1 = cljs.core.next(seq__59284);
var x__$1 = first__59285;
var xs__$1 = seq__59284__$1;
if((((x__$1 == null)) || ((cljs.core.first(xs__$1) == null)))){
return true;
} else {
if(cljs.core.truth_((function (){var G__59286 = x__$1;
var G__59287 = cljs.core.first(xs__$1);
return (rel.cljs$core$IFn$_invoke$arity$2 ? rel.cljs$core$IFn$_invoke$arity$2(G__59286,G__59287) : rel.call(null,G__59286,G__59287));
})())){
var G__59505 = xs__$1;
G__59279__$1 = G__59505;
continue;
} else {
return null;
}
}
break;
}
})() == null)));
});
/**
 * Is the first interval in a sequence time-ordered and disjoint with
 *   respect to the second? Note, only compares first two in a
 *   sequence. Used by functions to ensure the head of the (possibly
 *   lazy) sequence satisfies this invariant.
 */
tick.interval.assert_proper_head = (function tick$interval$assert_proper_head(s){
var vec__59288 = s;
var initial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59288,(0),null);
var subsequent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59288,(1),null);
if(cljs.core.truth_((((initial == null))?subsequent:false))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected nil in sequence",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nil-before","nil-before",1412757500),subsequent], null));
} else {
}

if(cljs.core.truth_(subsequent)){
if(cljs.core.truth_((tick.interval.precedes_or_meets_QMARK_.cljs$core$IFn$_invoke$arity$2 ? tick.interval.precedes_or_meets_QMARK_.cljs$core$IFn$_invoke$arity$2(initial,subsequent) : tick.interval.precedes_or_meets_QMARK_.call(null,initial,subsequent)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Intervals in sequence violate requirement that intervals are time-ordered and disjoint",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interval1","interval1",1775723179),initial,new cljs.core.Keyword(null,"interval2","interval2",-1652593797),subsequent], null));
}
} else {
}

return s;
});
/**
 * Unite concurrent intervals. Intervals must be ordered by beginning
 *   but not necessarily disjoint (the purpose of this function is to
 *   splice together intervals that are concurrent resulting in a
 *   time-ordered sequence of disjoint intervals that is returned.
 */
tick.interval.unite = (function tick$interval$unite(intervals){
var unite = (function tick$interval$unite_$_unite(intervals__$1){
return (new cljs.core.LazySeq(null,(function (){
var vec__59295 = intervals__$1;
var seq__59296 = cljs.core.seq(vec__59295);
var first__59297 = cljs.core.first(seq__59296);
var seq__59296__$1 = cljs.core.next(seq__59296);
var ival1 = first__59297;
var first__59297__$1 = cljs.core.first(seq__59296__$1);
var seq__59296__$2 = cljs.core.next(seq__59296__$1);
var ival2 = first__59297__$1;
var r = seq__59296__$2;
if((ival2 == null)){
if(cljs.core.truth_(ival1)){
return (new cljs.core.List(null,ival1,null,(1),null));
} else {
return cljs.core.List.EMPTY;
}
} else {
var G__59298 = tick.interval.relation(ival1,ival2);
var G__59298__$1 = (((G__59298 instanceof cljs.core.Keyword))?G__59298.fqn:null);
switch (G__59298__$1) {
case "precedes":
case "meets":
return cljs.core.cons(ival1,tick$interval$unite_$_unite(cljs.core.rest(intervals__$1)));

break;
case "overlaps":
case "contains":
case "starts":
case "started-by":
case "finished-by":
return tick$interval$unite_$_unite(cljs.core.cons(tick.interval.splice(ival1,ival2),r));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Intervals in sequence violate requirement that intervals are time-ordered",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"interval1","interval1",1775723179),ival1,new cljs.core.Keyword(null,"interval2","interval2",-1652593797),ival2,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.interval.relation(ival1,ival2)], null));

}

}
}),null,null));
});
return unite(intervals);
});
/**
 * Return an interval group. Interval groups are maps with
 *   a :tick/intervals entry that contain a time-ordered sequence of
 *   disjoint intervals.
 */
tick.interval.new_interval_group = (function tick$interval$new_interval_group(x){
if(cljs.core.truth_(new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(x))){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)], null);
}
});
/**
 * Within a time-ordered sequence of disjoint intervals, return a
 *   sequence of interval groups, splicing together meeting intervals.
 */
tick.interval.normalize = (function tick$interval$normalize(intervals){
var normalize = (function tick$interval$normalize_$_normalize(intervals__$1){
return (new cljs.core.LazySeq(null,(function (){
var vec__59306 = intervals__$1;
var seq__59307 = cljs.core.seq(vec__59306);
var first__59308 = cljs.core.first(seq__59307);
var seq__59307__$1 = cljs.core.next(seq__59307);
var ival1 = first__59308;
var first__59308__$1 = cljs.core.first(seq__59307__$1);
var seq__59307__$2 = cljs.core.next(seq__59307__$1);
var ival2 = first__59308__$1;
var r = seq__59307__$2;
if((ival2 == null)){
if(cljs.core.truth_(ival1)){
return (new cljs.core.List(null,tick.interval.new_interval_group(ival1),null,(1),null));
} else {
return cljs.core.List.EMPTY;
}
} else {
var G__59309 = tick.interval.relation(ival1,ival2);
var G__59309__$1 = (((G__59309 instanceof cljs.core.Keyword))?G__59309.fqn:null);
switch (G__59309__$1) {
case "meets":
return tick$interval$normalize_$_normalize(cljs.core.cons(tick.interval.splice(ival1,ival2),r));

break;
default:
return cljs.core.cons(tick.interval.new_interval_group(ival1),tick$interval$normalize_$_normalize(tick.interval.assert_proper_head(cljs.core.rest(intervals__$1))));

}
}
}),null,null));
});
return normalize(tick.interval.assert_proper_head(intervals));
});
/**
 * Merge multiple time-ordered sequences of disjoint intervals into a
 *   single sequence of time-ordered disjoint intervals.
 */
tick.interval.union = (function tick$interval$union(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59508 = arguments.length;
var i__4790__auto___59509 = (0);
while(true){
if((i__4790__auto___59509 < len__4789__auto___59508)){
args__4795__auto__.push((arguments[i__4790__auto___59509]));

var G__59510 = (i__4790__auto___59509 + (1));
i__4790__auto___59509 = G__59510;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return tick.interval.union.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(tick.interval.union.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
var union = (function tick$interval$union(colls__$1){
return (new cljs.core.LazySeq(null,(function (){
if((cljs.core.count(colls__$1) <= (1))){
return cljs.core.first(colls__$1);
} else {
var vec__59322 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__59311_SHARP_){
return tick.core.beginning(cljs.core.first(p1__59311_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,colls__$1));
var seq__59323 = cljs.core.seq(vec__59322);
var first__59324 = cljs.core.first(seq__59323);
var seq__59323__$1 = cljs.core.next(seq__59323);
var c1 = first__59324;
var first__59324__$1 = cljs.core.first(seq__59323__$1);
var seq__59323__$2 = cljs.core.next(seq__59323__$1);
var c2 = first__59324__$1;
var r = seq__59323__$2;
if((c2 == null)){
return c1;
} else {
if(cljs.core.truth_((function (){var G__59326 = cljs.core.first(c1);
var G__59327 = cljs.core.first(c2);
return (tick.interval.disjoint_QMARK_.cljs$core$IFn$_invoke$arity$2 ? tick.interval.disjoint_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59326,G__59327) : tick.interval.disjoint_QMARK_.call(null,G__59326,G__59327));
})())){
return cljs.core.cons(cljs.core.first(c1),tick$interval$union(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.list,cljs.core.next(c1),c2,r)));
} else {
return tick$interval$union(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.list,cljs.core.cons(tick.interval.splice(cljs.core.first(c1),cljs.core.first(c2)),cljs.core.next(c1)),cljs.core.next(c2),r));
}
}
}
}),null,null));
});
return union((function (){var iter__4582__auto__ = (function tick$interval$iter__59329(s__59330){
return (new cljs.core.LazySeq(null,(function (){
var s__59330__$1 = s__59330;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59330__$1);
if(temp__5735__auto__){
var s__59330__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59330__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59330__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59332 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59331 = (0);
while(true){
if((i__59331 < size__4581__auto__)){
var coll = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59331);
if(cljs.core.truth_(coll)){
cljs.core.chunk_append(b__59332,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(tick.core.beginning,coll));

var G__59514 = (i__59331 + (1));
i__59331 = G__59514;
continue;
} else {
var G__59515 = (i__59331 + (1));
i__59331 = G__59515;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59332),tick$interval$iter__59329(cljs.core.chunk_rest(s__59330__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59332),null);
}
} else {
var coll = cljs.core.first(s__59330__$2);
if(cljs.core.truth_(coll)){
return cljs.core.cons(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(tick.core.beginning,coll),tick$interval$iter__59329(cljs.core.rest(s__59330__$2)));
} else {
var G__59522 = cljs.core.rest(s__59330__$2);
s__59330__$1 = G__59522;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(colls);
})());
}));

(tick.interval.union.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.interval.union.cljs$lang$applyTo = (function (seq59313){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59313));
}));

tick.interval.conj = (function tick$interval$conj(coll,interval){
return tick.interval.union.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interval], null)], 0));
});
/**
 * Return a time-ordered sequence of disjoint intervals where two or
 *   more intervals of the given sequences are concurrent. Arguments must
 *   be time-ordered sequences of disjoint intervals.
 */
tick.interval.intersection = (function tick$interval$intersection(var_args){
var G__59341 = arguments.length;
switch (G__59341) {
case 1:
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___59524 = arguments.length;
var i__4790__auto___59525 = (0);
while(true){
if((i__4790__auto___59525 < len__4789__auto___59524)){
args_arr__4810__auto__.push((arguments[i__4790__auto___59525]));

var G__59526 = (i__4790__auto___59525 + (1));
i__4790__auto___59525 = G__59526;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(tick.interval.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
}));

(tick.interval.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var intersection = (function tick$interval$intersection(xs,ys){
return (new cljs.core.LazySeq(null,(function (){
var x = cljs.core.first(xs);
var y = cljs.core.first(ys);
if(cljs.core.truth_((function (){var and__4174__auto__ = x;
if(cljs.core.truth_(and__4174__auto__)){
return y;
} else {
return and__4174__auto__;
}
})())){
var G__59343 = tick.interval.relation(x,y);
var G__59343__$1 = (((G__59343 instanceof cljs.core.Keyword))?G__59343.fqn:null);
switch (G__59343__$1) {
case "precedes":
case "meets":
return tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),ys);

break;
case "preceded-by":
case "met-by":
return tick$interval$intersection(xs,tick.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "started-by":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "finished-by":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "overlaps":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(x)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(y,tick.core.end(x),tick.core.end(y)),cljs.core.next(ys)))));

break;
case "overlapped-by":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(x),tick.core.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "contains":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "during":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(y,tick.core.end(x),tick.core.end(y)),cljs.core.next(ys)))));

break;
case "equals":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "finishes":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "starts":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(y,tick.core.end(x),tick.core.end(y)),cljs.core.next(ys)))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59343__$1)].join('')));

}
} else {
return cljs.core.List.EMPTY;
}
}),null,null));
});
return intersection(tick.interval.assert_proper_head(s1),tick.interval.assert_proper_head(s2));
}));

(tick.interval.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.intersection,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
}));

/** @this {Function} */
(tick.interval.intersection.cljs$lang$applyTo = (function (seq59338){
var G__59339 = cljs.core.first(seq59338);
var seq59338__$1 = cljs.core.next(seq59338);
var G__59340 = cljs.core.first(seq59338__$1);
var seq59338__$2 = cljs.core.next(seq59338__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59339,G__59340,seq59338__$2);
}));

(tick.interval.intersection.cljs$lang$maxFixedArity = (2));

tick.interval.intersects_QMARK_ = (function tick$interval$intersects_QMARK_(ivals,interval){
return cljs.core.not_empty(tick.interval.intersection.cljs$core$IFn$_invoke$arity$2(ivals,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interval], null)));
});
/**
 * Return an interval set that is the first set without elements of
 *   the remaining sets.
 */
tick.interval.difference = (function tick$interval$difference(var_args){
var G__59348 = arguments.length;
switch (G__59348) {
case 1:
return tick.interval.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___59529 = arguments.length;
var i__4790__auto___59530 = (0);
while(true){
if((i__4790__auto___59530 < len__4789__auto___59529)){
args_arr__4810__auto__.push((arguments[i__4790__auto___59530]));

var G__59531 = (i__4790__auto___59530 + (1));
i__4790__auto___59530 = G__59531;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return tick.interval.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(tick.interval.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
}));

(tick.interval.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var difference = (function tick$interval$difference(xs,ys){
var vec__59356 = xs;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59356,(0),null);
var vec__59359 = ys;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59359,(0),null);
if(cljs.core.truth_(x)){
if(cljs.core.truth_(y)){
return (new cljs.core.LazySeq(null,(function (){
var G__59362 = tick.interval.relation(x,y);
var G__59362__$1 = (((G__59362 instanceof cljs.core.Keyword))?G__59362.fqn:null);
switch (G__59362__$1) {
case "precedes":
case "meets":
return cljs.core.cons(x,tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),ys));

break;
case "preceded-by":
case "met-by":
return tick$interval$difference(xs,tick.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "finishes":
case "during":
case "equals":
return tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(ys));

break;
case "starts":
return tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),ys);

break;
case "started-by":
case "overlapped-by":
return tick$interval$difference(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "finished-by":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(x),tick.core.beginning(y)),tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "overlaps":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(x),tick.core.beginning(y)),tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),ys));

break;
case "contains":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(x),tick.core.beginning(y)),tick$interval$difference(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59362__$1)].join('')));

}
}),null,null));
} else {
return xs;
}
} else {
return cljs.core.List.EMPTY;
}
});
tick.interval.assert_proper_head(s1);

tick.interval.assert_proper_head(s2);

return difference(s1,s2);
}));

(tick.interval.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
}));

/** @this {Function} */
(tick.interval.difference.cljs$lang$applyTo = (function (seq59345){
var G__59346 = cljs.core.first(seq59345);
var seq59345__$1 = cljs.core.next(seq59345);
var G__59347 = cljs.core.first(seq59345__$1);
var seq59345__$2 = cljs.core.next(seq59345__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59346,G__59347,seq59345__$2);
}));

(tick.interval.difference.cljs$lang$maxFixedArity = (2));

tick.interval.complement = (function tick$interval$complement(coll){
if(cljs.core.empty_QMARK_(coll)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval(tick.core.min_of_type(tick.core.now()),tick.core.max_of_type(tick.core.now()))], null);
} else {
var r = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__59368){
var vec__59369 = p__59368;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59369,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59369,(1),null);
if(tick.interval.meets_QMARK_(x,y)){
return null;
} else {
return tick.interval.new_interval(tick.core.end(x),tick.core.beginning(y));
}
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),coll));
var G__59372 = r;
var G__59372__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.beginning(cljs.core.first(coll)),tick.core.min_of_type(tick.core.beginning(cljs.core.first(coll)))))?(function (){var fexpr__59373 = (function (p1__59366_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval(tick.core.min_of_type(tick.core.beginning(cljs.core.first(coll))),tick.core.beginning(cljs.core.first(coll)))], null),p1__59366_SHARP_);
});
return fexpr__59373(G__59372);
})():G__59372);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.end(cljs.core.last(coll)),tick.core.max_of_type(tick.core.end(cljs.core.last(coll))))){
var fexpr__59374 = (function (p1__59367_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__59367_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval(tick.core.end(cljs.core.last(coll)),tick.core.max_of_type(tick.core.end(cljs.core.last(coll))))], null));
});
return fexpr__59374(G__59372__$1);
} else {
return G__59372__$1;
}
}
});
/**
 * Split s1 across the grating defined by s2
 */
tick.interval.disjoin = (function tick$interval$disjoin(var_args){
var G__59379 = arguments.length;
switch (G__59379) {
case 1:
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___59534 = arguments.length;
var i__4790__auto___59535 = (0);
while(true){
if((i__4790__auto___59535 < len__4789__auto___59534)){
args_arr__4810__auto__.push((arguments[i__4790__auto___59535]));

var G__59536 = (i__4790__auto___59535 + (1));
i__4790__auto___59535 = G__59536;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(tick.interval.disjoin.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
}));

(tick.interval.disjoin.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var xs = s1;
var ys = s2;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cljs.core.not_empty(xs))){
if(cljs.core.truth_(cljs.core.not_empty(ys))){
var x = cljs.core.first(xs);
var y = cljs.core.first(ys);
var G__59381 = tick.interval.relation(x,y);
var G__59381__$1 = (((G__59381 instanceof cljs.core.Keyword))?G__59381.fqn:null);
switch (G__59381__$1) {
case "precedes":
case "meets":
var G__59538 = cljs.core.next(xs);
var G__59539 = ys;
var G__59540 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,x);
xs = G__59538;
ys = G__59539;
result = G__59540;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59381__$1)].join('')));

}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,result,xs);
}
} else {
return result;
}
break;
}
}));

(tick.interval.disjoin.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
}));

/** @this {Function} */
(tick.interval.disjoin.cljs$lang$applyTo = (function (seq59376){
var G__59377 = cljs.core.first(seq59376);
var seq59376__$1 = cljs.core.next(seq59376);
var G__59378 = cljs.core.first(seq59376__$1);
var seq59376__$2 = cljs.core.next(seq59376__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59377,G__59378,seq59376__$2);
}));

(tick.interval.disjoin.cljs$lang$maxFixedArity = (2));

/**
 * Return a lazy sequence of java.time.Temporal instances over the
 *   given (local) interval.
 */
tick.interval.divide_by_apply = (function tick$interval$divide_by_apply(ival,f){
var G__59382 = tick.core.range.cljs$core$IFn$_invoke$arity$2((function (){var G__59383 = tick.core.beginning(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59383) : f.call(null,G__59383));
})(),(function (){var G__59384 = tick.core.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59384) : f.call(null,G__59384));
})());
if(cljs.core.truth_(tick.interval.concur((function (){var G__59385 = tick.core.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59385) : f.call(null,G__59385));
})(),ival))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__59382,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59386 = tick.core.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59386) : f.call(null,G__59386));
})()], null));
} else {
return G__59382;
}
});
/**
 * Divide an interval by a duration, returning a sequence of
 *   intervals. If the interval cannot be wholly sub-divided by the
 *   duration divisor, the last interval will represent the 'remainder'
 *   of the division and not be as long as the other preceeding
 *   intervals.
 */
tick.interval.divide_by_duration = (function tick$interval$divide_by_duration(ival,dur){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (p1__59387_SHARP_){
return tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.core.forward_duration(p1__59387_SHARP_,dur),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.core.end(ival)], 0));
})),tick.core.range.cljs$core$IFn$_invoke$arity$3(tick.core.beginning(ival),tick.core.end(ival),dur));
});
tick.interval.divide_by_period = (function tick$interval$divide_by_period(ival,period){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (p1__59388_SHARP_){
return tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.core.forward_duration(p1__59388_SHARP_,period),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.core.end(ival)], 0));
})),tick.core.range.cljs$core$IFn$_invoke$arity$3(tick.core.beginning(ival),tick.core.end(ival),period));
});
tick.interval.divide_by_divisor = (function tick$interval$divide_by_divisor(ival,divisor){
return tick.interval.divide_by_duration(ival,cljc.java_time.duration.divided_by(tick.core.duration(ival),divisor));
});

/**
 * @interface
 */
tick.interval.IDivisibleInterval = function(){};

/**
 * Divide an interval by a given divisor
 */
tick.interval.divide_interval = (function tick$interval$divide_interval(divisor,ival){
if((((!((divisor == null)))) && ((!((divisor.tick$interval$IDivisibleInterval$divide_interval$arity$2 == null)))))){
return divisor.tick$interval$IDivisibleInterval$divide_interval$arity$2(divisor,ival);
} else {
var x__4487__auto__ = (((divisor == null))?null:divisor);
var m__4488__auto__ = (tick.interval.divide_interval[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(divisor,ival) : m__4488__auto__.call(null,divisor,ival));
} else {
var m__4485__auto__ = (tick.interval.divide_interval["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(divisor,ival) : m__4485__auto__.call(null,divisor,ival));
} else {
throw cljs.core.missing_protocol("IDivisibleInterval.divide-interval",divisor);
}
}
}
});

goog.object.set(tick.interval.IDivisibleInterval,"function",true);

var G__59390_59541 = tick.interval.divide_interval;
var G__59391_59542 = "function";
var G__59392_59543 = (function (f,ival){
return tick.interval.divide_by_apply(ival,f);
});
goog.object.set(G__59390_59541,G__59391_59542,G__59392_59543);

(java.time.Duration.prototype.tick$interval$IDivisibleInterval$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$interval$IDivisibleInterval$divide_interval$arity$2 = (function (dur,ival){
var dur__$1 = this;
return tick.interval.divide_by_duration(ival,dur__$1);
}));

(java.time.Period.prototype.tick$interval$IDivisibleInterval$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Period.prototype.tick$interval$IDivisibleInterval$divide_interval$arity$2 = (function (period,ival){
var period__$1 = this;
return tick.interval.divide_by_period(ival,period__$1);
}));

goog.object.set(tick.interval.IDivisibleInterval,"number",true);

var G__59396_59544 = tick.interval.divide_interval;
var G__59397_59545 = "number";
var G__59398_59546 = (function (divisor,ival){
return tick.interval.divide_by_divisor(ival,divisor);
});
goog.object.set(G__59396_59544,G__59397_59545,G__59398_59546);
(java.time.LocalDate.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$core$IDivisible$divide$arity$2 = (function (ld,d){
var ld__$1 = this;
return tick.interval.divide_interval(d,ld__$1);
}));

(java.time.Year.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$core$IDivisible$divide$arity$2 = (function (n,d){
var n__$1 = this;
return tick.interval.divide_interval(d,n__$1);
}));

(java.time.YearMonth.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$core$IDivisible$divide$arity$2 = (function (n,d){
var n__$1 = this;
return tick.interval.divide_interval(d,n__$1);
}));

(cljs.core.PersistentArrayMap.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$core$IDivisible$divide$arity$2 = (function (ival,o){
var ival__$1 = this;
return tick.interval.divide_interval(o,ival__$1);
}));
/**
 * Divide intervals in s1 by (disjoint ordered) intervals in s2,
 *   splitting if necessary, grouping by s2. Complexity is O(n) rather
 *   than O(n^2)
 */
tick.interval.group_by_intervals = (function tick$interval$group_by_intervals(intervals_to_group_by,ivals){
if(tick.interval.ordered_disjoint_intervals_QMARK_(intervals_to_group_by)){
} else {
throw (new Error("Assert failed: (ordered-disjoint-intervals? intervals-to-group-by)"));
}

if(tick.interval.ordered_disjoint_intervals_QMARK_(ivals)){
} else {
throw (new Error("Assert failed: (ordered-disjoint-intervals? ivals)"));
}

var intervals = ivals;
var groups = intervals_to_group_by;
var result = cljs.core.PersistentArrayMap.EMPTY;
var current_intervals = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cljs.core.not_empty(intervals))){
if(cljs.core.truth_(cljs.core.not_empty(groups))){
var ival = cljs.core.first(intervals);
var group = cljs.core.first(groups);
var G__59416 = tick.interval.relation(ival,group);
var G__59416__$1 = (((G__59416 instanceof cljs.core.Keyword))?G__59416.fqn:null);
switch (G__59416__$1) {
case "precedes":
case "meets":
var G__59548 = cljs.core.next(intervals);
var G__59549 = groups;
var G__59550 = result;
var G__59551 = current_intervals;
intervals = G__59548;
groups = G__59549;
result = G__59550;
current_intervals = G__59551;
continue;

break;
case "preceded-by":
case "met-by":
var G__59552 = intervals;
var G__59553 = cljs.core.next(groups);
var G__59554 = (function (){var G__59417 = result;
if(cljs.core.truth_(cljs.core.not_empty(current_intervals))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59417,group,current_intervals);
} else {
return G__59417;
}
})();
var G__59555 = cljs.core.PersistentVector.EMPTY;
intervals = G__59552;
groups = G__59553;
result = G__59554;
current_intervals = G__59555;
continue;

break;
case "finishes":
var G__59556 = cljs.core.next(intervals);
var G__59557 = cljs.core.next(groups);
var G__59558 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival));
var G__59559 = cljs.core.PersistentVector.EMPTY;
intervals = G__59556;
groups = G__59557;
result = G__59558;
current_intervals = G__59559;
continue;

break;
case "equals":
var G__59560 = cljs.core.next(intervals);
var G__59561 = cljs.core.next(groups);
var G__59562 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival));
var G__59563 = cljs.core.PersistentVector.EMPTY;
intervals = G__59560;
groups = G__59561;
result = G__59562;
current_intervals = G__59563;
continue;

break;
case "finished-by":
var vec__59418 = tick.interval.split_with_assert(ival,tick.core.beginning(group));
var seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59418,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59418,(1),null);
var G__59564 = cljs.core.next(intervals);
var G__59565 = cljs.core.next(groups);
var G__59566 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg2));
var G__59567 = cljs.core.PersistentVector.EMPTY;
intervals = G__59564;
groups = G__59565;
result = G__59566;
current_intervals = G__59567;
continue;

break;
case "started-by":
var vec__59421 = tick.interval.split_with_assert(ival,tick.core.end(group));
var seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59421,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59421,(1),null);
var G__59568 = cljs.core.cons(seg2,cljs.core.next(intervals));
var G__59569 = cljs.core.next(groups);
var G__59570 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg1));
var G__59571 = cljs.core.PersistentVector.EMPTY;
intervals = G__59568;
groups = G__59569;
result = G__59570;
current_intervals = G__59571;
continue;

break;
case "overlapped-by":
var vec__59424 = tick.interval.split_with_assert(ival,tick.core.end(group));
var seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59424,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59424,(1),null);
var G__59572 = cljs.core.cons(seg2,cljs.core.next(intervals));
var G__59573 = cljs.core.next(groups);
var G__59574 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg1));
var G__59575 = cljs.core.PersistentVector.EMPTY;
intervals = G__59572;
groups = G__59573;
result = G__59574;
current_intervals = G__59575;
continue;

break;
case "starts":
case "during":
var G__59576 = cljs.core.next(intervals);
var G__59577 = groups;
var G__59578 = result;
var G__59579 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival);
intervals = G__59576;
groups = G__59577;
result = G__59578;
current_intervals = G__59579;
continue;

break;
case "contains":
var G__59580 = cljs.core.next(intervals);
var G__59581 = cljs.core.next(groups);
var G__59582 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.slice(ival,tick.core.beginning(group),tick.core.end(group))], null));
var G__59583 = cljs.core.PersistentVector.EMPTY;
intervals = G__59580;
groups = G__59581;
result = G__59582;
current_intervals = G__59583;
continue;

break;
case "overlaps":
var G__59584 = cljs.core.next(intervals);
var G__59585 = groups;
var G__59586 = result;
var G__59587 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,tick.interval.slice(ival,tick.core.beginning(group),tick.core.end(ival)));
intervals = G__59584;
groups = G__59585;
result = G__59586;
current_intervals = G__59587;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59416__$1)].join('')));

}
} else {
return result;
}
} else {
var G__59427 = result;
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.first(groups);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_empty(current_intervals);
} else {
return and__4174__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59427,cljs.core.first(groups),current_intervals);
} else {
return G__59427;
}
}
break;
}
});

/**
 * @interface
 */
tick.interval.IGroupable = function(){};

tick.interval.group_by = (function tick$interval$group_by(grouping,ivals){
if((((!((grouping == null)))) && ((!((grouping.tick$interval$IGroupable$group_by$arity$2 == null)))))){
return grouping.tick$interval$IGroupable$group_by$arity$2(grouping,ivals);
} else {
var x__4487__auto__ = (((grouping == null))?null:grouping);
var m__4488__auto__ = (tick.interval.group_by[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(grouping,ivals) : m__4488__auto__.call(null,grouping,ivals));
} else {
var m__4485__auto__ = (tick.interval.group_by["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(grouping,ivals) : m__4485__auto__.call(null,grouping,ivals));
} else {
throw cljs.core.missing_protocol("IGroupable.group-by",grouping);
}
}
}
});

goog.object.set(tick.interval.IGroupable,"function",true);

var G__59432_59588 = tick.interval.group_by;
var G__59433_59589 = "function";
var G__59434_59590 = (function (f,ivals){
if(cljs.core.empty_QMARK_(ivals)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.interval.bounds,ivals);
var b = (function (){var G__59435 = tick.core.beginning(r);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59435) : f.call(null,G__59435));
})();
var e = (function (){var G__59436 = tick.core.end(r);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59436) : f.call(null,G__59436));
})();
var groups = tick.core.range.cljs$core$IFn$_invoke$arity$2(b,tick.core.inc(e));
return tick.interval.group_by(groups,ivals);
}
});
goog.object.set(G__59432_59588,G__59433_59589,G__59434_59590);

(cljs.core.LazySeq.prototype.tick$interval$IGroupable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.tick$interval$IGroupable$group_by$arity$2 = (function (groups,ivals){
var groups__$1 = this;
return tick.interval.group_by_intervals(groups__$1,ivals);
}));

(cljs.core.PersistentVector.prototype.tick$interval$IGroupable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.tick$interval$IGroupable$group_by$arity$2 = (function (groups,ivals){
var groups__$1 = this;
return tick.interval.group_by_intervals(groups__$1,ivals);
}));

//# sourceMappingURL=tick.interval.js.map