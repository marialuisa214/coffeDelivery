import {createContext, useState } from 'react';

interface coffeShoop {
    id: number;
    totalQuantity: number;
}

interface ShoppingCar {
    listIdCoffe: coffeShoop[];
    tatolPrice: number;
    totalNumberCoffe: number;
}

interface Coffe {
        id: number;
        name: string;
        tag: string[];
        price: number;
        image: string;
    }

const exemplosCoffes: Coffe[] = [
    {
        'id': 1,
        'name': 'Café Expresso',
        'tag': ['expresso', 'café'],
        'price': 5,
        'image': 'https://www.cafeculturabrasil.com/wp-content/uploads/2020/04/cafe-expresso.jpg'
    },
    {
        'id': 2,
        'name': 'Café com Leite',
        'tag': ['café', 'leite'],
        'price': 7,
        'image': 'https://www.cafeculturabrasil.com/wp-content/uploads/2020/04/cafe-com-leite.jpg'
    },
    {
        'id': 3,
        'name': 'Café com Chocolate',
        'tag': ['café', 'chocolate'],
        'price': 8,
        'image': 'https://www.cafeculturabrasil.com/wp-content/uploads/2020/04/cafe-com-chocolate.jpg'
    }
]


interface CoffeContextType {
    coffeeList: Coffe[];
    coffeShoop: ShoppingCar;
    addCoffe: (id: number, quantity: number) => void;
}

export const CoffeeContext = createContext({} as CoffeContextType)

interface CoffeContextProviderProps {
    children: React.ReactNode;
}


export function CoffeContextProvider({ children }: CoffeContextProviderProps) {

    const [shoopCar, setShoopCar] = useState<ShoppingCar>({
        listIdCoffe: [],
        tatolPrice: 0,
        totalNumberCoffe: 0,
    });

    function HandleAddCoffe(id: number, quantity: number) {

        // Primeiro verificamos se o café que o usuário quer adicionar existe
        const  verifyCoffeeExist = shoopCar.listIdCoffe.find((coffe) => coffe.id === id)

        const coffeeWantAdd = exemplosCoffes.find((coffe) => coffe.id === id)
        
        if (coffeeWantAdd) {
            if (!verifyCoffeeExist) {
    
                const newCoffeToAdd = {
                    id: coffeeWantAdd.id,
                    totalQuantity: quantity,
                }
    
                const newShoopCar = {
                    listIdCoffe: [...shoopCar.listIdCoffe, newCoffeToAdd],
                    tatolPrice: shoopCar.tatolPrice + (coffeeWantAdd.price * quantity),
                    totalNumberCoffe: shoopCar.totalNumberCoffe + quantity,
                }
    
                setShoopCar(newShoopCar);
                console.log(newShoopCar);
                }

            else {
                if( verifyCoffeeExist.totalQuantity != quantity){
                    const listIdCoffe = shoopCar.listIdCoffe;

                    const index = listIdCoffe.findIndex((item) => item.id === id );
                    const quantidadeAnterior = listIdCoffe[index].totalQuantity;
                    
                    listIdCoffe[index].totalQuantity = quantity;

                    
                    const newShoopCar = {
                        listIdCoffe: listIdCoffe,

                        tatolPrice: shoopCar.tatolPrice + ((quantity - quantidadeAnterior) * coffeeWantAdd.price),

                        totalNumberCoffe: shoopCar.totalNumberCoffe + (quantity - quantidadeAnterior),
                    }
                    setShoopCar(newShoopCar);
                    console.log(newShoopCar);

                }
            }
        }

    }
    return (
        <CoffeeContext.Provider value={{
            coffeeList: exemplosCoffes,
            coffeShoop: shoopCar,
            addCoffe: HandleAddCoffe,
        }}>
            {children}
        </CoffeeContext.Provider>
    )
       
}
