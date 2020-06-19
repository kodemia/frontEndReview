var productsArray = [
    {
        name:"jitomate",
        price:20,
        grams:50,
        imgUrl:""
    }, {
        name:"cebolla",
        price:40,
        grams:50,
        imgUrl:""
    }, {
        name:"ajo",
        price:10,
        grams:5,
        imgUrl:""
    }, {
        name:"sal",
        price:15,
        grams:10,
        imgUrl:""
    }, {
        name:"papa",
        price:30,
        grams:50,
        imgUrl:""
    }, {
        name:"nopal",
        price:50,
        grams:10,
        imgUrl:""
    }
]

var dishesArray = [
    {
        name:"Platillo 1",
        imgUrl:"",
        ingredients:[
            {
                name:"nopal",
                neededGrams:30
            },
            {
                name:"sal",
                neededGrams:10
            },{
                name:"cebolla",
                neededGrams:200
            }
        ]
    },{
        name:"Platillo 2",
        imgUrl:"",
        ingredients:[
            {
                name:"sal",
                neededGrams:10
            },{
                name:"cebolla",
                neededGrams:200
            },{
                name:"papa",
                neededGrams:500
            }
        ]
    },{
        name:"Platillo 3",
        imgUrl:"",
        ingredients:[
            {
                name:"nopal",
                neededGrams:30
            },{
                name:"sal",
                neededGrams:10
            },{
                name:"cebolla",
                neededGrams:100
            },{
                name:"jitomate",
                neededGrams:500
            }
            
        ]
    },{
        name:"Platillo 4",
        imgUrl:"",
        ingredients:[
            {
                name:"nopal",
                neededGrams:200
            },
            {
                name:"sal",
                neededGrams:10
            },{
                name:"cebolla",
                neededGrams:200
            },{
                name:"papa",
                neededGrams:200
            },{
                name:"ajo",
                neededGrams:50
            }
        ]
    }
]

const calculateDishPrice = ( dishName ) => {
    console.log(dishName)

    let selectedDish = dishesArray.filter( dish => {
        return dish.name === dishName
    })

    console.log('selectedDish ', selectedDish[0])

    let dishIngredients = selectedDish[0].ingredients;

    console.log('ingredients ', dishIngredients)

    let result = dishIngredients.reduce( ( totalPrice, ingredient ) => {
        let { name, neededGrams } = ingredient;
        console.log('product name', name)

        let ingredientData = productsArray.filter( product => {
            return product.name === name
        })

        console.log("ingredient Data ", ingredientData[0])

        let neededProducts = neededGrams / ingredientData[0].grams
        console.log("needed products ", neededProducts) 
        
        let unitPrice = neededProducts * ingredientData[0].price

        console.log('unit Price ', unitPrice)

        return totalPrice + unitPrice
    }, 0)

    return result
}

calculateDishPrice("Platillo 3")






/*
const calculateDishPrice = ( dishName ) => {
    let selectedDish = dishesArray.filter( dish => {
        return dish.name === dishName
    })

    console.log(selectedDish[0])

    let dishIngredients = selectedDish[0].ingredients
    console.log(dishIngredients)

    let result = dishIngredients.reduce( (totalPrice, ingredient) => {
        console.log(ingredient)
        let {name, neededGrams} = ingredient;
        let ingredientData = productsArray.filter( product => {
            return product.name === name
        })
        console.log('needed Grams', neededGrams)
        console.log('presentation grams', ingredientData[0].grams)

        let productsNeeded = neededGrams / ingredientData[0].grams
        let productPrice = productsNeeded * ingredientData[0].price
        console.log('products needed', productsNeeded)
        console.log('unit price', ingredientData[0].price )
        console.log('product price', productPrice)

        return totalPrice += productPrice
    },0) 

    return result
}
*/
//calculateDishPrice("Platillo 4")