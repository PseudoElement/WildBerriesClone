import { createEl } from "./functions";
import { menu } from "./HeaderEvents";
const main = document.querySelector(`main`);
const subListsArray = [];
class SubList {
  constructor() {
    this.wrapper = createEl("div", {//<---В каждом новом подсписке создается новый враппер, в который добавляются товары.
      className: "subList-wrapper",///Как сделать общий враппер, чтобы в него добавлялись товары, в зависимости от выбранного пункта и удалялись старые?
    });
    main.append(this.wrapper);
    this.wrapper.style.position = "fixed";
    this.wrapper.style.zIndex = 11;
    this.wrapper.style.borderRadius = "10px";
    this.wrapper.style.top = `${menu.offsetTop}px`;
    this.wrapper.style.left = `${menu.offsetWidth}px`;
    this.wrapper.style.height = `${menu.offsetHeight}px`;
    this.wrapper.style.width = `300px`;
    this.wrapper.style.backgroundColor = "white";
    subListsArray.push(this.wrapper);
  }
  addItem(text) {
    this.item = createEl("div", {
      className: "item",
      textContent: text,
    });
    this.wrapper.append(this.item);
  }
  addDefiniteNumberOfItems(arr) {
    for (let counter = 0; counter < arr.length; counter++) {
      this.addItem(arr[counter]);
    }
  }
}
const forWomenList = [
  "Блузки и рубашки",
  "Брюки",
  "Верхняя одежда",
  "Джемперы, водолазки и кардиганы",
  "Джинсы",
  "Комбинезоны",
  "Костюмы",
  "Лонгсливы",
  "Пиджаки,жилеты и жакеты",
  "Платья и сарафаны",
  "Толстовки, свитшоты и худи",
  "Туники",
  "Футболки и топы",
  "Халаты",
  "Шорты",
  "Юбки",
  "Белье",
  "Большие размеры",
  "Будущие мамы",
  "Для высоких",
  "Для невысоких",
  "Одежда для дома",
  "Офис",
  "Пляжная мода",
  "Религиозная",
  "Свадьба",
  "Спецодежда и СИЗы",
  "Подарки женщинам",
];
const shoesList = [
  "Детская",
  "Для новорожденных",
  "Женская",
  "Мужская",
  "Ортопедическая обувь",
  "Аксессуары для обуви",
];
const forChildrenList = [
  "Для девочек",
  "Для мальчиков",
  "Для новорожденных",
  "Детская электроника",
  "Конструкторы",
  "Детский транспорт",
  "Детское питание",
  "Религиозная одежда",
  "Товары для малыша",
  "Подарки детям",
];
const forMenList = [
  "Брюки",
  "Верхняя одежда",
  "Джемперы, водолазки и кардиганы",
  "Джинсы",
  "Комбинезоны и полукомбинезоны",
  "Костюмы",
  "Лонгсливы",
  "Майки",
  "Пиджаки, жилеты и жакеты",
  "Пижамы",
  "Рубашки",
  "Толстовки, свитшоты и худи",
  "Футболки",
  "Футболки-поло",
  "Халаты",
];
const houseList = [
  "Ванная",
  "Кухня",
  "Предметы интерьера",
  "Спальня",
  "Гостиная",
  "Детская",
  "Досуг и творчество",
  "Зеркала",
  "Коврики",
  "Кронштейны",
  "Освещение",
  "Для курения",
];
const newYearList = [
  "Вечерний образ",
  "Праздничная обувь",
  "Наряды для детей",
  "Карнавальные товары",
  "Елки",
  "Новогодний декор",
  "Новогодние книги",
  "Открытки",
  "Подарки",
  "Подарочная упаковка",
  "Праздничный стол",
  "Свечи и подсвечники",
  "Символ года",
];
const beautyList = [
  "Аксессуары",
  "Волосы",
  "Аптченая косметика",
  "Детская декоративная косметика",
  "Для загара",
  "Для мам и малышей",
  "Израильская косметика",
  "Инструменты для парикмахеров",
  "Корейские бренды",
  "Макияж",
  "Мужская линия",
  "Наборы для ухода",
  "Ногти",
  "Органическая косметика",
  "Парфюмерия",
  "Уход за кожей",
  "Гигиена полости рта",
];
const accessoriesList = [
  "Аксессуары для волос",
  "Аксессуары для одежды",
  "Бижутерия",
  "Веера",
  "Галстуки и бабочки",
  "Головные уборы",
  "Зеркальца",
  "Зонты",
  "Кошельки и кредитницы",
  "Маски для сна",
  "Носовые платки",
  "Oчки и футляры",
  "Перчатки и варежки",
  "Платки и шарфы",
  "Религиозные",
  "Ремни и пояса",
];
const electroList = [
  "Автоэлеткроника и навигация",
  "Гарнитуры и наушники",
  "Детская электроника",
  "Игровые консоли и игры",
  "Кабели и зарядные устройства",
  "Музыка и видео",
  "Ноутбуки и компьютеры",
  "Офисная техника",
  "Развлечения и гаджеты",
  "Сетевое оборудование",
  "Системы безопасности",
  "Смартфоны и телефоны",
  "Умный дом",
];
const toysList = [
  "Антистресс",
  "Для малышей",
  "Для песочницы",
  "Игровые комплексы",
  "Игровые наборы",
  "Игрушечный транспорт",
  "Игрушки для ванной",
  "Интерактивные",
  "Кинетический песок",
  "Конструкторы",
  "Куклы и аксессуары",
  "Музыкальные",
  "Мыльные пузыри",
  "Мягкие игрушки",
  "Наборы для опытов",
  "Настольные игры",
  "Радиоуправляемые",
  "Сборные модели",
  "Спортивные игры",
  "Фигурки и роботы",
];
const furnitureList = [
  "Бескаркасная мебель",
  "Детская мебель",
  "Диваны и кресла",
  "Столы и стулья",
  "Мебель для гостиной",
  "Мебель для кухни",
  "Мебель для прихожей",
  "Mебель для спальни",
  "Офисная мебель",
  "Мебельная фурнитура",
];
const forAdultList = [
  "Белье и аксессуары",
  "Игры и сувениры",
  "Интимная косметика",
  "Интимная съедобная косметика",
  "Презервативы и лубриканты",
  "Секс игрушки",
  "Фетиш и БДСМ",
];
const productsList = [
  "Вкусные подарки",
  "Чай и кофе",
  "Сладости и хлебобулочные изделия",
  "Бакалея",
  "Детское питание",
  "Добавик пищевые",
  "Здоровое питание",
  "Мясная продукция",
  "Молочные продукты и яйца",
  "Напитки",
  "Снеки",
  "Замороженная продукция",
  "Фрукты и ягоды",
  "Овощи",
];
const forWomen = new SubList();
forWomen.addDefiniteNumberOfItems(forWomenList);
const shoes = new SubList();
shoes.addDefiniteNumberOfItems(shoesList);
const forChildren = new SubList();
forChildren.addDefiniteNumberOfItems(forChildrenList);
const forMen = new SubList();
forMen.addDefiniteNumberOfItems(forMenList);
const house = new SubList();
house.addDefiniteNumberOfItems(houseList);
const newYear = new SubList();
newYear.addDefiniteNumberOfItems(newYearList);
const beauty = new SubList();
beauty.addDefiniteNumberOfItems(beautyList);
const accessories = new SubList();
accessories.addDefiniteNumberOfItems(accessoriesList);
const electro = new SubList();
electro.addDefiniteNumberOfItems(electroList);
const toys = new SubList();
toys.addDefiniteNumberOfItems(toysList);
const furniture = new SubList();
furniture.addDefiniteNumberOfItems(furnitureList);
const forAdult = new SubList();
forAdult.addDefiniteNumberOfItems(forAdultList);
const products = new SubList();
products.addDefiniteNumberOfItems(productsList);
export { SubList, subListsArray };
