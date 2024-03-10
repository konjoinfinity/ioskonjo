import { Image, ScrollView } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";

export default function App() {
  return (
    <ScrollView>
      <ScrollView horizontal={true}>
        <ImageZoom
          cropWidth={3000}
          cropHeight={2000}
          imageWidth={3000}
          imageHeight={2000}
          pinchToZoom={true}
          panToMove={true}
        >
          <Image
            style={{ width: 3000, height: 2000 }}
            source={require("../assets/images/TableOfSnow.png")}
          />
        </ImageZoom>
      </ScrollView>
    </ScrollView>
  );
}
