(ns dg.helpers)

(defn new-circle
  ([app radius]
   (new-circle app radius 0 0))
  ([app radius x y]
    (let [circle (js/PIXI.Graphics.)]
      (.beginFill circle 0xffffff)
      (.drawCircle circle 0 0 radius)
      (.endFill circle)
      (set! (.-x circle) x)
      (set! (.-y circle) y)
      (.addChild (.-stage app) circle)
      circle)))

(defn set-pos [obj x y]
  (set! (.-x obj) x)
  (set! (.-y obj) y))

(defn set-radius [obj r]
  (set! (.-width obj) r)
  (set! (.-height obj) r))

(defn set-visibility [obj visibility]
  (set! (.-visible obj) visibility))

(defn set-alpha [obj alpha]
  (set! (.-alpha obj) alpha))

(defn set-color [obj color]
  (set! (.-tint obj) color))
