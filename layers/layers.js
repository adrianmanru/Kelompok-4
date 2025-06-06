var wms_layers = [];


        var lyr_GoogleLabels_0 = new ol.layer.Tile({
            'title': 'Google Labels',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTraffic_1 = new ol.layer.Tile({
            'title': 'Google Traffic',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_3 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_4 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_5 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_6 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JumlahPendudukribu_7 = new ol.format.GeoJSON();
var features_JumlahPendudukribu_7 = format_JumlahPendudukribu_7.readFeatures(json_JumlahPendudukribu_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahPendudukribu_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JumlahPendudukribu_7.addFeatures(features_JumlahPendudukribu_7);
var lyr_JumlahPendudukribu_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JumlahPendudukribu_7, 
                style: style_JumlahPendudukribu_7,
                popuplayertitle: 'Jumlah Penduduk (ribu)',
                interactive: true,
    title: 'Jumlah Penduduk (ribu)<br />\
    <img src="styles/legend/JumlahPendudukribu_7_0.png" /> 54 - 100<br />\
    <img src="styles/legend/JumlahPendudukribu_7_1.png" /> 100 - 150<br />\
    <img src="styles/legend/JumlahPendudukribu_7_2.png" /> 150 - 200<br />\
    <img src="styles/legend/JumlahPendudukribu_7_3.png" /> 200 - 250<br />\
    <img src="styles/legend/JumlahPendudukribu_7_4.png" /> 250 - 300<br />\
    <img src="styles/legend/JumlahPendudukribu_7_5.png" /> 300 - 350<br />\
    <img src="styles/legend/JumlahPendudukribu_7_6.png" /> 350 - 377<br />' });
var format_BatasAdministrasi_8 = new ol.format.GeoJSON();
var features_BatasAdministrasi_8 = format_BatasAdministrasi_8.readFeatures(json_BatasAdministrasi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_8.addFeatures(features_BatasAdministrasi_8);
var lyr_BatasAdministrasi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_8, 
                style: style_BatasAdministrasi_8,
                popuplayertitle: 'Batas Administrasi',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasi_8.png" /> Batas Administrasi'
            });
var format_Pemukiman_9 = new ol.format.GeoJSON();
var features_Pemukiman_9 = format_Pemukiman_9.readFeatures(json_Pemukiman_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_9.addFeatures(features_Pemukiman_9);
var lyr_Pemukiman_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_9, 
                style: style_Pemukiman_9,
                popuplayertitle: 'Pemukiman',
                interactive: false,
                title: '<img src="styles/legend/Pemukiman_9.png" /> Pemukiman'
            });
var format_Jalan_10 = new ol.format.GeoJSON();
var features_Jalan_10 = format_Jalan_10.readFeatures(json_Jalan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_10.addFeatures(features_Jalan_10);
var lyr_Jalan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_10, 
                style: style_Jalan_10,
                popuplayertitle: 'Jalan',
                interactive: false,
                title: '<img src="styles/legend/Jalan_10.png" /> Jalan'
            });
var format_Puskesmas_11 = new ol.format.GeoJSON();
var features_Puskesmas_11 = format_Puskesmas_11.readFeatures(json_Puskesmas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_11.addFeatures(features_Puskesmas_11);
var lyr_Puskesmas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puskesmas_11, 
                style: style_Puskesmas_11,
                popuplayertitle: 'Puskesmas',
                interactive: true,
                title: '<img src="styles/legend/Puskesmas_11.png" /> Puskesmas'
            });
var format_Posyandu_12 = new ol.format.GeoJSON();
var features_Posyandu_12 = format_Posyandu_12.readFeatures(json_Posyandu_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Posyandu_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Posyandu_12.addFeatures(features_Posyandu_12);
var lyr_Posyandu_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Posyandu_12, 
                style: style_Posyandu_12,
                popuplayertitle: 'Posyandu',
                interactive: true,
                title: '<img src="styles/legend/Posyandu_12.png" /> Posyandu'
            });
var format_RumahSakit_13 = new ol.format.GeoJSON();
var features_RumahSakit_13 = format_RumahSakit_13.readFeatures(json_RumahSakit_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_13.addFeatures(features_RumahSakit_13);
var lyr_RumahSakit_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakit_13, 
                style: style_RumahSakit_13,
                popuplayertitle: 'Rumah Sakit',
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_13.png" /> Rumah Sakit'
            });
var group_FasilitasKesehatan = new ol.layer.Group({
                                layers: [lyr_Puskesmas_11,lyr_Posyandu_12,lyr_RumahSakit_13,],
                                fold: 'open',
                                title: 'Fasilitas Kesehatan'});

