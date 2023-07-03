## DOM Assignment 1 , 2 and 3
`Note: Solution for every task is in code snippets below `

---
### First Assignment:

#### Task 1 :

User has to append a new element in nav bar.

**Output Screenshot**
![Output Screenshot](./output%20images/first%20assignment/output_task1.png)

#### Solution
```java script
    let element= document.createElement("li");
    let parent= document.querySelector("header nav ul");
    element.innerText= "Hire me";
    parent.appendChild(element);
```

#### Task 2 :

User has to change the placeholder to Search My Project.

**Output Screenshot**
![Output Screenshot](./output%20images/first%20assignment/output_task2.png)

#### Solution

```java script
    let a= document.querySelector(".search-field input");
    a.placeholder="Search My Project";
```

#### Task 3 :

User has to change some content of the subheading.

**Output Screenshot**
![Output Screenshot](./output%20images/first%20assignment/output_task3.png)

#### Solution

```java script
    let element= document.querySelectorAll(".hero-left-section p span");
    element[1].innerText="an Employee";    
    element[2].innerText="iNeuron Intelligence Pvt. Ltd.";    
```

#### Task 4 :

User has to change avatar to hitesh's picture.

**Output Screenshot**
![Output Screenshot](./output%20images/first%20assignment/output_task4.png)

#### Solution

```java script
    let element = document.querySelector(".hero-right-section img");
    element.src="./hitesh.jpeg";    
```

#### Task 5 :

User has to add a button named Support me.

**Output Screenshot**
![Output Screenshot](./output%20images/first%20assignment/output_task5.png)

#### Solution

```java script
    let element = document.querySelector(".hero-right-section img");
    element.innerText="Support Me";
    parent.appendChild(element);
```
---

### Second Assignment:

#### Task 1 :

User needs to change the background colour of the heading and subheading.

**Output Screenshot**
![Output Screenshot](./output%20images/second%20assignment/output_task1.png)

#### Solution
```java script
    let heading= document.querySelectorAll(".accordian h3");
    let subheading= document.querySelectorAll(".accordian p");
    heading.forEach((element)=>{element.style.backgroundColor="#dadaf8"});
    subheading.forEach((element)=>{element.style.backgroundColor="#eeeeff"});
```

#### Task 2 :

User needs to add a new section of skills.

**Output Screenshot**
![Output Screenshot](./output%20images/second%20assignment/output_task2.png)

#### Solution
```java script

//creating and adding elements
    let element= document.createElement("div");
    element.className="accordian";
    let heading= document.createElement("h3");
    let subheading= document.createElement("p");
    heading.innerText="Skills";
    subheading.innerText="I posses a very good command over the Full Stack Development Technologies like MERN which can be seen over my work on github";
    let parent = document.querySelector(".accordian-wrapper");
    element.appendChild(heading);
    element.appendChild(subheading);
    parent.appendChild(element);
    subheading.style.display="none";
// adding event listeners for funtionality
    element.addEventListener("click", () => {
        if (subheading.style.display === "block") {
        subheading.style.display = "none";
        } else {
        subheading.style.display = "block";
        }
    });

```
---

### Third Assignment:

#### Task 1 :

User needs to change the placeholders in contact section.

**Output Screenshot**
![Output Screenshot](./output%20images/third%20assignment/output_task1.png)

#### Solution
```java script
    let outputName= document.querySelector(".enterName");
    let outputMail= document.querySelector(".enterMail");
    let outputMsg= document.querySelector(".enterMessage");
    let inputName= document.querySelector(".userName");
    let inputMail= document.querySelector(".userEmail");
    let inputMsg= document.querySelector(".userMessage");
    outputName.placeholder="FSJS 2.0";
    outputMail.placeholder="fsjs@neuron.ai";
    outputMsg.placeholder="Hello World";
    inputName.placeholder="FSJS 2.0";
    inputMail.placeholder="fsjs@neuron.ai";
    inputMsg.placeholder="Hello World";
```
