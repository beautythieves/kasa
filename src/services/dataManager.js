
import Data from '../data/data.json';  

function getAccomodations(){

}

function getAccomodation(id){
    for  (const accomodation of Data ){
        if (accomodation.id === id){
            return accomodation;
        }
    }
    return null
}

export {getAccomodations, getAccomodation};