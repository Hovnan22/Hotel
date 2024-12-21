import React from "react";
import { FlatList } from "react-native";
import WrapperContainer from "../../components/Container";
import HotelCard from "../../components/HotelCard";
import { hotelsList } from "../../data/data";


export default function Expolrer(): React.JSX.Element {

    return(
        <WrapperContainer>
            <FlatList
                data={hotelsList}
                renderItem={({item}) => (<HotelCard hotel={item} />)}
                keyExtractor={(item) => '' + item.id}
            />
        </WrapperContainer>
        
    )
}