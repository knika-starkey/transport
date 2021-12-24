function Transport(name) {
  this.name = name;
}

Transport.prototype.about = function () {
  alert("Я — " + this.name);
};

//----
function WaterTransport(name) {
  Transport.apply(this, arguments);
}

WaterTransport.prototype = Object.create(Transport.prototype);
WaterTransport.prototype.constructor = WaterTransport;

WaterTransport.prototype.about = function () {
  Transport.prototype.about.apply(this);
  alert("Я плыву!");
};

//----
function AirTransport(name) {
  Transport.apply(this, arguments);
}

AirTransport.prototype = Object.create(Transport.prototype);
AirTransport.prototype.constructor = AirTransport;

AirTransport.prototype.about = function () {
  Transport.prototype.about.apply(this);
  alert("Я лечу!");
};

//----
function LandTransport(name) {
  Transport.apply(this, arguments);
}

LandTransport.prototype = Object.create(Transport.prototype);
LandTransport.prototype.constructor = LandTransport;

LandTransport.prototype.about = function () {
  Transport.prototype.about.apply(this);
  alert("Я еду!");
};

let rocket = new AirTransport("Ракета");
let plane = new AirTransport("Самолет");
let ship = new WaterTransport("Теплоход");
let boat = new WaterTransport("Катер");
let car = new LandTransport("Автомобиль");
let truck = new LandTransport("Грузовик");

let transports = [rocket, plane, ship, boat, car, truck];
for (let i = 0; i < transports.length; i++) {
  transports[i].about();
}
