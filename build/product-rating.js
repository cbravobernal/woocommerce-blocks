(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[29],{291:function(t,e,n){"use strict";n.r(e);var s=n(0),c=n(1),r=n(4),o=n.n(r),a=n(29),u=n(56),i=(n(357),n(43));e.default=Object(u.withProductDataContext)(t=>{const{parentClassName:e}=Object(a.useInnerBlockLayoutContext)(),{product:n}=Object(a.useProductDataContext)(),r=(t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0})(n),u=Object(i.b)(t),l=Object(i.d)(t),b=Object(i.c)(t);if(!r)return null;const p={width:r/5*100+"%"},d=Object(c.sprintf)(
/* translators: %f is referring to the average rating value */
Object(c.__)("Rated %f out of 5","woo-gutenberg-products-block"),r),g=(t=>{const e=parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0})(n),j={__html:Object(c.sprintf)(
/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(c._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",g,"woo-gutenberg-products-block"),Object(c.sprintf)('<strong class="rating">%f</strong>',r),Object(c.sprintf)('<span class="rating">%d</span>',g))};return Object(s.createElement)("div",{className:o()(u.className,"wc-block-components-product-rating",{[e+"__product-rating"]:e}),style:{...u.style,...l.style,...b.style}},Object(s.createElement)("div",{className:o()("wc-block-components-product-rating__stars",e+"__product-rating__stars"),role:"img","aria-label":d},Object(s.createElement)("span",{style:p,dangerouslySetInnerHTML:j})))})},357:function(t,e){}}]);