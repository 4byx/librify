import React from 'react'

function SongCard(props) {
    const {name , imgUrl , downloadUrl} = props;
  return (
    <div>
        <div className="w-4/6 m-auto sm:mx-auto my-3 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={imgUrl} alt="" />
            </a>
            <div className=" text-center p-3 sm:p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold dark:text-cyan-400">{name} </h5>
                </a>
                <a href={!downloadUrl?"/":downloadUrl} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg">
                    Download
                </a>
            </div>
        </div>

        {/* Hello */}
    </div>
  )
}

export default SongCard