## DOM Assignment 4
`Note: Solution for every task is in code snippets below `

---
#### Task 1 :

User has to change colour of bottom of div according to the character and make the text colour to white.

**Output Screenshot**
![Output Screenshot](./output%20images/output_task1.png)

#### Solution
```java script
    let barbarian= document.querySelector(".clash-card__unit-stats--barbarian");
    let archer= document.querySelector(".clash-card__unit-stats--archer");
    let giant= document.querySelector(".clash-card__unit-stats--giant");
    let goblin= document.querySelector(".clash-card__unit-stats--goblin");
    let wizard= document.querySelector(".clash-card__unit-stats--wizard");
    barbarian.style.backgroundColor='#EC9B3B';
    archer.style.backgroundColor='#EE5487';
    giant.style.backgroundColor='#F6901A';
    goblin.style.backgroundColor='#82BB30';
    wizard.style.backgroundColor='#4FACFF';
    let white= document.querySelectorAll(".one-third");
    white.forEach((element)=>{element.style.color="#ffffff"});
```
