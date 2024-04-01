gdjs.Escena_32sin_32t_237tuloCode = {};
gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1_2final = [];

gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1_2final = [];

gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1_2final = [];

gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1_2final = [];

gdjs.Escena_32sin_32t_237tuloCode.GDbotonObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDbotonObjects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDboton3Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDboton3Objects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDboton4Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDboton4Objects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDboton5Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDboton5Objects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDboton6Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDboton6Objects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSpriteObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSpriteObjects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewTextObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewTextObjects2= [];


gdjs.Escena_32sin_32t_237tuloCode.asyncCallback9306532 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.Escena_32sin_32t_237tuloCode.GDNewTextObjects2);

{gdjs.dialogueTree.startFrom("2");
}{for(var i = 0, len = gdjs.Escena_32sin_32t_237tuloCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Escena_32sin_32t_237tuloCode.GDNewTextObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineText());
}
}}
gdjs.Escena_32sin_32t_237tuloCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Escena_32sin_32t_237tuloCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.Escena_32sin_32t_237tuloCode.asyncCallback9306532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Escena_32sin_32t_237tuloCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "New dialogue tree");
}{gdjs.adMob.setupBanner("ca-app-pub-7261440393356471~4630154694", "", true);
}{gdjs.adMob.showBanner();
}{gdjs.adMob.setupBanner("ca-app-pub-7261440393356471~4630154694", "", false);
}{gdjs.adMob.showBanner();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9224244);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("boton"), gdjs.Escena_32sin_32t_237tuloCode.GDbotonObjects1);
{for(var i = 0, len = gdjs.Escena_32sin_32t_237tuloCode.GDbotonObjects1.length ;i < len;++i) {
    gdjs.Escena_32sin_32t_237tuloCode.GDbotonObjects1[i].setPosition(570,1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("País"), gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1);
gdjs.copyArray(runtimeScene.getObjects("boton2"), gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("dni"), gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1);
gdjs.copyArray(runtimeScene.getObjects("nombre"), gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1);
gdjs.copyArray(runtimeScene.getObjects("telefono"), gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1.length;i<l;++i) {
    if ( gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_1 = true;
        gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1[k] = gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1[i];
        ++k;
    }
}
gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1.length;i<l;++i) {
    if ( gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_1 = true;
        gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1[k] = gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1[i];
        ++k;
    }
}
gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1.length;i<l;++i) {
    if ( gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_1 = true;
        gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1[k] = gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1[i];
        ++k;
    }
}
gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1.length;i<l;++i) {
    if ( gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_1 = true;
        gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1[k] = gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1[i];
        ++k;
    }
}
gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects1.length;i<l;++i) {
    if ( gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects1[k] = gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects1[i];
        ++k;
    }
}
gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects1.length = k;
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton2"), gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects1);
gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1.length = 0;

gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1.length = 0;

gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1.length = 0;

gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects1.length;i<l;++i) {
    if ( gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects1[k] = gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects1[i];
        ++k;
    }
}
gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1_2final.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1_2final.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1_2final.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("telefono"), gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects2);
for (var i = 0, k = 0, l = gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects2.length;i<l;++i) {
    if ( gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_2 = true;
        gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects2[k] = gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects2[i];
        ++k;
    }
}
gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1_2final.indexOf(gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects2[j]) === -1 )
            gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1_2final.push(gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("nombre"), gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects2);
for (var i = 0, k = 0, l = gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects2.length;i<l;++i) {
    if ( gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_2 = true;
        gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects2[k] = gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects2[i];
        ++k;
    }
}
gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1_2final.indexOf(gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects2[j]) === -1 )
            gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1_2final.push(gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("dni"), gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects2);
for (var i = 0, k = 0, l = gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects2.length;i<l;++i) {
    if ( gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_2 = true;
        gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects2[k] = gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects2[i];
        ++k;
    }
}
gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1_2final.indexOf(gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects2[j]) === -1 )
            gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1_2final.push(gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("País"), gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects2);
for (var i = 0, k = 0, l = gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects2.length;i<l;++i) {
    if ( gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_2 = true;
        gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects2[k] = gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects2[i];
        ++k;
    }
}
gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1_2final.indexOf(gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects2[j]) === -1 )
            gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1_2final.push(gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1_2final, gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1);
gdjs.copyArray(gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1_2final, gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1);
gdjs.copyArray(gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1_2final, gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1);
gdjs.copyArray(gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1_2final, gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9303884);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Escena_32sin_32t_237tuloCode.GDNewTextObjects1);
{gdjs.dialogueTree.startFrom("1");
}{for(var i = 0, len = gdjs.Escena_32sin_32t_237tuloCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32sin_32t_237tuloCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineText());
}
}
{ //Subevents
gdjs.Escena_32sin_32t_237tuloCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Escena_32sin_32t_237tuloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Escena_32sin_32t_237tuloCode.GDbotonObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDbotonObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDboton2Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDboton3Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDboton3Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDboton4Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDboton4Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDboton5Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDboton5Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDboton6Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDboton6Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSpriteObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSpriteObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDnombreObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDtelefonoObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDdniObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDPa_95237sObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewTextObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewTextObjects2.length = 0;

gdjs.Escena_32sin_32t_237tuloCode.eventsList1(runtimeScene);

return;

}

gdjs['Escena_32sin_32t_237tuloCode'] = gdjs.Escena_32sin_32t_237tuloCode;
