import React from 'react'

const Carrusel = ({ movie }) => {


  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide mx-auto my-5" data-bs-ride="carousel">

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1639108493/gGTCDNEvwG848u34Op1nZNasdadadALLUr_lorpxw.jpg" class="d-block w-100" alt="..." />
            <button type="button" class="btn my-2 btn-warning position-absolute bottom-0 start-50 translate-middle-x" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Ver Trailer
            </button>
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1639108493/dIibeeq4QMay5bTJ2vjr72asdsIFFRo_agdlr5.jpg" class="d-block w-100" alt="..." />
            <button type="button" class="btn my-2 btn-warning position-absolute bottom-0 start-50 translate-middle-x" data-bs-toggle="modal" data-bs-target="#exampleModa2">
              Ver Trailer
            </button>
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1639108493/ugZbX5lKx4L9ONEu0WTNsadbR96J0t_izofsi.jpg" class="d-block w-100" alt="..." />
            <button type="button" class="btn my-2 btn-warning position-absolute bottom-0 start-50 translate-middle-x" data-bs-toggle="modal" data-bs-target="#exampleModa3">
              Ver Trailer
            </button>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

     
      <div class="modal fade container-flex" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-warning" id="exampleModalLabel">Motherly</h5>
              <button type="button" variant="outline-warning" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body mx-auto">
            <iframe width="470" height="315" src="https://www.youtube.com/embed/aSiDu3Ywi8E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
           
          </div>
        </div>
      </div>

      
      <div class="modal fade container-flex" id="exampleModa2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-warning" id="exampleModalLabel">Motherly</h5>
              <button type="button" variant="outline-warning" class="btn-close btn-warning" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body mx-auto">
            <iframe width="470" height="315" src="https://www.youtube.com/embed/qwt_aDkW5RE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
           
          </div>
        </div>
      </div>

      
      <div class="modal fade container-flex" id="exampleModa3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-warning" id="exampleModalLabel">Motherly</h5>
              <button type="button" variant="outline-warning" class="btn-close btn-warning" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body mx-auto">
            <iframe width="470" height="315" src="https://www.youtube.com/embed/hI1FPus5l_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
           
          </div>
        </div>
      </div>

    </div>



  )
}

export default Carrusel


