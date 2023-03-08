ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2154").setExtent([885783.389577, 6231685.653569, 909370.213084, 6244938.607347]);
var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__0, 
                style: style__0,
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> '
            });
var lyr_CartetopoSC25_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Carte topo SC25",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CartetopoSC25_1.png",
    attributions: ' ',
                                projection: 'EPSG:2154',
                                alwaysInRange: true,
                                imageExtent: [880654.000000, 6231554.000000, 915964.000000, 6248413.000000]
                            })
                        });
var format_PrimtrePnCal_2 = new ol.format.GeoJSON();
var features_PrimtrePnCal_2 = format_PrimtrePnCal_2.readFeatures(json_PrimtrePnCal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_PrimtrePnCal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimtrePnCal_2.addFeatures(features_PrimtrePnCal_2);
var lyr_PrimtrePnCal_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrimtrePnCal_2, 
                style: style_PrimtrePnCal_2,
                interactive: true,
    title: 'Périmètre PnCal<br />\
    <img src="styles/legend/PrimtrePnCal_2_0.png" /> Périmètre du PnCal : Aire d\'adhésion<br />\
    <img src="styles/legend/PrimtrePnCal_2_1.png" /> Périmètre du PnCal : Aire maritime adjacente<br />\
    <img src="styles/legend/PrimtrePnCal_2_2.png" /> Périmètre du PnCal : Coeur marin<br />\
    <img src="styles/legend/PrimtrePnCal_2_3.png" /> Périmètre du PnCal : Coeur terrestre<br />'
        });
var format_Secteurlargedudiagnostic_3 = new ol.format.GeoJSON();
var features_Secteurlargedudiagnostic_3 = format_Secteurlargedudiagnostic_3.readFeatures(json_Secteurlargedudiagnostic_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Secteurlargedudiagnostic_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurlargedudiagnostic_3.addFeatures(features_Secteurlargedudiagnostic_3);
var lyr_Secteurlargedudiagnostic_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Secteurlargedudiagnostic_3, 
                style: style_Secteurlargedudiagnostic_3,
                interactive: true,
                title: '<img src="styles/legend/Secteurlargedudiagnostic_3.png" /> Secteur large du diagnostic'
            });
var format_Zonelocaledudiagnostic_4 = new ol.format.GeoJSON();
var features_Zonelocaledudiagnostic_4 = format_Zonelocaledudiagnostic_4.readFeatures(json_Zonelocaledudiagnostic_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Zonelocaledudiagnostic_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonelocaledudiagnostic_4.addFeatures(features_Zonelocaledudiagnostic_4);
var lyr_Zonelocaledudiagnostic_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonelocaledudiagnostic_4, 
                style: style_Zonelocaledudiagnostic_4,
                interactive: true,
                title: '<img src="styles/legend/Zonelocaledudiagnostic_4.png" /> Zone locale du diagnostic'
            });
var format_Zonededchetsdiffuse_5 = new ol.format.GeoJSON();
var features_Zonededchetsdiffuse_5 = format_Zonededchetsdiffuse_5.readFeatures(json_Zonededchetsdiffuse_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Zonededchetsdiffuse_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonededchetsdiffuse_5.addFeatures(features_Zonededchetsdiffuse_5);
var lyr_Zonededchetsdiffuse_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonededchetsdiffuse_5, 
                style: style_Zonededchetsdiffuse_5,
                interactive: true,
                title: '<img src="styles/legend/Zonededchetsdiffuse_5.png" /> Zone de déchets diffuse'
            });
