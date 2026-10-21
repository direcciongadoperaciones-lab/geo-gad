import L from 'leaflet'
import * as turf from '@turf/turf'
import 'leaflet/dist/leaflet.css'

const BASES=[
{id:1,nombre:'GAD ESCOBAR',lat:-34.352,lng:-58.789,zona:'NORTE'},
{id:2,nombre:'GAD PILAR',lat:-34.458,lng:-58.914,zona:'NORTE'},
{id:3,nombre:'GAD TIGRE',lat:-34.423,lng:-58.579,zona:'NORTE'},
{id:4,nombre:'GAD SAN FERNANDO',lat:-34.44,lng:-58.56,zona:'NORTE'},
{id:5,nombre:'GAD SAN ISIDRO',lat:-34.47,lng:-58.52,zona:'NORTE'},
{id:6,nombre:'GAD VICENTE LOPEZ',lat:-34.52,lng:-58.48,zona:'NORTE'},
{id:7,nombre:'GAD SAN MARTIN',lat:-34.57,lng:-58.53,zona:'NORTE'},
{id:8,nombre:'GAD TRES DE FEBRERO',lat:-34.60,lng:-58.56,zona:'NORTE'},
{id:9,nombre:'GAD MORON',lat:-34.65,lng:-58.62,zona:'OESTE'},
{id:10,nombre:'GAD ITUZAINGO',lat:-34.66,lng:-58.67,zona:'OESTE'},
{id:11,nombre:'GAD MERLO',lat:-34.66,lng:-58.72,zona:'OESTE'},
{id:12,nombre:'GAD MORENO',lat:-34.65,lng:-58.79,zona:'OESTE'},
{id:13,nombre:'GAD GRAL RODRIGUEZ',lat:-34.60,lng:-58.95,zona:'OESTE'},
{id:14,nombre:'GAD LUJAN',lat:-34.57,lng:-59.10,zona:'OESTE'},
{id:15,nombre:'GAD LA MATANZA',lat:-34.68,lng:-58.56,zona:'OESTE'},
{id:16,nombre:'GAD EZEIZA',lat:-34.85,lng:-58.52,zona:'SUR'},
{id:17,nombre:'GAD E. ECHEVERRIA',lat:-34.80,lng:-58.45,zona:'SUR'},
{id:18,nombre:'GAD ALTE BROWN',lat:-34.78,lng:-58.40,zona:'SUR'},
{id:19,nombre:'GAD LOMAS',lat:-34.76,lng:-58.40,zona:'SUR'},
{id:20,nombre:'GAD LANUS',lat:-34.70,lng:-58.39,zona:'SUR'},
{id:21,nombre:'GAD AVELLANEDA',lat:-34.66,lng:-58.36,zona:'SUR'},
{id:22,nombre:'GAD QUILMES',lat:-34.72,lng:-58.25,zona:'SUR'},
{id:23,nombre:'GAD BERAZATEGUI',lat:-34.76,lng:-58.21,zona:'SUR'},
{id:24,nombre:'GAD F. VARELA',lat:-34.80,lng:-58.28,zona:'SUR'},
{id:25,nombre:'GAD LA PLATA',lat:-34.92,lng:-57.95,zona:'SUR'},
{id:26,nombre:'GAD BRANDSEN',lat:-35.17,lng:-58.23,zona:'SUR'},
{id:27,nombre:'GAD SAN VICENTE',lat:-35.02,lng:-58.42,zona:'SUR'},
{id:28,nombre:'GAD CAÑUELAS',lat:-35.05,lng:-58.76,zona:'SUR'},
{id:29,nombre:'GAD LOBOS',lat:-35.18,lng:-59.10,zona:'SUR'},
{id:30,nombre:'GAD MERCEDES',lat:-34.65,lng:-59.43,zona:'OESTE'},
{id:31,nombre:'GAD CHIVILCOY',lat:-34.90,lng:-60.01,zona:'OESTE'},
{id:32,nombre:'GAD BRAGADO',lat:-35.12,lng:-60.49,zona:'OESTE'},
{id:33,nombre:'GAD JUNIN',lat:-34.58,lng:-60.94,zona:'NORTE'},
{id:34,nombre:'GAD PERGAMINO',lat:-33.89,lng:-60.57,zona:'NORTE'},
{id:35,nombre:'GAD SAN NICOLAS',lat:-33.33,lng:-60.21,zona:'NORTE'},
{id:36,nombre:'GAD ZARATE',lat:-34.09,lng:-59.03,zona:'NORTE'},
{id:37,nombre:'GAD CAMPANA',lat:-34.16,lng:-58.95,zona:'NORTE'},
{id:38,nombre:'GAD BAHIA BLANCA',lat:-38.71,lng:-62.27,zona:'SUR'},
{id:39,nombre:'GAD C. SUAREZ',lat:-37.45,lng:-61.93,zona:'SUR'},
{id:40,nombre:'GAD OLAVARRIA',lat:-36.89,lng:-60.32,zona:'SUR'},
{id:41,nombre:'GAD TANDIL',lat:-37.32,lng:-59.13,zona:'SUR'},
{id:42,nombre:'GAD MAR DEL PLATA',lat:-38.00,lng:-57.55,zona:'SUR'},
{id:43,nombre:'GAD PINAMAR',lat:-37.10,lng:-56.86,zona:'SUR'},
{id:44,nombre:'GAD VILLA GESELL',lat:-37.26,lng:-56.97,zona:'SUR'},
{id:45,nombre:'GAD NECOCHEA',lat:-38.55,lng:-58.74,zona:'SUR'},
]
const COL={NORTE:'#a5d8ff',SUR:'#ffafcc',OESTE:'#b9fbc0'}
const map=L.map('map').setView([-36,-60],6.5)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
const pts=BASES.map(b=>turf.point([b.lng,b.lat],{zona:b.zona}))
const vor=turf.voronoi(turf.featureCollection(pts),{bbox:[-63.5,-41,-54,-31]})
L.geoJSON(vor,{style:(f)=>{return{fillColor:COL[f.properties.zona]||'#ffd6a5',fillOpacity:0.35,color:'#ffffff',weight:2,opacity:1}}}).addTo(map)
BASES.forEach(b=>{
L.circleMarker([b.lat,b.lng],{radius:9,fillColor:'#00c853',color:'#fff',weight:2,fillOpacity:1}).addTo(map).bindPopup(b.nombre)
const ic=L.divIcon({className:'',html:`<div style="background:rgba(255,255,255,0.7);border-radius:6px;padding:2px 6px;color:#212121;font-weight:700;font-size:11px;white-space:nowrap;box-shadow:0 1px 4px rgba(0,0,0,0.25)">${b.nombre}</div>`,iconSize:[120,20],iconAnchor:[60,-10]})
L.marker([b.lat,b.lng],{icon:ic}).addTo(map)
})