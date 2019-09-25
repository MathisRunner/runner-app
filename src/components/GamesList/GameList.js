import React from 'react';
import PropTypes from 'prop-types';
import {List, Post } from './GamesList.css';
import './styles.css';
import { Link} from 'gatsby';

const GamesList = (props) => {
    return <div>
        <List itemCount={props.games.length}>
            {props.games.map(game => {
                console.log(`GameList game`, game);
                return <Link key={game.node.frontmatter.key} to={`/app/${game.node.frontmatter.key}`} className="list-item slide-down">
                    <Post>
                        <h2 className="game-title">{game.node.frontmatter.title}</h2>
                        <p className="game-description">{game.node.frontmatter.description}</p>
                    </Post>
                   
                </Link>
            })}
        </List>
    </div>
}

GamesList.propTypes = {
    games: PropTypes.array.isRequired
}

export default GamesList;