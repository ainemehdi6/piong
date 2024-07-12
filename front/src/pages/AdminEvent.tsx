import AdminEventForm from "../components/AdminEvent/AdminEventForm";
import EventTab from "../components/AdminEvent/EventTab";

function AdminEvent() {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full h-100vh p-8">
          <AdminEventForm />
        </div>
        <div className="w-full p-8 px-48">
          <EventTab />
        </div>
      </div>
    </>
  );
}

export default AdminEvent;
