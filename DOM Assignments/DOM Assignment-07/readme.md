## DOM Assignment 7
`Note: Solution for every task is in code snippets below `

---
#### Task 1 :

User has to remove languages which have 2.0 in their name.

**Output Screenshot**
![Output Screenshot](./output%20images/output_task1.png)

#### Solution
```java script
    let nodeList = document.querySelectorAll(".main__languages a"); 
    let  array = [...nodeList];
    let filteredArray = array.filter((_, index) => index % 2 !== 0);
    filteredArray.forEach(element => {
    element.parentNode.removeChild(element);
    });
```

#### Task 2 :

User has to change the placeholder of the text feild to iNeuron.

**Output Screenshot**
![Output Screenshot](./output%20images/output_task2.png)

#### Solution
```java script
    let element = document.querySelector(".main__form-input");
    element.placeholder='iNeuron';
    element.disabled= false;
    let element2 = document.querySelector(".main__form-btn");
    element2.disabled= false;
```
