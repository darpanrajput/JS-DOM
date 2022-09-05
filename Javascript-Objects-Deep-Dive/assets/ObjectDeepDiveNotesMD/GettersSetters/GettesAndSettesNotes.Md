# Getters and Setters in Javascript
we can set getters and setters to achieve extra validation before
adding the value to the object(i.e from the user) that can
be used as a key and value pair. 

```JS
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

//Outputs:
//getting the value JAVASCRIPT ASSIGNING THE SETTERS
```