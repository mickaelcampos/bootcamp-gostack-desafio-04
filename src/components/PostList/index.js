import React, { Component } from 'react';

import stormtrooper from '../../assets/stormtrooper.png';
import jedi from '../../assets/jedi.png';
import jawa from '../../assets/jawa.png';
import chewie from '../../assets/chewie.png';

import './style.css';

import Post from '../Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "FN1-0898",
          avatar: stormtrooper
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dicta esse incidunt at ratione doloremque ut pariatur voluptates! Deleniti praesentium enim perferendis reiciendis, mollitia quibusdam molestias maxime odit possimus autem.",
        comments: [
          {
            id: 1,
            author: {
              name: "Jedi",
              avatar: jedi
            },
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dicta esse incidunt at ratione doloremque ut pariatur voluptates! Deleniti praesentium enim perferendis reiciendis, mollitia quibusdam molestias maxime odit possimus autem."
          }
        ]
      },
      {
        id: 2,
        // Restante dos dados de um novo post
        author: {
          name: "Jawa",
          avatar: jawa
        },
        date: "04 Jun 2019",
        content: "Utinni Utinni Utinni",
        comments: [
          {
            id: 1,
            author: {
              name: "Chewbacca",
              avatar: chewie
            },
            content: "GGWWWRGHH"
          },
          {
            id: 2,
            author: {
              name: "Jedi",
              avatar: jedi
            },
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dicta esse incidunt at ratione doloremque ut pariatur voluptates! Deleniti praesentium enim perferendis reiciendis, mollitia quibusdam molestias maxime odit possimus autem."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <ul className="post-list">
        {this.state.posts.map(post => (
          <Post
            key={post.id}
            data={post}
          />
        ))}
      </ul>
    )
  }
}

export default PostList;
