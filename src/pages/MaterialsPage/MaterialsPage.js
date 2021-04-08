import UsefulLiteratureList from '../../components/UsefulLists/UsefulLiteratureList';
import UsefulResourcesList from '../../components/UsefulLists/UsefulResourcesList';
import MaterialsSection from '../../components/MaterialsSection';

function MaterialsPage() {
  return (
    <>
      <MaterialsSection>
        <UsefulLiteratureList />
        <UsefulResourcesList />
      </MaterialsSection>
    </>
  );
}

export default MaterialsPage;
