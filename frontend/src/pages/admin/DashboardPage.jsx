import ContentRow from "../../components/admin/ContentRow";
import Header from "../../components/admin/Header";

const DashboardPage = () => {
  return (
    <div id="wrapper">
      <Header/>
      <div id="content-wrapper" className="d-flex flex-column" >
        <ContentRow />
      </div>
    </div>
  )
}

export default DashboardPage;