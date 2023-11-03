import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBell } from '@fortawesome/free-solid-svg-icons';
import Card from '../../../components/Cards/card'; 
import Medication from '../../../components/Cards/Medication';
import DashNav from '../../../components/DashNav';
import BloodStatus from '../../../components/Cards/Bloodstatus';
import ToDoCalendar from '../../../components/Cards/Todo';

const Page = (props) => {
  const { userName } = props;

  return (
    <div className="flex">
      <DashNav />

      {/* Right side with content */}
      <div className="text-right flex-1 p-4">
        <p>{userName}</p>
        <h2 className="text-2xl font-semibold mb-4">Today</h2>

        <div className="grid grid-cols-3 gap-4">
          <Card title="Medication Reminder" hoverEffect shadowEffect>
            {[...Array(5)].map((_, index) => (
              <Medication
                key={index}
                name={`Medicine ${index + 1}`}
                quantity="1 pill"
                timing="Morning"
                hoverEffect
                shadowEffect
              />
            ))}
          </Card>

          {/* Today's Routine */}
          <Card title="Today's Routine" hoverEffect shadowEffect>
           
            <ToDoCalendar />
          </Card>

          {/* Health Stats */}
          <Card title="Health Stats" hoverEffect shadowEffect>
            <BloodStatus />
          </Card>
        </div>

     
        </div>
      </div>
  );
};

export default Page;
