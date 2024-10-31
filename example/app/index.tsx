import { Text, View } from "react-native";
import { PlainCanvas } from "mango_tree_charts";

const App = () => {
    return <View style={{ flex: 1, backgroundColor: '#222831', padding: 10 }}>
     <PlainCanvas />
  </View>;
};

export default App;
