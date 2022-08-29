const loadMeals = (search)=> {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch (url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const searchFood = () => {
        const searchField = document.getElementById('search-field');
        const searchText = searchField.value;
        searchField.value ='';
        loadMeals(searchText);    
}
const displayMeals = meals =>{
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        const newDiv = document.createElement('div')
        newDiv.classList.add("card");
        const creatBtn = document.createElement('button')
        creatBtn.innerText ="see details"
        creatBtn.addEventListener('click', function(){
            details(meal)
        })
        newDiv.innerHTML=`
        <div>
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                </div>
        </div>
        `;
        newDiv.appendChild(creatBtn); 
        mealDiv.appendChild(newDiv);
        mealsContainer.appendChild(mealDiv);
    })
}
const details = meal =>{
    console.log(meal);
    const detailsContainer =document.getElementById("detail-container");
    const mealDiv = document.createElement("div");
    mealDiv.innerHTML = `
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top text-center w-50 img-thumbnail mx-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                </div>
            </div>
        `;
        detailsContainer.appendChild(mealDiv);
}

loadMeals('')