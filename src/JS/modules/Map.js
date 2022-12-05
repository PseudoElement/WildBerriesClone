const wildBerriesShopsInfo = [
  {
    coords: [53.867416, 27.485726],
    name: `проспект Дзержинского, 84`,
    info: `Режим работы: Ежедневно 08:00-22:00`,
  },
  {
    coords: [53.862032, 27.475665],
    name: `проспект Газеты Правда, 42`,
    info: `Режим работы: Ежедневно 08:00-22:00`,
  },
  {
    coords: [53.888027, 27.520401],
    name: `улица Декабристов, 4
    `,
    info: `Режим работы: Ежедневно 08:00-22:00`,
  },
  {
    coords: [53.900841, 27.540882],
    name: `улица Михаила Гебелева, 1
    `,
    info: `Режим работы: Ежедневно 08:00-20:00`,
  },
  {
    coords: [53.900729, 27.569736],
    name: `улица Янки Купалы, 7    `,
    info: `Режим работы: Ежедневно 09:00-22:00`,
  },
  {
    coords: [53.915783, 27.57333],
    name: `проспект Машерова, 18
    `,
    info: `Режим работы: Ежедневно 10:00-22:00`,
  },
  {
    coords: [53.922867, 27.596704],
    name: `улица Богдана Хмельницкого, 4
    `,
    info: `Режим работы: Ежедневно 08:00-22:00`,
  },
  {
    coords: [53.958563, 27.550836],
    name: `улица Выготского, 45
    `,
    info: `Режим работы: Ежедневно 08:00-20:00`,
  },
  {
    coords: [53.933598, 27.475754],
    name: `Мястровская улица, 6

    `,
    info: `Режим работы: Ежедневно 08:00-20:00`,
  },
];
const locationBtn = document.querySelector(`.svg.location`);
const mapBlock = document.getElementById(`mapBlock`);
console.log(mapBlock);
function init() {
  let map = new ymaps.Map("mapBlock", {
    center: [53.90544038433489, 27.554096271671458],
    zoom: 11,
  });
  wildBerriesShopsInfo.forEach((shop) => {
    const placemark = new ymaps.Placemark(
      [shop.coords[0], shop.coords[1]],
      {
        iconCaption: "Пункт выдачи",
        balloonContentHeader: shop.name,
        balloonContentBody: shop.info,
      },
      {
        preset: "islands#pinkDotIcon",
      }
    );
    map.geoObjects.add(placemark);
  });
}
ymaps.ready(init);
locationBtn.addEventListener("click", () => {
  window.scrollTo({
    top: mapBlock.getBoundingClientRect().top + window.scrollY,
    left: 0,
    behavior: "smooth",
  });
});
