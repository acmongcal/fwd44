const ItemsList = () => (
    <div className="items-list-container">
        <ol>
            <li>
                <div className="item-container">
                    <span className="item-text">Buy milk</span>
                    <button>Remove</button>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <span className="item-text">Deposit cheque</span>
                    <button>Remove</button>
                </div></li>
            <li>
                <div className="item-container">
                    <span className="item-text">Wash car</span>
                    <button>Remove</button>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <span className="item-text">Practice Ninja skills</span>
                    <button>Remove</button>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <span className="item-text">Work on Wizard Magic</span>
                    <button>Remove</button>
                </div>
            </li>
        </ol>
    </div>
);

export default ItemsList;