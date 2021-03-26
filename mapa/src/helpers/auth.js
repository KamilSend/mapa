import { auth } from "../services/firebase"
import axios from "axios";

export function signup(email, password, nickname, province, county, community, village, street, zipCode, buildingNumber) {
    return auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user.uid
            // console.log(userCredential.user.uid)

            const data = [
                {
                    "level": "woj",
                    "v": province
                },
                {
                    "level": "pow",
                    "v": county
                },
                {
                    "level": "gmi",
                    "v": community
                },
                {
                    "level": "msc",
                    "v": village
                },
                {
                    "level": "ulc",
                    "v": street
                },
                {
                    "level": "kod",
                    "v": zipCode
                },
                {
                    "level": "nr",
                    "v": buildingNumber
                }
            ]

            const headers = {
                'Content-Type': 'application/json',
            }

            axios.post('https://capap.gugik.gov.pl/api/fts/hier/pkt/qq',  data, {
                headers: headers
            })
                .then(res => {
                    // console.log(res);
                    // console.log(res.data);
                    // console.log(res.data.features[0].geometry.coordinates);

                    axios.patch(`https://mapa-6578a-default-rtdb.firebaseio.com/mapa.json`,
                        {
                            [user]:{
                                email: email,
                                nickname:nickname,
                                province:province,
                                county:county,
                                community:community,
                                village:village,
                                street:street,
                                zipCode:zipCode,
                                buildingNumber:buildingNumber,
                                coordinates:res.data.features[0].geometry.coordinates,
                            }
                        }, {
                            headers: headers
                        }
                    ).catch(error => {
                        // console.log(error)
                    })


                })
                .catch(error => {
                    // console.log(error)
                })

        })
}

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}

export function signout(){
    return auth().signOut().then(() => {
        // console.log('wylogowano')
        // Sign-out successful.
    }).catch((error) => {
        console.log(error)
        // An error happened.
    });
}
