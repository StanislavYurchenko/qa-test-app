import { Loader, One, Two, Three } from './PreLoader.style';

const PreLoader = ({ sizePreloader }) => {
  return (
    <Loader sizePreloader={sizePreloader}>
      <One />
      <Two />
      <Three />
    </Loader>
  );
};

export default PreLoader;
