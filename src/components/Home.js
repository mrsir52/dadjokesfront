import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { Button, Card, CardBody, CardText } from 'mdbreact'
import '../App.css';


export default class Home extends Component {
    render() {

        return (
            <div>
                <Query
                    query={JOKE_QUERY}
                >
                    {({ loading, error, data, refetch }) => {
                        if (loading) return null;
                        if (error) return `Error!: ${error}`;

                        return (
                            <div>
                                <Card>
                                    <CardBody className="background">
                                        <h3>
                                            {data.getDadJoke.joke}
                                        </h3>
                                        <Button color="primary" onClick={() => refetch()}>Next Joke!</Button>
                                    </CardBody>

                                </Card>
                            </div>
                        );
                    }}
                </Query>

            </div>
        )
    }
}

export const JOKE_QUERY = gql`
    {
        getDadJoke {
            joke
        }
    }
`