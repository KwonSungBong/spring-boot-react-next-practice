import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/postActions";

class ProductList extends React.Component {
    static async getInitialProps ({ store, isServer }) {
        console.log("isServer", isServer)
        if(isServer) {
            await store.dispatch(fetchProducts())
        } else {
            store.dispatch(fetchProducts())
        }
        return { isServer }
    }

    render() {
        const { error, loading, products } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <ul>
                    {products.map(product =>
                        <li key={product.id}>{product.subject}</li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.post.items,
    loading: state.post.loading,
    error: state.post.error
});

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
