export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0)
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.item]
    case 'EMPTY_BASKET':
      return []
    case 'REMOVE_FROM_BASKET':
      const index = state.findIndex((item) => item.id === action.id)
      const newState = [...state]

      if (index >= 0) {
        newState.splice(index, 1)
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as it's not in basket`)
      }

      return newState

    default:
      return state
  }
}
