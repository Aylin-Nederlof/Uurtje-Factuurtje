export interface IDashboard {}

const Dashboard = ({}: IDashboard) => {
  return (
    <div className="flex mx-auto w-full gap-4">
      <div className="w-full max-w-[50%] flex gap-4 ">
        <div className="max-w-[50%] w-full p-4 bg-an-lightgray rounded-md">
          hey
        </div>
        <div className="max-w-[50%] w-full p-4 bg-an-gray rounded-md">hey </div>
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default Dashboard;
