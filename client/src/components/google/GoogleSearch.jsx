
import styled from 'styled-components';
import { useRef, useEffect, useState } from "react";

const GoogleSearch = () => {

    const autoCompleteRef = useRef();
    const inputRef = useRef();
    const options = {
        componentRestrictions: { country: "kr" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["establishment"]
    };

    const [place, setPlace] = useState()

    const enterInput = () => {
        console.log("들어옴")
        // new window.google.maps.places.PlacesService(map);
    }
    useEffect(() => {
        // autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        //     inputRef.current,
        //     options
        // );
        // autoCompleteRef.current.addListener("place_changed", async function () {
        //     const place = await autoCompleteRef.current.getPlace();
        //     console.log(place)
        // });
    }, []);
    return (
        <div>
            <SearchInput ref={inputRef} onSubmit={enterInput}/>
        </div>
    );
}

const SearchInput = styled.input`
    width: 300px;
    height: 30px;
`


export default GoogleSearch;