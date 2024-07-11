import AdminEventForm from "../components/AdminEvent/AdminEventForm";
import EventTab from "../components/AdminEvent/EventTab";

function AdminEvent() {
  return (
    <>
      <div className="w-full h-[80vh] flex">
        <div className="w-1/2 p-8">
          <AdminEventForm />
        </div>
        <div className="w-1/2 p-8">
          <EventTab />
        </div>
      </div>
    </>
  );
}

export default AdminEvent;
