var gdjs;(function(a){const c=new a.Logger("CustomRuntimeObject");class l extends a.RuntimeInstanceContainer{constructor(n,t){super();this._isLoaded=!1;this._parent=n,this._customObject=t,this._runtimeScene=n.getScene(),this._debuggerRenderer=new a.DebuggerRenderer(this)}addLayer(n){const t=new a.RuntimeCustomObjectLayer(n,this);this._layers.put(n.name,t),this._orderedLayers.push(t)}createObject(n){const t=super.createObject(n);return this._customObject.onChildrenLocationChanged(),t}loadFrom(n){this._isLoaded&&this.onDestroyFromScene(this._parent);const t=this._runtimeScene.getGame().getEventsBasedObjectData(n.type);if(!t){c.error("loadFrom was called without an events-based object");return}for(let s=0,e=t.objects.length;s<e;++s){const r=t.objects[s];this.registerObject({...r,...n.childrenContent[r.name]})}this.addLayer({name:"",visibility:!0,cameras:[{defaultSize:!0,defaultViewport:!0,height:0,viewportBottom:0,viewportLeft:0,viewportRight:0,viewportTop:0,width:0}],effects:[],ambientLightColorR:0,ambientLightColorG:0,ambientLightColorB:0,isLightingLayer:!1,followBaseLayerCamera:!1}),this._setLayerDefaultZOrders(),this._isLoaded=!0}updateFrom(n,t){const s=this._runtimeScene.getGame().getEventsBasedObjectData(t.type);if(!s)return c.error("updateFrom was called without an events-based object"),!1;for(let e=0,r=s.objects.length;e<r;++e){const o=s.objects[e].name,i={...s.objects[e],...n.childrenContent[o]},d={...s.objects[e],...t.childrenContent[o]};this.updateObject(d);for(const u of this.getInstancesOf(o))u.updateFromObjectData(i,d)}return!0}onDestroyFromScene(n){if(!this._isLoaded)return;const t=this.getAdhocListOfAllInstances();for(let s=0,e=t.length;s<e;++s)t[s].onDeletedFromScene(this);this._destroy(),this._isLoaded=!1}_destroy(){super._destroy(),this._onceTriggers=null}_updateObjectsPreRender(){const n=this.getAdhocListOfAllInstances();for(let t=0,s=n.length;t<s;++t){const e=n[t],r=e.getRendererObject();r&&(r.visible=!e.isHidden(),r.visible&&this.getGame().getEffectsManager().updatePreRender(e.getRendererEffects(),e)),this._debugDrawEnabled&&this._debuggerRenderer.renderDebugDraw(n,this._debugDrawShowHiddenInstances,this._debugDrawShowPointsNames,this._debugDrawShowCustomPoints),e.updatePreRender(this)}}_updateObjectsPreEvents(){const n=this.getAdhocListOfAllInstances();for(let t=0,s=n.length;t<s;++t){const e=n[t],r=e.getElapsedTime();if(e.hasNoForces())e.update(this);else{const o=e.getAverageForce(),i=r/1e3;e.setX(e.getX()+o.getX()*i),e.setY(e.getY()+o.getY()*i),e.update(this),e.updateForces(i)}e.updateTimers(r),e.stepBehaviorsPreEvents(this)}this._cacheOrClearRemovedInstances()}getRenderer(){return this._customObject.getRenderer()}getDebuggerRenderer(){return this._debuggerRenderer}getGame(){return this._runtimeScene.getGame()}getScene(){return this._runtimeScene}getViewportWidth(){return this._customObject.getUnscaledWidth()}getViewportHeight(){return this._customObject.getUnscaledHeight()}getViewportOriginX(){return this._customObject.getUnscaledCenterX()}getViewportOriginY(){return this._customObject.getUnscaledCenterY()}onChildrenLocationChanged(){this._customObject.onChildrenLocationChanged()}convertCoords(n,t,s){let e=s||[0,0];return e=this._parent.getLayer(this._customObject.getLayer()).convertCoords(n,t,0,e),this._customObject.applyObjectInverseTransformation(e[0],e[1],e),e}convertInverseCoords(n,t,s){const e=s||[0,0];return this._customObject.applyObjectTransformation(n,t,e),this._parent.convertInverseCoords(e[0],e[1],e)}getElapsedTime(){return this._parent.getElapsedTime()}}a.CustomRuntimeObjectInstanceContainer=l})(gdjs||(gdjs={}));
//# sourceMappingURL=CustomRuntimeObjectInstanceContainer.js.map
