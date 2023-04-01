import { ADD_CART_ITEM, ADMIN_DELETE_PRODUCT, ADMIN_FAILURE, ADMIN_FILTER_PRODUCT, ADMIN_GET_PRODUCT, ADMIN_PATCH_PRODUCT, ADMIN_POST_PRODUCT, ADMIN_REQUEST, DELETE_CART_ITEM, GET_ADMIN_DATA, GET_ORDER_DATA, GET_USER_DATA, POST_ORDER_DATA, POST_USER_DATA, RESET_CART_ITEM } from "./ActionType"

const initialState = {
    loading: false,
    error: false,
    products: [],
    cart: [],
    user: [],
    orders: [],
    Admin: []
}

const AdminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADMIN_REQUEST: return { ...state, loading: true }

        case ADMIN_FAILURE: return { ...state, loading: false, error: true }

        case ADMIN_GET_PRODUCT:return { ...state, loading: false, products: payload }

        case ADMIN_FILTER_PRODUCT: return { ...state, products: payload, loading: false }
        
        case ADMIN_DELETE_PRODUCT: {
            let update = state.products.filter((item) => {
                return item.id !== payload.id
            })
            return { ...state, products: update }
        }
        case ADMIN_PATCH_PRODUCT: {
            return {
                ...state, products: state.products.map((item) =>
                    item.id === payload.id ? payload : item)
            }
        }

        case ADMIN_POST_PRODUCT:
            return { ...state, products: [payload, ...state.products] }

        case GET_USER_DATA:
            return { ...state, user: payload }

        case POST_USER_DATA:
            return { ...state, user: [payload, ...state.user] }

        case GET_ORDER_DATA: return { ...state, orders: payload }

        case POST_ORDER_DATA:return { ...state, orders: [payload, ...state.orders] }

         case ADD_CART_ITEM:return { ...state, cart: [payload, ...state.cart] }

        case DELETE_CART_ITEM: {
            let x = state.cart.filter((item) => {
                return item.id !== payload.id
            })
            return { ...state, cart: x }
        }

        case RESET_CART_ITEM:
            return { ...state, cart: [] }

        case GET_ADMIN_DATA:
            return { ...state, Admin: payload }

        default:
            return state
    }
}
export default AdminReducer