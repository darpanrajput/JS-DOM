instead it's ForEach and therefore the browser which triggers this function.
So this has the wrong value when we use it like that and the correct value if we use an arrow function instead here inside of ForEach because the arrow function doesn't change the binding of this and therefore this has the binding it 

would have if we write it outside of this function<br/>and what is outside of this function?

Right,it's the get team members function and what is the binding of this in get team members?

It's our object.

That's why it works if we have an arrow function here

and why doesn't work when we have this function. This function tries to bind this and it binds it to

what this refers to when the function executes which is the global object, with an arrow function

this is bound to nothing,

hence it keeps its reference it would have outside of this function which is inside of the get

team members function which is this member's object. Now if that is a lot of new information to digest,

don't worry, we'll work a lot with this and with objects throughout the next modules and throughout the

entire course,

so there will be plenty of places to practice this but the general idea of this should be clear right

now and definitely re-watch these last lectures to get a good understanding of what this refers to and

how it behaves in Javascript because it can be difficult to grasp and therefore, it's super important to have

a solid understanding off that and to really go through these explanations where I do explain what this

refers to.