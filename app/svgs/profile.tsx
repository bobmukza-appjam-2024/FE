import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export default function ProfileIcon() {
  return (
    <Svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <G clipPath="url(#clip0_1_857)">
        <Rect width="72" height="72" rx="36" fill="#CBCCCE" />
        <Path
          d="M36.0601 45.0001C43.9332 45.0001 50.3101 38.6232 50.3101 30.7501C50.3101 22.8769 43.9332 16.5001 36.0601 16.5001C28.1869 16.5001 21.8101 22.8769 21.8101 30.7501C21.8101 38.6232 28.1869 45.0001 36.0601 45.0001ZM36.0601 52.1251C26.5482 52.1251 7.56006 56.8988 7.56006 66.3751V69.9376C7.56006 71.8969 9.16318 73.5001 11.1226 73.5001H60.9976C62.9569 73.5001 64.5601 71.8969 64.5601 69.9376V66.3751C64.5601 56.8988 45.5719 52.1251 36.0601 52.1251Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_857">
          <Rect width="72" height="72" rx="36" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
