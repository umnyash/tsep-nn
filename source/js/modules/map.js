/* * * * * * * * * * * * * * * * * * * * * * * *
 * map.js
 */
async function initMap(mapElement) {
  const COORDINATES = [43.895817, 56.227675];

  const containerElement = mapElement.querySelector('.map__inner');

  await ymaps3.ready;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapMarker,
    YMapDefaultFeaturesLayer
  } = ymaps3;

  const map = new YMap(
    containerElement,
    {
      location: {
        center: COORDINATES,
        zoom: 12
      }
    }
  );

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());

  const markerElement = document
    .querySelector('#map-marker-template')
    .content
    .querySelector('.map-marker')
    .cloneNode(true);

  const marker = new YMapMarker(
    {
      coordinates: COORDINATES,
    },
    markerElement
  );

  map.addChild(marker);
}
/* * * * * * * * * * * * * * * * * * * * * * * */
