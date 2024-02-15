<template>
    <div 
      class="entry-container pointer p-2"
    >
        <div class="card text-bg-light">
            <!-- Titulo -->
            <div class="card-header">
                <div class="entry-title d-flex">
                    <h3 style="color: white;">{{ nombre }}</h3>
                    <div class="align-left d-flex" style="color: white;">
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
            <!-- descripcion -->
            <div class="card-body">
                <div class="entry-description">
                    {{ descripcion }}
                </div>
            </div>
        </div>
    </div>
  
  </template>
  
  <script>
  export default {
     props: {
        id:{
            type: Number,
            required: true
        },
        nombre:{
            type: String,
            required: true
        },
        descripcion:{
            type: String,
        },
        isVisible:{
            type: Boolean,        
        }
    }
  }
  </script>
  
  <style  scoped>
  .entry-container{
      transition: 0.2s all ease-in;
  }

  .entry-description{
      font-size: 12px;
  }

  .card-header{
      background-color: #3b73ab;
  }
  
  </style>