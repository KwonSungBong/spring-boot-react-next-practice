import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from '../../actions/postsActions'

class ProductList extends React.Component {
    static async getInitialProps ({ store, isServer }) {
        console.log("isServer", isServer)
        if(isServer) {
            await store.dispatch(fetchPosts())
        } else {
            store.dispatch(fetchPosts())
        }
        return { isServer }
    }

    render() {
        const { error, loading, postsList } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (postsList.loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <ul>
                    {postsList.posts.map(product =>
                        <li key={product.id}>{product.subject}</li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    postsList: state.post.postsList
});

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
