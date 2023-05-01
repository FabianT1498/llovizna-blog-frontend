export const TOOGLE_MODAL_TIME_OUT = 300 // 300ms

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return { ...state, component: action.component, props: action.props }
    case 'REMOVE_MODAL':
      return !state.isHovered ? { ...state, component: null, props: {} } : state
    case 'SET_IS_HOVER':
      return { ...state, isHovered: action.isHovered }
    default:
      return state
  }
}
