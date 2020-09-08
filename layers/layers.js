ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32614").setExtent([460819.020958, 2098408.143612, 491366.136377, 2115838.429624]);
var wms_layers = [];


        var lyr_Satelie_0 = new ol.layer.Tile({
            'title': 'Satelie',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Limite_Municipal_1 = new ol.format.GeoJSON();
var features_Limite_Municipal_1 = format_Limite_Municipal_1.readFeatures(json_Limite_Municipal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Limite_Municipal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Municipal_1.addFeatures(features_Limite_Municipal_1);
var lyr_Limite_Municipal_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Municipal_1, 
                style: style_Limite_Municipal_1,
                interactive: true,
                title: '<img src="styles/legend/Limite_Municipal_1.png" /> Limite_Municipal'
            });
var format_Localidades_2 = new ol.format.GeoJSON();
var features_Localidades_2 = format_Localidades_2.readFeatures(json_Localidades_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Localidades_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_2.addFeatures(features_Localidades_2);
var lyr_Localidades_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_2, 
                style: style_Localidades_2,
                interactive: true,
                title: '<img src="styles/legend/Localidades_2.png" /> Localidades'
            });
var format_Manzanas_3 = new ol.format.GeoJSON();
var features_Manzanas_3 = format_Manzanas_3.readFeatures(json_Manzanas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Manzanas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_3.addFeatures(features_Manzanas_3);
var lyr_Manzanas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzanas_3, 
                style: style_Manzanas_3,
                interactive: true,
                title: '<img src="styles/legend/Manzanas_3.png" /> Manzanas'
            });
var format_Areas_de_recreacion_4 = new ol.format.GeoJSON();
var features_Areas_de_recreacion_4 = format_Areas_de_recreacion_4.readFeatures(json_Areas_de_recreacion_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Areas_de_recreacion_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_de_recreacion_4.addFeatures(features_Areas_de_recreacion_4);
var lyr_Areas_de_recreacion_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areas_de_recreacion_4, 
                style: style_Areas_de_recreacion_4,
                interactive: true,
                title: '<img src="styles/legend/Areas_de_recreacion_4.png" /> Areas_de_recreacion'
            });
var format_Vialidades_5 = new ol.format.GeoJSON();
var features_Vialidades_5 = format_Vialidades_5.readFeatures(json_Vialidades_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Vialidades_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vialidades_5.addFeatures(features_Vialidades_5);
var lyr_Vialidades_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vialidades_5, 
                style: style_Vialidades_5,
                interactive: true,
                title: '<img src="styles/legend/Vialidades_5.png" /> Vialidades'
            });
var format_Red_de_Carreteras_6 = new ol.format.GeoJSON();
var features_Red_de_Carreteras_6 = format_Red_de_Carreteras_6.readFeatures(json_Red_de_Carreteras_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Red_de_Carreteras_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_de_Carreteras_6.addFeatures(features_Red_de_Carreteras_6);
var lyr_Red_de_Carreteras_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Red_de_Carreteras_6, 
                style: style_Red_de_Carreteras_6,
                interactive: true,
    title: 'Red_de_Carreteras<br />\
    <img src="styles/legend/Red_de_Carreteras_6_0.png" /> CAMINO<br />\
    <img src="styles/legend/Red_de_Carreteras_6_1.png" /> CUOTA<br />\
    <img src="styles/legend/Red_de_Carreteras_6_2.png" /> LIBRE<br />'
        });
