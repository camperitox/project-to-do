<template>
    <div 
      class="entry-container pointer p-2"
    >
        <div class="card text-bg-light">
            <!-- Titulo -->
            <div class="card-header bg-primary">
                <div class="entry-title d-flex">
                    <h1 style="color: white;">Titulo del projecto</h1>
                    <div class="align-left d-flex" style="color: white;">
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
            <!-- descripcion -->
            <div class="card-body">
                <div class="entry-description">
                    Consequat consectetur nulla qui aliqua consequat commodo esse. Qui deserunt incididunt nostrud veniam cillum aliquip enim irure exercitation reprehenderit ad. Aliqua dolore enim ullamco incididunt anim dolore incididunt. Culpa elit proident dolore eiusmod elit in esse fugiat. Laboris reprehenderit tempor qui quis. Laboris proident deserunt id occaecat ea dolore ipsum qui amet officia nostrud consequat irure aliquip. Consectetur fugiat aute irure commodo ad irure enim dolore.
                </div>
            </div>
        </div>
    </div>
  
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style  scoped>
  .entry-container{
      transition: 0.2s all ease-in;
  }
  .entry-container:hover{
          background-color: lighten(#888d88, 10%);
  
}
  .entry-description{
      font-size: 12px;
  }
  
  </style>