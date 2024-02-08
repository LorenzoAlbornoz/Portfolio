import React from 'react'
import CardProject from '../CardProject/CardProject'

const Proyectos = () => {
    return (
        <div className='container-fluid my-5' id='projects'>
            <div className="row">
                <div className='py-4 text-center'>
                    <h2>Proyectos</h2>
                    <h5>Aqui puedes ver algunos de los proyectos en los que trabajé</h5>
                </div>
                <div className="col d-flex justify-content-around py-5 flex-wrap gap-3">

                    <CardProject
                        title={'Invitacion Digital Casamiento'}
                        text={'Página web para bodas con un diseño elegante y adaptable. Incluyó un carrusel de fotos, una cuenta regresiva para el evento y secciones informativas sobre la ceremonia y recepción.'}
                        site={'https://bodabelyloren.netlify.app/'}
                        repo={'https://github.com/LorenzoAlbornoz/Invitacion1'}
                        img={'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707225691/boda_j9wxuv.png'}
                    />
                    <CardProject
                        title={'Entiendados'}
                        text={'Página web de accesorios para iPhone. Presentación detallada de productos y organización por categorías, brindando a los usuarios una experiencia de compra visualmente atractiva.'}
                        site={'https://entiendados.netlify.app/'}
                        repo={'https://github.com/LorenzoAlbornoz/Entiendados'}
                        img={'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707226227/entiendados_giplcn.png'}
                    />
                    <CardProject
                        title={'Informante'}
                        text={'Diseño web completamente responsive de un diario online utilizando HTML, CSS y Bootstrap 5.2.3 para garantizar una experiencia óptima en diferentes dispositivos.'}
                        site={'https://proyectogrupo5.netlify.app/'}
                        repo={'https://github.com/LorenzoAlbornoz/ProyectoBoostrap'}
                        img={'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707143984/informate_f6aite.png'}
                    />
                    <CardProject
                        title={'MusicFlow'}
                        text={' Sitio web para administración y reproduccion de musica. Se usó el localstorage como almacenamiento de los crud y las funciones escritas con javascript nativo'}
                        site={'https://music-flow.netlify.app'}
                        repo={'https://github.com/LorenzoAlbornoz/ProyectoJavaScript'}
                        img={'https://res.cloudinary.com/dcv6aut2v/image/upload/v1700349891/Porfolio/MusicFlow_no8plg.png'}
                    />
                    <CardProject
                        title={'LAM Music Store'}
                        text={'Sitio web construido en React y Bootstrap, esta plataforma incorpora Express y MongoDB. Ofrece una experiencia completa con interfaz atractiva y sólida gestión del backend.'}
                        site={'https://lam-music.netlify.app/'}
                        repo={'https://github.com/Fsalasgit/LAM-music-store'}
                        img={'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707143334/LAM-MUSIC-STORE_ku1bld.png'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Proyectos