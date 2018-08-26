(ns dg.guts
  (:require
    [dg.helpers :refer [new-circle set-radius set-pos set-visibility
                        set-alpha set-color]]
    [thi.ng.color.core :as col]))

(defn init [state]
  state)

(defn- bounce-dot [d {:keys [obj radius duration-left] :as dot}]
  (let [full-dur 20
        dur-left (- (or duration-left full-dur)
                    d)
        elapsed (- full-dur dur-left)
        finished-factor (/ elapsed full-dur)
        new-radius (* (js/Math.sin (* elapsed 0.1)) (js/Math.exp -1) 440.0)]
    (if (< dur-left 0.0)
      (assoc dot
             :animation nil
             :duration-left nil)
      (do
        (set-radius obj new-radius)
        (assoc dot
               :obj obj
               :duration-left dur-left
               :radius new-radius)))))

(defn- start-dot [{:keys [app dots] :as state} touch-id]
  (let [existing (get dots touch-id)
        {:keys [obj] :as dot}
        (assoc
          (or (get dots touch-id)
              {:obj (new-circle app 30 0 0)
               :radius 30
               :x 0
               :y 0})
          :animation bounce-dot
          :duration-left nil)]
    (set-visibility obj true)
    (set-alpha obj 0.7)
    (assoc-in state [:dots touch-id] dot)))

(defn- hide-dot [d {:keys [obj radius duration-left] :as dot}]
  (let [full-dur 100
        dur-left (- (or duration-left full-dur)
                    d)
        elapsed (- full-dur dur-left)
        finished-factor (/ elapsed full-dur)]
    (if (< dur-left 0.0)
      (do
        (set-visibility obj false)
        (assoc dot
               :animation nil
               :duration-left nil))
      (do
        (set-alpha obj (- 0.8 finished-factor))
        (assoc dot
               :obj obj
               :duration-left dur-left)))))

(defn- finish-dot [state touch-id]
  (let [dot (-> state
                (get-in [:dots touch-id])
                (assoc :animation hide-dot
                       :duration-left nil))]
    (assoc-in state [:dots touch-id] dot)))

(defn- updated-dot [state d {:keys [animation] :as dot}]
  (let [{:keys [obj radius x y] :as next-dot} (if animation
                                                (animation d dot)
                                                dot)]
    (set-pos obj x y)
    (let [hr (-> y
                 (/ js/window.innerHeight)
                 (+ 0.7))
          color @(col/as-int24 (col/hsva hr 1 1))]
      (set-color obj color))
    next-dot))

(defn- start-new-animations [state identifier fun]
  (reduce
    (fn [acc-state touch-id]
      (fun acc-state touch-id))
    state
    (identifier state)))

;; JJJJJJJJJAAAADYYYYMYYYYY!!!!

(defn- set-touches-positions [{:keys [touch-events] :as state}]
  (reduce
    (fn [acc-state [touch-id {:keys [x y]}]]
      (update-in acc-state [:dots touch-id] #(assoc % :x x :y y)))
    state
    touch-events))

(defn- update-animations [{:keys [dots] :as state} d]
  (reduce
    (fn [acc-state [touch-id dot]]
      (assoc-in acc-state [:dots touch-id] (updated-dot acc-state d dot)))
    state
    dots))

(defn update-frame [state d]
  (-> state
      (start-new-animations :new-touch-events-list start-dot)
      (start-new-animations :finished-touch-events-list finish-dot)
      set-touches-positions
      (update-animations d)))
  ;; (set-radius (:circle state) 300)
  ;; (set-pos (:circle state) (js/Math.tan (* d 10)) (js/Math.sin (* 0.1 d)))
  ;;
  ;; state)
