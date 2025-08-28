
## The Requirements to Create Readme

---
### Questioned by PH Team.

You have to create a `Readme.md` file. and write down following questions. Don't Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---
---
---


# My Writing from Here

-----
-----

#### Question No. 01 : 
    Question: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Answer :

###### 1. First of all, `getElementById` and `querySelector` is kind of same thing. Both are returns **HTMLElement**. but the difference is `getElementById` takes just id name without '#', in other hand `querySelector` takes any type of CSS selector and then return first matching element. If they find nothing, then returns **null**.
_example :_
```javascript
const m = document.getElementById('section-1-heading');
const n = document.querySelector('#section-1-heading');
console.log(m === n); // output : true
``` 
<br/>

###### 2. The core difference of the second two is, `getElementsByClassName` is an DOM selector that take class name then returns **Live HTML Collection**, that is an Array like Object. and `querySelectorAll` take any type of CSS selector, then returns a **NodeList**, this is Array like Object too.
_example :_
``` javascript
const i = document.getElementByClassName('title');
const j = document.querySelectorAll('.title');
console.log(i[0] === j[0]); // output : true
```

_____
-----

#### Question No. 02 :
    Question : How do you create and insert a new element into the DOM?

### Answer :

###### First thing is creating, then inserting. 
###### It is a 3 step procedure, first step is create an element and give it a location using variable, this time I use `createElement()` function. Second step is pick the parent element and give it a variable. then comes third step or the final step, it is appending the child element in parent element using `.appendChild()` function.
_example :_
```javascript
const newElement = document.createElement('h1');
const parentElement = document.getElementById('parent-div'):
parentElement.appendChild(newElement);
```

_____
-----

#### Question No. 03 :
    3. What is Event Bubbling and how does it work?

### Answer :

###### It is the process to find where an event happens, and then how it takes step.
###### It starts with finding where event happened, first check parent, if found then check children, when found then checks in grandchildren, this way it finds where are event happened (`target`). When it is found, the action bubbles upward from this child to the parent, then grandparent all the way to `document`. This is how it works.
###### In simple word and with real life example, suppose a boy named Joy is playing cricket, He accidentally throws the ball at the front buildings 3rd floor flat's drawing room window, and breaks the glass. Its the event 🥲. then first came out the guests who sitting in drawing room (`target`), and say *"He hit me"*, then came out flat's owner (`parent`), says *"He breaks my flats window"*, then came out caretaker (`grandparent`), says *"He damaged our building"*; it is taking action 🥲.

_example :_
```HTML
<div id="parent-div">
    <button id="child">Click Me</button>
</div>
<script>
    document.getElementById('parent-div').addEventListener('click', function(){
        console.log('Parent Div Clicked');
    })
    document.getElementById('child').addEventListener('click', function(){
        console.log('Button Clicked');
    })
</script>
```
_output :_

    Button Clicked
    Parent Div Clicked

###### This is an example of how bubbling works.

###### **If I want to stop this bubbling,** then I use `event.stopPropagation()` function to stop bubbling, kind of flat owner saying to the caretaker *"I will handle it, don't take action against Joy".*

_example :_
```HTML
<div id="parent-div">
    <button id="child">Click Me</button>
</div>
<script>
    document.getElementById('child').addEventListener('click', function(event){
        console.log('Button Clicked');
        event.stopPropagation(); // it stops the event from reaching parent.
    })
    document.getElementById('parent-div').addEventListener('click', function(){
        console.log('Parent Div Clicked');
    })
</script>
```
_output :_

    Button Clicked

-----
-----

#### Question No. 04 :
    4. What is Event Delegation in JavaScript? Why is it useful?

### Answer :

###### Event Delegation is a system to shorten the process of taking action. First we have to know what is this, Event Delegation's `definition` is writing only one `eventListener()` to a parent element instead of writing on every child element. Its like talking with the school principal to introduce a new rule that applies to every student, every student who writes a 3-page assay about the school, they will get extra 5 marks in this subject. 

###### If I, as a teacher, go to every student and check whether he wrote it or not, then add 5 marks.. It takes a decade to finish the process. It's like normal eventListener, it about adding `eventListener()` to every DOM element, every time the page loads, it loads all the code, its a bit slower, here comes the hero, `The Delegation`. The shorter process to take an action using a single listener. 

###### Now I will talk about how it is useful. It have 3 core benefits, 
   1. Its very fast, not that much eat RAM, hundreds or thousands of events can work with just 1 line code and 1 if-else condition. 
   2. It works even when new child elements are added, no need to write extra event listener for new child element. 
   3. It keeps the workspace cleaner, it throw away the junk of repetitive code.

###### Syntax :
```HTML
<div id="parent-div">
    <button class="spacial-btn">Button-1</button>
    <button class="btn">Button-2</button>
    <button class="spacial-btn">Button-3</button>
</div>
<script>
    document.getElementById('parent-div').addEventListener('click', function(e){
        if (e.target.getAttribute('class').includes('spacial-btn')){
            console.log('You click on :', e.target.innerText);
        }
    })
</script>
```
_output :_

    You click on : Button-1
    You click on : Button-3

-----
-----

#### Question No. 05 :
    5. What is the difference between preventDefault() and stopPropagation() methods?

### Answer :




-----
-----
###### *Written by*
## Saad Ferozee