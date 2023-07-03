## DOM Assignment 8
`Note: Solution for every task is in code snippets below `

---
#### Task 1 :

User has to put a red border around the box.

**Output Screenshot**
![Output Screenshot](./output%20images/output_task1.png)

#### Solution
```java script
   let element= document.querySelector('aside');
   element.style.border = '5px solid red';
```


#### Task 2 :

User has to remove the background effect.

**Output Screenshot**
![Output Screenshot](./output%20images/output_task2.png)

#### Solution
```java script
    element= document.querySelector("body");
    element.style.backgroundImage='none';
```

#### Task 3 :

User has to remove the collapse feature in the navbar.

**Output Screenshot**
![Output Screenshot](./output%20images/output_task3.png)

#### Solution
```java script
    let element= document.querySelector("#navbarTogglerDemo01");
    element.className="navbar-collapse";
```
