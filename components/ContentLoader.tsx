import ContentLoader from "react-content-loader";

type Props = {
  width?: number;
  height?: number;
  backgroundColor?: string;
  foregroundColor?: string;
};

const Loader = ({
  width = 200,
  height = 70,
  backgroundColor = "#f7f2f2",
  foregroundColor = "#CCCCCC",
}: Props) => (
  <ContentLoader
    speed={1.5}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
);

export default Loader;
