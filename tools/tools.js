/*wrapper function */

document.addEventListener('DOMContentLoaded', function () {
    const arrows = document.querySelectorAll('.arrow');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
            const content = this.parentElement.nextElementSibling;
            if (content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});


/*bmi cal*/

function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (!height || !weight) {
        document.getElementById('result').innerHTML = "Please enter both height and weight.";
        return;
    }
    var bmi = weight / ((height / 100) * (height / 100));
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2);
    

    if (bmi < 18.5) {
        document.getElementById("result").innerHTML = "Underweight    :- " + bmi.toFixed(2);
    } else if (bmi >= 18.5 && bmi < 24.9) {
        document.getElementById("result").innerHTML = "Normal Weight    :- " + bmi.toFixed(2);
    } else if (bmi >= 24.9 && bmi < 29.9) {
        document.getElementById("result").innerHTML = "Overweight    :- " + bmi.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "Obese    :- " + bmi.toFixed(2);
    }
};





/*fat cal */
function calculateBodyFatPercentage() {

    
    var bmi = parseFloat(document.getElementById('newbmi').value);
    var age = parseInt(document.getElementById('age').value);
    var gender = document.querySelector('input[name="gender"]:checked');
    var bodyFatPercentage;

    if (!bmi || !age || !gender) {
        document.getElementById('result').innerText = "Please fill in all fields.";
        return;
    }

    gender = gender.value;

    if (gender === 'male') {
        bodyFatPercentage = (1.20 * bmi) + (0.23 * age) - 16.2;
    } else if (gender === 'female') {
        bodyFatPercentage = (1.20 * bmi) + (0.23 * age) - 5.4;
    }

    var category;
    if (bodyFatPercentage < 8) {
        category = "Essential fat";
    } else if (bodyFatPercentage >= 8 && bodyFatPercentage < 20) {
        category = "Athletes";
    } else if (bodyFatPercentage >= 20 && bodyFatPercentage < 25) {
        category = "Fitness";
    } else if (bodyFatPercentage >= 25 && bodyFatPercentage < 31) {
        category = "Acceptable";
    } else {
        category = "Obese";
    }

    document.getElementById('newresult').innerHTML = `
        <p>Estimated body fat percentage: ${bodyFatPercentage.toFixed(2)}%</p>
        <p>Category: ${category}</p>
    `;
}

/*BMR cal */
function calculateBMR() {
    var weight = parseFloat(document.getElementById('weight1').value);
    var height = parseFloat(document.getElementById('height1').value);
    var age = parseInt(document.getElementById('age1').value);
    var gender = document.getElementById('gender1').value;

    var bmr;

    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    document.getElementById('result2').innerHTML = "Your Basal Metabolic Rate (BMR) is: " + bmr.toFixed(2) + " kcal/day";
}


/*calories count  */

let selectedFoods = [];

function addFood() {
  const foodSelect = document.getElementById('food-select');
  const quantityInput = document.getElementById('quantity');
  const selectedFood = foodSelect.options[foodSelect.selectedIndex].value.split(",");
  const quantity = parseInt(quantityInput.value);
  
  if (selectedFood[0] !== '0' && quantity > 0) {
    const foodName = foodSelect.options[foodSelect.selectedIndex].text;
    const calories = selectedFood[0] * quantity / 100;
    const protein = selectedFood[1] * quantity / 100;
    const carbs = selectedFood[2] * quantity / 100;
    const fat = selectedFood[3] * quantity / 100;
    const fiber = selectedFood[4] * quantity / 100;
    
    selectedFoods.push({ 
      name: foodName, 
      calories: calories,
      protein: protein,
      carbs: carbs,
      fat: fat,
      fiber: fiber
    });
    
    updateSelectedFoodsList();
    calculateTotalNutrients();
  } else {
    alert('Please select a valid food and quantity.');
  }
}

function updateSelectedFoodsList() {
  const selectedFoodsList = document.getElementById('selected-foods');
  selectedFoodsList.innerHTML = '';
  
  selectedFoods.forEach(food => {
    const listItem = document.createElement('li');
    listItem.textContent = `${food.name} - Calories: ${food.calories.toFixed(2)}, Protein: ${food.protein.toFixed(2)}g, Carbs: ${food.carbs.toFixed(2)}g, Fat: ${food.fat.toFixed(2)}g, Fiber: ${food.fiber.toFixed(2)}g`;
    selectedFoodsList.appendChild(listItem);
  });
}

function calculateTotalNutrients() {
  const totalNutrientDiv = document.getElementById('nutrient-facts');
  const totalCalories = selectedFoods.reduce((total, food) => total + food.calories, 0);
  const totalProtein = selectedFoods.reduce((total, food) => total + food.protein, 0);
  const totalCarbs = selectedFoods.reduce((total, food) => total + food.carbs, 0);
  const totalFat = selectedFoods.reduce((total, food) => total + food.fat, 0);
  const totalFiber = selectedFoods.reduce((total, food) => total + food.fiber, 0);
  
  totalNutrientDiv.innerHTML = `
    <p>Total Calories: ${totalCalories.toFixed(2)}</p>
    <p>Total Protein: ${totalProtein.toFixed(2)}g</p>
    <p>Total Carbs: ${totalCarbs.toFixed(2)}g</p>
    <p>Total Fat: ${totalFat.toFixed(2)}g</p>
    <p>Total Fiber: ${totalFiber.toFixed(2)}g</p>
  `;
  
}

function resetCalculator() {
  selectedFoods = [];
  updateSelectedFoodsList();
  calculateTotalNutrients();
}