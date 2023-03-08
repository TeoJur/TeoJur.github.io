var size = 0;
var placement = 'point';
function categories_PrimtrePnCal_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Périmètre du PnCal : Aire d\'adhésion':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(223,236,166,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Périmètre du PnCal : Aire maritime adjacente':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(139,203,217,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Périmètre du PnCal : Coeur marin':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(48,170,200,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Périmètre du PnCal : Coeur terrestre':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(133,188,114,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PrimtrePnCal_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("zone");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_PrimtrePnCal_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