var format_Zonededchetsponctuelle_6 = new ol.format.GeoJSON();
var features_Zonededchetsponctuelle_6 = format_Zonededchetsponctuelle_6.readFeatures(json_Zonededchetsponctuelle_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Zonededchetsponctuelle_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonededchetsponctuelle_6.addFeatures(features_Zonededchetsponctuelle_6);
var lyr_Zonededchetsponctuelle_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonededchetsponctuelle_6, 
                style: style_Zonededchetsponctuelle_6,
                interactive: true,
    title: 'Zone de déchets ponctuelle<br />\
    <img src="styles/legend/Zonededchetsponctuelle_6_0.png" /> Type : ZAP / ZAD<br />\
    <img src="styles/legend/Zonededchetsponctuelle_6_1.png" /> Type : zone d\'abandon de déchets<br />\
    <img src="styles/legend/Zonededchetsponctuelle_6_2.png" /> Type : zone d\'accumulation préférentielle<br />'
        });

lyr__0.setVisible(false);lyr_CartetopoSC25_1.setVisible(true);lyr_PrimtrePnCal_2.setVisible(true);lyr_Secteurlargedudiagnostic_3.setVisible(true);lyr_Zonelocaledudiagnostic_4.setVisible(true);lyr_Zonededchetsdiffuse_5.setVisible(true);lyr_Zonededchetsponctuelle_6.setVisible(true);
var layersList = [lyr__0,lyr_CartetopoSC25_1,lyr_PrimtrePnCal_2,lyr_Secteurlargedudiagnostic_3,lyr_Zonelocaledudiagnostic_4,lyr_Zonededchetsdiffuse_5,lyr_Zonededchetsponctuelle_6];
lyr__0.set('fieldAliases', {'id': 'id', 'texte': 'texte', });
lyr_PrimtrePnCal_2.set('fieldAliases', {'zone': 'zone', });
lyr_Secteurlargedudiagnostic_3.set('fieldAliases', {'id': 'id', 'Zone': 'Zone', 'etiq_x': 'etiq_x', 'etiqu_y': 'etiqu_y', });
lyr_Zonelocaledudiagnostic_4.set('fieldAliases', {'Zone_large': 'Zone_large', 'Zone_loc': 'Zone_loc', });
lyr_Zonededchetsdiffuse_5.set('fieldAliases', {'id': 'id', 'orig': 'orig', 'comm': 'comm', });
lyr_Zonededchetsponctuelle_6.set('fieldAliases', {'id': 'id', 'typ': 'typ', 'zon': 'zon', 'org': 'org', 'com': 'com', });
lyr__0.set('fieldImages', {'id': 'TextEdit', 'texte': 'TextEdit', });
lyr_PrimtrePnCal_2.set('fieldImages', {'zone': 'TextEdit', });
lyr_Secteurlargedudiagnostic_3.set('fieldImages', {'id': 'TextEdit', 'Zone': 'TextEdit', 'etiq_x': '', 'etiqu_y': '', });
lyr_Zonelocaledudiagnostic_4.set('fieldImages', {'Zone_large': '', 'Zone_loc': '', });
lyr_Zonededchetsdiffuse_5.set('fieldImages', {'id': '', 'orig': '', 'comm': '', });
lyr_Zonededchetsponctuelle_6.set('fieldImages', {'id': 'TextEdit', 'typ': 'TextEdit', 'zon': 'TextEdit', 'org': 'TextEdit', 'com': 'TextEdit', });
lyr__0.set('fieldLabels', {'id': 'no label', 'texte': 'no label', });
lyr_PrimtrePnCal_2.set('fieldLabels', {'zone': 'no label', });
lyr_Secteurlargedudiagnostic_3.set('fieldLabels', {'id': 'no label', 'Zone': 'no label', 'etiq_x': 'no label', 'etiqu_y': 'no label', });
lyr_Zonelocaledudiagnostic_4.set('fieldLabels', {'Zone_large': 'no label', 'Zone_loc': 'no label', });
lyr_Zonededchetsdiffuse_5.set('fieldLabels', {'id': 'no label', 'orig': 'no label', 'comm': 'no label', });
lyr_Zonededchetsponctuelle_6.set('fieldLabels', {'id': 'no label', 'typ': 'no label', 'zon': 'no label', 'org': 'no label', 'com': 'no label', });
lyr_Zonededchetsponctuelle_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});