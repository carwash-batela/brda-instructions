/* Postavke lokacije BRDA (4 boxa, 3 usisavača, mjenjač novca, sjajilo za gume; bez aktivne pjene). */
window.LOC={
 id:'brda',
 name:'BRDA',
 ntfy:'carwash-brda-kvar-3bf0713ad20a7e45',
 map:false,
 boxes:4,vacs:3,
 reportDevs:['changer','boxes','vacuum','gloss'],
 panel:'brda',
 programs:['wash','wax','rinse','rim','stop'],
 devices:['vac','gloss'],
 patch:function(D,TF){
  /* cjenik Brda (na dan 10.9.2026.) */
  TF.order=[['prog',['wash','rinse','wax','rim']],['vac',['vac']],['other',['gloss']]];
  TF.normal.s={wash:85,rinse:85,wax:85,rim:60,vac:190,gloss:80};
  TF.reduced.s={wash:105,rinse:110,wax:105,rim:80,vac:200,gloss:80};
  var three={hr:'Tri usisavača za uređivanje unutrašnjosti auta.',en:'Three vacuum cleaners for tidying the car interior.',de:'Drei Staubsauger für den Fahrzeuginnenraum.',it:'Tre aspirapolvere per l’interno dell’auto.',pl:'Trzy odkurzacze do wnętrza samochodu.',fr:'Trois aspirateurs pour l’intérieur de la voiture.'};
  Object.keys(D).forEach(function(l){D[l].dv.vac[1]=three[l]})
 }
};
