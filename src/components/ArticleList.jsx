import React from 'react'
import Article from './Article'
function ArticleList({posts}) {
    const articles = posts.map((post, index) => {
        return <Article 
        key={index}
        title={post.title} 
        preview={posts.preview}
        date={posts.date}
        minute={posts.minute}
        />
    })
  return (
    <main>
        {articles}
    </main>
  )
}

export default ArticleList