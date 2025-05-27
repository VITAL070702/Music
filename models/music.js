class Music {
    constructor(
      id,
      categoryIds,
      title,
      asociados,
      disquera,
      imageUrl,
      duration,
      informacion,
    ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.imageUrl = imageUrl;
      this.duration = duration;
      this.disquera = disquera;
      this.asociados = asociados;
      this.informacion = informacion;
      
    }
  }
  
  export default Music;