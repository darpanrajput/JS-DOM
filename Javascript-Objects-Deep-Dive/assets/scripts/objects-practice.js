let person = {
    name: "Max",
    age: 30,
    hobbies: ['sports', "cooking"],
    greet: function () {
        alert("hi");
    },
    'comment name': "hello"

};

//assign key outside the object
person.IsAdmin = true;
//delete the property
delete person.age;

//resetting property
// person.age=null;

//accessing
console.log(person.IsAdmin);
//accessing
console.log(person)

//accesing string keys with space using square brackets
console.log(person['comment name']);
console.log(person['name']);

//accessing css property as original
/*const movie = document.getElementById("movie-list");
movie.style['background-color'] = 'red'
movie.style['backgroundColor'] = "red";
movie.style.backgroundColor = "green";
movie.style.display = 'block';
*/

//Number and symbol as keys;
person = {
    name: "Max",
    age: 30,
    hobbies: ['sports', "cooking"],
    greet: function () {
        alert("hi");
    },
    'comment name': "hello",
    1.7: 'number as key'

};

console.log(person[1.7]);

//order of the properties is according to the how the propeties was inserted'''
console.log(person)

/* if you have number as keys then the order will be sorted 
PROPRTY TYPE AND ORDERS
*/
let jsOBJ = {
    4: true,
    1: "hi",
    0: "there"
}
console.log(jsOBJ);

/* DYNAMIC PROPERTY ACCESS AND ASSIGIN */
const keyName = "name";
console.log(person[keyName]);

//define property dynamicallly
const userChosenKeyName = "level";
person = {
    name: "Max",
    age: 30,
    [userChosenKeyName]: "Medium Level"

};


console.log(person)

//Getters Setters

let MOVIES = {
    info: {
        set title(value) {
            if (value.trim === '') {
                this._title = "DEFAULT VALUE"

                return;
            }
            //_title is the key created on the fly
            this._title = value;
        },

        get title() {
            return this._title.toUpperCase();
        },

    },
    id: Math.random(),
    getFormattedTitle: function () {
        return this.info.title.toUpperCase();
    }

}

MOVIES.info.title = "Javascript assigning the Setters"
console.log("getting the value", MOVIES.info.title);