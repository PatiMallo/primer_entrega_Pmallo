import { FaShoppingCart } from "react-icons/fa";
import "./navbar.css";

function CartWidget() {
    return (
        <div className="carrito">
            <FaShoppingCart size="30px" />
            <span className="badge">6</span>
        </div>
    );
}

export default CartWidget;