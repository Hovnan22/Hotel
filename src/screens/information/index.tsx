import React from "react";
import { Text,View } from "react-native";
import WrapperContainer from "../../components/Container";
import HTitle from "../../components/ui/HTitle";


export default function Information(): React.JSX.Element {

    return(
        <WrapperContainer>
            <HTitle text="Hotels" />
        </WrapperContainer>
    )
}