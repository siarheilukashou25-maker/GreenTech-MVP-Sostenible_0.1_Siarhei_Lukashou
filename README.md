# GreenTech-MVP-Sostenible_0.1_Siarhei_Lukashou

# CSS nativo vs librerias externas
Se han quitado dependencias externas: 

 - Bootstrap (CSS + JS) 
 -  Font Awesome 
 -  jQuery Moment.js 
 -  Google Fonts

Se han cambiado lógica de jQuery con JS nativo para coger el ano actual.

# Imagen
He sacado la imagen a img nativo de HTML para aplicar lazy loading, aun que no tiene mucho sentido aqui, porque la imagen aparece en primer pantalla

# Optimizacion de los fuentes
He utilizado las fuentes de sistema sin Google Font.

 - `text-rendering: optimizeLegibility` - hace texto mas legible
 -   `-webkit-font-smoothing: antialiased` - suaviza bordes. 
  -  `font-synthesis: none` - sin falsificar (no inventar negrita/cursiva por el navegador).

# Bundling y minification

He anadido bundling y minify para maxima optimizacion(para minify he utilizado plugin de VS code, para bundling he utilizado la IA). Al hacer build se me ha creado un nuevo index.html listo para deploy. Incluso con archivo tan pequeno me ha salido uno 31% de optimizacion. Para hacer build en terminal hay que poner `npm.cmd run build` y para ver cuanto he ahorado hay que poner `node .\size.mjs`

![Optimizacion total contra version original](https://imgur.com/a/R9NiCZk)