var format_Economia_Huitzilac_7 = new ol.format.GeoJSON();
var features_Economia_Huitzilac_7 = format_Economia_Huitzilac_7.readFeatures(json_Economia_Huitzilac_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Economia_Huitzilac_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Economia_Huitzilac_7.addFeatures(features_Economia_Huitzilac_7);
var lyr_Economia_Huitzilac_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Economia_Huitzilac_7, 
                style: style_Economia_Huitzilac_7,
                interactive: true,
    title: 'Economia_Huitzilac<br />\
    <img src="styles/legend/Economia_Huitzilac_7_0.png" /> Abarrotes<br />\
    <img src="styles/legend/Economia_Huitzilac_7_1.png" /> Accesorios para celular<br />\
    <img src="styles/legend/Economia_Huitzilac_7_2.png" /> Accesorios para motos<br />\
    <img src="styles/legend/Economia_Huitzilac_7_3.png" /> Administración pública en general<br />\
    <img src="styles/legend/Economia_Huitzilac_7_4.png" /> Alquiler de mesas, sillas, vajillas y similares<br />\
    <img src="styles/legend/Economia_Huitzilac_7_5.png" /> Alquiler de salones para fiestas y convenciones<br />\
    <img src="styles/legend/Economia_Huitzilac_7_6.png" /> Antena Repetidora<br />\
    <img src="styles/legend/Economia_Huitzilac_7_7.png" /> Arte en vidrio<br />\
    <img src="styles/legend/Economia_Huitzilac_7_8.png" /> Asociaciones y organizaciones civiles<br />\
    <img src="styles/legend/Economia_Huitzilac_7_9.png" /> Asociaciones y organizaciones religiosas<br />\
    <img src="styles/legend/Economia_Huitzilac_7_10.png" /> Autolavados<br />\
    <img src="styles/legend/Economia_Huitzilac_7_11.png" /> Autotransporte de carga especializado<br />\
    <img src="styles/legend/Economia_Huitzilac_7_12.png" /> Autotransporte de materiales para la construcción<br />\
    <img src="styles/legend/Economia_Huitzilac_7_13.png" /> Azulejerias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_14.png" /> Banca múltiple<br />\
    <img src="styles/legend/Economia_Huitzilac_7_15.png" /> Banquetes<br />\
    <img src="styles/legend/Economia_Huitzilac_7_16.png" /> Bares, cantinas y similares<br />\
    <img src="styles/legend/Economia_Huitzilac_7_17.png" /> Bazares<br />\
    <img src="styles/legend/Economia_Huitzilac_7_18.png" /> Bibliotecas y archivos del sector público<br />\
    <img src="styles/legend/Economia_Huitzilac_7_19.png" /> Billares<br />\
    <img src="styles/legend/Economia_Huitzilac_7_20.png" /> Bloquera<br />\
    <img src="styles/legend/Economia_Huitzilac_7_21.png" /> Boneteria<br />\
    <img src="styles/legend/Economia_Huitzilac_7_22.png" /> Botanas<br />\
    <img src="styles/legend/Economia_Huitzilac_7_23.png" /> Cafeterías<br />\
    <img src="styles/legend/Economia_Huitzilac_7_24.png" /> Carnicerias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_25.png" /> Carpinterias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_26.png" /> Casas de juegos electrónicos<br />\
    <img src="styles/legend/Economia_Huitzilac_7_27.png" /> Casetas de Cobro<br />\
    <img src="styles/legend/Economia_Huitzilac_7_28.png" /> Centro psicologico<br />\
    <img src="styles/legend/Economia_Huitzilac_7_29.png" /> Centros de Salud<br />\
    <img src="styles/legend/Economia_Huitzilac_7_30.png" /> Cerrajerías<br />\
    <img src="styles/legend/Economia_Huitzilac_7_31.png" /> Cerveceras<br />\
    <img src="styles/legend/Economia_Huitzilac_7_32.png" /> CFE<br />\
    <img src="styles/legend/Economia_Huitzilac_7_33.png" /> CIBER<br />\
    <img src="styles/legend/Economia_Huitzilac_7_34.png" /> Cocteles de fruta y botana<br />\
    <img src="styles/legend/Economia_Huitzilac_7_35.png" /> Comedor comunitarios<br />\
    <img src="styles/legend/Economia_Huitzilac_7_36.png" /> Consultorio dental<br />\
    <img src="styles/legend/Economia_Huitzilac_7_37.png" /> Consultorio medico<br />\
    <img src="styles/legend/Economia_Huitzilac_7_38.png" /> Costureros<br />\
    <img src="styles/legend/Economia_Huitzilac_7_39.png" /> Elaboración de pulque<br />\
    <img src="styles/legend/Economia_Huitzilac_7_40.png" /> Electrodomesticos<br />\
    <img src="styles/legend/Economia_Huitzilac_7_41.png" /> Empacadore de carnes<br />\
    <img src="styles/legend/Economia_Huitzilac_7_42.png" /> Escuelas de deporte del sector privado<br />\
    <img src="styles/legend/Economia_Huitzilac_7_43.png" /> Escuelas de educación media superior<br />\
    <img src="styles/legend/Economia_Huitzilac_7_44.png" /> Escuelas de educación preescolar<br />\
    <img src="styles/legend/Economia_Huitzilac_7_45.png" /> Escuelas de educación primaria<br />\
    <img src="styles/legend/Economia_Huitzilac_7_46.png" /> Escuelas de educación secundaria general<br />\
    <img src="styles/legend/Economia_Huitzilac_7_47.png" /> Escuelas de educación secundaria técnica<br />\
    <img src="styles/legend/Economia_Huitzilac_7_48.png" /> Escuelas de educación superior<br />\
    <img src="styles/legend/Economia_Huitzilac_7_49.png" /> Escuelas de enseñanza de oficios<br />\
    <img src="styles/legend/Economia_Huitzilac_7_50.png" /> Escuelas del sector privado<br />\
    <img src="styles/legend/Economia_Huitzilac_7_51.png" /> Estampados e impresiones<br />\
    <img src="styles/legend/Economia_Huitzilac_7_52.png" /> Fabricación de alambre<br />\
    <img src="styles/legend/Economia_Huitzilac_7_53.png" /> Fabricación de artículos de alfarería<br />\
    <img src="styles/legend/Economia_Huitzilac_7_54.png" /> Fabricación de bombas y sistemas de bombeo<br />\
    <img src="styles/legend/Economia_Huitzilac_7_55.png" /> Fabricación de carrocerías y remolques<br />\
    <img src="styles/legend/Economia_Huitzilac_7_56.png" /> Fabricación de cosméticos y perfumes<br />\
    <img src="styles/legend/Economia_Huitzilac_7_57.png" /> Fabricación de juguetes<br />\
    <img src="styles/legend/Economia_Huitzilac_7_58.png" /> Fabricación de manufactura metalmecánica<br />\
    <img src="styles/legend/Economia_Huitzilac_7_59.png" /> Fabricación de muebles<br />\
    <img src="styles/legend/Economia_Huitzilac_7_60.png" /> Fabricación de tornillos<br />\
    <img src="styles/legend/Economia_Huitzilac_7_61.png" /> Fabricación de velas y veladoras<br />\
    <img src="styles/legend/Economia_Huitzilac_7_62.png" /> Farmacia Veterinaria<br />\
    <img src="styles/legend/Economia_Huitzilac_7_63.png" /> Farmacias con minisúper<br />\
    <img src="styles/legend/Economia_Huitzilac_7_64.png" /> Farmacias sin minisúper<br />\
    <img src="styles/legend/Economia_Huitzilac_7_65.png" /> Ferreteria<br />\
    <img src="styles/legend/Economia_Huitzilac_7_66.png" /> Florerias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_67.png" /> Forrajerias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_68.png" /> Gas L.P.<br />\
    <img src="styles/legend/Economia_Huitzilac_7_69.png" /> Gasolineras<br />\
    <img src="styles/legend/Economia_Huitzilac_7_70.png" /> Gestoria Vehicular<br />\
    <img src="styles/legend/Economia_Huitzilac_7_71.png" /> Grupos AA<br />\
    <img src="styles/legend/Economia_Huitzilac_7_72.png" /> Grupos Musicales<br />\
    <img src="styles/legend/Economia_Huitzilac_7_73.png" /> Guarderías del sector privado<br />\
    <img src="styles/legend/Economia_Huitzilac_7_74.png" /> GYM<br />\
    <img src="styles/legend/Economia_Huitzilac_7_75.png" /> Hamburguesas<br />\
    <img src="styles/legend/Economia_Huitzilac_7_76.png" /> Herrerias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_77.png" /> Hojalatería y pintura<br />\
    <img src="styles/legend/Economia_Huitzilac_7_78.png" /> Hoteles<br />\
    <img src="styles/legend/Economia_Huitzilac_7_79.png" /> Impresión de formas continuas<br />\
    <img src="styles/legend/Economia_Huitzilac_7_80.png" /> INEA<br />\
    <img src="styles/legend/Economia_Huitzilac_7_81.png" /> ISSSTE<br />\
    <img src="styles/legend/Economia_Huitzilac_7_82.png" /> Jerserias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_83.png" /> Laboratorios médicos<br />\
    <img src="styles/legend/Economia_Huitzilac_7_84.png" /> Laminación secundaria de metales<br />\
    <img src="styles/legend/Economia_Huitzilac_7_85.png" /> Lavanderías y tintorerías<br />\
    <img src="styles/legend/Economia_Huitzilac_7_86.png" /> Liga de futbol<br />\
    <img src="styles/legend/Economia_Huitzilac_7_87.png" /> Materiales para Construccion<br />\
    <img src="styles/legend/Economia_Huitzilac_7_88.png" /> Materias Primas<br />\
    <img src="styles/legend/Economia_Huitzilac_7_89.png" /> Ministerio Publico<br />\
    <img src="styles/legend/Economia_Huitzilac_7_90.png" /> Minisupers<br />\
    <img src="styles/legend/Economia_Huitzilac_7_91.png" /> Mofles<br />\
    <img src="styles/legend/Economia_Huitzilac_7_92.png" /> Mueblerias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_93.png" /> Panaderias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_94.png" /> Papelerias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_95.png" /> Pinturas<br />\
    <img src="styles/legend/Economia_Huitzilac_7_96.png" /> Pizzeria<br />\
    <img src="styles/legend/Economia_Huitzilac_7_97.png" /> Pollerias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_98.png" /> Pollos rostizados<br />\
    <img src="styles/legend/Economia_Huitzilac_7_99.png" /> Preparación de embutidos<br />\
    <img src="styles/legend/Economia_Huitzilac_7_100.png" /> Productos de cosmeticos<br />\
    <img src="styles/legend/Economia_Huitzilac_7_101.png" /> Productos de plástico<br />\
    <img src="styles/legend/Economia_Huitzilac_7_102.png" /> Productos Herbalife<br />\
    <img src="styles/legend/Economia_Huitzilac_7_103.png" /> Productos metálicos<br />\
    <img src="styles/legend/Economia_Huitzilac_7_104.png" /> Promotores de espectáculos<br />\
    <img src="styles/legend/Economia_Huitzilac_7_105.png" /> Pullman<br />\
    <img src="styles/legend/Economia_Huitzilac_7_106.png" /> Purificación y embotellado de agua<br />\
    <img src="styles/legend/Economia_Huitzilac_7_107.png" /> Refaccionarias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_108.png" /> Refacciones para bicicleta<br />\
    <img src="styles/legend/Economia_Huitzilac_7_109.png" /> Renta de inflables<br />\
    <img src="styles/legend/Economia_Huitzilac_7_110.png" /> Reparación de aparatos electrodomesticos<br />\
    <img src="styles/legend/Economia_Huitzilac_7_111.png" /> Reparación de calzado<br />\
    <img src="styles/legend/Economia_Huitzilac_7_112.png" /> Reparación de celulares<br />\
    <img src="styles/legend/Economia_Huitzilac_7_113.png" /> Reposterias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_114.png" /> Restaurantes<br />\
    <img src="styles/legend/Economia_Huitzilac_7_115.png" /> Restaurantes de autoservicio<br />\
    <img src="styles/legend/Economia_Huitzilac_7_116.png" /> Restaurantes de pescados y mariscos<br />\
    <img src="styles/legend/Economia_Huitzilac_7_117.png" /> Salones de belleza y peluquerías<br />\
    <img src="styles/legend/Economia_Huitzilac_7_118.png" /> Sanitarios públicos<br />\
    <img src="styles/legend/Economia_Huitzilac_7_119.png" /> Servicio electrico<br />\
    <img src="styles/legend/Economia_Huitzilac_7_120.png" /> Servicios de arquitectura<br />\
    <img src="styles/legend/Economia_Huitzilac_7_121.png" /> Servicios de contabilidad y auditoría<br />\
    <img src="styles/legend/Economia_Huitzilac_7_122.png" /> Servicios de enfermería a domicilio<br />\
    <img src="styles/legend/Economia_Huitzilac_7_123.png" /> Servicios de fotografía y videograbación<br />\
    <img src="styles/legend/Economia_Huitzilac_7_124.png" /> Servicios de grúa<br />\
    <img src="styles/legend/Economia_Huitzilac_7_125.png" /> Servicios de ingeniería<br />\
    <img src="styles/legend/Economia_Huitzilac_7_126.png" /> Servicios de profesores particulares<br />\
    <img src="styles/legend/Economia_Huitzilac_7_127.png" /> Servicios funerarios<br />\
    <img src="styles/legend/Economia_Huitzilac_7_128.png" /> Servicios veterinarios para mascotas<br />\
    <img src="styles/legend/Economia_Huitzilac_7_129.png" /> Sindicatos<br />\
    <img src="styles/legend/Economia_Huitzilac_7_130.png" /> Sistemas de Agua<br />\
    <img src="styles/legend/Economia_Huitzilac_7_131.png" /> Sitio de taxis<br />\
    <img src="styles/legend/Economia_Huitzilac_7_132.png" /> Supervicion Escolar<br />\
    <img src="styles/legend/Economia_Huitzilac_7_133.png" /> T.V. por cable<br />\
    <img src="styles/legend/Economia_Huitzilac_7_134.png" /> Tacos y Tortas<br />\
    <img src="styles/legend/Economia_Huitzilac_7_135.png" /> Taller de joyerias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_136.png" /> Taller Mecanico<br />\
    <img src="styles/legend/Economia_Huitzilac_7_137.png" /> Tamales y Atole<br />\
    <img src="styles/legend/Economia_Huitzilac_7_138.png" /> Tapiceria<br />\
    <img src="styles/legend/Economia_Huitzilac_7_139.png" /> Tienda de regalos<br />\
    <img src="styles/legend/Economia_Huitzilac_7_140.png" /> Tienda Naturista<br />\
    <img src="styles/legend/Economia_Huitzilac_7_141.png" /> Tiendas de artesanías<br />\
    <img src="styles/legend/Economia_Huitzilac_7_142.png" /> Tlapalerias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_143.png" /> Torno<br />\
    <img src="styles/legend/Economia_Huitzilac_7_144.png" /> Tortilleria<br />\
    <img src="styles/legend/Economia_Huitzilac_7_145.png" /> Tortillerias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_146.png" /> Transporte turístico por agua<br />\
    <img src="styles/legend/Economia_Huitzilac_7_147.png" /> Venta de inflables<br />\
    <img src="styles/legend/Economia_Huitzilac_7_148.png" /> Venta de loza<br />\
    <img src="styles/legend/Economia_Huitzilac_7_149.png" /> Venta de miel<br />\
    <img src="styles/legend/Economia_Huitzilac_7_150.png" /> Venta de peces<br />\
    <img src="styles/legend/Economia_Huitzilac_7_151.png" /> Venta de peliculas<br />\
    <img src="styles/legend/Economia_Huitzilac_7_152.png" /> Venta de semillas y chiles<br />\
    <img src="styles/legend/Economia_Huitzilac_7_153.png" /> Verdulerias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_154.png" /> Vidrierias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_155.png" /> Vinaterias<br />\
    <img src="styles/legend/Economia_Huitzilac_7_156.png" /> Vulcanizadora<br />\
    <img src="styles/legend/Economia_Huitzilac_7_157.png" /> Zapaterias<br />'
        });

