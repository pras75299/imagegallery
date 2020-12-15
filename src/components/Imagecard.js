import React from 'react'

function Imagecard({ image }) {
    const tags = image.tags.split(',');
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <a href={image.webformatURL} target="_blank">
            <img src={image.webformatURL} alt="" className="w-full"/>
          </a>
          <div className="px-6 py-4">
            <div className="font-bold text-blue-500 text-xl mb-2">
              Photo by {image.user}
            </div>
            <ul>
              <li>
                <strong>Views: </strong>
                {image.views}
              </li>
              <li>
                <strong>Downloads: </strong>
                {image.downloads}
              </li>
              <li>
                <strong>Likes: </strong>
                {image.likes}
              </li>
            </ul>
          </div>
          <div className="px-6 py-4">
            {tags.map((tag, index) => (
              <span key={index} className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-blue-900 mr-2 mb-2">
              #{tag}
            </span>
            ))}
          </div>
        </div>
      )
}

export default Imagecard