lyr_GoogleLabels_0.setVisible(false);lyr_GoogleTraffic_1.setVisible(false);lyr_GoogleHybrid_2.setVisible(false);lyr_GoogleTerrain_3.setVisible(false);lyr_GoogleRoad_4.setVisible(false);lyr_OpenTopoMap_5.setVisible(false);lyr_OSMStandard_6.setVisible(true);lyr_JumlahPendudukribu_7.setVisible(true);lyr_BatasAdministrasi_8.setVisible(false);lyr_Pemukiman_9.setVisible(false);lyr_Jalan_10.setVisible(true);lyr_Puskesmas_11.setVisible(true);lyr_Posyandu_12.setVisible(true);lyr_RumahSakit_13.setVisible(true);
var layersList = [lyr_GoogleLabels_0,lyr_GoogleTraffic_1,lyr_GoogleHybrid_2,lyr_GoogleTerrain_3,lyr_GoogleRoad_4,lyr_OpenTopoMap_5,lyr_OSMStandard_6,lyr_JumlahPendudukribu_7,lyr_BatasAdministrasi_8,lyr_Pemukiman_9,lyr_Jalan_10,group_FasilitasKesehatan];
lyr_JumlahPendudukribu_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', '-_Jumlah Penduduk (Ribu)': '-_Jumlah Penduduk (Ribu)', '-_Laju Pertumbuhan Penduduk per Tahun': '-_Laju Pertumbuhan Penduduk per Tahun', '-_Persentase Penduduk': '-_Persentase Penduduk', '-_Kepadatan Penduduk per km persegi (Km2)': '-_Kepadatan Penduduk per km persegi (Km2)', '-_Rasio Jenis Kelamin Penduduk': '-_Rasio Jenis Kelamin Penduduk', });
lyr_BatasAdministrasi_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', '-_Jumlah Penduduk (Ribu)': '-_Jumlah Penduduk (Ribu)', '-_Laju Pertumbuhan Penduduk per Tahun': '-_Laju Pertumbuhan Penduduk per Tahun', '-_Persentase Penduduk': '-_Persentase Penduduk', '-_Kepadatan Penduduk per km persegi (Km2)': '-_Kepadatan Penduduk per km persegi (Km2)', '-_Rasio Jenis Kelamin Penduduk': '-_Rasio Jenis Kelamin Penduduk', });
lyr_Pemukiman_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_10.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Puskesmas_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JPLPKM': 'JPLPKM', 'KMPPKM': 'KMPPKM', 'PKMKAT': 'PKMKAT', 'PKMKODE': 'PKMKODE', 'PKMLMT': 'PKMLMT', 'KWKPKM': 'KWKPKM', });
lyr_Posyandu_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'LKALMT': 'LKALMT', 'TPLYST': 'TPLYST', });
lyr_RumahSakit_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JPLYRS': 'JPLYRS', 'RSALAMAT': 'RSALAMAT', 'TIPRST': 'TIPRST', });
lyr_JumlahPendudukribu_7.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', '-_Jumlah Penduduk (Ribu)': 'TextEdit', '-_Laju Pertumbuhan Penduduk per Tahun': 'TextEdit', '-_Persentase Penduduk': 'TextEdit', '-_Kepadatan Penduduk per km persegi (Km2)': 'Range', '-_Rasio Jenis Kelamin Penduduk': 'Range', });
lyr_BatasAdministrasi_8.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', '-_Jumlah Penduduk (Ribu)': 'Hidden', '-_Laju Pertumbuhan Penduduk per Tahun': 'Hidden', '-_Persentase Penduduk': 'Hidden', '-_Kepadatan Penduduk per km persegi (Km2)': 'Hidden', '-_Rasio Jenis Kelamin Penduduk': 'Hidden', });
lyr_Pemukiman_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jalan_10.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Puskesmas_11.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', 'FCODE': 'Hidden', 'REMARK': 'TextEdit', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'JPLPKM': 'Hidden', 'KMPPKM': 'Hidden', 'PKMKAT': 'Hidden', 'PKMKODE': 'Hidden', 'PKMLMT': 'Hidden', 'KWKPKM': 'Hidden', });
lyr_Posyandu_12.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'Hidden', 'LCODE': 'Hidden', 'REMARK': 'TextEdit', 'SRS_ID': 'Hidden', 'METADATA': 'Hidden', 'LKALMT': 'Hidden', 'TPLYST': 'Hidden', });
lyr_RumahSakit_13.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', 'FCODE': 'Hidden', 'REMARK': 'TextEdit', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'JPLYRS': 'Hidden', 'RSALAMAT': 'Hidden', 'TIPRST': 'Hidden', });
lyr_JumlahPendudukribu_7.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', '-_Jumlah Penduduk (Ribu)': 'inline label - always visible', '-_Laju Pertumbuhan Penduduk per Tahun': 'inline label - always visible', '-_Persentase Penduduk': 'inline label - always visible', '-_Kepadatan Penduduk per km persegi (Km2)': 'inline label - always visible', '-_Rasio Jenis Kelamin Penduduk': 'inline label - always visible', });
lyr_BatasAdministrasi_8.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_Pemukiman_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_10.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Puskesmas_11.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', });
lyr_Posyandu_12.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', });
lyr_RumahSakit_13.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', });
lyr_RumahSakit_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});