import { Text } from "react-native"

export const Timet = ({ totalSeconds }) => {
    
    const date = new Date(totalSeconds * 1000)
    const options = { minute: "2-digit", second: "2-digit" }
    
    return (
        <Text style={styles.timer}>
            {date.toLocaleTimeString('pt-BR', options)}
        </Text>
    )
}