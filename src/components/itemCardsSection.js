import React from "react";

function CardsSection(props) {
    return (
        <>
            <div className="container-fluid bg-light text-dark d-flex flex-wrap justify-content-center">
                {props.products.map((product, i) => {
                    let StarArray = [];
                    for (let j = 1; j <= product.starCount; j++) {
                        StarArray.push(<i class="bi bi-star-fill text-warning"></i>);
                    }
                    return (
                        <div className="card col col-2 m-1 my-3 d-flex flex-column justify-content-center align-items-center" key={i}>
                            <div>{product.sale ? <p className="px-4 m-1 bg-dark text-light rounded text-center position-absolute right-0">{product.sale}</p> : ""}</div>
                            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{product.itemType}</h5>
                                <div>{product.starCount > 0 ? <p>{StarArray}</p> : ""}</div>
                                <p className="card-text"><s>{product.price.oldPrice}</s> {product.price.newPrice}</p>
                                <a href="/" className="btn btn-primary">{product.buttonName}</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CardsSection;