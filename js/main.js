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
        imgUrl:"https://i.ytimg.com/vi/fMmLYlZnRs4/maxresdefault.jpg",
        description: `Excelente platillo confomado por hortalizas de cactus, en corte juliana
        acompañada con fina cebolla de los pirineos finamente cortada en pluma, con un toque de sal
        del himalaya, finas hierbas y en adicional podrian escoger una salsa esmeralda `,
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
        imgUrl:"https://d1nsq2txwd94q7.cloudfront.net/public/files/production/recipes/images/521/fancy/r_521_1550837766.jpg",
        description: `Excelente platillo en base de tuberculos elaborado y ahumado con cebollas
        cosechadas a 1200mts sobre el nivel del rio nilo, acompañada de finas hierbas importadas de
        los alpes suizos, condimentada con fina sal de mar muerto. Se puede acompañar con crocantes
        de maiz.`,
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
        imgUrl:"https://www.mexicoenmicocina.com/wp-content/uploads/2018/03/nopales-a-la-mexicana-5-500x427.jpg",
        description: `Excelente platillo elaborado por personas campesinas y rupestres, dedicados
        a la cosecha de hortaliza de cactus, fina cebolla campestre , y jitomate balsamico en
        concase y cortado en petite broune para mayor satisfaccion a tu paladar. Puede ser usado
        como salsa coloquial en crocantes de algun proucto carnico o costra de puerco.`,
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
        imgUrl:"https://recetasveggie.com/wp-content/uploads/2013/10/IMG_2039.jpg",
        description:`EL ARTE DE LA CASA: un platillo a base de cortes finos de legumbres,
        hortalizas,tuberculos y verduras, deleita tu paladar con la fusion de nuestros platillos
        elaborados por el mejor chef de la casa, sazonado con los mejores condimentos conocidos por
        la cocina francesa, deleita tu paladar al probarlo con nuestra salsa de la casa.`,
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


$("#buttonS").click(()=>{
    $('#exampleModal').modal('hide')
    
})

const printMenus = ()=>{
    $("#dishes-wrapper" ).empty()
    dishesArray.forEach((dish,index) =>{
        $("#dishes-wrapper").append(`<div class="col mb-4">
        <div class="card">
            <img class="fitness" src="${dish.imgUrl}" class="card-img-top"
                alt="...">
            <div class="card-body">
                <h5 class="card-title">${dish.name}</h5>
                <p class="card-text">${dish.description}</p>
                <div class="d-flex justify-content-between">
                    <h3>$${calculateDishPrice(dish.name)}.00</h3>
                    <button id="saveData" type="button" class="added">Agregar al carrito</button>
                </div>

            </div>
        </div>
    </div>`)
    })
}
printMenus()

