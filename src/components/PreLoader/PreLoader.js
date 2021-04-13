import { Loader, One, Two, Three, Box } from './PreLoader.style';

const PreLoader = ({ sizePreloader }) => {
  return (
    <Box>
      <Loader sizePreloader={sizePreloader}>
        <One />
        <Two />
        <Three />
      </Loader>
    </Box>
  );
};

export default PreLoader;
