import { auth } from "../services/firebase"
import axios from "axios";

export function signup(email, password, nickname, province, county, community, village, street, zipCode, buildingNumber) {

    const headers = {
        'Content-Type': 'application/json',
    }

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
            "level": "kod",
            "v": zipCode
        },
        {
            "level": "ulc",
            "v": street
        },
        {
            "level": "nr",
            "v": buildingNumber
        }
    ]

    const createUser = (res) => {
        auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user.uid

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
                    console.log(error)
                })

            }).catch(error => console.log(error))
    }


    return axios.post('https://capap.gugik.gov.pl/api/fts/hier/pkt/qq', data, {
        headers: headers
    })
        .then(res => {
            if (res.data.features.length === 0) {
                const data2 = [...data]
                data2[6] =
                    {
                    "level": "nr",
                    "v": ''
                    }
                axios.post('https://capap.gugik.gov.pl/api/fts/hier/pkt/qq', data2, {
                    headers: headers
                })
                    .then(res => {
                        if (res.data.features.length === 0) {
                            const data3 = [...data2]
                            data3[5] =
                                {
                                    "level": "ulc",
                                    "v": ''
                                }
                            axios.post('https://capap.gugik.gov.pl/api/fts/hier/pkt/qq', data3, {
                                headers: headers
                            })
                                .then(res => {
                                    if (res.data.features.length === 0) {
                                        alert('niepoprawne dane adresowe')
                                    }else{
                                        createUser(res)
                                    }
                                })
                        }
                    else{
                            createUser(res)
                        }
                    })
            } else {
                createUser(res)
            }
        })
    }

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}

export function signout(){
    return auth().signOut().then(() => {
    }).catch((error) => {
        console.log(error)
    });
}