lyr_Satelie_0.setVisible(true);lyr_Limite_Municipal_1.setVisible(true);lyr_Localidades_2.setVisible(true);lyr_Manzanas_3.setVisible(true);lyr_Areas_de_recreacion_4.setVisible(true);lyr_Vialidades_5.setVisible(true);lyr_Red_de_Carreteras_6.setVisible(true);lyr_Economia_Huitzilac_7.setVisible(true);
var layersList = [lyr_Satelie_0,lyr_Limite_Municipal_1,lyr_Localidades_2,lyr_Manzanas_3,lyr_Areas_de_recreacion_4,lyr_Vialidades_5,lyr_Red_de_Carreteras_6,lyr_Economia_Huitzilac_7];
lyr_Limite_Municipal_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_Localidades_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'CVE_LOC': 'CVE_LOC', 'NOMGEO': 'NOMGEO', 'AMBITO': 'AMBITO', });
lyr_Manzanas_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'CVE_LOC': 'CVE_LOC', 'CVE_AGEB': 'CVE_AGEB', 'CVE_MZA': 'CVE_MZA', 'AMBITO': 'AMBITO', 'TIPOMZA': 'TIPOMZA', });
lyr_Areas_de_recreacion_4.set('fieldAliases', {'objeto': 'objeto', });
lyr_Vialidades_5.set('fieldAliases', {'VIALIDAD': 'VIALIDAD', 'TIPO_VIALI': 'TIPO_VIALI', 'SENTIDO': 'SENTIDO', });
lyr_Red_de_Carreteras_6.set('fieldAliases', {'TIPOVIA': 'TIPOVIA', 'TIPO': 'TIPO', 'NUMERO': 'NUMERO', 'DERE_TRAN': 'DERE_TRAN', 'Nombre': 'Nombre', });
lyr_Economia_Huitzilac_7.set('fieldAliases', {'nom_estab': 'LOCAL', 'nombre_act': 'nombre_act', 'localidad': 'localidad', 'telefono': 'telefono', });
lyr_Limite_Municipal_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_Localidades_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'CVE_LOC': 'TextEdit', 'NOMGEO': 'TextEdit', 'AMBITO': 'TextEdit', });
lyr_Manzanas_3.set('fieldImages', {'CVEGEO': '', 'CVE_ENT': '', 'CVE_MUN': '', 'CVE_LOC': '', 'CVE_AGEB': '', 'CVE_MZA': '', 'AMBITO': '', 'TIPOMZA': '', });
lyr_Areas_de_recreacion_4.set('fieldImages', {'objeto': 'TextEdit', });
lyr_Vialidades_5.set('fieldImages', {'VIALIDAD': 'TextEdit', 'TIPO_VIALI': 'Hidden', 'SENTIDO': 'Hidden', });
lyr_Red_de_Carreteras_6.set('fieldImages', {'TIPOVIA': 'Hidden', 'TIPO': 'Hidden', 'NUMERO': 'Hidden', 'DERE_TRAN': 'Hidden', 'Nombre': 'TextEdit', });
lyr_Economia_Huitzilac_7.set('fieldImages', {'nom_estab': 'TextEdit', 'nombre_act': 'TextEdit', 'localidad': 'TextEdit', 'telefono': 'TextEdit', });
lyr_Limite_Municipal_1.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_Localidades_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'CVE_LOC': 'no label', 'NOMGEO': 'no label', 'AMBITO': 'no label', });
lyr_Manzanas_3.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'CVE_LOC': 'no label', 'CVE_AGEB': 'no label', 'CVE_MZA': 'no label', 'AMBITO': 'no label', 'TIPOMZA': 'no label', });
lyr_Areas_de_recreacion_4.set('fieldLabels', {'objeto': 'no label', });
lyr_Vialidades_5.set('fieldLabels', {'VIALIDAD': 'no label', });
lyr_Red_de_Carreteras_6.set('fieldLabels', {'Nombre': 'no label', });
lyr_Economia_Huitzilac_7.set('fieldLabels', {'nom_estab': 'inline label', 'nombre_act': 'no label', 'localidad': 'no label', 'telefono': 'no label', });
lyr_Economia_Huitzilac_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});