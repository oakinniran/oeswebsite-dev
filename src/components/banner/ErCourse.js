import React, { useState, useEffect } from 'react';
import './ErCourse.css'


function ErCourse(prop) {

    const handlevideo = () =>{
        var v = document.getElementsByClassName("reproductor");
        console.log(v)
        for (var n = 0; n < v.length; n++) {
            var p = document.createElement("div");
            p.innerHTML = labnolThumb(v[n].dataset.id);
            p.onclick = labnolIframe;
            v[n].appendChild(p);
        }
    }
    //const [handlevideo1, setCount] = useState(handlevideo());
    handlevideo()
    const labnolThumb = (id) => {
            return '<img class="imagen-previa" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="youtube-play"></div>';
        }
    const labnolIframe = () => {
            var iframe = document.createElement("iframe");
            iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("id", "youtube-iframe");
            this.parentNode.replaceChild(iframe, this);
        }

    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="contenedor" >
                      <div className="reproductor" data-id={prop.src} ></div>
                   </div> 
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{prop.course}</div>
                        <p class="text-gray-700 text-base">
                            {prop.description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{prop.hashtag}</span>
                    </div>
            </div>
            </>
            )

}

         
export default ErCourse
