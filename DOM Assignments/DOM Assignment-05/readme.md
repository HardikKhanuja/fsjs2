## DOM Assignment 5
`Note: Solution for every task is in code snippets below `

---
#### Task 1 :

User has to change colour of bottom of div according to the character and make the text colour to white.

**Output Screenshot**
![Output Screenshot](./output%20images/output_task1.png)

#### Solution
```java script
    let parent= document.querySelector(".recipe-gallery");
    let element= document.createElement("div");
    let recipeText= document.createElement("a");
    let recipeImg= document.createElement("img");
    let recipeName= document.createElement("h5");
    let recipeDisp= document.createElement("p");
    element.className="card";
    recipeText.className="recipe-text";
    recipeImg.className="recipe-img";
    recipeName.className="recipe-name";
    recipeDisp.className="recipe-disp";
    recipeImg.src="./img/recipe-6.jpg";
    recipeName.innerText="Pancake";
    recipeDisp.innerText="Prep : 15min | Cook: 5min ";
    parent.appendChild(element);
    element.appendChild(recipeText);
    recipeText.appendChild(recipeImg);
    recipeText.appendChild(recipeName);
    recipeText.appendChild(recipeDisp);
```
