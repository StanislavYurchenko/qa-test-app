import AdminSection from '../../components/Admin/AdminSection';
import AdminList from '../../components/Admin/AdminList';
import AdminCanvas from '../../components/Admin/AdminCanvas';

function AdminPage() {
  return (
    <>
      <AdminSection>
        <AdminList />
        <AdminCanvas />
      </AdminSection>
    </>
  );
}

export default AdminPage;
