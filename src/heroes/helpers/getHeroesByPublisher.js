import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {

    const validPublisherts = ['DC Comics' , 'Marvel Comics' , 'Otros'];

    if( !validPublisherts.includes(publisher) ){
        throw new Error(`Atención, el publisher ${publisher} que recibí de parámetro, no es válido`);
    }

    return heroes.filter( hero => hero.publisher === publisher );

}
