
interface GapProps {
  width?: number;
  height?: number;
}

const Gap = (props: GapProps) => {
  const { width, height } = props
  return <div style={{ width, height }} />;
};

export default Gap;