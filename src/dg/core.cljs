(ns dg.core
  (:require [reagent.core :as reagent :refer [atom]]
            [dg.guts :as guts]))

(enable-console-print!)

(defonce state (atom {:touch-events {}
                      :new-touch-events-list []
                      :finished-touch-events-list []}))

(defn map-touches [e fun]
  (let [touches (.-changedTouches e)]
    (dotimes [i (.-length touches)]
      (let [touch (aget touches i)]
        (fun touch)))))

(defn- set-touch [touch]
  (swap! state update :touch-events #(assoc %
                                            (.-identifier touch)
                                            {:x (.-pageX touch)
                                             :y (.-pageY touch)})))

(defn- add-new-touch [touch]
  (swap! state update :new-touch-events-list #(conj % (.-identifier touch))))

(defn remove-touch [touch]
  (swap! state update :touch-events #(dissoc % (.-identifier touch))))

(defn- add-finished-touch [touch]
  (swap! state update :finished-touch-events-list #(conj % (.-identifier touch))))

(defn touch-start [e]
  (.preventDefault e)
  (map-touches e #(do (set-touch %)
                      (add-new-touch %))))

(defn touch-move [e]
  (.preventDefault e)
  (map-touches e set-touch))

(defn touch-end [e]
  (.preventDefault e)
  (map-touches e #(do (remove-touch %)
                      (add-finished-touch %))))

(defn hello-world []
  nil)
  ;; [:div (pr-str (:touch-events @state))])

(reagent/render-component [hello-world]
                          (. js/document (getElementById "app")))

(defonce pixi
  (let [app (js/PIXI.Application. (clj->js {:antialias true
                                            :width js/window.innerWidth
                                            :height js/window.innerHeight}))]
    (set! (.-backgroundColor (.-renderer app)) 0xafafaf)
    (js/document.body.appendChild (.-view app))

    (swap! state assoc :app app)
    (swap! state guts/init)

    (.add (.-ticker app)
          (fn [delta]
            (swap! state #(-> %
                              (update :new-touch-events-list distinct)
                              (update :finished-touch-events-list distinct)
                              (guts/update-frame delta)
                              (assoc :new-touch-events-list []
                                     :finished-touch-events-list [])))))

    (.addEventListener js/window "touchstart" touch-start false)
    (.addEventListener js/window "touchend" touch-end false)
    (.addEventListener js/window "touchcancel" touch-end false)
    (.addEventListener js/window "touchmove" touch-move false)

    app))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
