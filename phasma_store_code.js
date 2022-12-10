
class Player {
    constructor(name, money, inventory = []) {
        this.name = name;
        this.money = money;
        this.inventory = inventory;
    }
    buy(newItem) {
        if (newItem instanceof Item) {
            if(this.money >= newItem.price){
                if (this.money < 0) {
                
                    console.log('not enough money dude');
                    return;
                }
                this.money = this.money - newItem.price;
                this.inventory.push(newItem);
            } 
        } else {
            console.log(JSON.stringify(newItem) + ' wrong item');   
        }
        var balance = Ciri.money;
        var balanceDiv = document.getElementById("balance");
        function displayValues(balance) {
            balanceDiv.innerText = "Баланс: " + balance;
        }
        displayValues(balance); 
    }
    invAvailable(id,newItem){
        var ratata = this.inventory.filter(item => item === newItem);
        var kolich = document.getElementById(id);
        kolich.innerText = newItem.name + ': ' + ratata.length;
    }
    sell(newItem) {

        var myIndex = this.inventory.indexOf(newItem)
        if (this.inventory.includes(newItem)){
            this.money = this.money + newItem.noprice;
            this.inventory.splice(myIndex,1);
        }else{
            console.log('лох');
        }
        var balance = Ciri.money;
        var balanceDiv = document.getElementById("balance");
        function displayValues(balance) {
            balanceDiv.innerText = "Баланс: " + balance;
        }
        displayValues(balance);
    }
}
function changeItem(boo){
    document.getElementById(boo).style.display= 'none';
}
function rechangeItem(boo){
    document.getElementById(boo).style.display= 'block'
}
class Item {
    constructor(name, price, noprice) {
        this.name = name;
        this.price = price;
        this.noprice = noprice;
    }
}
let video_camera = new Item('Видеокамера',50, 25);
let laser_projector = new Item('Лазерный проектор',50, 25);
let flashlight = new Item('Фонарь',20, 10);
let notepad = new Item('Блокнот', 100, 50);
let radio_receiver = new Item('Радиоприёмник', 80, 40);
let detector_EMP = new Item('Детектор ЭМП', 70, 35);
let uv_flashlight= new Item('УФ-фонарь', 40, 20);
let camera = new Item('Фотокамера', 50, 25);
let candle = new Item('Свеча', 15, 7);
let crucifixion = new Item('Распятие', 20, 10);
let uv_lamp = new Item('УФ-палочка', 40, 20);
let lighter = new Item('Зажигалка', 10, 5);
let motion_sensor = new Item('Датчик движения', 100, 50);
let directional_microphone = new Item('Н. микрофон', 100, 50);
let salt = new Item('Соль', 30, 15);
let sedative = new Item('Успокоительное', 40, 20);
let incense = new Item('Благовоние', 20, 10);
let sound_sensor = new Item('Датчик звука', 80, 40);
let powerful_flashlight = new Item('Мощный фонарь', 50, 25);
let thermometer = new Item('Термометр', 60, 30);
let tripod = new Item('Штатив', 25, 12);
let Ciri = new Player('Ciri', 1000);




