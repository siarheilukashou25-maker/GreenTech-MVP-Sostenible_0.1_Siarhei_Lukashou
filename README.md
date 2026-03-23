
# GreenTech-MVP-Sostenible_0.1_Siarhei_Lukashou

# Cómo tú reducción de ancho de banda disminuye el carbono embebido y alarga la vida útil del hardware?

Reducir ancho de banda sí ayuda en ambos frentes, por una cadena bastante directa:
 - Menos bytes transferidos → menos trabajo en red (routers, antenas, switches, CDNs, data centers).
 - Menos CPU/JS/render en cliente y servidor → menor consumo eléctrico por visita.
 - Menor consumo eléctrico acumulado → menor huella de carbono operativa (si la red eléctrica no es 100% renovable).
   
Y sobre hardware:
 - Menos carga constante (CPU, RAM, I/O, radio móvil) en móviles/PCs.
 - Menos ciclos térmicos y picos de temperatura durante uso intensivo de web.
 - Menor degradación por estrés continuo (sobre todo batería en móviles y equipos antiguos).
Resultado: el equipo puede mantenerse útil más tiempo antes de “sentirse lento” o necesitar reemplazo.

# CSS nativo vs librerias externas
Se han quitado dependencias externas: 

 - Bootstrap (CSS + JS) 
 -  Font Awesome 
 -  jQuery Moment.js 
 -  Google Fonts

Se han cambiado lógica de jQuery con JS nativo para coger el ano actual.

# Imagen [1]
He sacado la imagen a img nativo de HTML para aplicar lazy loading, aun que no tiene mucho sentido aqui, porque la imagen aparece en primer pantalla

# Optimizacion de los fuentes [2]
He utilizado las fuentes de sistema sin Google Font.

 - `text-rendering: optimizeLegibility` - hace texto mas legible
 -   `-webkit-font-smoothing: antialiased` - suaviza bordes. 
  -  `font-synthesis: none` - sin falsificar (no inventar negrita/cursiva por el navegador).

# Bundling y minification [3]

He anadido bundling y minify para maxima optimizacion(para minify he utilizado plugin de VS code, para bundling he utilizado la IA). Al hacer build se me ha creado un nuevo index.html listo para deploy. Incluso con archivo tan pequeno me ha salido uno 14% de optimizacion y he reducido solicitudes externas de 7 a 1. Para hacer build en terminal hay que poner `npm.cmd run build` y para ver cuanto he ahorado hay que poner `node .\size.mjs`

![Optimizacion total contra version original](https://i.imgur.com/HoK3Sqn.png)

# Fuentes:

[1] -   [John Serrano](https://johnserrano.co/), "Lazy Loading en HTML: cómo cargar imágenes de forma eficiente sin usar JavaScript." [Online]. Available: https://johnserrano.co/blog/lazy-loading-en-html-como-cargar-imagenes-de-forma-eficiente-sin-usar-javascript

[2] -  developer.mozilla.org, "font-display" [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-display

[3] -   Mircosoft, "Bundling and Minification" [Online]. Available: https://learn.microsoft.com/en-us/aspnet/mvc/overview/performance/bundling-and-minification
