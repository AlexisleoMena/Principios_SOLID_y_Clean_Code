/*
  Cuando el proyecto dependa altamente de una librería de terceros
  se recomienda hacer una clase adaptadora para que sea más fácil hacer
  las modificaciones a futuro por si la librería cambia
*/

export class HttpClient {

  async get( url: string ) {
    const res = await fetch(url)
    let data = await res.json();
    return { data, status: res.status };
  }

}