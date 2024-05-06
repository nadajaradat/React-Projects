import { ReactNode, createContext, useContext, useState } from "react"
import ShopingCart from "../components/ShopingCart"

type ShoppingListProviderProps = {
    children: ReactNode

}

type ShoppingListContextType = {
    openCart: () => void,
    closeCart: () => void,
    getItemQuantity: (id: number) => number,
    increaseItemQuantity: (id: number) => void,
    decreaseItemQuantity: (id: number) => void,
    removeItem: (id: number) => void,
    listItems: ShoppingListItem[],
    listQuantity: number
}

type ShoppingListItem = {
    id: number,
    quantity: number
}

const ShoppingListContext = createContext<ShoppingListContextType | undefined>(undefined);
export function useShoppingList() {
    const context = useContext(ShoppingListContext);
    if (!context) {
        throw new Error('useShoppingList must be used within a ShoppingListProvider');
    }
    return context;
}

export function ShoppingListProvider({ children }: ShoppingListProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [listItems, setListItems] = useState<ShoppingListItem[]>([])

    const listQuantity = listItems.reduce((acc, item) => acc + item.quantity, 0)

    const openCart = () => {
        setIsOpen(true)
    }
    const closeCart = () => {
        setIsOpen(false)
    }

    const getItemQuantity = (id: number) => {
        console.log('getItemQuantity', listItems, id, 'end of getItemQuantity')

        const item = listItems.find(item => item.id === id)
        return item?.quantity || 0
    }
    const increaseItemQuantity = (id: number) => {
        const itemExists = listItems.some(item => item.id === id);
        let newItems;

        if (!itemExists) {
            console.log(`Item with id ${id} does not exist. Adding to the list.`);
            newItems = [...listItems, { id, quantity: 1 }];
        } else {
            newItems = listItems.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        }

        console.log(newItems);
        setListItems(newItems);
    }
    const decreaseItemQuantity = (id: number) => {
        const itemExists = listItems.some(item => item.id === id);
        let newItems;

        if (!itemExists) {
            console.log(`Item with id ${id} does not exist`);
            return;
        } else {
            newItems = listItems.map(item => {
                if (item.id === id && item.quantity > 0) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        }

        console.log(newItems);
        setListItems(newItems);
    }

    const removeItem = (id: number) => {
        const newItems = listItems.filter(item => item.id !== id)
        setListItems(newItems)
    }
    return (
        <ShoppingListContext.Provider value={{
            openCart,
            closeCart,
            getItemQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeItem,
            listItems,
            listQuantity
        }}>
            {children}
            <ShopingCart isOpen={isOpen} />
        </ShoppingListContext.Provider>
    )
}