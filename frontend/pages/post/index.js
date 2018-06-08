import React from "react";
import { connect } from "react-redux";
import Link from 'next/link'
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
        const { error, postsList } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (postsList.loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <div>
                    <Link href='/post/submitform' as='/post/submitform'><a>submitform</a></Link>
                </div>
                <div>
                    <Link href='/post/syncform' as='/post/syncform'><a>syncform</a></Link>
                </div>
                <div>
                    <Link href='/post/asyncform' as='/post/asyncform'><a>asyncform</a></Link>
                </div>
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

export default connect(mapStateToProps, null)(ProductList)
