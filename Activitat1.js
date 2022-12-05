/*Exercici 1*/
function _keys(obj) {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(_keys({ref: 'BBDD',nom: 'Bases de Dades',hores: 180,UF: "['UF1','UF2','UF3','UF4']",professor: 'Pep Parés',
alumnes: "['alu1','alu2','alu13','alu4','alu5']"}));
/*Exercici 2*/ 
var Asignatura = {
    ref: 'BBDD',
    nom: 'Bases de Dades',
    hores: 180,
    UF: ['UF1','UF2','UF3','UF4'],
    professor: 'Pep Parés',
    alumnes: ['alu1','alu2','alu13','alu4','alu5']
};
console.log(Asignatura);
delete Asignatura.alumnes;
console.log(Asignatura)
/*Exercici 3*/
Object.objsize = function(Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};
var Asignatura = {
    ref: 'BBDD',
    nom: 'Bases de Dades',
    hores: 180,
    UF: ['UF1','UF2','UF3','UF4'],
    professor: 'Pep Parés',
    alumnes: ['alu1','alu2','alu13','alu4','alu5']
};
var objsize = Object.objsize(Asignatura);
console.log('El tamany de la següent secció és: '+objsize);
/*Exercici 4*/
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    
    for (var i = 0; i < library.length; i++) {
        var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
        console.log(book);
    }
/*Exercici 5*/
function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
  }
  
  Cylinder.prototype.Volume = function () {
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
  };
  
  var cyl = new Cylinder(7, 4);
  // Volume of the cylinder with four decimal places.
  console.log('volume =', cyl.Volume().toFixed(4));
/*Exercici 6*/
function circle(radius){
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));
/*Exercici 7*/
function all_values(obj) {
  var keys = _keys(obj);
  var length = keys.length;
  var values = Array(length);
  for (var i = 0; i < length; i++) {
    values[i] = obj[keys[i]];
  }
  return values;
}
function _keys(obj) 
{
  if (!isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  var keys = [];
  for (var key in obj) if (_.has(obj, key)) keys.push(key);
  return keys;
}
function isObject(obj)   
{  
  var type = typeof obj;  
  return type === 'function' || type === 'object' && !!obj;  
} 
console.log(all_values({ref: 'BBDD',nom: 'Bases de Dades',hores: 180,UF: "['UF1','UF2','UF3','UF4']",professor: 'Pep Parés',
alumnes: "['alu1','alu2','alu13','alu4','alu5']"}));

/*Exercici 8*/
function key_value_pairs(obj) 
   {
    var keys = _keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) 
    {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  }

function _keys(obj) 
  {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
 {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(key_value_pairs({ref: 'BBDD',nom: 'Bases de Dades',hores: 180,UF: "['UF1','UF2','UF3','UF4']",professor: 'Pep Parés',
alumnes: "['alu1','alu2','alu13','alu4','alu5']"}));
/*Exercici 9*/
function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Sara")));
/*Exercici 10*/
function hasKey(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }
console.log(hasKey({ref: 'BBDD',nom: 'Bases de Dades',hores: 180,UF: "['UF1','UF2','UF3','UF4']",professor: 'Pep Parés',
alumnes: "['alu1','alu2','alu13','alu4','alu5']"}));