
import { Text, View } from "react-native";

// this should be the frame for the "posts" page
// this should fetch posts from the database to display a scrolling view of posts starting from the most recent
// advanced: scrolling to the bottom triggers more posts to load (should be a framework allowing lazy loading like this)
// basic: simply pages showing X number of posts

export function Main() {
    return (
        <View>
            <Text>List of posts</Text>
        </View>
    )
}