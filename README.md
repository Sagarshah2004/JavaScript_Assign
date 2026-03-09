# JavaScript_Assign  
# JavaScript Assignment

## Overview

This project contains solutions to four JavaScript programming and UI tasks.
The tasks demonstrate basic JavaScript concepts including arrays, objects, loops, functions, and DOM manipulation.


# Project Structure

JavaScript_Assign
│
├── Task1.js      # Find second largest number
├── Task2.js      # Return unique elements from two arrays
├── Task3.js      # Student score analysis
├── Task4.html    # Countdown timer UI
└── README.md


# Task 1 — Second Largest Number

### Objective

Find the **second largest number** in an array **without sorting the array**.

### Array

[23, 45, 67, 89, 12, 90, 44]


### Approach

* Iterate through the array once.
* Track two variables:

  * `largest`
  * `secondLargest`
* Update them during iteration.

### Time Complexity


O(n)



# Task 2 — Unique Elements from Two Arrays

### Objective

Create a function that takes **two arrays** and returns elements that appear **only once** in both arrays.

### Example

Array1: [1,2,3,4]
Array2: [3,4,5,6]

### Output

[1,2,5,6]

### Approach

1. Combine both arrays.
2. Count occurrences of each element.
3. Return elements with frequency **1**.


# Task 3 — Student Score Analysis

### Objective

Analyze student scores to determine the **top-performing student**.

### Student Data

[
 { name: "Alice", age: 22, scores: [78,85,92] },
 { name: "Bob", age: 20, scores: [88,90,76] },
 { name: "Charlie", age: 21, scores: [95,80,85] }
]`

### Functionality

* Calculate the **average score** of each student.
* Identify the **student with the highest average**.
* Display the result in the console.

### Example Output

Alice Average: 85.00
Bob Average: 84.67
Charlie Average: 86.67
Top Student: Charlie with average 86.67



# Task 4 — Countdown Timer

### Objective

Create a **1-hour countdown timer** using **HTML, CSS, and JavaScript**.

### Features

* Timer display
* Start button
* Pause button
* Reset button
* MM:SS time format
* Prevent negative countdown
* Message displayed when timer reaches zero


# How to Run the Project

## Run JavaScript Tasks (Node.js)

Open terminal in the project folder and run:

node Task1.js
node Task2.js
node Task3.js


## Run Countdown Timer

Open the HTML file in a browser:


Task4.html


Then open **Developer Console**:


F12 → Console




# Technologies Used

* JavaScript (ES6)
* HTML
* CSS
* Node.js (for running JS files)



