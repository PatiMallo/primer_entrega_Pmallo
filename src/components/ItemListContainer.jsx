import React from 'react';

function ItemListContainer( {greeting}) {
    return (
        <div className="welcome-message">
                <h2>{greeting}</h2>
                <p>Estamos para cuidarte</p>
        </div>
    );
}
export default ItemListContainer;
